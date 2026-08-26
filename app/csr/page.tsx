import type { Metadata } from "next";
import SectorHero from "@/components/SectorHero";
import SiteFooter from "@/components/SiteFooter";
import FadeUp from "@/components/FadeUp";
import TeamCard from "@/components/TeamCard";
import LovePawsCase from "@/components/lovepaws/LovePawsCase";
import { CSR_PAGE, SECTOR_COLORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "CSR — REC 2",
  description:
    "REC 2's corporate responsibility programme, carried by the Love Paws Foundation case for measurable stray animal management in India.",
};

/**
 * CSR does not use PageLayout: instead of the standard investment-thesis body
 * it carries the Love Paws Foundation case in full. Hero and closing furniture
 * stay identical to the sector pages so the page still reads as part of REC 2.
 */
export default function CSRPage() {
  const color = SECTOR_COLORS.csr;

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <div className="sticky top-16 z-40 h-[3px]" style={{ backgroundColor: color }} />

      <SectorHero
        title={CSR_PAGE.title}
        subtitle={CSR_PAGE.subtitle}
        sector="csr"
        breadcrumb={[
          { label: "CSR", href: "/csr" },
          { label: "Overview", href: "/csr" },
        ]}
      />

      {/* Overview — where REC 2's CSR position and Love Paws meet */}
      <section className="py-20 px-6 lg:px-[56px] border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[200px_1fr] gap-8 md:gap-20">
          <FadeUp className="md:sticky md:top-24 self-start">
            <p className="label mb-5">Overview</p>
            <div className="w-8 h-0.5" style={{ backgroundColor: color }} />
          </FadeUp>
          <div>
            {CSR_PAGE.overview.map((para, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p
                  className="text-[17px] leading-[1.88] font-light"
                  style={{ color: "var(--charcoal-light)", marginTop: i > 0 ? 28 : 0 }}
                >
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <LovePawsCase />

      {/* Team */}
      <section
        className="py-20 px-6 lg:px-[56px] border-t"
        style={{ backgroundColor: "var(--cream-deep)", borderColor: "var(--border)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p className="label mb-12">Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {CSR_PAGE.team.map((key, i) => (
              <TeamCard
                key={key}
                personKey={key}
                sector="csr"
                index={i}
                roleOverride={key === "pratham" ? "Technical Head" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
