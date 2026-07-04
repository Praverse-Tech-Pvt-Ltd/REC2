"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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

const TICKER_ITEMS = [
  ["Carbon Credits", "var(--energy)"], ["Innovation", "var(--recycle)"],
  ["Sustainable Future", "var(--materials)"], ["Deep Tech", "var(--chips)"],
  ["Hydrogen", "var(--robotics)"], ["Photonics", "var(--sports)"],
  ["Biochips", "var(--energy)"], ["Rare Metals", "var(--recycle)"],
  ["Automated Reactors", "var(--materials)"], ["Renewable Energy", "var(--chips)"],
  ["Flow Chemistry", "var(--robotics)"], ["Solar Systems", "var(--sports)"],
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && !started) setStarted(true); }),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now(), dur = 1900;
    let raf: number;
    const tick = (now: number) => {
      const prog = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setVal(Math.round(target * eased));
      if (prog < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <div ref={ref} className="font-display leading-none" style={{ fontSize: "clamp(40px,9vw,76px)", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--charcoal)" }}>
      {val.toLocaleString()}{suffix}
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const watermarkY = useTransform(heroProgress, [0, 1], [0, 140]);
  const watermarkOpacity = useTransform(heroProgress, [0, 1], [0.032, 0]);

  return (
    <div className="min-h-screen bg-[var(--cream)]">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen px-6 lg:px-[56px] pb-20 flex flex-col justify-center overflow-hidden">
        <AmbientBackground colors={Object.values(SECTOR_COLORS)} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(26,26,26,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.032) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <motion.div
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-display select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(200px,28vw,400px)", fontWeight: 300, color: "var(--charcoal)", letterSpacing: "-0.04em", y: watermarkY, opacity: watermarkOpacity }}
        >
          R2
        </motion.div>

        <div className="max-w-[920px] relative z-10 pt-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72 }} className="flex items-center gap-3.5 mb-14">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--muted)" }} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold" style={{ color: "var(--muted)" }}>01 — Innovation Platform</span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.08 }}
            className="font-display leading-[0.88] tracking-[-0.025em] mb-11"
            style={{ fontSize: "clamp(72px,12.5vw,176px)", fontWeight: 300, color: "var(--charcoal)" }}
          >
            REC 2
          </motion.h1>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.16 }} className="h-px mb-9" style={{ backgroundColor: "rgba(26,26,26,0.14)" }} />

          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.24 }} className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-9" style={{ color: "var(--muted)" }}>
            Renewable Energy · Carbon Credits · Innovation
          </motion.p>

          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.32 }} className="text-[18px] leading-[1.78] font-light max-w-[560px] mb-[52px]" style={{ color: "var(--charcoal-light)" }}>
            A diverse innovation platform bridging sustainable technology, renewable energy, deep tech and the future of sport.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.4 }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link href="/energy/hydrogen" className="text-[10px] tracking-[0.12em] uppercase font-bold px-[34px] py-[15px] text-center" style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)", borderRadius: 2 }}>
              Explore Platform →
            </Link>
            <Link href="/contact" className="text-[10px] tracking-[0.12em] uppercase font-bold px-[34px] py-[15px] text-center" style={{ border: "1.5px solid rgba(26,26,26,0.24)", borderRadius: 2, color: "var(--charcoal)" }}>
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Sector legend */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.48 }} className="hidden lg:flex absolute right-[56px] bottom-[100px] flex-col gap-2.5 items-end">
          {SECTORS.map((s) => (
            <div key={s.key} className="flex items-center gap-2.5">
              <span className="text-[9px] tracking-[0.14em] uppercase font-medium" style={{ color: "var(--faint)" }}>{s.label}</span>
              <div className="w-[22px] h-0.5 rounded-sm" style={{ backgroundColor: SECTOR_COLORS[s.key] }} />
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.72, delay: 0.48 }} className="absolute bottom-11 left-6 lg:left-[56px] flex items-center gap-2.5">
          <div className="w-px h-9" style={{ backgroundColor: "rgba(26,26,26,0.18)" }} />
          <span className="text-[9px] tracking-[0.2em] uppercase font-medium" style={{ color: "var(--faint)" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section
        className="py-11 px-6 lg:px-[56px] border-y"
        style={{
          borderColor: "var(--border)",
          backgroundImage: `radial-gradient(circle at 4% 50%, ${SECTOR_COLORS.energy}10, transparent 35%)`,
        }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-10 sm:gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72 }} className="flex-shrink-0 pt-1">
            <span className="label">About</span>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72, delay: 0.08 }} className="text-[15px] leading-[1.82] font-light max-w-[700px]" style={{ color: "var(--charcoal-light)" }}>
            REC 2 is a diverse innovation platform — from rare metals to photonics, hydrogen to biochips. We bridge sustainable technology, deep science, and human progress across six interconnected sectors.
          </motion.p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-[68px] px-6 lg:px-[56px] border-b"
        style={{
          backgroundColor: "var(--cream-deep)",
          borderColor: "var(--border)",
          backgroundImage: `radial-gradient(circle at 15% 15%, ${SECTOR_COLORS.materials}0d, transparent 40%), radial-gradient(circle at 85% 85%, ${SECTOR_COLORS.sports}0d, transparent 40%)`,
        }}
      >
        <div className="stats-grid max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { n: 6, label: "Sectors" },
            { n: 14, label: "Verticals" },
            { n: 2035, label: "Horizon" },
            { n: 48, label: "Team Members" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72, delay: i * 0.08 }}
              className="text-center py-5 px-4"
            >
              <Counter target={s.n} />
              <div className="text-[9px] tracking-[0.2em] uppercase font-bold mt-4" style={{ color: "var(--muted)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONVERGENCE (Mechatronics) ── */}
      <section id="mechatronics" className="relative overflow-hidden py-[116px] px-6 lg:px-[56px]" style={{ scrollMarginTop: 70 }}>
        <AmbientBackground colors={["var(--sage)"]} count={3} grain={false} />
        <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-[88px] items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72 }} className="lg:sticky lg:top-24">
            <p className="label mb-6">The Convergence</p>
            <h2 className="font-display leading-[1.1] tracking-[-0.01em]" style={{ fontSize: 50, fontWeight: 300, color: "var(--charcoal)" }}>
              One discipline,<br /><em className="italic">six expressions</em>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72, delay: 0.1 }}>
            <p className="text-[17px] leading-[1.9] font-light" style={{ color: "var(--charcoal-light)" }}>
              It starts with energy, is recycled back into material, refined into the substrate for chips, given hands by robotics, and proven on the racetrack in front of millions. Six sectors, one convergence.
            </p>
            <div className="mt-[40px] pt-9 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="font-display mb-6" style={{ fontSize: 22, lineHeight: 1.55, color: "var(--charcoal)", fontWeight: 400 }}>
                One discipline. Six expressions.<br /><em className="italic">This is mechatronics.</em>
              </p>
              <Link href="/mechatronics" className="inline-block text-[10px] tracking-[0.12em] uppercase font-bold px-[28px] py-[13px]" style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)", borderRadius: 2 }}>
                Explore Mechatronics →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── SECTORS GRID ── */}
      <section
        className="py-[100px] px-6 lg:px-[56px]"
        style={{ backgroundImage: `radial-gradient(circle at 96% 4%, ${SECTOR_COLORS.chips}0d, transparent 32%)` }}
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.72 }} className="flex items-baseline justify-between mb-[60px]">
            <div>
              <p className="label mb-4">Focus Areas</p>
              <h2 className="font-display leading-[1.1] tracking-[-0.015em]" style={{ fontSize: 52, fontWeight: 300, color: "var(--charcoal)" }}>Our Sectors</h2>
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

      {/* ── TICKER ── */}
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

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 lg:px-[56px] pb-12 border-t" style={{ backgroundColor: "var(--cream-deep)", borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 lg:[grid-template-columns:1.6fr_1fr_1fr]">
          <div>
            <div className="font-display font-semibold mb-4" style={{ fontSize: 26, letterSpacing: "0.05em", color: "var(--charcoal)" }}>REC 2</div>
            <p className="text-[13px] leading-[1.8] font-light max-w-[260px]" style={{ color: "var(--muted)" }}>
              Renewable Energy · Carbon Credits · Innovation · Sustainable Future
            </p>
            <a href="mailto:V@v-group.in" className="inline-block mt-6 text-[12px] font-medium" style={{ color: "var(--charcoal)" }}>V@v-group.in</a>
          </div>
          <div>
            <p className="label mb-6">Sectors</p>
            <div className="flex flex-col gap-3.5">
              {SECTORS.map((s) => (
                <Link key={s.key} href={s.href} className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>{s.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="label mb-6">Connect</p>
            <div className="flex flex-col gap-3.5">
              <Link href="/contact" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>Contact</Link>
              <Link href="/mechatronics" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>About</Link>
              <Link href="/#sectors" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>Sectors</Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-[52px] pt-7 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center border-t" style={{ borderColor: "var(--border)" }}>
          <span className="text-[10px]" style={{ color: "var(--faint)" }}>© 2026 REC 2. All rights reserved.</span>
          <span className="text-[10px]" style={{ color: "var(--hairline-faint)" }}>Renewable Energy · Carbon Credits · Innovation</span>
        </div>
      </footer>
    </div>
  );
}
