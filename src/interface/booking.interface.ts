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

enum VehicleType {
  TOYOTA,
  MINIBUS,
  SIENNA
}


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