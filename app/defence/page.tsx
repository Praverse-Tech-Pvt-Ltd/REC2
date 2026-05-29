import PageLayout from "@/components/PageLayout";

export default function DefencePage() {
  return (
    <PageLayout
      slug="defence"
      sector="defence"
      breadcrumb={[{ label: "Defence", href: "/defence" }]}
    />
  );
}
