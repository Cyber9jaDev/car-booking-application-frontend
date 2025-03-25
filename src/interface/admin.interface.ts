export enum City {
  LAGOS = "LAGOS",
  KANO = "KANO",
  ABUJA = "ABUJA",
  IBADAN = "IBADAN",
  PORT_HARCOURT = "PORT_HARCOURT",
  ABA = "ABA",
  ONITSHA = "ONITSHA",
  BENIN = "BENIN",
  SHAGAMU = "SHAGAMU",
  OGBOMOSO = "OGBOMOSO",
  OWERRI = "OWERRI",
  IKEJA = "IKEJA",
  OSOGBO = "OSOGBO",
  AGEGE = "AGEGE",
  ILESA = "ILESA",
  OSHODI = "OSHODI",
  SURULERE = "SURULERE",
  IKOYI = "IKOYI",
  WARRI = "WARRI",
  AKURE = "AKURE",
  EKITI = "EKITI",
  OSUN = "OSUN",
}

export enum Bus {
  TOYOTA = "TOYOTA",
  MINIBUS = "MINIBUS",
  SIENNA = "SIENNA",
}

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

export interface TicketFormState{
  departureCity: City,
  arrivalCity: City,
  departureDate: string,
  ticketFee: number,
  vehicleType: Bus,
  errors?: FormFieldErrors;
}

export const initialTicketFormState: TicketFormState = {
  departureCity: City.ABA,
  arrivalCity: City.LAGOS,
  departureDate: new Date().toISOString().split('T')[0],
  ticketFee: 100,
  vehicleType: Bus.TOYOTA,
}

export interface TicketSuccessResponse {
  message: string;
  success: boolean;
  statusCode: number;
}

export interface BaseErrorResponse{
  error: string;
  statusCode: number;
  message: string[];
}

