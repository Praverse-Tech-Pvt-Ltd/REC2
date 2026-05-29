"use client";

/**
 * Key Applications — 21st.dev-inspired editorial layout.
 * Design rules (design-taste-frontend):
 *   • NO emoji — replaced with lucide-react icons
 *   • NO 3-col card grid — uses 2-col borderline list
 *   • Spring hover with x-shift for tactile feedback
 *   • Items reveal with staggered entrance (Framer Motion)
 */

import { motion } from "framer-motion";
import {
  Zap, Battery, Anchor, Factory, Globe, Plane, Sun, Home, Leaf,
  FlaskConical, Radio, Building2, RefreshCw, Thermometer, Snowflake,
  Wrench, TrendingUp, Shield, Rocket, Settings, Monitor, Cpu,
  Lightbulb, Eye, Lock, Target, Microscope, Pill, Heart, AlertTriangle,
  Bot, Flame, BarChart2, Droplets, Atom, Wind, Car, Gamepad2, Users,
  Magnet, Database, Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Maps data.ts icon strings → Lucide component
const ICON_MAP: Record<string, LucideIcon> = {
  "⚡": Zap,        "🔋": Battery,     "🚢": Anchor,      "🏭": Factory,
  "🌐": Globe,      "✈️": Plane,       "☀️": Sun,         "🏘️": Home,
  "🌾": Leaf,       "🔬": Microscope,  "📡": Radio,       "🏗️": Building2,
  "♻️": RefreshCw,  "🌡️": Thermometer, "❄️": Snowflake,   "🛠️": Wrench,
  "📈": TrendingUp, "🛡️": Shield,      "🚀": Rocket,      "⚙️": Settings,
  "🖥️": Monitor,"🧲": Magnet,     "💡": Lightbulb,  "🔭": Eye,
  "🔐": Lock,       "🎯": Target,      "🧬": Database,    "💊": Pill,
  "🫀": Heart,      "⚠️": AlertTriangle,"🌿": Leaf,       "🤖": Bot,
  "🔥": Flame,      "📊": BarChart2,   "💧": Droplets,    "⚛️": Atom,
  "⛵": Wind,        "🏎️": Car,         "🎮": Gamepad2,    "🤝": Users,
  "🌍": Globe,      "🌱": Leaf,        "🏟️": Building2,  "👟": Layers,
  "🔩": Wrench,     "♨️": Thermometer, "🧪": FlaskConical,"⚗️": FlaskConical,
  "🔄": RefreshCw,  "📦": Database,    "🏥": Cpu,
};

type Application = { icon: string; label: string };

type Props = {
  applications: Application[];
  sectorColor: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function ApplicationGrid({ applications, sectorColor }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-[var(--border)]"
    >
      {applications.map((app, i) => {
        const Icon = ICON_MAP[app.icon] ?? Zap;
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="group flex items-center gap-3.5 py-4 pr-4 border-b border-[var(--border)] cursor-default"
            style={{ borderLeft: `2px solid ${sectorColor}30` }}
          >
            {/* Icon chip */}
            <span
              className="ml-3 w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: `${sectorColor}12` }}
            >
              <Icon
                size={15}
                strokeWidth={1.6}
                style={{ color: sectorColor }}
              />
            </span>

            {/* Label */}
            <span className="text-[0.8375rem] font-medium text-[var(--charcoal)] leading-snug">
              {app.label}
            </span>

            {/* Arrow reveal on hover */}
            <span
              className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150 pr-1"
              style={{ color: sectorColor }}
            >
              →
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
