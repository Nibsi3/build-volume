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
  metadataBase: new URL("https://layerforge-concept.cameronfalck03.workers.dev"),
  robots: { index: false, follow: true },
  title: "Layerforge | Independent Website Concept",
  description: "Layerforge is an independent website concept for a fictional 3D printing and scanning brand. Designed by Pixaloom; no commissioned client, sales or services.",
  keywords: "3d printers, 3d scanners, additive manufacturing, 3d printing south africa, Layerforge, filament, laser cutters",
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
        <main id="main-content">{children}</main>
        <aside className="concept-notice" aria-label="Independent concept disclosure"><strong>Layerforge · Independent concept design</strong><span> Fictional brand, created by Pixaloom as a self-initiated portfolio study. No commissioned client or trading business. Prices, specifications and service content are illustrative. Forms are local demos and send nothing.</span><a href="/concept">About this concept</a></aside>
        <Footer />
      </body>
    </html>
  );
}
