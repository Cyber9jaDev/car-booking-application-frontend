"use server";

import { BaseErrorResponse } from "@/interface/auth.interface";
import { BookingForm, TicketListSuccessResponse } from "@/interface/booking.interface";
import { BookingFormSchema } from "@/lib/zod";
import { baseUrl, City } from "@/utils/constants";
import { revalidatePath } from "next/cache";

export async function getBookings(state: BookingForm, formData: FormData) {
  const validatedFields = BookingFormSchema.safeParse({
    arrivalCity: formData.get("arrivalCity"),
    departureCity: formData.get("departureCity"),
    departureDate: formData.get("departureDate"),
  });

  if (!validatedFields.success) {
    return {
      arrivalCity: formData.get("arrivalCity") as City,
      departureCity: formData.get("departureCity") as City,
      departureDate: formData.get("departureDate") as string,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }


  // try {
  const response = await fetch(`${baseUrl}/booking/all-tickets`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorResponse: BaseErrorResponse = await response.json();
    return {
      arrivalCity: formData.get("arrivalCity") as City,
      departureCity: formData.get("departureCity") as City,
      departureDate: formData.get("departureDate") as string,
      errors: { message: errorResponse.message },
    };
  }

  const successResponse: TicketListSuccessResponse = await response.json();
  if (successResponse.success) {
    revalidatePath("/booking");
    // {}
  }

  return {
    ...state,
    errors: { message: ["Unable to retrieve tickets"] },
  };
}
