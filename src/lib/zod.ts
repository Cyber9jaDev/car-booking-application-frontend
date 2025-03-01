import { string, z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().min(1, { message: "Password is required." }).trim(),
});

export const SignupFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required." }).trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    phone_number: z.string().min(1, { message: "Phone number is required." }).trim(),
    password: z
      .string()
      .min(1, { message: "Not be empty" })
      .min(5, { message: "Be at least 5 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, { message: "Contain at least one special character." })
      .trim(),
    confirm_password: z.string().trim(),
    terms_and_conditions: z.boolean(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password fields do not match.",
        path: ["confirmPassword"],
      });
    }
  });