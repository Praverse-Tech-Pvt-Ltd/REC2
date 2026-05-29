import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["investments", "partnerships"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

const PARTNERS = [
  { name: "SailGP", sub: "French Team", color: "#1565c0" },
  { name: "E1 Series", sub: "Electric Racing", color: "#0288d1" },
  { name: "Extreme H", sub: "Hydrogen Racing", color: "#2e7d32" },
  { name: "Oracle", sub: "Technology Partner", color: "#c62828" },
  { name: "Accor", sub: "Hospitality Partner", color: "#6a1b9a" },
  { name: "L'Oréal", sub: "Brand Partner", color: "#e65100" },
  { name: "Leyton", sub: "Innovation Partner", color: "#00695c" },
  { name: "Kylian Mbappé", sub: "Sports Ambassador", color: "#1565c0" },
  { name: "PIF", sub: "Investment Partner", color: "#1a3a5c" },
];

function PartnersSection() {
  return (
    <section className="mt-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Partners & Associates</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-3"
              style={{ backgroundColor: p.color }}
            >
              {p.name.charAt(0)}
            </div>
            <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SportsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!VALID_SLUGS.includes(slug)) notFound();

  return (
    <PageLayout
      slug={`sports/${slug}`}
      sector="sports"
      breadcrumb={[
        { label: "Sports", href: "/sports/investments" },
        { label: slug, href: `/sports/${slug}` },
      ]}
    >
      {slug === "investments" && <PartnersSection />}
    </PageLayout>
  );
}
