"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Node = {
  label: string;
  sub?: string;
  color: string;
  bg: string;
  href: string;
  icon: string;
};

const REC2_NODE = { label: "Rec 2", color: "#ffffff", bg: "#1a3a5c", href: "/" };

const TOP_NODES: Node[] = [
  { label: "Energy", icon: "⚡", color: "#ffffff", bg: "#2e7d32", href: "/energy/hydrogen-hybrid" },
  { label: "Sports", icon: "🏆", color: "#ffffff", bg: "#1565c0", href: "/sports/investments" },
];

const CENTRE_NODE: Node = {
  label: "Defence", icon: "🛡️", color: "#ffffff", bg: "#f57c00", href: "/defence",
};

const BOTTOM_NODES: Node[] = [
  { label: "Materials", icon: "🧪", color: "#ffffff", bg: "#6a1b9a", href: "/materials/metal-alloys" },
  { label: "Chips", icon: "💡", color: "#ffffff", bg: "#e65100", href: "/chips/photonics" },
  { label: "Robotics", icon: "🤖", color: "#ffffff", bg: "#00695c", href: "/robotics/flow-chemistry" },
];

const LEAF_NODES: Record<string, { label: string; href: string }[]> = {
  Energy: [
    { label: "Hydrogen", href: "/energy/hydrogen-hybrid" },
    { label: "Solar", href: "/energy/solar" },
  ],
  Sports: [
    { label: "Investments", href: "/sports/investments" },
    { label: "Partnerships", href: "/sports/partnerships" },
  ],
  Materials: [
    { label: "Metal Alloys", href: "/materials/metal-alloys" },
    { label: "Rare Metals", href: "/materials/rare-metals" },
    { label: "SMR", href: "/materials/smr" },
  ],
  Chips: [
    { label: "Photonics", href: "/chips/photonics" },
    { label: "Biochips", href: "/chips/biochips" },
  ],
  Robotics: [
    { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
    { label: "Auto Reactors", href: "/robotics/automated-reactors" },
  ],
};

function OrgNode({
  node,
  size = "md",
  delay = 0,
}: {
  node: Node | typeof REC2_NODE;
  size?: "lg" | "md" | "sm";
  delay?: number;
}) {
  const router = useRouter();
  const sizeClasses = {
    lg: "px-8 py-4 text-lg font-bold rounded-2xl min-w-[140px]",
    md: "px-6 py-3 text-sm font-semibold rounded-xl min-w-[110px]",
    sm: "px-3 py-1.5 text-xs font-medium rounded-lg",
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => "href" in node && router.push(node.href)}
      className={`${sizeClasses[size]} text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
      style={{ backgroundColor: node.bg, color: node.color }}
    >
      {"icon" in node && <span className="mr-1.5">{(node as Node).icon}</span>}
      {node.label}
    </motion.button>
  );
}

function LeafChip({ label, href, color }: { label: string; href: string; color: string }) {
  const router = useRouter();
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => router.push(href)}
      className="px-3 py-1.5 text-xs font-medium rounded-lg border-2 cursor-pointer transition-all hover:text-white"
      style={{ borderColor: color, color }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = color;
        (e.currentTarget as HTMLButtonElement).style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color = color;
      }}
    >
      {label}
    </motion.button>
  );
}


export default function OrgChart() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[700px] max-w-4xl mx-auto px-4">
        {/* Row 1: Rec 2 */}
        <div className="flex justify-center">
          <OrgNode node={REC2_NODE} size="lg" delay={0} />
        </div>

        {/* Row 2: Top connectors */}
        <div className="flex justify-between items-start mt-0 relative">
          {/* Left branch to Energy */}
          <div className="flex-1 flex justify-start pl-8">
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-gray-300" />
              <OrgNode node={TOP_NODES[0]} size="md" delay={0.1} />
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex gap-2 flex-wrap justify-center">
                {LEAF_NODES["Energy"].map((l) => (
                  <LeafChip key={l.label} label={l.label} href={l.href} color="#2e7d32" />
                ))}
              </div>
            </div>
          </div>

          {/* Centre branch to Defence */}
          <div className="flex flex-col items-center">
            <div className="h-8 w-px bg-gray-300" />
            <OrgNode node={CENTRE_NODE} size="md" delay={0.2} />
          </div>

          {/* Right branch to Sports */}
          <div className="flex-1 flex justify-end pr-8">
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-gray-300" />
              <OrgNode node={TOP_NODES[1]} size="md" delay={0.1} />
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex gap-2 flex-wrap justify-center">
                {LEAF_NODES["Sports"].map((l) => (
                  <LeafChip key={l.label} label={l.label} href={l.href} color="#1565c0" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Bottom nodes from Defence */}
        <div className="flex justify-center mt-2">
          <div className="flex flex-col items-center">
            <div className="h-8 w-px bg-gray-300 ml-0" />
            {/* horizontal bar */}
            <div className="flex items-start gap-16">
              {BOTTOM_NODES.map((node, i) => (
                <div key={node.label} className="flex flex-col items-center">
                  <div className="h-6 w-px bg-gray-300" />
                  <OrgNode node={node} size="md" delay={0.3 + i * 0.1} />
                  <div className="h-4 w-px bg-gray-300" />
                  <div className="flex flex-col gap-1.5 items-center">
                    {LEAF_NODES[node.label]?.map((l) => (
                      <LeafChip
                        key={l.label}
                        label={l.label}
                        href={l.href}
                        color={node.bg}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
