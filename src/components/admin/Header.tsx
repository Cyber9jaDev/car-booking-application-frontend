"use client";

import { AlignJustify, X } from "lucide-react";
import Time from "./Time";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Header() {
  const { collapsedSidebar, toggle } = useAdminContext();
  return (
    <header
      className={`fixed flex ${
        collapsedSidebar ? "w-[calc(100%-12rem)] left-48" : "w-[calc(100%-4rem)] left-16"
      } top-0 h-18 items-center px-3 bg-yellow-500 z-50 border-b`}
    >
      <div className="w-full flex items-center gap-4">
        <button onClick={toggle} className="text-[#1363c6]">
          {collapsedSidebar ? (
            <X className="h-6 w-6 cursor-pointer" />
          ) : (
            <AlignJustify className="h-6 w-6 cursor-pointer" />
          )}
        </button>
        <Time />
      </div>
    </header>
  );
}
