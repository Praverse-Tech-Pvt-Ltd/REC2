"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SECTOR_GRADIENTS, type SectorKey } from "@/lib/data";

type Props = {
  title: string;
  subtitle: string;
  sector: SectorKey;
  breadcrumb?: { label: string; href: string }[];
};

export default function SectorHero({ title, subtitle, sector, breadcrumb }: Props) {
  return (
    <section
      className={`bg-gradient-to-br ${SECTOR_GRADIENTS[sector]} pt-28 pb-16 px-4`}
    >
      <div className="max-w-5xl mx-auto">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-white/60 text-sm mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumb.map((b) => (
              <span key={b.href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={b.href} className="hover:text-white transition-colors capitalize">
                  {b.label}
                </Link>
              </span>
            ))}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
