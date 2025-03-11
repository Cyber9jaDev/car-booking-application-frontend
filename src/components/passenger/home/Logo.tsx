import { CarTaxiFront } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative flex self-center">
      <Link
        href="/"
        className="font-black flex items-center text-4xl text-[#009cff]"
      >
        <CarTaxiFront className="h-13 w-13" /> BUS
      </Link>
    </div>
  );
}
