import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const VALID_SLUGS = ["photonics", "biochips"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return pageMetadata(`chips/${params.slug}`);
}

export default function ChipsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`chips/${slug}`}
      sector="chips"
      breadcrumb={[
        { label: "Chips", href: "/chips/photonics" },
        { label: slug, href: `/chips/${slug}` },
      ]}
    />
  );
}
