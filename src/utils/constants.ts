import { LayoutDashboard, Users, Ticket, CreditCard, BarChart, Settings } from "lucide-react";

export const baseUrl = process.env.NEXT_PUBLIC_API_LOCALHOST 
const jwtKey = process.env.NEXT_PRIVATE_JWT_SECRET;

export const protectedRoutes = ['/admin', "/profile"];
export const publicRoutes = ['/login', "/signup", "/"];

export const encodedKey = new TextEncoder().encode(jwtKey);

export const Buses: { label: string; value: string }[] = [
  {
    value: "TOYOTA",
    label: "TOYOTA",
  },
  {
    value: "MINIBUS",
    label: "MINIBUS",
  },
  {
    value: "SIENNA",
    label: "SIENNA",
  },
];

export const Cities: { label: string; value: string }[] = [
  {
    label: "LAGOS",
    value: "LAGOS",
  },
  {
    label: "KANO",
    value: "KANO",
  },
  {
    label: "ABUJA",
    value: "ABUJA",
  },
  {
    label: "IBADAN",
    value: "IBADAN",
  },
  {
    label: "PORT_HARCOURT",
    value: "PORT_HARCOURT",
  },
  {
    label: "ABA",
    value: "ABA",
  },
  {
    label: "ONITSHA",
    value: "ONITSHA",
  },
  {
    label: "BENIN",
    value: "BENIN",
  },
  {
    label: "SHAGAMU",
    value: "SHAGAMU",
  },
  {
    label: "OGBOMOSO",
    value: "OGBOMOSO",
  },
  {
    label: "OWERRI",
    value: "OWERRI",
  },
  {
    label: "IKEJA",
    value: "IKEJA",
  },
  {
    label: "OSOGBO",
    value: "OSOGBO",
  },
  {
    label: "AGEGE",
    value: "AGEGE",
  },
  {
    label: "ILESA",
    value: "ILESA",
  },
  {
    label: "OSHODI",
    value: "OSHODI",
  },
  {
    label: "SURULERE",
    value: "SURULERE",
  },
  {
    label: "IKOYI",
    value: "IKOYI",
  },
  {
    label: "WARRI",
    value: "WARRI",
  },
  {
    label: "AKURE",
    value: "AKURE",
  },
  {
    label: "EKITI",
    value: "EKITI",
  },
  {
    label: "OSUN",
    value: "OSUN",
  },
];


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

export const navLinks = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Tickets", path: "/admin/tickets", icon: Ticket },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Payments", path: "/admin/payments", icon: CreditCard },
  { name: "Reports", path: "/admin/reports", icon: BarChart },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];