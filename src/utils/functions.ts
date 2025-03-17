export const getClientCookie = (cookieName: string) => {
  if (typeof document !== "undefined") {
    const cookiePrefix = `${cookieName}=`;
    const allCookies = decodeURIComponent(document.cookie);
    const individualCookies = allCookies.split(";");

    for (let i = 0; i < individualCookies.length; i++) {
      let currentCookie = individualCookies[i];
      // Remove leading whitespace
      while (currentCookie.charAt(0) == " ") {
        currentCookie = currentCookie.substring(1);
      }
      // Check if this cookie is the session cookie
      if (currentCookie.indexOf(cookiePrefix) == 0) {
        // Extract the session value by removing the "session=" prefix
        const sessionValue = currentCookie.substring(cookiePrefix.length);
        return sessionValue;
      }
    }
  }
  return null;
};
