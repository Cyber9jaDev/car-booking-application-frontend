import { AlignJustify, X } from "lucide-react";
import Time from "./Time";

export default function Header() {
  return (
    <header className="flex w-full h-18 items-center px-3 bg-white shadow-md">
      <AlignJustify className="cursor-pointer text-[#1363c6] text-xl"/>
      <X className="cursor-pointer text-[#1363c6] text-xl" />
      <Time/>
    </header>
  );
}
