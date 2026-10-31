import { NAV_ITEMS, PAGES } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Plain-text site map for AI agents (llmstxt.org). Generated from PAGES and
 * NAV_ITEMS so it never drifts from the pages themselves.
 */
export function GET() {
  const sections = NAV_ITEMS.map((nav) => {
    const lines = nav.items.map((item) => {
      const page = PAGES[item.href.slice(1)];
      const summary = (page?.seoDescription ?? page?.overview[0]?.split(". ")[0] ?? "").replace(/\.$/, "");
      return `- [${page?.title ?? item.label}](${absoluteUrl(item.href)}): ${summary}.`;
    });
    return `## ${nav.label}\n\n${lines.join("\n")}`;
  });

  const body = [
    `# ${SITE_NAME}`,
    `> ${SITE_DESCRIPTION}`,
    `${SITE_NAME} (${absoluteUrl("/")}) invests across renewable energy, carbon credits, recycling, advanced materials, photonic and bio chips, robotics and sustainable sport. Every page below is server-rendered HTML; no JavaScript is needed to read it.`,
    ...sections,
    `## Other\n\n- [Mechatronics](${absoluteUrl("/mechatronics")}): the connective discipline across all verticals.\n- [Defence](${absoluteUrl("/defence")}): defence applications of REC 2 technologies.\n- [Contact](${absoluteUrl("/contact")}): V@v-group.in`,
  ].join("\n\n");

  return new Response(`${body}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
