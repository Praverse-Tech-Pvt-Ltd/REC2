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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex items-start gap-4"
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {person.initials}
      </div>
      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm truncate">{person.name}</p>
        <p className="text-xs text-gray-500 truncate mt-0.5">{person.email}</p>
        <span
          className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: color }}
        >
          {person.role}
        </span>
      </div>
    </motion.div>
  );
}
