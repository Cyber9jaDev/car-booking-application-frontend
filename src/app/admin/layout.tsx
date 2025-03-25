import Sidebar from "@/components/admin/Sidebar";
import { ReactNode } from "react";
import "../globals.css";
import { AdminContextProvider } from "../../contexts/admin/AdminContext";
import Content from "@/components/admin/Content";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdminContextProvider>
          <main className="relative flex w-full h-screen bg-white">
            <Sidebar />
            <Content children={children} />
          </main>
        </AdminContextProvider>
      </body>
    </html>
  );
}
