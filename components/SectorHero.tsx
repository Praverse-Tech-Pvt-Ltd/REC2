"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SECTOR_COLORS, SECTOR_NUMBERS, type SectorKey } from "@/lib/data";

type Props = {
  title: string;
  subtitle: string;
  sector: SectorKey;
  breadcrumb?: { label: string; href: string }[];
};

export default function SectorHero({ title, subtitle, sector, breadcrumb }: Props) {
  const color = SECTOR_COLORS[sector];
  const num = SECTOR_NUMBERS[sector];

  return (
    <section className="relative bg-[var(--navy)] grain-bg overflow-hidden pt-28 pb-16">

      {/* Ghost sector number */}
      <div
        className="absolute right-[-0.05em] bottom-[-0.1em] font-display font-bold text-white select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(8rem, 28vw, 22rem)", opacity: 0.045 }}
      >
        {num}
      </div>

      {/* Thin color bar at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: color }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link href="/" className="label text-white/35 hover:text-white/60 transition-colors">
              Home
            </Link>
            {breadcrumb.map((b) => (
              <span key={b.href} className="flex items-center gap-2">
                <span className="label text-white/20">/</span>
                <Link
                  href={b.href}
                  className="label hover:text-white/60 transition-colors capitalize"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </motion.nav>
        )}

        {/* Sector label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="label mb-4"
          style={{ color: color + "cc" }}
        >
          {num} — {sector.toUpperCase()}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white text-[clamp(2.2rem,6vw,4rem)] leading-tight tracking-[-0.03em] mb-4 max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-white/50 text-base md:text-lg max-w-xl font-light"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
