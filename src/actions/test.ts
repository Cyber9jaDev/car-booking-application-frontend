// "use server";

// import { LoginFormSchema, SignupFormSchema } from "@/lib/zod";
// import {
//   BaseErrorResponse,
//   LoginAuthForm,
//   RegisterAuthForm,
// } from "@/interface/auth.interface";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";

// const baseUrl = "http://localhost:5000/api/v1/auth/signup";
// const baseLoginUrl = "http://localhost:5000/api/v1/auth/login";

// export async function register(
//   prevState: RegisterAuthForm,
//   formData: FormData
// ): Promise<RegisterAuthForm> {
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     phoneNumber: formData.get("phoneNumber"),
//     password: formData.get("password"),
//     confirmPassword: formData.get("confirmPassword"),
//     hasAgreedTermsAndConditions:
//       formData.get("hasAgreedTermsAndConditions") === "on",
//   });

//   if (!validatedFields.success) {
//     return {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phoneNumber: formData.get("phoneNumber") as string,
//       password: formData.get("password") as string,
//       confirmPassword: formData.get("confirmPassword") as string,
//       hasAgreedTermsAndConditions:
//         formData.get("hasAgreedTermsAndConditions") === "on",
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const response = await fetch(baseUrl, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(validatedFields.data),
//   });

//   const parsedResponse: AuthResponse | BaseErrorResponse = await response.json();

//   if(!response.ok){
//     return {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phoneNumber: formData.get("phoneNumber") as string,
//       password: formData.get("password") as string,
//       confirmPassword: formData.get("confirmPassword") as string,
//       hasAgreedTermsAndConditions: formData.get("hasAgreedTermsAndConditions") === "on",
//       errors: { message: parsedResponse },
//     };
//   }

//   if (response.ok && parsedResponse.success) {
//     // Note:- The cookie is coming from the response not the parsed response
//     const setCookieHeader = response?.headers?.get("Set-Cookie");

//     if (setCookieHeader) {
//       const token = setCookieHeader.split(";")[0].split("=")[1];

//       // Set cookie to be used  on the frontend in order ro set hover colours for links
//       (await cookies()).set({
//         name: "isLoggedIn",
//         value: "true",
//         expires: new Date(jwtDecode(token).exp! * 1000),
//         secure: process.env.NODE_ENV === "production",
//         httpOnly: false,
//       });

//       // Set Cookie
//       (await cookies()).set({
//         name: "access-token",
//         value: token,
//         expires: new Date(jwtDecode(token).exp! * 1000),
//         secure: process.env.NODE_ENV === "production",
//         httpOnly: true,
//         sameSite: "lax",
//         path: "/",
//       });
//     }
//   }

//   return {
//     name: formData.get("name") as string,
//     email: formData.get("email") as string,
//     phoneNumber: formData.get("phoneNumber") as string,
//     password: formData.get("password") as string,
//     confirmPassword: formData.get("confirmPassword") as string,
//     hasAgreedTermsAndConditions: formData.get("hasAgreedTermsAndConditions") === "on",
//     errors: { message: parsedResponse.message },
//   };
// }

// export async function login(prevState: LoginAuthForm, formData: FormData) {
//   const validatedFields = LoginFormSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!validatedFields.success) {
//     return {
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const response = await fetch(baseLoginUrl, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(validatedFields.data),
//   });

//   const parsedResponse: AuthResponse = await response.json();

//   if (response.ok && parsedResponse.success) {
//     // Note:- The cookie is coming from the response not the parsed response
//     const setCookieHeader = response?.headers?.get("Set-Cookie");

//     if (setCookieHeader) {
//       const token = setCookieHeader.split(";")[0].split("=")[1];

//       // Set cookie to be used  on the frontend in order ro set hover colours for links
//       (await cookies()).set({
//         name: "isLoggedIn",
//         value: "true",
//         expires: new Date(jwtDecode(token).exp! * 1000),
//         secure: process.env.NODE_ENV === "production",
//         httpOnly: false,
//       });

//       // Set Cookie
//       (await cookies()).set({
//         name: "access-token",
//         value: token,
//         expires: new Date(jwtDecode(token).exp! * 1000),
//         secure: process.env.NODE_ENV === "production",
//         httpOnly: true,
//         sameSite: "lax",
//         path: "/",
//       });
//     }

//     if (parsedResponse?.data?.role === "ADMIN") {
//       redirect("/admin");
//     }

//     redirect("/");
//   }

//   return {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//     errors: { message: parsedResponse.message[0] },
//   };
// }
