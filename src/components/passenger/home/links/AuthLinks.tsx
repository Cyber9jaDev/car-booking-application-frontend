"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLinks() {
  const pathname = usePathname();

  // Lazy initialization
  const [user, setUser] = useState<null | string>(() => {
    if (typeof document !== "undefined") {
      const cookiePrefix = "session=";
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
  });


  return (
    <nav className="p-0 m-0 text-white">
      <ul className="block pl-0 my-auto mx-0 items-center gap-x-2">
        {user === null && (
          <li className="list-none my-auto mx-2.5 inline-block">
            <Link
              className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
                pathname === "/login" &&
                "border border-[#009cff] text-[#009cff] rounded-md"
              } transition-colors duration-200 ease-in-out`}
              href="/login"
            >
              Login
            </Link>
          </li>
        )}
        {user === null && (
          <li className="list-none my-auto mx-2.5 inline-block">
            <Link
              className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/signup" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
              href="/signup"
            >
              Signup
            </Link>
          </li>
        )}
        {user !== null && (
          <li className="list-none my-auto mx-2.5 inline-block">
            <Link
              className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/profile" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
              href="/profile"
            >
              Profile
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
