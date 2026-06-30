import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const VALID_SLUGS = ["solar", "hydrogen", "hybrid", "h2-hybrid"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const titles: Record<string, string> = {
    solar:      "Solar Energy — REC 2",
    hydrogen:   "Hydrogen Energy — REC 2",
    hybrid:     "Hybrid Energy Systems — REC 2",
    "h2-hybrid":"H₂ Hybrid Systems — REC 2",
  };
  return { title: titles[params.slug] ?? "Energy — REC 2" };
}

export default function EnergyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`energy/${slug}`}
      sector="energy"
      breadcrumb={[
        { label: "Energy", href: "/energy/solar" },
        { label: slug.replace(/-/g, " "), href: `/energy/${slug}` },
      ]}
    />
  );
}
