import { LoginFormSchema, SignupFormSchema } from "@/lib/zod";
import { LoginAuthForm, RegisterAuthForm } from "@/types/auth.types";
import { redirect } from "next/navigation";


export async function register (prevState: RegisterAuthForm, formData: FormData){

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

    redirect("/");
}

export async function login (prevState: LoginAuthForm, formData: FormData){

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

  redirect("/");
}