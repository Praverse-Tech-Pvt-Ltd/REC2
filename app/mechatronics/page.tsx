"use client";

import { motion } from "framer-motion";
import { SECTOR_COLORS, SECTOR_DESCRIPTIONS, SECTOR_NUMBERS, type SectorKey } from "@/lib/data";
import SectorCard from "@/components/SectorCard";
import AmbientBackground from "@/components/AmbientBackground";

const SECTORS: { key: SectorKey; label: string; href: string; image: string; alt: string }[] = [
  { key: "energy",    label: "Energy",    href: "/energy/solar",              image: "/solar.png",        alt: "Solar energy infrastructure" },
  { key: "recycle",   label: "Recycle",   href: "/recycle/battery-recycling", image: "/recycle.png",      alt: "Industrial recycling systems" },
  { key: "materials", label: "Materials", href: "/materials/metal-alloys",    image: "/materials.png",    alt: "Advanced materials and alloys" },
  { key: "chips",     label: "Chips",     href: "/chips/photonics",           image: "/chips.png",        alt: "Semiconductor and photonics technology" },
  { key: "robotics",  label: "Robotics",  href: "/robotics/flow-chemistry",   image: "/robotics.png",     alt: "Robotics and automated reactor systems" },
  { key: "sports",    label: "Sports",    href: "/sports/investments",        image: "/sports final.png", alt: "Sustainable motorsport technology" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MechatronicsPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* ── HERO — image collage + big title ── */}
      <section className="relative pt-32 pb-16 px-6 lg:px-[56px] overflow-hidden">
        <AmbientBackground colors={Object.values(SECTOR_COLORS)} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(26,26,26,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.032) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72 }} className="flex items-center gap-3.5 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--muted)" }} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold" style={{ color: "var(--muted)" }}>REC 2 — Home</span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.08 }}
            className="font-display italic leading-[0.92] tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(56px,10vw,140px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            Mechatronics
          </motion.h1>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.16 }} className="h-px mb-9 max-w-[720px]" style={{ backgroundColor: "rgba(26,26,26,0.14)" }} />

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.24 }}
            className="text-[18px] leading-[1.78] font-light max-w-[640px]" style={{ color: "var(--charcoal-light)" }}
          >
            Mechatronics is the discipline underneath every REC 2 vertical — the engineering layer where energy systems, materials science, sensing and robotics stop being separate fields and start being one integrated machine. It&apos;s not a seventh sector alongside the other six; it&apos;s the connective logic that makes the six work as a single platform rather than six unrelated bets.
          </motion.p>
        </div>
      </section>

      {/* ── SECTORS GRID ── */}
      <section
        className="py-[100px] px-6 lg:px-[56px]"
        style={{ backgroundImage: `radial-gradient(circle at 4% 96%, ${SECTOR_COLORS.robotics}0d, transparent 32%)` }}
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72 }} className="flex items-baseline justify-between mb-[60px]">
            <div>
              <p className="label mb-4">Focus Areas</p>
              <h2 className="font-display leading-[1.1] tracking-[-0.015em]" style={{ fontSize: 52, fontWeight: 300, color: "var(--charcoal)" }}>Explore the Sectors</h2>
            </div>
            <p className="label">06 Verticals</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border" style={{ backgroundColor: "var(--border)", borderColor: "var(--border)" }}>
            {SECTORS.map((s, i) => (
              <SectorCard
                key={s.key}
                href={s.href}
                image={s.image}
                alt={s.alt}
                color={SECTOR_COLORS[s.key]}
                number={SECTOR_NUMBERS[s.key]}
                label={s.label}
                description={SECTOR_DESCRIPTIONS[s.key]}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
