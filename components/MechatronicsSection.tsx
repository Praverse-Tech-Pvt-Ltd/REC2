"use client";

/**
 * Mechatronics — single continuous storyline weaving all 6 verticals
 * into one narrative. Editorial magazine treatment:
 *   - Drop-cap opening letter (classic editorial anchor)
 *   - Story broken into 3 breathing paragraphs (not one dense block)
 *   - Reading-size type, constrained line length (~65-70ch) for comfort
 *   - Each paragraph reveals independently as it scrolls into view
 *   - Inline keywords as soft "highlighter" chips
 */

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import RevealLine from "./RevealLine";
import { SECTOR_COLORS, SECTOR_NUMBERS, type SectorKey } from "@/lib/data";

const C = SECTOR_COLORS;

// Flow sequence — mirrors the order the storyline visits each vertical
const FLOW: { key: SectorKey; label: string }[] = [
  { key: "energy",    label: "Energy" },
  { key: "recycle",   label: "Recycle" },
  { key: "materials", label: "Materials" },
  { key: "chips",     label: "Chips" },
  { key: "robotics",  label: "Robotics" },
  { key: "sports",    label: "Sports" },
];

const flowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const flowNodeVariants = {
  hidden:  { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
};

type Clause = { text: string; color?: string };

// Story grouped into 3 paragraphs — each its own scroll-reveal beat
const PARAGRAPHS: Clause[][] = [
  [
    { text: "t starts with " },
    { text: "energy", color: C.energy },
    { text: " — sunlight and hydrogen turned into power that never sleeps. What that power eventually leaves behind, REC 2 " },
    { text: "recycles", color: C.recycle },
    { text: " back into raw material, so nothing is spent twice." },
  ],
  [
    { text: "Those reclaimed elements, alongside rare earths and advanced alloys, become the " },
    { text: "materials", color: C.materials },
    { text: " precise enough for reactors and aircraft. Refined further, they become the substrate for " },
    { text: "chips", color: C.chips },
    { text: " — photonic and biological — that let machines see, sense and think." },
  ],
  [
    { text: "Robotics", color: C.robotics },
    { text: " takes that intelligence and gives it hands: reactors that synthesise, correct and act without waiting for instruction. And to prove it all works, REC 2 takes it racing — in " },
    { text: "sport", color: C.sports },
    { text: ", where hydrogen boats and electric cars run the same engineering in front of millions." },
  ],
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.028 } },
};

const clauseVariants = {
  hidden:  { opacity: 0, filter: "blur(3px)", y: 4 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

function keywordStyle(color?: string): React.CSSProperties | undefined {
  if (!color) return undefined;
  return {
    color,
    backgroundColor: color + "14",
    padding: "0.02em 0.38em",
    borderRadius: "3px",
    fontStyle: "italic",
    fontWeight: 500,
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
  };
}

export default function MechatronicsSection() {
  return (
    <section
      id="mechatronics"
      className="relative bg-[var(--cream-deep)] border-y border-[var(--border)] py-20 lg:py-28 overflow-hidden"
      style={{ scrollMarginTop: "70px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--charcoal) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <p className="label text-[var(--muted)] mb-4">The Convergence</p>
          <RevealLine className="mb-10" />
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16">
        <div className="max-w-[580px]">
          <FadeUp delay={0.05}>
            <p className="label mb-7" style={{ color: "var(--sage)" }}>
              One discipline, six expressions
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="font-display italic text-[var(--charcoal)] text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.1] tracking-[-0.01em] mb-8">
              Mechatronics
            </h2>
          </FadeUp>

          {/* Paragraph 1 — with drop cap */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-[var(--charcoal-light)] text-[1.05rem] leading-[1.9] mb-6"
          >
            <span
              className="font-display italic float-left leading-[0.8] mr-2.5 mt-1"
              style={{ fontSize: "3.6rem", color: "var(--sage)" }}
            >
              I
            </span>
            {PARAGRAPHS[0].map((c, i) => (
              <motion.span key={i} variants={clauseVariants} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={keywordStyle(c.color)}>
                {c.text}
              </motion.span>
            ))}
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-[var(--charcoal-light)] text-[1.05rem] leading-[1.9] mb-6"
          >
            {PARAGRAPHS[1].map((c, i) => (
              <motion.span key={i} variants={clauseVariants} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={keywordStyle(c.color)}>
                {c.text}
              </motion.span>
            ))}
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-[var(--charcoal-light)] text-[1.05rem] leading-[1.9]"
          >
            {PARAGRAPHS[2].map((c, i) => (
              <motion.span key={i} variants={clauseVariants} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={keywordStyle(c.color)}>
                {c.text}
              </motion.span>
            ))}
          </motion.p>

          {/* Payoff line — editorial bordered block */}
          <FadeUp delay={0.1}>
            <div className="mt-10 pl-6 lg:pl-8 py-1" style={{ borderLeft: "3px solid var(--sage)" }}>
              <p className="font-display italic text-[var(--charcoal)] text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">
                One discipline.{" "}
                <span style={{ color: "var(--sage)" }}>Six expressions.</span>
                <br className="hidden sm:block" /> This is mechatronics.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ── RIGHT PANEL — flow diagram + ghost letter ── */}
        <div className="relative hidden lg:block">
          {/* Ghost "M" watermark */}
          <div
            className="absolute -top-6 -right-4 font-display italic select-none pointer-events-none leading-none"
            style={{ fontSize: "13rem", color: "var(--charcoal)", opacity: 0.04 }}
          >
            M
          </div>

          <div className="sticky top-32">
            <p className="label text-[var(--muted)] mb-8">The Sequence</p>

            <motion.div
              variants={flowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              {/* Connecting vertical line */}
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="space-y-7">
                {FLOW.map((item) => {
                  const color = C[item.key];
                  return (
                    <motion.div
                      key={item.key}
                      variants={flowNodeVariants}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex items-center gap-3 pl-0"
                    >
                      <span
                        className="relative z-10 w-[11px] h-[11px] rounded-full flex-shrink-0 ring-4 ring-[var(--cream-deep)]"
                        style={{ backgroundColor: color }}
                      />
                      <div className="flex items-baseline gap-2">
                        <span className="text-[0.62rem] font-mono text-[var(--border-strong)]">
                          {SECTOR_NUMBERS[item.key]}
                        </span>
                        <span
                          className="font-display italic text-[1.05rem]"
                          style={{ color }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
