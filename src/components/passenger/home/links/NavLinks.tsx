import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="p-0 m-0 text-white">
      <ul className="block pl-0 my-auto mx-0 items-center gap-x-2">
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link className="py-2.5 px-3.5 no-underline font-semibold text-base hover:border hover:border-[#009cff] hover:text-[#009cff] hover:rounded-md transition-colors duration-200 ease-in-out" href="/">Home</Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link className="py-2.5 px-3.5 no-underline font-semibold text-base hover:border hover:border-[#009cff] hover:text-[#009cff] hover:rounded-md transition-colors duration-200 ease-in-out" href="/about">About</Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link className="py-2.5 px-3.5 no-underline font-semibold text-base hover:border hover:border-[#009cff] hover:text-[#009cff] hover:rounded-md transition-colors duration-200 ease-in-out" href="/services">Services</Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link className="py-2.5 px-3.5 no-underline font-semibold text-base hover:border hover:border-[#009cff] hover:text-[#009cff] hover:rounded-md transition-colors duration-200 ease-in-out" href="/booking">Booking</Link>
        </li>
        <li className="list-none my-auto mx-2.5 inline-block">
          <Link className="py-2.5 px-3.5 no-underline font-semibold text-base hover:border hover:border-[#009cff] hover:text-[#009cff] hover:rounded-md transition-colors duration-200 ease-in-out" href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
