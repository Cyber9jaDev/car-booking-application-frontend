"use client";

import { AlignJustify, X } from "lucide-react";
import Time from "./Time";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Header() {
  const { collapsedSidebar, toggle } = useAdminContext();

  return (
    <header
      className={`fixed top-0 h-16 flex items-center px-6 z-40 bg-[#f5f7fb] border-b border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
        collapsedSidebar ? "left-40 w-[calc(100%-10rem)]" : "left-16 w-[calc(100%-4rem)]"
      }`}
    >
      <div className="flex items-center w-full">
        {/* Toggle Sidebar Button */}
        <button
          onClick={toggle}
          className="cursor-pointer flex items-center justify-center text-[#1363c6] transition-colors duration-200 focus:outline-none"
          aria-label={collapsedSidebar ? "Collapse sidebar" : "Expand sidebar"}
        >
          {collapsedSidebar ? (
            <X className="h-5 w-5" />
          ) : (
            <AlignJustify className="h-5 w-5" />
          )}
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Timestamp and other header items */}
        <div className="flex items-center gap-4">
          <Time />
          {/* Add other header items here if needed */}
        </div>
      </div>
    </header>
  );
}