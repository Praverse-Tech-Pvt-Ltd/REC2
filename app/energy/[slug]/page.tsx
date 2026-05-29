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

/* function HydrogenFestivalBanner() {
  return (
    <div
      className="relative overflow-hidden p-8 md:p-10 border border-[var(--sage)] bg-[var(--sage-pale)]"
      style={{ borderRadius: "2px", borderLeft: "4px solid var(--sage)" }}
    >
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 font-display italic select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(4rem,16vw,10rem)", color: "var(--sage)", opacity: 0.07 }}
      >
        H₂
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-xl">
          <p className="label mb-4" style={{ color: "var(--sage)" }}>
            Upcoming Event
          </p>
          <h3 className="font-display italic text-[var(--charcoal)] text-[1.6rem] md:text-[2rem] leading-tight mb-3">
            Hydrogen Festival by Rec 2{" "}
            <span className="ml-2 text-[0.75rem] not-italic font-medium bg-[var(--sage)] text-white px-3 py-1 align-middle" style={{ borderRadius: "2px" }}>
              Coming Soon
            </span>
          </h3>
          <p className="text-[var(--charcoal-light)] text-sm leading-relaxed">
            A first-of-its-kind conference on Hydrogen + Hybrid energy futures — bringing
            scientists, investors, policymakers and industry leaders to shape the
            hydrogen economy.
          </p>
        </div>
        <a
          href="mailto:V@v-group.in?subject=Hydrogen Festival — Register Interest"
          className="flex-shrink-0 bg-[var(--sage)] text-white font-body font-medium px-7 py-3 text-sm hover:bg-[var(--sage-dark)] transition-colors whitespace-nowrap"
          style={{ borderRadius: "2px" }}
        >
          Register Interest →
        </a>
      </div>
    </div>
  );
} */

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
      {/* {slug === "hydrogen-hybrid" && <HydrogenFestivalBanner />} */}
    </PageLayout>
  );
}
