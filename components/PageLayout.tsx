"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectorHero from "./SectorHero";
import TeamCard from "./TeamCard";
import { PAGES, SECTOR_COLORS, type SectorKey } from "@/lib/data";

type Props = {
  slug: string;
  sector: SectorKey;
  breadcrumb: { label: string; href: string }[];
  children?: React.ReactNode;
};

export default function PageLayout({ slug, sector, breadcrumb, children }: Props) {
  const page = PAGES[slug];
  if (!page) return <div className="pt-20 text-center p-8">Page not found</div>;

  const color = SECTOR_COLORS[sector];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <SectorHero
        title={page.title}
        subtitle={page.subtitle}
        sector={sector}
        breadcrumb={breadcrumb}
      />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Special children (e.g. hydrogen festival banner) */}
        {children}

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
          <div className="space-y-4">
            {page.overview.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Why Rec 2 */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Rec 2 is investing here
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {page.whyRec2.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border-l-4 shadow-sm"
                style={{ borderColor: color }}
              >
                <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Applications */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Applications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {page.applications.map((app, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-2">{app.icon}</span>
                <span className="text-sm font-medium text-gray-800">{app.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.team.map((key, i) => (
              <TeamCard key={key} personKey={key} sector={sector} index={i} />
            ))}
          </div>
        </motion.section>

        {/* Related Sectors */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Sectors</h2>
          <div className="flex flex-wrap gap-3">
            {page.related.map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all hover:text-white"
                style={{ borderColor: color, color }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = color;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = color;
                }}
              >
                {rel.label}
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
