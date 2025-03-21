import { Bus, City } from "@/utils/constants";

export interface Stat {
  title: string,
  value: number,
  image: string,
  trend?: "up" | "down" | "stable",
  percentage?: string
}

interface FormFieldErrors {
  [key: string]: string[] | undefined;
}


export interface NewTripCreationForm{
  departureCity: City,
  arrivalCity: City,
  departureDate: string,
  price: number,
  busType: Bus,
  errors?: FormFieldErrors;
}

export const initialNewTripCreationFormState: NewTripCreationForm = {
  departureCity: City.ABA,
  arrivalCity: City.ABA,
  departureDate: new Date().toISOString().split('T')[0],
  price: 100,
  busType: Bus.TOYOTA,
}
