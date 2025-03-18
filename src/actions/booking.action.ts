"use server";

import { BookingForm } from "@/interface/booking.interface";
import { BookingFormSchema } from "@/lib/zod";
import { City } from "@/utils/constants";
import { redirect } from "next/navigation";

export async function getBookings(prevState: BookingForm, formData: FormData){
  const arrivalCity = formData.get("arrivalCity") as string;
  const departureCity = formData.get("departureCity") as string;
  const departureDateString = formData.get("departureDate") as string;
  
  const validatedFields = BookingFormSchema.safeParse({
    arrivalCity,
    departureCity,
    departureDate: departureDateString,
  });

  if (!validatedFields.success) {
    return {
      arrivalCity: arrivalCity as City,
      departureCity: departureCity as City,
      departureDate: departureDateString ? new Date(departureDateString) : new Date(),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    departureCity: departureCity as City,
    arrivalCity: arrivalCity as City,
    departureDate: new Date(departureDateString),
    errors: {},
  };

  redirect("/");
}
