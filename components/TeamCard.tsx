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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[var(--border)] rounded-xl p-5 flex items-start gap-4 hover:border-[var(--border-strong)] hover:shadow-md transition-all duration-200"
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-semibold text-xs flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {person.initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-[var(--navy)] text-sm">{person.name}</p>
        <a
          href={`mailto:${person.email}`}
          className="text-xs text-[var(--muted)] hover:text-[var(--navy)] transition-colors truncate block mt-0.5"
        >
          {person.email}
        </a>
        <span
          className="inline-block mt-2.5 text-[0.65rem] font-medium px-2.5 py-0.5 rounded-full"
          style={{ backgroundColor: color + "15", color }}
        >
          {person.role}
        </span>
      </div>
    </motion.div>
  );
}
