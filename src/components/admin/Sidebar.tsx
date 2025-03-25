"use client";

import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Sidebar() {
  const { collapsedSidebar } = useAdminContext();

  return (
    <aside
      className={`fixed left-0 top-0 ${
        collapsedSidebar ? "w-48" : "w-16"
      } h-full bg-white border-r`}
    >
      <div className="h-full flex flex-col">
        <div className="h-18 p-4 border-b flex items-center justify-center">
          <strong className="text-2xl text-[#1363c6]">Logo</strong>
        </div>

        <nav className="flex-1 p-4">
          <ul
            className={`pl-0 ml-0 flex flex-col ${
              collapsedSidebar ? "" : "items-center"
            } gap-y-6`}
          >
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`group relative cursor-pointer flex`}
              >
                <Link href={link.path} className="flex gap-x-4 items-center">
                  <link.icon
                    className={`${collapsedSidebar ? "ml-0" : "ml-4"}`}
                  />
                  <span
                    style={{ transitionDelay: `${index + 3}00ms` }}
                    className={`whitespace-pre duration-500 ${
                      !collapsedSidebar &&
                      "w-0 opacity-0 translate-x-28 overflow-hidden"
                    } text-lg`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`${
                      collapsedSidebar && "hidden"
                    } absolute left-20 bg-primary-400 font-semibold whitespace-pre text-gray-100 
                        rounded-md drop-shadow-lg px-0 py-0 w-0 
                        overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 
                        group-hover:duration-1000 group-hover:w-fit`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex items-center gap-3 p-3 mb-2 rounded-lg hover:bg-[#1363c6]/10 text-gray-600 hover:text-[#1363c6] transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))} */}
        </nav>
      </div>
    </aside>
  );
}
