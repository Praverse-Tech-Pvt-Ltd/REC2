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
    <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-green-700 via-teal-600 to-green-600 p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-2xl font-bold mb-2">
            🌊 Hydrogen Festival by Rec 2 — Coming Soon
          </p>
          <p className="text-white/80 text-sm max-w-lg">
            A first-of-its-kind conference on Hydrogen + Hybrid energy futures. Bringing
            together scientists, investors, policy makers and industry leaders to shape
            the hydrogen economy.
          </p>
        </div>
        <a
          href="mailto:V@v-group.in?subject=Hydrogen Festival — Register Interest"
          className="flex-shrink-0 bg-white text-green-800 font-semibold px-6 py-3 rounded-full text-sm hover:bg-green-50 transition-colors shadow-md"
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
