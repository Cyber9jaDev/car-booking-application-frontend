"use client";

import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { useAdminContext } from "@/contexts/admin/AdminContext";
import NavItem from "./NavItem";

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
              <NavItem
                index={index}
                key={link.name}
                link={link}
                collapsedSidebar={collapsedSidebar}
              />
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
