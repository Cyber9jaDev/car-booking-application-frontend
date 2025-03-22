"use server";

import { Bus, City, TicketForm } from "../../interface/admin.interface";
import { TicketFormFormSchema } from "@/lib/zod";

export async function createTicket(
  previousState: TicketForm,
  formData: FormData
) {
  console.log(previousState);

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


  console.log("yes");
  console.table(validatedFields.data);

  return {
    arrivalCity: formData.get("arrivalCity") as City,
    departureCity: formData.get("departureCity") as City,
    departureDate: formData.get("departureDate") as string,
    ticketFee: Number(formData.get("ticketFee")),
    vehicleType: formData.get("vehicleType") as Bus,
  };
}
