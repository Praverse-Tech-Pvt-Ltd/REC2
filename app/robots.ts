import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** Search and AI crawlers are named explicitly so the intent is unambiguous. */
const CRAWLERS = [
  "Googlebot", "Bingbot", "DuckDuckBot", "Applebot",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "meta-externalagent", "FacebookBot", "CCBot", "Amazonbot", "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: CRAWLERS, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
