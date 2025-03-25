"use client";

import { Children } from "@/interface/admin.interface";
import Header from "./Header";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Content({ children }: Children) {
  const { collapsedSidebar } = useAdminContext();
  return (
    <main
      className={`w-full flex-1  flex h-full ${
        collapsedSidebar ? "w-[calc(100%-12rem)] left-48" : "w-[calc(100%-4rem)] left-16"
      }`}
    >
      <Header />
      {children}
    </main>
  );
}
