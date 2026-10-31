import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const VALID_SLUGS = ["solar", "hydrogen", "hybrid", "h2-hybrid"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return pageMetadata(`energy/${params.slug}`);
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
