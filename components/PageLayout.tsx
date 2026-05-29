"use client";

import Link from "next/link";
import SectorHero from "./SectorHero";
import TeamCard from "./TeamCard";
import FadeUp from "./FadeUp";
import { PAGES, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  slug: string;
  sector: SectorKey;
  breadcrumb: { label: string; href: string }[];
  children?: React.ReactNode;
};

export default function PageLayout({ slug, sector, breadcrumb, children }: Props) {
  const page = PAGES[slug];
  if (!page) return <div className="pt-20 text-center p-8">Page not found</div>;

  const color = SECTOR_COLORS[sector];

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <SectorHero
        title={page.title}
        subtitle={page.subtitle}
        sector={sector}
        breadcrumb={breadcrumb}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* Special slot (e.g. festival banner) */}
        {children}

        {/* Overview */}
        <FadeUp>
          <div className="grid md:grid-cols-[200px_1fr] gap-10">
            <div>
              <p className="label text-[var(--muted)]">Overview</p>
              <div className="mt-4 h-px bg-[var(--border)]" />
            </div>
            <div className="space-y-4">
              {page.overview.map((para, i) => (
                <p key={i} className="text-[var(--navy)]/80 leading-[1.8] text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Why Rec 2 */}
        <FadeUp delay={0.05}>
          <p className="label text-[var(--muted)] mb-6">Why Rec 2 is investing here</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="grid sm:grid-cols-3 gap-4">
            {page.whyRec2.map((point, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl p-5">
                {/* Number */}
                <p
                  className="font-display font-bold text-3xl mb-4 leading-none"
                  style={{ color: color + "30" }}
                >
                  0{i + 1}
                </p>
                <p className="text-sm text-[var(--navy)]/75 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Key Applications */}
        <FadeUp delay={0.05}>
          <p className="label text-[var(--muted)] mb-6">Key Applications</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {page.applications.map((app, i) => (
              <div
                key={i}
                className="bg-white border border-[var(--border)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--border-strong)] transition-colors"
              >
                <span className="text-xl flex-shrink-0">{app.icon}</span>
                <span className="text-sm font-medium text-[var(--navy)]">{app.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Team */}
        <FadeUp delay={0.05}>
          <p className="label text-[var(--muted)] mb-6">Team</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {page.team.map((key, i) => (
              <TeamCard key={key} personKey={key} sector={sector} index={i} />
            ))}
          </div>
        </FadeUp>

        {/* Related */}
        <FadeUp delay={0.05}>
          <p className="label text-[var(--muted)] mb-6">Related Sectors</p>
          <div className="h-px bg-[var(--border)] mb-6" />
          <div className="flex flex-wrap gap-2">
            {page.related.map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-200"
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
      <footer className="border-t border-[var(--border)] bg-white mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link href="/" className="font-display font-semibold text-[var(--navy)]">Rec 2</Link>
          <p className="label text-[var(--muted)]">© 2026 · Renewable Energy · Carbon Credits · Innovation</p>
        </div>
      </footer>
    </div>
  );
}
