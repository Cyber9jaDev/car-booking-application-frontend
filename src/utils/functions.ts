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
