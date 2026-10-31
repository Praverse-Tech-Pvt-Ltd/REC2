import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact REC 2 about solar, hydrogen, carbon credits, recycling, materials, chips, robotics or sport partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
