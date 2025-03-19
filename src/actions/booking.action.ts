"use server";

import { BookingForm } from "@/interface/booking.interface";
import { BookingFormSchema } from "@/lib/zod";
import { City } from "@/utils/constants";
// import { redirect } from "next/navigation";

export async function getBookings( previousState: BookingForm, formData: FormData ) {
  
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

  console.table(validatedFields.data);
  console.log(validatedFields.data);

  return {
    arrivalCity: formData.get("arrivalCity") as City,
    departureCity: formData.get("departureCity") as City,
    departureDate: formData.get("departureDate") as string,
  };

  // redirect("/");
}
