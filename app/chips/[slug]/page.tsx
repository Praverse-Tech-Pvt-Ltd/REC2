import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["photonics", "biochips"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
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
