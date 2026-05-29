"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  delay?: number;
  className?: string;
  color?: string;
};

export default function RevealLine({ delay = 0, className, color }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-px origin-left"
        style={{ backgroundColor: color ?? "var(--border)" }}
      />
    </div>
  );
}
