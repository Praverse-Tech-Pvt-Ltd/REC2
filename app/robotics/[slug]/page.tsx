import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["flow-chemistry", "automated-reactors"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default function RoboticsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`robotics/${slug}`}
      sector="robotics"
      breadcrumb={[
        { label: "Robotics", href: "/robotics/flow-chemistry" },
        { label: slug.replace(/-/g, " "), href: `/robotics/${slug}` },
      ]}
    />
  );
}
