"use client";

import { motion } from "framer-motion";
import { PEOPLE, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  personKey: string;
  sector: SectorKey;
  index?: number;
};

export default function TeamCard({ personKey, sector, index = 0 }: Props) {
  const person = PEOPLE[personKey];
  if (!person) return null;
  const color = SECTOR_COLORS[sector];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[var(--white)] border border-[var(--border)] p-5 flex items-start gap-4 hover:border-[var(--border-strong)] transition-all duration-200 group"
      style={{ borderRadius: "2px" }}
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-xs flex-shrink-0"
        style={{ backgroundColor: color + "cc" }}
      >
        {person.initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-display text-[var(--charcoal)] text-sm">{person.name}</p>
        <a
          href={`mailto:${person.email}`}
          className="text-xs text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors truncate block mt-0.5"
        >
          {person.email}
        </a>
        <span
          className="inline-block mt-2.5 label px-2.5 py-0.5 rounded-sm"
          style={{ backgroundColor: color + "12", color }}
        >
          {person.role}
        </span>
      </div>
    </motion.div>
  );
}
