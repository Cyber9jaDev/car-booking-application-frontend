import { Buses, Cities } from "./constants";

export const getClientCookie = (cookieName: string): boolean => {
  if (typeof document !== "undefined") {
    const cookiePrefix = `${cookieName}=`;
    const allCookies = decodeURIComponent(document.cookie);
    const individualCookies = allCookies.split(";");

    for (let i = 0; i < individualCookies.length; i++) {
      let currentCookie = individualCookies[i];

      while (currentCookie.charAt(0) == " ") {
        currentCookie = currentCookie.substring(1);
      }

      if (currentCookie.indexOf(cookiePrefix) == 0) {
        const sessionValue = currentCookie.substring(cookiePrefix.length);
        if(sessionValue === "undefined"){
          return false;
        }
        return true;
      }
    }
  }
  return false;
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