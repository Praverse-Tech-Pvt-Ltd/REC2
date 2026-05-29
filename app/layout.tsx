import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rec 2 — Renewable Energy · Carbon Credits · Innovation",
  description:
    "Rec 2 is a diverse innovation platform focusing on sustainability, renewable energy, futuristic deep tech, and the future of sports investment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#f5f7fa]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
