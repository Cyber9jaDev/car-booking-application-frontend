import Logo from './Logo';
import NavLinks from "./links/NavLinks";
import AuthLinks from "./links/AuthLinks";

export default function Navbar() {
  return (
    <header className="absolute z-50 top-0 left-0 w-full h-24 bg-black/80 backdrop-blur-xs shadow-md">
      <div className="w-[90%] mx-auto relative h-full flex items-center justify-between">
        <Logo/>
        <NavLinks/>
        <AuthLinks/>
      </div>
    </header>
  );
}