"use server";

import { revalidatePath } from "next/cache";
import {
  BaseErrorResponse,
  Bus,
  City,
  TicketFormState,
  TicketSuccessResponse,
} from "../../interface/admin.interface";
import { TicketFormFormSchema } from "@/lib/zod";
import { baseUrl } from "@/utils/constants";
import { cookies } from "next/headers";

export async function createTicket(state: TicketFormState, formData: FormData) {
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
      ...state,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Get auth cookie from request
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;
  const isLoggedIn = cookieStore.get("isLoggedIn")?.value;

  if (!accessToken || !isLoggedIn) {
    return {
      ...state,
      errors: {
        message: ["Authentication required, please login to create ticket"],
      },
    };
  }

  const response = await fetch(`${baseUrl}/admin/create-ticket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `access-token=${accessToken}`,
    },
    body: JSON.stringify(validatedFields.data),
  });

  if (!response.ok) {
    const errorResponse: BaseErrorResponse = await response.json();
    return {
      arrivalCity: formData.get("arrivalCity") as City,
      departureCity: formData.get("departureCity") as City,
      departureDate: formData.get("departureDate") as string,
      ticketFee: Number(formData.get("ticketFee")),
      vehicleType: formData.get("vehicleType") as Bus,
      errors: {
        message: errorResponse.message,
      },
    };
  }

  // Successfully created ticket
  const successResponse: TicketSuccessResponse = await response.json();
  if (successResponse?.success) {
    revalidatePath("/admin/create-ticket");
  }

  return {
    ...state,
    errors: { message: ["Unable to book ticket"] },
  };
}
