import { NavLink } from "@/utils/constants";
import Link from "next/link";

export default function NavItem({
  link,
  collapsedSidebar,
  index,
}: {
  link: NavLink;
  collapsedSidebar: boolean;
  index: number;
}) {
  return (
    <li className="group relative cursor-pointer flex">
      <Link href={link.path} className="flex gap-x-4 items-center">
        <link.icon
          className={`text-[#1363c6] ${collapsedSidebar ? "ml-0" : "ml-4"}`}
        />
        <span
          style={{ transitionDelay: `${index + 3}00ms` }}
          className={`whitespace-pre duration-500 text-[#1363c6] ${
            !collapsedSidebar && "w-0 opacity-0 translate-x-28 overflow-hidden"
          } text-md`}
        >
          {link.name}
        </span>
        {!collapsedSidebar && (
          <span
            className="absolute left-full ml-1.5 px-2 py-1 bg-[#1363c6] font-semibold 
                      text-white rounded-md shadow-lg whitespace-nowrap z-50
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      pointer-events-none"
          >
            {link.name}
          </span>
        )}
      </Link>
    </li>
  );
}
