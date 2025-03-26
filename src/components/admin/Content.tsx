"use client";

import Header from "./Header";
import { useAdminContext } from "@/contexts/admin/AdminContext";
import { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  const { collapsedSidebar } = useAdminContext();
  return (
    <main
      className={`bg-white w-full flex-1 flex h-full transition-all duration-300 ${
        collapsedSidebar ? "ml-40" : "ml-16"
      }`}
    >
      <Header />
      <div className="relative mt-18 flex-1 overflow-auto p-6 z-0">
        {children}
      </div>
    </main>
  );
}
