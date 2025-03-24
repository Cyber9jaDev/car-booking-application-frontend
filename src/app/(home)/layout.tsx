import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Navbar from "@/components/passenger/home/Navbar";
import Footer from "@/components/passenger/home/Footer";
import '../globals.css';

export const metadata: Metadata = {
  title: "Car Booking System",
  description: "Car Booking System. Similar to Uber, but for cars.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function HomeRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
