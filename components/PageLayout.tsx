"use client";

import Link from "next/link";
import SectorHero from "./SectorHero";
import TeamCard from "./TeamCard";
import FadeUp from "./FadeUp";
import RevealLine from "./RevealLine";
import ApplicationGrid from "./ApplicationGrid";
import { PAGES, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  slug: string;
  sector: SectorKey;
  breadcrumb: { label: string; href: string }[];
  children?: React.ReactNode;
};

export default function PageLayout({ slug, sector, breadcrumb, children }: Props) {
  const page = PAGES[slug];
  if (!page) return <div className="pt-20 text-center p-8 text-[var(--muted)]">Page not found</div>;

  const color = SECTOR_COLORS[sector];

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <SectorHero
        title={page.title}
        subtitle={page.subtitle}
        sector={sector}
        breadcrumb={breadcrumb}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* Special slot (e.g. H₂ Festival banner) */}
        {children}

        {/* Overview */}
        <FadeUp>
          <div className="grid md:grid-cols-[180px_1fr] gap-10">
            <div className="pt-1">
              <p className="label">Overview</p>
              <RevealLine className="mt-4" />
            </div>
            <div style={{ borderLeft: `2px solid ${color}20` }}>
              <div className="pl-5 space-y-5">
                {page.overview.map((para, i) => (
                  <p key={i} className="text-[var(--charcoal-light)] leading-[1.85] text-[0.9375rem]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Why REC 2 */}
        <FadeUp delay={0.04}>
          <p className="label mb-5">Why REC 2 is investing here</p>
          <RevealLine className="mb-8" />
          <div className="grid sm:grid-cols-3 gap-5">
            {page.whyRec2.map((point, i) => (
              <div
                key={i}
                className="bg-[var(--sage-pale)] border border-[var(--border)] p-6"
                style={{ borderRadius: "2px", borderLeft: `3px solid ${color}50` }}
              >
                <p className="font-display italic text-2xl mb-3 leading-none" style={{ color: color + "60" }}>
                  0{i + 1}
                </p>
                <p className="text-sm text-[var(--charcoal-light)] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ── Key Applications — 21st.dev-inspired editorial grid ── */}
        <FadeUp delay={0.04}>
          <div className="flex items-end justify-between mb-5">
            <p className="label">Key Applications</p>
            <span className="label text-[var(--muted)] opacity-60">
              {page.applications.length.toString().padStart(2, "0")} areas
            </span>
          </div>
          <ApplicationGrid
            applications={page.applications}
            sectorColor={color}
          />
        </FadeUp>

        {/* Team */}
        <FadeUp delay={0.04}>
          <p className="label mb-5">Team</p>
          <RevealLine className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {page.team.map((key, i) => (
              <TeamCard key={key} personKey={key} sector={sector} index={i} />
            ))}
          </div>
        </FadeUp>

        {/* Related Sectors */}
        <FadeUp delay={0.04}>
          <p className="label mb-5">Related Sectors</p>
          <RevealLine className="mb-6" />
          <div className="flex flex-wrap gap-2">
            {page.related.map((rel) => (
              <Link
                key={rel.href + rel.label}
                href={rel.href}
                className="text-[0.8125rem] font-medium px-5 py-2 border transition-all duration-200 rounded-full"
                style={{ borderColor: color + "50", color }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = color;
                  el.style.color = "#fff";
                  el.style.borderColor = color;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = color;
                  el.style.borderColor = color + "50";
                }}
              >
                {rel.label} →
              </Link>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--charcoal)] mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-display text-white/90 italic text-lg">REC 2</Link>
          <p className="label text-white/35">© 2026 · Renewable Energy · Carbon Credits · Innovation · Sustainable Future</p>
          <div className="flex gap-4">
            {[
              { label: "Energy",    href: "/energy/hydrogen-hybrid" },
              { label: "Materials", href: "/materials/metal-alloys" },
              { label: "Chips",     href: "/chips/photonics" },
              { label: "Robotics",  href: "/robotics/flow-chemistry" },
              { label: "Sports",    href: "/sports/investments" },
            ].map((s) => (
              <Link key={s.label} href={s.href} className="label text-white/30 hover:text-white/60 transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
