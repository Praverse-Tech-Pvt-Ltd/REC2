"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OrgChart from "@/components/OrgChart";
import {
  SECTOR_COLORS,
  SECTOR_DESCRIPTIONS,
  SECTOR_ICONS,
  type SectorKey,
} from "@/lib/data";

const SECTORS: { key: SectorKey; label: string; href: string }[] = [
  { key: "energy", label: "Energy", href: "/energy/hydrogen-hybrid" },
  { key: "sports", label: "Sports", href: "/sports/investments" },
  { key: "defence", label: "Defence", href: "/defence" },
  { key: "materials", label: "Materials", href: "/materials/metal-alloys" },
  { key: "chips", label: "Chips", href: "/chips/photonics" },
  { key: "robotics", label: "Robotics", href: "/robotics/flow-chemistry" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 75% 75%, #34d399 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
              Innovation Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight"
          >
            Rec 2
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/70 text-lg md:text-xl mb-4 font-light tracking-wide"
          >
            Renewable Energy · Carbon Credits · Innovation · Sustainable Future
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-white/50 text-sm md:text-base max-w-2xl mx-auto mb-10"
          >
            A diverse innovation platform focusing on sustainability, renewable energy,
            futuristic deep tech, and the future of sports investment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/energy/hydrogen-hybrid"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-semibold transition-colors"
            >
              ⚡ Explore Energy
            </Link>
            <Link
              href="/defence"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-sm font-semibold transition-colors"
            >
              🛡️ Defence Hub
            </Link>
            <Link
              href="/sports/investments"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-full text-sm font-semibold transition-colors"
            >
              🏆 Sports
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Platform
          </h2>
          <p className="text-gray-500 text-sm">Click any node to explore that sector</p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 py-8">
          <OrgChart />
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="max-w-3xl mx-auto px-4 pb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 leading-relaxed"
        >
          Rec 2 is a diverse innovation platform focusing on sustainability, renewable
          energy, futuristic deep tech, and the future of sports investment. From rare
          metals to photonics, hydrogen to biochips — Rec 2 bridges sustainable law,
          technology, and human progress.
        </motion.p>
      </section>

      {/* Sector Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Sectors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2 }}
            >
              <Link href={sector.href}>
                <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: SECTOR_COLORS[sector.key] }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ backgroundColor: SECTOR_COLORS[sector.key] + "18" }}
                      >
                        {SECTOR_ICONS[sector.key]}
                      </span>
                      <h3
                        className="font-bold text-lg"
                        style={{ color: SECTOR_COLORS[sector.key] }}
                      >
                        {sector.label}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {SECTOR_DESCRIPTIONS[sector.key]}
                    </p>
                    <span
                      className="inline-block mt-4 text-xs font-semibold group-hover:underline"
                      style={{ color: SECTOR_COLORS[sector.key] }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-[#1a3a5c] text-white font-bold px-5 py-2 rounded-full text-sm mb-4">
            Rec 2
          </span>
          <p className="text-gray-400 text-sm">
            Rec 2 © 2026 · Renewable Energy · Carbon Credits · Innovation
          </p>
        </div>
      </footer>
    </div>
  );
}
