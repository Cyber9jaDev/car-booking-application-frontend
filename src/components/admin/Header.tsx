import { Menu } from "lucide-react";
import Time from "./Time";

export default function Header() {
  return (
    <header className="flex w-full h-18 items-center px-3">
      <Menu className="cursor-pointer "/>
      <Time/>
    </header>
  );
}
