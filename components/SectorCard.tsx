"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  image: string;
  alt: string;
  color: string;
  number: string;
  label: string;
  description: string;
  delay?: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Sector tile with a subtle magnetic tilt and a cursor-following colour spotlight. */
export default function SectorCard({ href, image, alt, color, number, label, description, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
    setSpot({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} transition={{ duration: 0.72, delay }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY }}
      >
        <Link href={href} className="sector-card group relative flex h-full min-h-[430px] flex-col overflow-hidden" style={{ backgroundColor: "var(--cream)" }}>
          <div
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, ${color}26, transparent 62%)` }}
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--cream-deep)]">
            <img
              src={image}
              alt={alt}
              className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-transparent" style={{ backgroundColor: "rgba(250,250,248,0.12)" }} />
            <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ backgroundColor: color }} />
          </div>
          <div className="relative z-20 flex flex-1 flex-col gap-4.5 p-7 sm:p-8">
            <span className="text-[9px] tracking-[0.16em] font-bold" style={{ color }}>{number}</span>
            <h3 className="font-display leading-[1.05]" style={{ fontSize: 42, fontWeight: 300, color: "var(--charcoal)" }}>{label}</h3>
            <p className="text-[13px] leading-[1.78] font-light flex-1" style={{ color: "var(--muted)" }}>{description}</p>
            <div className="text-[9px] tracking-[0.14em] uppercase font-bold" style={{ color }}>Explore →</div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
