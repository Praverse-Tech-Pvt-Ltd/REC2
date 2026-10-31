import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

/**
 * Built from NAV_ITEMS so new sector pages appear here automatically rather
 * than needing a second list kept in sync by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/mechatronics", "/defence", "/contact"];
  const sectorPaths = NAV_ITEMS.flatMap((nav) => nav.items.map((item) => item.href));

  return [...staticPaths, ...sectorPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
