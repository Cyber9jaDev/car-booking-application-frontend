import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
