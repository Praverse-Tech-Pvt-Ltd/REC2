import PageLayout from "@/components/PageLayout";
import SportsInitiatives from "@/components/SportsInitiatives";
import { notFound } from "next/navigation";

const VALID_SLUGS = ["investments", "partnerships"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

const PARTNER_GROUPS = [
  {
    category: "Sports Platforms",
    partners: [
      { name: "SailGP",     sub: "French Team"       },
      { name: "E1 Series",  sub: "Electric Racing"   },
      { name: "Extreme H",  sub: "Hydrogen Racing"   },
    ],
  },
  {
    category: "Corporate Partners",
    partners: [
      { name: "Oracle",   sub: "Technology Partner"  },
      { name: "Accor",    sub: "Hospitality Partner" },
      { name: "L'Oréal",  sub: "Brand Partner"       },
    ],
  },
  {
    category: "Strategic",
    partners: [
      { name: "Leyton",         sub: "Innovation Partner" },
      { name: "Kylian Mbappé",  sub: "Sports Ambassador"  },
      { name: "PIF",            sub: "Investment Partner" },
    ],
  },
];

function PartnerRow({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="group flex items-center gap-4 px-4 py-3 -mx-4 rounded-lg transition-colors duration-150 hover:bg-[var(--cream-deep)] cursor-default">
      {/* Large italic serif monogram */}
      <span
        className="font-display italic text-4xl leading-none select-none w-9 text-center flex-shrink-0 transition-colors duration-150"
        style={{ color: "var(--border-strong)" }}
        aria-hidden="true"
      >
        <span className="group-hover:text-[var(--sports)] transition-colors duration-150">
          {name.charAt(0)}
        </span>
      </span>

      <div className="flex-1 min-w-0">
        <p className="font-display text-sm leading-tight text-[var(--charcoal)] group-hover:text-[var(--charcoal-mid)] truncate">
          {name}
        </p>
        <p className="text-[0.68rem] text-[var(--muted)] mt-0.5 font-body tracking-wide uppercase">
          {sub}
        </p>
      </div>

      {/* Subtle right-arrow on hover */}
      <span
        className="text-[var(--border-strong)] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0"
        aria-hidden="true"
      >
        →
      </span>
    </div>
  );
}

function PartnersSection() {
  const total = PARTNER_GROUPS.reduce((sum, g) => sum + g.partners.length, 0);

  return (
    <div className="mt-16">
      {/* Section header */}
      <div className="flex items-baseline justify-between mb-3">
        <p className="label text-[var(--muted)]">Partners &amp; Associates</p>
        <span className="text-[0.68rem] font-body text-[var(--border-strong)] tabular-nums">
          {total} entities
        </span>
      </div>
      <div className="h-px bg-[var(--border)]" />

      {/* Category groups */}
      <div className="mt-6 space-y-0">
        {PARTNER_GROUPS.map((group, gi) => (
          <div key={group.category}>
            {/* Category label row */}
            <div className="flex items-center gap-3 py-3">
              <span className="text-[0.65rem] font-body font-medium uppercase tracking-[0.12em] text-[var(--muted)] whitespace-nowrap">
                {group.category}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            {/* Partner rows — 3-col grid on sm+, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-x-2 mb-2">
              {group.partners.map((p) => (
                <PartnerRow key={p.name} name={p.name} sub={p.sub} />
              ))}
            </div>

            {/* Divider between groups (not after last) */}
            {gi < PARTNER_GROUPS.length - 1 && (
              <div className="h-px bg-[var(--border)] mt-2 mb-1" />
            )}
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
