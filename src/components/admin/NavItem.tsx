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
    <li className={`group relative cursor-pointer flex`}>
      <Link href={link.path} className="flex gap-x-4 items-center">
        <link.icon className={`text-[#1363c6] ${collapsedSidebar ? "ml-0" : "ml-4"}`} />
        <span
          style={{ transitionDelay: `${index + 3}00ms` }}
          className={`whitespace-pre duration-500 text-[#1363c6] ${
            !collapsedSidebar && "w-0 opacity-0 translate-x-28 overflow-hidden"
          } text-md`}
        >
          {link.name}
        </span>
        <span
          className={`absolute left-20 bg-[#1363c6] font-semibold whitespace-pre text-white 
                        rounded-md drop-shadow-lg px-0 py-0 w-0 
                        overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 
                        group-hover:duration-1000 group-hover:w-fit ${
                          collapsedSidebar && "hidden"
                        } `}
        >
          {link.name}
        </span>
      </Link>
    </li>
  );
}
