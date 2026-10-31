import type { Metadata } from "next";
import { PAGES } from "@/lib/data";

/**
 * Production origin. Defaults to the real domain so canonicals, the sitemap and
 * robots.txt are correct even when NEXT_PUBLIC_SITE_URL is not set on the host —
 * a localhost fallback here ships localhost URLs to every crawler.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rec2.in").replace(/\/+$/, "");

export const SITE_NAME = "REC 2";

export const SITE_DESCRIPTION =
  "REC 2 is a diverse innovation platform bridging sustainable technology, renewable energy, carbon credits, deep tech and the future of sport.";

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

/** Trim to a meta-description length on a word boundary. */
function trimDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "")}…`;
}

/** Metadata for a `PAGES` entry — own title, description and canonical (never inherited from the home page). */
export function pageMetadata(key: string): Metadata {
  const page = PAGES[key];
  const path = `/${key}`;
  if (!page) return { alternates: { canonical: path } };

  const title = page.seoTitle ?? page.title;
  const description = page.seoDescription ?? trimDescription(page.overview[0] ?? SITE_DESCRIPTION);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: `${title} — ${SITE_NAME}`,
      description,
      url: absoluteUrl(path),
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title: `${title} — ${SITE_NAME}`, description },
  };
}
