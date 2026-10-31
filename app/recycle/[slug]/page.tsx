import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const VALID_SLUGS = ["battery-recycling", "solar-recycling", "aswm", "nuclear-recycling"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return pageMetadata(`recycle/${params.slug}`);
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
