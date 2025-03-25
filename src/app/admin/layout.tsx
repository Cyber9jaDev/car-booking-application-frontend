import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { ReactNode } from "react";
import "../globals.css";
import { AdminContextProvider } from "../../contexts/admin/AdminContext";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdminContextProvider>
          <main className="relative flex w-full h-screen bg-white">
            {/* left */}
            <Sidebar />
            {/* Right */}
            <div className="flex-1 w-7/8 h-full">
              <Header />
              {children}
            </div>
          </main>
        </AdminContextProvider>
      </body>
    </html>
  );
}
