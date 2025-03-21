"use server";

import { Bus, City } from "@/utils/constants";
import { NewTripCreationForm } from "../../interface/admin.interface";
import { TripCreationFormFormSchema } from "@/lib/zod";

export async function createTrip ( previousState: NewTripCreationForm, formData: FormData ) {
  console.log(previousState);

  const validatedFields = TripCreationFormFormSchema.safeParse({
    arrivalCity: formData.get("arrivalCity"),
    departureCity: formData.get("departureCity"),
    departureDate: formData.get("departureDate"),
    price: Number(formData.get("price")),
    busType: formData.get("busType"),
  });

  if (!validatedFields.success) {
    console.log("error");
    return {
      arrivalCity: formData.get("arrivalCity") as City,
      departureCity: formData.get("departureCity") as City,
      departureDate: formData.get("departureDate") as string,
      price: Number(formData.get("price")),
      busType: formData.get("busType") as Bus,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data);

  return{
    arrivalCity: formData.get("arrivalCity") as City,
    departureCity: formData.get("departureCity") as City,
    departureDate: formData.get("departureDate") as string,
    price: Number(formData.get("price")),
    busType: formData.get("busType") as Bus,
  }

}
