"use server";

import { revalidatePath } from "next/cache";
import { Bus, City, TicketForm, TicketResponse } from "../../interface/admin.interface";
import { TicketFormFormSchema } from "@/lib/zod";

const baseUrl = "http://localhost:5000/api/v1/admin/create-ticket";

export async function createTicket( previousState: TicketForm, formData: FormData ) {
  const validatedFields = TicketFormFormSchema.safeParse({
    arrivalCity: formData.get("arrivalCity"),
    departureCity: formData.get("departureCity"),
    departureDate: formData.get("departureDate"),
    ticketFee: Number(formData.get("ticketFee")),
    vehicleType: formData.get("vehicleType"),
  });

  if (!validatedFields.success) {
    console.log("error");
    return {
      arrivalCity: formData.get("arrivalCity") as City,
      departureCity: formData.get("departureCity") as City,
      departureDate: formData.get("departureDate") as string,
      ticketFee: Number(formData.get("ticketFee")),
      vehicleType: formData.get("vehicleType") as Bus,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(baseUrl, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedFields.data),
  });

  const result: TicketResponse = await response.json();

  if (result.success) {
    console.log(result);
    revalidatePath("/admin/create-ticket");
    return {
      ...previousState,
    };
  }

  return {
    arrivalCity: formData.get("arrivalCity") as City,
    departureCity: formData.get("departureCity") as City,
    departureDate: formData.get("departureDate") as string,
    ticketFee: Number(formData.get("ticketFee")),
    vehicleType: formData.get("vehicleType") as Bus,
    errors: {
      
    }
  };
}
