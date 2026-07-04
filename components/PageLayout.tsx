"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectorHero from "./SectorHero";
import TeamCard from "./TeamCard";
import ApplicationGrid from "./ApplicationGrid";
import { PAGES, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  slug: string;
  sector: SectorKey;
  breadcrumb: { label: string; href: string }[];
  children?: React.ReactNode;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const TICKER_ITEMS = [
  ["Carbon Credits", "var(--energy)"], ["Innovation", "var(--recycle)"],
  ["Sustainable Future", "var(--materials)"], ["Deep Tech", "var(--chips)"],
  ["Hydrogen", "var(--robotics)"], ["Photonics", "var(--sports)"],
  ["Biochips", "var(--energy)"], ["Rare Metals", "var(--recycle)"],
  ["Automated Reactors", "var(--materials)"], ["Renewable Energy", "var(--chips)"],
  ["Flow Chemistry", "var(--robotics)"], ["Solar Systems", "var(--sports)"],
] as const;

export default function PageLayout({ slug, sector, breadcrumb, children }: Props) {
  const page = PAGES[slug];
  if (!page) return <div className="pt-20 text-center p-8 text-[var(--muted)]">Page not found</div>;

  const color = SECTOR_COLORS[sector];

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* Sticky sector-colour accent — pinned just under the navbar, reinforces which world you're in */}
      <div className="sticky top-16 z-40 h-[3px]" style={{ backgroundColor: color }} />
      <SectorHero title={page.title} subtitle={page.subtitle} sector={sector} breadcrumb={breadcrumb} />

      {children}

      {/* Overview */}
      <section className="py-20 px-6 lg:px-[56px] border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[200px_1fr] gap-8 md:gap-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-36px" }}
            variants={fadeUp} transition={{ duration: 0.72 }}
            className="md:sticky md:top-24 self-start"
          >
            <p className="label mb-5">Overview</p>
            <div className="w-8 h-0.5" style={{ backgroundColor: color }} />
          </motion.div>
          <div>
            {page.overview.map((para, i) => (
              <motion.p
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-36px" }}
                variants={fadeUp} transition={{ duration: 0.72, delay: i * 0.08 }}
                className="text-[17px] leading-[1.88] font-light"
                style={{ color: "var(--charcoal-light)", marginTop: i > 0 ? 28 : 0 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Why REC 2 */}
      <section
        className="relative py-20 px-6 lg:px-[56px] border-b overflow-hidden"
        style={{
          backgroundColor: "var(--cream-deep)",
          borderColor: "var(--border)",
          backgroundImage: `radial-gradient(circle at 12% 20%, ${color}14, transparent 45%), radial-gradient(circle at 88% 80%, ${color}0d, transparent 45%)`,
        }}
      >
        <div className="relative max-w-[1100px] mx-auto">
          <p className="label mb-12">Why REC 2 is Investing Here</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.whyRec2.map((point, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-36px" }}
                variants={fadeUp} transition={{ duration: 0.72, delay: i * 0.08 }}
                className="why-card p-9 px-7 border"
                style={{ backgroundColor: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div className="font-display leading-none mb-6" style={{ fontSize: "52px", fontWeight: 300, color }}>
                  0{i + 1}
                </div>
                <p className="text-[13px] leading-[1.82] font-light" style={{ color: "var(--charcoal-light)" }}>
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section
        className="relative py-20 px-6 lg:px-[56px] border-b overflow-hidden"
        style={{
          borderColor: "var(--border)",
          backgroundImage: `radial-gradient(circle at 92% 15%, ${color}0f, transparent 40%)`,
        }}
      >
        <div className="relative max-w-[1100px] mx-auto">
          <div className="flex items-baseline justify-between mb-11">
            <p className="label">Key Applications</p>
            <p className="label">{page.applications.length.toString().padStart(2, "0")} Areas</p>
          </div>
          <ApplicationGrid applications={page.applications} sectorColor={color} />
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-[56px] border-t" style={{ backgroundColor: "var(--cream-deep)", borderColor: "var(--border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="label mb-12">Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {page.team.map((key, i) => (
              <TeamCard key={key} personKey={key} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-6 lg:px-[56px] border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1100px] mx-auto flex items-center gap-12 flex-wrap">
          <p className="label flex-shrink-0">Related</p>
          <div className="flex gap-8 flex-wrap">
            {page.related.map((rel) => (
              <Link
                key={rel.href + rel.label}
                href={rel.href}
                className="text-[13px] font-medium transition-opacity hover:opacity-60"
                style={{ color }}
              >
                {rel.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="py-[30px] overflow-hidden border-y" style={{ backgroundColor: "var(--cream-deep)", borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 38s linear infinite" }}>
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center flex-shrink-0" aria-hidden={rep === 1}>
              {TICKER_ITEMS.map(([label, c], i) => (
                <span key={i} className="text-[10px] tracking-[0.18em] uppercase font-medium px-7" style={{ color: "var(--muted)" }}>
                  {label} <span style={{ color: c, fontSize: 12 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-[56px] pb-12" style={{ backgroundColor: "var(--cream-deep)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 lg:[grid-template-columns:1.6fr_1fr_1fr]">
          <div>
            <div className="font-display font-semibold mb-4" style={{ fontSize: 26, letterSpacing: "0.05em", color: "var(--charcoal)" }}>REC 2</div>
            <p className="text-[13px] leading-[1.8] font-light max-w-[260px]" style={{ color: "var(--muted)" }}>
              Renewable Energy · Carbon Credits · Innovation · Sustainable Future
            </p>
            <a href="mailto:V@v-group.in" className="inline-block mt-6 text-[12px] font-medium" style={{ color: "var(--charcoal)" }}>
              V@v-group.in
            </a>
          </div>
          <div>
            <p className="label mb-6">Sectors</p>
            <div className="flex flex-col gap-3.5">
              {[
                { label: "Energy", href: "/energy/solar" },
                { label: "Recycle", href: "/recycle/battery-recycling" },
                { label: "Materials", href: "/materials/metal-alloys" },
                { label: "Chips", href: "/chips/photonics" },
                { label: "Robotics", href: "/robotics/flow-chemistry" },
                { label: "Sports", href: "/sports/investments" },
              ].map((s) => (
                <Link key={s.label} href={s.href} className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="label mb-6">Connect</p>
            <div className="flex flex-col gap-3.5">
              <Link href="/contact" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>Contact</Link>
              <Link href="/mechatronics" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>About</Link>
              <Link href="/" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>All Sectors</Link>
            </div>
          </div>
        </div>
        <div
          className="max-w-[1200px] mx-auto mt-[52px] pt-7 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="text-[10px]" style={{ color: "var(--faint)" }}>© 2026 REC 2. All rights reserved.</span>
          <span className="text-[10px]" style={{ color: "var(--hairline-faint)" }}>Renewable Energy · Carbon Credits · Innovation</span>
        </div>
      </footer>
    </div>
  );
}
