import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NORDflam SA | Premium Sustainable Fireplaces",
  description: "NORDflam is a trusted name in sustainable heating, delivering exceptional fireplaces to homes across the globe. Over two decades of leadership in sustainable heating technology.",
  keywords: "fireplaces, sustainable heating, cast iron fireplaces, premium fireplaces, eco-friendly heating, NORDflam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-[#f5f5f5]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
