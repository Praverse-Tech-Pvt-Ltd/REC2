"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SECTOR_COLORS, type SectorKey } from "@/lib/data";

type NodeDef = {
  key: SectorKey;
  label: string;
  href: string;
  subs: { label: string; href: string }[];
};

const NODES: NodeDef[] = [
  {
    key: "energy",
    label: "Energy",
    href: "/energy/hydrogen-hybrid",
    subs: [
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
      { label: "Solar", href: "/energy/solar" },
      { label: "Renewable Solar", href: "/energy/renewable-solar" },
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
      { label: "Recycling", href: "/energy/recycling" },
    ],
  },
  {
    key: "materials",
    label: "Materials",
    href: "/materials/metal-alloys",
    subs: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "SMR", href: "/materials/smr" },
    ],
  },
  {
    key: "chips",
    label: "Chips",
    href: "/chips/photonics",
    subs: [
      { label: "Photonics", href: "/chips/photonics" },
      { label: "Biochips", href: "/chips/biochips" },
    ],
  },
  {
    key: "robotics",
    label: "Robotics",
    href: "/robotics/flow-chemistry",
    subs: [
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
      { label: "Auto Reactors", href: "/robotics/automated-reactors" },
    ],
  },
  {
    key: "sports",
    label: "Sports",
    href: "/sports/investments",
    subs: [
      { label: "Investments", href: "/sports/investments" },
      { label: "Partnerships", href: "/sports/partnerships" },
    ],
  },
];

export default function OrgChart() {
  const router = useRouter();

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[640px] px-6 py-8">

        {/* Root node */}
        <div className="flex justify-center mb-0">
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => router.push("/")}
            className="font-display italic text-sm bg-[var(--charcoal)] text-white px-8 py-2.5 hover:bg-[var(--charcoal-mid)] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            REC 2
          </motion.button>
        </div>

        {/* Vertical stem */}
        <div className="flex justify-center">
          <div className="w-px h-7 bg-[var(--border-strong)]" />
        </div>

        {/* Horizontal connector bar */}
        <div className="relative flex justify-center mb-0">
          <div
            className="absolute top-0 h-px bg-[var(--border-strong)]"
            style={{ left: "10%", right: "10%" }}
          />
        </div>

        {/* Sector columns */}
        <div className="grid grid-cols-5 gap-3">
          {NODES.map((node, i) => {
            const color = SECTOR_COLORS[node.key];
            return (
              <motion.div
                key={node.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.15, duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Drop line */}
                <div className="w-px h-7 bg-[var(--border-strong)]" />

                {/* Sector pill */}
                <button
                  onClick={() => router.push(node.href)}
                  className="text-white text-[0.75rem] font-medium px-3 py-2 w-full text-center hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: color, borderRadius: "2px" }}
                >
                  {node.label}
                </button>

                {/* Sub-links */}
                <div className="w-px h-3 bg-[var(--border)]" />
                <div className="flex flex-col gap-1 items-center w-full">
                  {node.subs.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => router.push(sub.href)}
                      className="text-[0.65rem] w-full text-center px-2 py-1.5 border transition-all"
                      style={{ borderColor: color + "35", color: "var(--muted)", borderRadius: "2px" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = color + "10";
                        (e.currentTarget as HTMLElement).style.color = color;
                        (e.currentTarget as HTMLElement).style.borderColor = color + "55";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "";
                        (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                        (e.currentTarget as HTMLElement).style.borderColor = color + "35";
                      }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
