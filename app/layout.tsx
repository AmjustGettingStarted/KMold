import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FirstHeader from "../components/FirstHeader";
import Banner from "../components/Banner";
import SecondHeader from "../components/SecondHeader";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "[CLONE] No.1 Maruti Suzuki Car Dealer in Bangalore & fastest growing dealer in Hyderabad.",
  description: "Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirstHeader />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
