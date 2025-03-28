"use client";

import { navLinks } from "@/utils/constants";
import { useAdminContext } from "@/contexts/admin/AdminContext";
import NavItem from "./NavItem";

export default function Sidebar() {
  const { collapsedSidebar } = useAdminContext();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 ${
        collapsedSidebar ? "w-40" : "w-16"
      } h-full bg-[#f5f7fb] shadow-sm`}
    >
      <div className="flex flex-col">
        <div className="h-16 border-b border-gray-200 shadow-sm flex items-center justify-center">
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
        </nav>
      </div>
    </aside>
  );
}