

import Logo from "./Logo";
import AuthLinks from "./links/AuthLinks";
import NavLinks from "./links/NavLinks";

export default function Navbar() {
  return (
    <header className="fixed z-50 top-0 left-0 w-full h-18 bg-black/80 backdrop-blur-xs shadow-md">
      <div className="w-[90%] mx-auto relative h-full flex items-center justify-between">
        <Logo />
        <NavLinks />
        <AuthLinks  />
      </div>
    </header>
  );
}
