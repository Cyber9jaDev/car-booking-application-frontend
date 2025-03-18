import { City } from "@/utils/constants";
import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().min(1, { message: "Password is required." }).trim(),
});

export const SignupFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required." }).trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    phoneNumber: z
      .string()
      .min(1, { message: "Phone number is required." })
      .max(11, { message: "Phone number must be 11 digits." })
      .trim(),
    password: z
      .string()
      .min(1, { message: "Not be empty" })
      .min(5, { message: "Be at least 5 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string().trim(),
    hasAgreedTermsAndConditions: z.boolean(),
  })
  .superRefine((value, context) => {
    if (value.password !== value.confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password fields do not match.",
        path: ["confirmPassword"],
      });
    }
  });

export const BookingFormSchema = z
  .object({
    departureCity: z.nativeEnum(City, {
      required_error: "Please select a departure city.",
      invalid_type_error: "That's not a city!",
    }),
    arrivalCity: z.nativeEnum(City, {
      required_error: "Please select an arrival city.",
      invalid_type_error: "That's not a city!",
    }),
    departureDate: z
      .date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
      })
      .refine((date) => date >= new Date(), {
        message: "Date must be in the future",
      }),
  })
  .superRefine((value, context) => {
    if (value.arrivalCity === value.departureCity) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Arrival and departure cities cannot be the same.",
        path: ["arrivalCity"],
      });
    }
  });
