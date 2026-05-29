import PageLayout from "@/components/PageLayout";
import SportsInitiatives from "@/components/SportsInitiatives";
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
    <div>
      <p className="label text-[var(--muted)] mb-6">Partners &amp; Associates</p>
      <div className="h-px bg-[var(--border)] mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="bg-white border border-[var(--border)] rounded-xl p-4 flex items-start gap-3 hover:border-[var(--border-strong)] hover:shadow-sm transition-all"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-semibold text-xs flex-shrink-0"
              style={{ backgroundColor: p.color }}
            >
              {p.name.charAt(0)}
            </div>
            <div>
              <p className="font-display font-semibold text-[var(--navy)] text-sm leading-tight">{p.name}</p>
              <p className="text-[0.7rem] text-[var(--muted)] mt-0.5">{p.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
      {slug === "investments" && (
        <>
          <SportsInitiatives />
          <PartnersSection />
        </>
      )}
    </PageLayout>
  );
}
