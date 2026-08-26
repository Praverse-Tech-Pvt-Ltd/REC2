import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/**
 * NEXT_PUBLIC_SITE_URL should be set to the production origin on the host.
 * Without it, metadataBase falls back to localhost and every Open Graph URL
 * in a shared link points at the developer's machine.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const TITLE = "REC 2 — Renewable Energy · Carbon Credits · Innovation";
const DESCRIPTION =
  "REC 2 is a diverse innovation platform bridging sustainable technology, renewable energy, deep tech and the future of sport.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — REC 2",
  },
  description: DESCRIPTION,
  applicationName: "REC 2",
  keywords: [
    "renewable energy",
    "carbon credits",
    "battery recycling",
    "advanced materials",
    "photonics",
    "biochips",
    "flow chemistry",
    "sustainable sport",
    "mechatronics",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "REC 2",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="antialiased font-body bg-surface text-navy">
        <ScrollProgress />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
