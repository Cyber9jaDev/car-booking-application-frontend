"use server";

import { LoginFormSchema } from "@/lib/zod";
import {
  AuthSuccessResponse,
  BaseErrorResponse,
  LoginFormState,
} from "@/interface/auth.interface";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { baseUrl } from "@/utils/constants";

export async function login(state: LoginFormState, formData: FormData) {
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

  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      const errorResponse = (await response.json()) as BaseErrorResponse;
      return {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        errors: { message: errorResponse.message || ["Login Failed"] },
      };
    }

    const successResponse: AuthSuccessResponse = await response.json();
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

      // Set cookie to be used on the frontend in order ro set hover colours for links
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
  } catch (error) {
    console.error(error);
    return {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      errors: { message: ["Failed! Please, check your internet connection"] },
    };
  }

  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    errors: { message: ["Login Failed"] },
  };
}
