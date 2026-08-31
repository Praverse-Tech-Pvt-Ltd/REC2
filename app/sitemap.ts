import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Built from NAV_ITEMS so new sector pages appear here automatically rather
 * than needing a second list kept in sync by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/mechatronics", "/defence", "/contact"];
  const sectorPaths = NAV_ITEMS.flatMap((nav) => nav.items.map((item) => item.href));

  return [...staticPaths, ...sectorPaths].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
