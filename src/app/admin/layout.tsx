import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { ReactNode } from "react";
import '../globals.css';
// import ""

export default function AdminRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative flex w-full">
          {/* left */}
          <Sidebar />

          {/* Right */}
          <div>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
