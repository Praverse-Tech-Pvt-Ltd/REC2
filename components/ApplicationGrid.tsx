"use client";

import { motion } from "framer-motion";

type Application = { icon: string; label: string };

type Props = {
  applications: Application[];
  sectorColor: string;
};

export default function ApplicationGrid({ applications, sectorColor }: Props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border"
      style={{ backgroundColor: "var(--border)", borderColor: "var(--border)" }}
    >
      {applications.map((app, i) => (
        <motion.a
          key={i}
          href="#"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-36px" }}
          transition={{ duration: 0.72, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
          className="app-link flex items-center justify-between px-6 py-7"
          style={{ backgroundColor: "var(--cream)" }}
          onClick={(e) => e.preventDefault()}
        >
          <span className="text-[14px] font-normal text-[var(--charcoal)]">{app.label}</span>
          <span className="text-[14px]" style={{ color: sectorColor }}>→</span>
        </motion.a>
      ))}
    </div>
  );
}
