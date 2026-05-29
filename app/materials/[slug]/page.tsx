import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["metal-alloys", "rare-metals", "smr"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default function MaterialsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`materials/${slug}`}
      sector="materials"
      breadcrumb={[
        { label: "Materials", href: "/materials/metal-alloys" },
        { label: slug.replace(/-/g, " "), href: `/materials/${slug}` },
      ]}
    />
  );
}
