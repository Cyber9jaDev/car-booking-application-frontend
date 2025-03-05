import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Booking System",
  description: "Car Booking System. Similar to Uber, but for cars.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
