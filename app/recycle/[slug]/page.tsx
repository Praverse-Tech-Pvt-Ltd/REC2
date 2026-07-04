import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const VALID_SLUGS = ["battery-recycling", "solar-recycling", "aswm", "nuclear-recycling"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const titles: Record<string, string> = {
    "battery-recycling": "Battery Recycling — REC 2",
    "solar-recycling":   "Solar Recycling — REC 2",
    "aswm":              "Alibaugh Solid Waste Management — REC 2",
    "nuclear-recycling": "Nuclear Recycling — REC 2",
  };
  return { title: titles[params.slug] ?? "Recycle — REC 2" };
}

export default function RecyclePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`recycle/${slug}`}
      sector="recycle"
      breadcrumb={[
        { label: "Recycle", href: "/recycle/battery-recycling" },
        { label: slug.replace(/-/g, " "), href: `/recycle/${slug}` },
      ]}
    />
  );
}
