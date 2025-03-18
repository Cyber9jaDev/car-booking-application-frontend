import { City } from "@/utils/constants";

interface FormFieldErrors {
  [key: string]: string[] | undefined;
}

export interface BookingForm {
  departureCity: City;
  arrivalCity: City;
  departureDate: Date;
  errors?: FormFieldErrors;
}

export const initialBookingFormState: BookingForm = {
  departureCity: City.ABA,
  arrivalCity: City.ABA,
  departureDate: new Date()
}