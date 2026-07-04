"use client";

import { motion } from "framer-motion";

// Fixed layout positions (percent) so blobs stay spread out, not clumped
const POSITIONS = [
  { top: "8%", left: "6%" },
  { top: "62%", left: "2%" },
  { top: "18%", left: "82%" },
  { top: "70%", left: "78%" },
  { top: "40%", left: "38%" },
  { top: "4%", left: "56%" },
];

const SIZES = ["clamp(220px, 26vw, 420px)", "clamp(180px, 20vw, 340px)", "clamp(260px, 30vw, 480px)"];

type Props = {
  colors: string[];
  /** How many blobs to render. Defaults to 6 for a full rainbow, or 4 for a single-color pass. */
  count?: number;
  grain?: boolean;
};

/**
 * Faint grain texture + slowly drifting blurred color blobs behind a section.
 * Pass every sector color for a multi-sector page (home, Mechatronics), or a
 * single sector color for a themed detail-page hero — same mechanism throughout.
 */
export default function AmbientBackground({ colors, count, grain = true }: Props) {
  const n = count ?? (colors.length > 1 ? colors.length : 4);
  const blobs = Array.from({ length: n }, (_, i) => colors[i % colors.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: POSITIONS[i % POSITIONS.length].top,
            left: POSITIONS[i % POSITIONS.length].left,
            width: SIZES[i % SIZES.length],
            height: SIZES[i % SIZES.length],
            backgroundColor: c,
            opacity: colors.length > 1 ? 0.05 : 0.045,
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, 26, -18, 0],
            y: [0, -22, 16, 0],
          }}
          transition={{
            duration: 22 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {grain && (
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.35,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      )}
    </div>
  );
}
