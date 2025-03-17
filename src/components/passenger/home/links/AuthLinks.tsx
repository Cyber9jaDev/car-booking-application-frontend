"use client";

import { getClientCookie } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLinks() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This code only runs on the client side
    const isLoggedIn = getClientCookie("isLoggedIn");
    setIsLoggedIn(isLoggedIn === "true");
    setIsLoading(false);
  }, []);

  // Show nothing while determining login status
  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <nav className="p-0 m-0 text-white">
      <ul className="block pl-0 my-auto mx-0 items-center gap-x-2">
        {!isLoggedIn && (
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
        {!isLoggedIn && (
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
        {isLoggedIn && (
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