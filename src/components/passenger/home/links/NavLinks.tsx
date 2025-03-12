"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="p-0 m-0 text-white">
      <ul className="block pl-0 my-auto mx-0 items-center gap-x-2">
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link
            className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link
            className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/about" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link
            className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/services" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
            href="/services"
          >
            Services
          </Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link
            className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/booking" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
            href="/booking"
          >
            Booking
          </Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link
            className={`py-2.5 px-3.5 no-underline font-semibold text-base ${
              pathname === "/contact" &&
              "border border-[#009cff] text-[#009cff] rounded-md"
            } transition-colors duration-200 ease-in-out`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
