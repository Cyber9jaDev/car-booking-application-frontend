"use client";

import { Children } from "@/interface/admin.interface";
import Header from "./Header";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Content({ children }: Children) {
  const { collapsedSidebar } = useAdminContext();
  return (
    <main
      className={`bg-white w-full flex-1 flex h-full transition-all duration-300 ${
        collapsedSidebar ? "ml-48" : "ml-16"
      }`}
    >
      <Header />
      <div className="relative mt-18 flex-1 overflow-auto p-6 z-0">
        {children}
      </div>
    </main>
  );
}