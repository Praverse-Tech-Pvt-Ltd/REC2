"use client";

import { motion } from "framer-motion";
import { PEOPLE, type SectorKey } from "@/lib/data";

type Props = {
  personKey: string;
  sector: SectorKey;
  index?: number;
  /** Page-specific title, for people who hold a different role on this page. */
  roleOverride?: string;
};

export default function TeamCard({ personKey, index = 0, roleOverride }: Props) {
  const person = PEOPLE[personKey];
  if (!person) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-36px" }}
      transition={{ duration: 0.72, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[var(--cream)] border p-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.05em] mb-5"
        style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)" }}
      >
        {person.initials}
      </div>
      <div className="text-[16px] font-medium text-[var(--charcoal)] mb-1">{person.name}</div>
      <div className="label mb-3.5">{roleOverride ?? person.role}</div>
      {person.email && (
        <a href={`mailto:${person.email}`} className="text-[12px]" style={{ color: "var(--muted)" }}>
          {person.email}
        </a>
      )}
    </motion.div>
  );
}
