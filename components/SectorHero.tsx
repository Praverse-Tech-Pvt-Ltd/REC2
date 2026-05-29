"use client";

/**
 * SectorHero with ReactBits-inspired breathing gradient background.
 * Each sector has its own slow-shifting gradient that breathes in/out —
 * like a living color field, not a static tint.
 * Zero canvas, pure CSS @keyframes.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import { SECTOR_NUMBERS, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  title: string;
  subtitle: string;
  sector: SectorKey;
  breadcrumb?: { label: string; href: string }[];
};

export default function SectorHero({ title, subtitle, sector, breadcrumb }: Props) {
  const num   = SECTOR_NUMBERS[sector];
  const color = SECTOR_COLORS[sector];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-[var(--border)]">

      {/* ── Breathing gradient background — ReactBits-inspired ── */}
      <div
        className="absolute inset-0 sector-hero-gradient"
        style={{
          // Three-stop gradient: cream → tinted sector pale → cream
          // Shifts position over 6s for a gentle "breathing" effect
          background: `
            radial-gradient(ellipse 130% 90% at 85% 50%,
              ${color}38 0%,
              ${color}1a 45%,
              transparent 72%
            ),
            linear-gradient(
              135deg,
              var(--cream) 0%,
              ${color}18 50%,
              var(--cream-deep) 100%
            )
          `,
          animation: "heroBreath 7s ease-in-out infinite alternate",
        }}
      />

      {/* Thin sector-color top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: color }}
      />

      {/* Diagonal dot accent — 21st.dev inspired subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ghost sector number */}
      <div
        className="absolute right-[-0.04em] bottom-[-0.1em] font-display italic select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(7rem,26vw,20rem)", color, opacity: 0.12 }}
      >
        {num}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link href="/" className="label text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors">
              Home
            </Link>
            {breadcrumb.map((b) => (
              <span key={b.href} className="flex items-center gap-2">
                <span className="label text-[var(--border-strong)]">/</span>
                <Link href={b.href} className="label text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors capitalize">
                  {b.label}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        {/* Sector label */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="label mb-5"
          style={{ color }}
        >
          <span className="inline-block">{num} — {sector}</span>
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-[var(--charcoal)] text-[clamp(2rem,5.5vw,3.75rem)] leading-tight max-w-3xl mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="text-[var(--charcoal-light)] text-base md:text-lg max-w-xl font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Breathing keyframe injected inline — scoped to hero only */}
      <style>{`
        @keyframes heroBreath {
          from { opacity: 0.75; transform: scale(1); }
          to   { opacity: 1;    transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
}
