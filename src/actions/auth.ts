import { SignupFormSchema } from "@/lib/zod";
import { AuthForm } from "@/types/auth.types";
import { redirect } from "next/navigation";

export async function register (prevState: AuthForm, formData: FormData){

  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    terms_and_conditions: formData.get("terms_and_conditions") === "on",
  });

  if (!validatedFields.success) {
    return {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone_number: formData.get("phone_number") as string,
      password: formData.get("password") as string,
      confirm_password: formData.get("confirm_password") as string,
      terms_and_conditions: formData.get("terms_and_conditions") === "on",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

    redirect("/");
}