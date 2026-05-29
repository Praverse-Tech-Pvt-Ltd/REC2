import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Rec 2 — Renewable Energy · Carbon Credits · Innovation",
  description:
    "Rec 2 is a diverse innovation platform focusing on sustainability, renewable energy, futuristic deep tech, and the future of sports investment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased font-body bg-surface text-navy">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
