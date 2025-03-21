"use server";

import { LoginFormSchema, SignupFormSchema } from "@/lib/zod";
import { AuthResponse, BaseErrorResponse, LoginAuthForm, RegisterAuthForm } from "@/interface/auth.interface";
import { redirect } from "next/navigation";
import APICall from "@/utils/APICall";
import { cookies } from "next/headers";

const baseUrl = "http://localhost:5000/api/v1/auth/signup";

export async function register( prevState: RegisterAuthForm, formData: FormData ): Promise<RegisterAuthForm> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    hasAgreedTermsAndConditions: formData.get("hasAgreedTermsAndConditions") === "on",
  });

  if (!validatedFields.success) {
    return {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      hasAgreedTermsAndConditions: formData.get("hasAgreedTermsAndConditions") === "on",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const result = await APICall<AuthResponse, BaseErrorResponse>(baseUrl, "POST", validatedFields.data )
  
  if(result.success){
    (await cookies()).set("isLoggedIn", "true", {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      secure: process.env.NODE_ENV === 'production',
      httpOnly: false,
      sameSite: "strict",
    });
    redirect("/");
  } 
  
  else{
    return {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      hasAgreedTermsAndConditions: formData.get("hasAgreedTermsAndConditions") === "on",
      errors: {
        email: result.message === "Email already exists" ? [result.message] : undefined,
        phoneNumber: result.message === "Phone number is in use by another user" ? [result.message] : undefined,
      }
    }
  }
  
}

export async function login(prevState: LoginAuthForm, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data);

  redirect("/");
}
