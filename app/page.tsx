"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import SplitText from "@/components/SplitText";
import CountUp from "@/components/CountUp";
import RevealLine from "@/components/RevealLine";
import SilkBackground from "@/components/SilkBackground";
import AnimatedDotGrid from "@/components/AnimatedDotGrid";
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

const STATS = [
  { n: 5,    suffix: "",  label: "Sectors" },
  { n: 15,   suffix: "",  label: "Verticals" },
  { n: 2030, suffix: "",  label: "Horizon" },
  { n: 6,    suffix: "",  label: "Team Members" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-end bg-[var(--cream)]">

        {/* Silk canvas background — ReactBits-inspired flowing ribbons */}
        <div className="absolute inset-0 pointer-events-none">
          <SilkBackground className="w-full h-full" opacity={0.9} speed={0.0006} />
        </div>

        {/* Subtle horizontal rule grid on top of silk */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--border-strong) 1px, transparent 1px)",
            backgroundSize: "100% 80px",
          }}
        />

        {/* Ghost "R2" watermark */}
        <div
          className="absolute right-[-0.04em] bottom-[-0.12em] font-display select-none pointer-events-none leading-none italic"
          style={{ fontSize: "clamp(10rem,38vw,34rem)", color: "var(--charcoal)", opacity: 0.04 }}
        >
          R2
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-36 w-full">

          {/* Eyebrow — shiny label */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="label mb-8 shiny-text"
          >
            Renewable Energy · Carbon Credits · Innovation
          </motion.p>

          {/* Title — SplitText character stagger */}
          <h1 className="font-display italic text-[var(--charcoal)] leading-[0.92] tracking-[-0.02em] text-[clamp(4.5rem,14vw,11rem)] mb-10">
            <SplitText text="REC 2" charDelay={0.055} initialDelay={0.1} />
          </h1>

          {/* Animated thin rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 h-px bg-[var(--border-strong)]"
          />

          {/* Tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          >
            <p className="text-[var(--charcoal-light)] text-base md:text-lg max-w-md leading-relaxed font-light">
              A diverse innovation platform bridging sustainable technology, renewable
              energy, deep tech and the future of sport.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/energy/hydrogen-hybrid"
                className="text-[0.8125rem] font-medium px-6 py-2.5 bg-[var(--sage)] text-white hover:bg-[var(--sage-dark)] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Explore Platform →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO + STATS ── */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[var(--border)]">
        {/* 21st.dev-inspired animated dot grid — subtle right-side accent */}
        <div className="absolute right-0 top-0 bottom-0 overflow-hidden hidden lg:block" style={{ width: "300px" }}>
          <AnimatedDotGrid color="var(--sage)" gap={28} dotSize={2.5} rows={12} cols={11} />
        </div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <FadeUp>
            <p className="label text-[var(--muted)] mb-4">About</p>
            <RevealLine />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-display text-[1.45rem] leading-[1.6] text-[var(--charcoal)] max-w-2xl">
              REC 2 is a diverse innovation platform — from rare metals to photonics,
              hydrogen to biochips. We bridge sustainable technology, deep science,
              and human progress across five interconnected sectors.
            </p>

            {/* CountUp stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map(({ n, label }) => (
                <div key={label}>
                  <p className="font-display italic text-[2.5rem] text-[var(--charcoal)] leading-none mb-1.5">
                    <CountUp to={n} duration={n > 100 ? 2.2 : 1.6} />
                  </p>
                  <p className="label text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ── SECTOR CARDS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <FadeUp>
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="label text-[var(--muted)] mb-2">Focus Areas</p>
              <h2 className="font-display text-3xl text-[var(--charcoal)]">Our Sectors</h2>
            </div>
            <span className="hidden sm:block label text-[var(--muted)]">05 verticals</span>
          </div>
          <RevealLine className="mb-8" />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTORS.map((sector, i) => {
            const color = SECTOR_COLORS[sector.key];
            const num   = SECTOR_NUMBERS[sector.key];
            return (
              <FadeUp key={sector.key} delay={i * 0.06}>
                <Link href={sector.href} className="block h-full">
                  <motion.div
                    whileHover={{ y: -3, boxShadow: `0 8px 32px ${color}18` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative bg-[var(--white)] border border-[var(--border)] p-6 overflow-hidden cursor-pointer h-full group"
                    style={{ borderRadius: "2px", borderLeft: `3px solid ${color}45` }}
                  >
                    {/* Ghost number */}
                    <span
                      className="absolute top-4 right-5 font-display italic leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-15"
                      style={{ fontSize: "3.5rem", color, opacity: 0.07 }}
                    >
                      {num}
                    </span>

                    {/* Sector color accent line — animates in on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: color }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <div className="relative z-10">
                      <p className="label mb-4" style={{ color }}>
                        {num} — {sector.label}
                      </p>
                      <p className="font-display text-[1.05rem] text-[var(--charcoal)] leading-snug mb-5">
                        {SECTOR_DESCRIPTIONS[sector.key]}
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-[0.8rem] font-medium group-hover:gap-2.5 transition-all duration-200"
                        style={{ color }}
                      >
                        Explore →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── MARQUEE — ReactBits inspired scrolling ticker ── */}
      <section className="bg-[var(--charcoal)] py-3.5 overflow-hidden">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {[...Array(4)].flatMap((_, rep) =>
            ["Renewable Energy","Carbon Credits","Innovation","Sustainable Future","Deep Tech","Hydrogen","Photonics","Biochips","Rare Metals","Automated Reactors","Sports Investments"].map((item) => (
              <span key={`${rep}-${item}`} className="label text-white/20 flex-shrink-0 tracking-[0.14em]">
                {item}<span className="mx-4 text-white/10">·</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[var(--charcoal)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07]">
          <span className="font-display italic text-white/70 text-lg">REC 2</span>
          <p className="label text-white/25">
            © 2026 · Renewable Energy · Carbon Credits · Innovation · Sustainable Future
          </p>
          <a
            href="mailto:V@v-group.in"
            className="label text-white/25 hover:text-white/55 transition-colors"
          >
            V@v-group.in
          </a>
        </div>
      </footer>
    </div>
  );
}
