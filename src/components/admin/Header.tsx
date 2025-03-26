"use client";

import { AlignJustify, X } from "lucide-react";
import Time from "./Time";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Header() {
  const { collapsedSidebar, toggle } = useAdminContext();

  return (
    <header
      className={`fixed top-0 h-18 flex items-center px-4 z-50 border-b transition-all duration-300 ${
        collapsedSidebar ? "w-[calc(100%-12rem)]" : "w-[calc(100%-4rem)]"
      }`}
    >
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggle}
        className="cursor-pointer text-[#1363c6] p-2 hover:bg-gray-100 rounded-md transition"
      >
        {collapsedSidebar ? (
          <X className="h-6 w-6" />
        ) : (
          <AlignJustify className="h-6 w-6" />
        )}
      </button>

      {/* Timestamp */}
      <Time />
    </header>
  );
}
