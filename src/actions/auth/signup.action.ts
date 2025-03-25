"use server";

import { SignupFormSchema } from "@/lib/zod";
import { AuthSuccessResponse, BaseErrorResponse, SignupFormState } from "@/interface/auth.interface";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { baseUrl } from "@/utils/constants";

export async function signup( state: SignupFormState, formData: FormData ): Promise<SignupFormState> {
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
      hasAgreedTermsAndConditions:
        formData.get("hasAgreedTermsAndConditions") === "on",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validatedFields.data),
  });

  if (!response.ok) {
    const errorResponse: BaseErrorResponse = await response.json();
    return {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      hasAgreedTermsAndConditions:
        formData.get("hasAgreedTermsAndConditions") === "on",
      errors: { message: errorResponse.message || ["Signup Failed"] },
    };
  }

  const successResponse: AuthSuccessResponse = await response.json();

  if (successResponse.success) {
    const setCookieHeader = response?.headers?.get("Set-Cookie");

    if (setCookieHeader) {
      const token = setCookieHeader.split(";")[0].split("=")[1];
      const decoded = jwtDecode(token);

      // Validate expiration consistency
      if (!decoded.exp) throw new Error("Invalid JWT expiration");

      const expires = new Date(decoded.exp * 1000);
      const now = new Date();
      const maxAge = Math.floor((expires.getTime() - now.getTime()) / 1000);

      const cookieStore = await cookies();

      // Set cookie to be used on the frontend in order to set hover colours for links
      cookieStore.set({
        name: "isLoggedIn",
        value: "true",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge, // Derive from JWT expiration
      });

      // Set Cookie
      cookieStore.set({
        name: "access-token",
        value: token,
        expires,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });

      redirect(`${successResponse.data.role === "ADMIN" ? "/admin" : "/"}`);
    }
  }

  return {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    hasAgreedTermsAndConditions:
      formData.get("hasAgreedTermsAndConditions") === "on",
    errors: { message: ["Signup Failed"] },
  };
}

