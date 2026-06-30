"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTOR_NUMBERS, SECTOR_COLORS, NAV_ITEMS, type SectorKey } from "@/lib/data";

type Props = {
  title: string;
  subtitle: string;
  sector: SectorKey;
  breadcrumb?: { label: string; href: string }[];
};

export default function SectorHero({ title, subtitle, sector, breadcrumb }: Props) {
  const num   = SECTOR_NUMBERS[sector];
  const color = SECTOR_COLORS[sector];
  const pathname = usePathname();
  const navGroup = NAV_ITEMS.find((n) => n.label.toLowerCase() === sector);

  // Split title: last word italic + colored, rest normal weight
  const words = title.split(" ");
  const lastWord = words.pop() ?? "";
  const firstPart = words.join(" ");

  return (
    <section
      className="relative overflow-hidden pt-[120px] pb-16 px-6 lg:px-[56px] border-b"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Ghost sector number */}
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-display select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(90px,22vw,320px)", fontWeight: 300, color: "var(--charcoal)", opacity: 0.04 }}
      >
        {num}
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center flex-wrap gap-2 mb-11"
          >
            <Link href="/" className="text-[10px] tracking-[0.16em] uppercase font-medium" style={{ color: "var(--faint)" }}>
              Home
            </Link>
            <span style={{ color: "var(--hairline-faint)" }} className="text-[10px]">/</span>
            <span className="text-[10px] tracking-[0.16em] uppercase font-medium" style={{ color: "var(--faint)" }}>
              {breadcrumb[0]?.label}
            </span>
            <span style={{ color: "var(--hairline-faint)" }} className="text-[10px]">/</span>
            <span className="text-[10px] tracking-[0.16em] uppercase font-bold" style={{ color }}>
              {breadcrumb[1]?.label ?? title}
            </span>
          </motion.div>
        )}

        {/* Sector label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2.5 mb-7"
        >
          <div className="w-7 h-0.5" style={{ backgroundColor: color }} />
          <span className="text-[9px] tracking-[0.22em] uppercase font-bold" style={{ color }}>
            {num} — {sector}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[var(--charcoal)] leading-[0.94] tracking-[-0.02em] mb-8 break-words"
          style={{ fontSize: "clamp(40px,9vw,110px)", fontWeight: 300 }}
        >
          {firstPart}<br />
          <em className="italic" style={{ color }}>{lastWord}</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
          className="text-[16px] leading-[1.65] font-light max-w-[520px] mb-9"
          style={{ color: "var(--muted)" }}
        >
          {subtitle}
        </motion.p>

        {/* Sub-nav tabs — horizontally scrollable on mobile so 4-tab groups (e.g. Energy) never overflow */}
        {navGroup && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
            className="tabs-scroll flex items-center flex-nowrap overflow-x-auto pt-5 border-t -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ borderColor: "var(--border)" }}
          >
            {navGroup.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex-shrink-0 whitespace-nowrap ${active ? "" : "nlink"}`}
                  style={{
                    padding: "10px 14px",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: active ? 700 : 500,
                    color: active ? color : "var(--faint)",
                    borderBottom: active ? `2px solid ${color}` : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
