"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OrgChart from "@/components/OrgChart";
import FadeUp from "@/components/FadeUp";
import {
  SECTOR_COLORS,
  SECTOR_DESCRIPTIONS,
  SECTOR_NUMBERS,
  type SectorKey,
} from "@/lib/data";

const SECTORS: { key: SectorKey; label: string; href: string }[] = [
  { key: "energy",    label: "Energy",    href: "/energy/hydrogen-hybrid" },
  { key: "materials", label: "Materials", href: "/materials/metal-alloys" },
  { key: "chips",     label: "Chips",     href: "/chips/photonics" },
  { key: "robotics",  label: "Robotics",  href: "/robotics/flow-chemistry" },
  { key: "sports",    label: "Sports",    href: "/sports/investments" },
];

/* ReactBits-style blur text entrance: each word blurs in */
function BlurTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="font-display font-bold text-white leading-[0.92] tracking-[-0.04em] text-[clamp(4rem,12vw,9rem)]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ delay: i * 0.18 + 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">

      {/* ── HERO ── */}
      <section className="relative bg-[var(--navy)] grain-bg overflow-hidden min-h-[92vh] flex flex-col justify-end">

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Large ghost number */}
        <div
          className="absolute right-[-0.05em] bottom-[-0.15em] font-display font-bold text-white select-none pointer-events-none"
          style={{ fontSize: "clamp(12rem, 40vw, 36rem)", opacity: 0.04, lineHeight: 1 }}
        >
          R2
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-36 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label text-white/40 mb-10"
          >
            Innovation Platform · Est. 2024
          </motion.p>

          {/* Title */}
          <BlurTitle text="Rec 2" />

          {/* Horizontal rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 mb-8 h-px bg-white/20"
          />

          {/* Tagline + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          >
            <p className="text-white/55 text-base md:text-lg max-w-md leading-relaxed font-light">
              Renewable Energy · Carbon Credits · Innovation · Sustainable Future
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/energy/hydrogen-hybrid"
                className="text-sm font-medium px-5 py-2.5 rounded-full bg-white text-[var(--navy)] hover:bg-white/90 transition-colors"
              >
                Explore Platform →
              </Link>
              <Link
                href="/sports/investments"
                className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
              >
                Sports
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <FadeUp>
            <p className="label text-[var(--muted)] mb-4">About</p>
            <div className="h-px bg-[var(--border)] mb-6" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-display text-[1.35rem] leading-[1.55] text-[var(--navy)] font-medium max-w-2xl">
              Rec 2 is a diverse innovation platform — from rare metals to photonics,
              hydrogen to biochips. We bridge sustainable technology, deep science,
              and human progress across five interconnected sectors.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PLATFORM CHART ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <FadeUp>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="label text-[var(--muted)] mb-1">Structure</p>
              <h2 className="font-display text-2xl font-semibold text-[var(--navy)]">Platform Overview</h2>
            </div>
            <p className="hidden sm:block text-xs text-[var(--muted)]">Click any node to explore</p>
          </div>
          <div className="h-px bg-[var(--border)] mb-6" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
            <OrgChart />
          </div>
        </FadeUp>
      </section>

      {/* ── SECTOR CARDS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <FadeUp>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="label text-[var(--muted)] mb-1">Focus Areas</p>
              <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">Our Sectors</h2>
            </div>
            <span className="hidden sm:block label text-[var(--muted)]">05 verticals</span>
          </div>
          <div className="h-px bg-[var(--border)] mb-8" />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTORS.map((sector, i) => {
            const color = SECTOR_COLORS[sector.key];
            const num = SECTOR_NUMBERS[sector.key];
            return (
              <FadeUp key={sector.key} delay={i * 0.07}>
                <Link href={sector.href}>
                  <div
                    className="group relative bg-white border border-[var(--border)] rounded-xl p-6 overflow-hidden hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                  >
                    {/* Sector number watermark */}
                    <span
                      className="absolute top-4 right-5 font-display font-bold text-[3.5rem] leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: color, opacity: 0.07 }}
                    >
                      {num}
                    </span>

                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: color }}
                    />

                    <div className="relative z-10">
                      <p className="label mb-4" style={{ color }}>
                        {num} — {sector.label.toUpperCase()}
                      </p>
                      <p className="font-display text-[1.05rem] font-medium text-[var(--navy)] leading-snug mb-5 text-balance">
                        {SECTOR_DESCRIPTIONS[sector.key]}
                      </p>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide transition-gap duration-200"
                        style={{ color }}
                      >
                        Explore
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 3 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--border)] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-semibold text-[var(--navy)] tracking-tight">
            Rec 2
          </span>
          <p className="label text-[var(--muted)]">
            © 2026 · Renewable Energy · Carbon Credits · Innovation
          </p>
          <a
            href="mailto:V@v-group.in"
            className="label text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
          >
            V@v-group.in
          </a>
        </div>
      </footer>
    </div>
  );
}
