import { City } from "@/utils/constants";

interface FormFieldErrors {
  [key: string]: string[] | undefined;
}

export interface BookingForm {
  departureCity: City;
  arrivalCity: City;
  departureDate: string;
  errors?: FormFieldErrors;
}

export const initialBookingFormState: BookingForm = {
  departureCity: City.ABA,
  arrivalCity: City.ABA,
  departureDate: new Date().toISOString().split('T')[0]
}


export type VehicleType  =  "TOYOTA" | "MINIBUS" | "SIENNA"

interface TicketListsData{
  id: string,
  departureCity: City,
  arrivalCity: City,
  departureDate: string,
  vehicleType: VehicleType,
  ticketFee: number,
  availableSeats: number[],
}

export type TicketListSuccessResponse = {
  message: string;
  success: boolean;
  statusCode: number;
  data: TicketListsData[];
}

export type TicketType =  {
  id: string,
  departureCity: City,
  arrivalCity: City,
  departureDate: string,
  vehicleType: VehicleType,
  ticketFee: 10000000,
  availableSeats: number[],
  updatedAt: string,
  createdAt: string,
  createdById: string
}