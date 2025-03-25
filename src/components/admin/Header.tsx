import { AlignJustify, X } from "lucide-react";
import Time from "./Time";

export default function Header() {
  return (
    <header className="fixed top-0 left-1/8 flex w-7/8 h-18 items-center px-3 bg-white z-50 border-b">
      <AlignJustify className="cursor-pointer text-[#1363c6] text-xl" />
      <X className="cursor-pointer text-[#1363c6] text-xl" />
      <Time />
    </header>
  );
}
