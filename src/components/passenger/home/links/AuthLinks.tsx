"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getClientSessionCookie } from "@/utils/functions";

export default function AuthLinks() {
  const pathname = usePathname();
  const user = getClientSessionCookie();

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
