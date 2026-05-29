import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

const VALID_SLUGS = [
  "hydrogen-hybrid",
  "solar",
  "renewable-solar",
  "battery-recycling",
  "recycling",
];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

function HydrogenFestivalBanner() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden grain-bg p-8 md:p-10 text-white"
      style={{ background: "linear-gradient(135deg, #1b5e20 0%, #00695c 60%, #004d40 100%)" }}
    >
      {/* Ghost wave text */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.06] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(5rem,18vw,12rem)" }}
      >
        H₂
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-xl">
          <p className="label mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Upcoming Event
          </p>
          <h3 className="font-display font-bold text-[1.6rem] md:text-[2rem] leading-tight tracking-tight mb-3">
            Hydrogen Festival by Rec 2
            <span className="ml-3 text-[0.85rem] font-medium bg-white/15 px-3 py-1 rounded-full align-middle">
              Coming Soon
            </span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            A first-of-its-kind conference on Hydrogen + Hybrid energy futures — bringing
            scientists, investors, policymakers and industry leaders to shape the
            hydrogen economy.
          </p>
        </div>
        <a
          href="mailto:V@v-group.in?subject=Hydrogen Festival — Register Interest"
          className="flex-shrink-0 bg-white text-green-900 font-display font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-green-50 transition-colors whitespace-nowrap"
        >
          Register Interest →
        </a>
      </div>
    </div>
  );
}

export default function EnergyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`energy/${slug}`}
      sector="energy"
      breadcrumb={[
        { label: "Energy", href: "/energy/hydrogen-hybrid" },
        { label: slug.replace(/-/g, " "), href: `/energy/${slug}` },
      ]}
    >
      {slug === "hydrogen-hybrid" && <HydrogenFestivalBanner />}
    </PageLayout>
  );
}
