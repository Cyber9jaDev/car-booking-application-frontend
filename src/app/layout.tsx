import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/passenger/home/Navbar";

export const metadata: Metadata = {
  title: "Car Booking System",
  description: "Car Booking System. Similar to Uber, but for cars.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
