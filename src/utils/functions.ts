import { Buses, Cities } from "./constants";
import sienna from "../../public/images/sienna.jpg";
import toyota from "../../public/images/toyota.jpg";
import minibus from "../../public/images/minibus.jpg";


export const getClientCookie = (cookieName: string): string | null => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
};

export const CitiesList = (): { label: string; value: string }[] => {
  return Cities.sort((a: { label: string; value: string }, b: { label: string; value: string }) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1
    return 0
  })
}

export const BusList = (): { label: string; value: string }[] => {
  return Buses.sort((a: { label: string; value: string }, b:{ label: string; value: string }) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1;
    return 0;
  })
}

export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const BusImage: { [index: string]: string } = {
  sienna: sienna.src,
  toyota: toyota.src,
  minibus: minibus.src,
}