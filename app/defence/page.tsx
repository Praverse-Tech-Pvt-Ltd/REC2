import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Defence — REC 2",
  description: "Defence is the connective tissue binding all REC 2 verticals.",
};

const APPLICATIONS = [
  { icon: "🛡️", label: "Armour & Structures" },
  { icon: "🔭", label: "Optical Sensing" },
  { icon: "🤖", label: "Autonomous Systems" },
  { icon: "📡", label: "Communications" },
  { icon: "⚗️", label: "Energetic Materials" },
  { icon: "🔐", label: "Secure Comms" },
];

export default function DefencePage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">

      {/* Hero */}
      <section className="relative bg-[var(--cream-deep)] overflow-hidden pt-28 pb-16 border-b border-[var(--border)]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--chips)]" />
        <div
          className="absolute right-[-0.04em] bottom-[-0.1em] font-display italic select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(7rem,26vw,20rem)", color: "var(--chips)", opacity: 0.06 }}
        >
          06
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="label mb-5" style={{ color: "var(--chips)" }}>06 — Defence</p>
          <h1 className="font-display italic text-[var(--charcoal)] text-[clamp(2rem,5.5vw,3.75rem)] leading-tight max-w-3xl mb-4">
            Defence
          </h1>
          <p className="text-[var(--charcoal-light)] text-base md:text-lg max-w-xl font-light leading-relaxed">
            The axis of innovation — connecting all REC 2 verticals
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">

        {/* Overview */}
        <div className="grid md:grid-cols-[180px_1fr] gap-10">
          <div className="pt-1">
            <p className="label">Overview</p>
            <div className="mt-4 h-px bg-[var(--border)]" />
          </div>
          <div className="pl-5 space-y-5" style={{ borderLeft: "2px solid #9c603820" }}>
            <p className="text-[var(--charcoal-light)] leading-[1.85] text-[0.9375rem]">
              Defence is the connective tissue binding all REC 2 verticals. The most
              demanding performance requirements in defence drive advanced materials,
              next-generation chips, and precision robotics — and the innovations that
              meet these requirements invariably find applications across civilian markets.
            </p>
            <p className="text-[var(--charcoal-light)] leading-[1.85] text-[0.9375rem]">
              Dual-use innovation is REC 2&apos;s strategic thesis: photonic chips for
              military sensing become medical imaging sensors; flow chemistry for
              propellants enables pharmaceutical manufacturing; armour alloys become
              aerospace structures. We engage at the prime contractor level, mid-tier
              systems integrator level, and through research partnerships with allied-nation
              defence laboratories.
            </p>
            <p className="text-[var(--charcoal-light)] leading-[1.85] text-[0.9375rem]">
              With NATO members committing to 2%+ GDP defence spending and procurement
              at a 30-year high, REC 2&apos;s integrated materials, chips and robotics
              capability positions us as a rare multi-domain partner in a crowded
              single-domain supplier landscape.
            </p>
          </div>
        </div>

        {/* Why REC 2 */}
        <div>
          <p className="label mb-5">Why REC 2 is investing here</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              "NATO members at 2%+ GDP defence — procurement at 30-year high. Dual-use generates dual revenue streams.",
              "Integrated materials + chips + robotics capability is rare — commands a significant premium over single-domain suppliers.",
              "Allied-nation supply chain mandates create captive demand for Western-sourced advanced materials and electronics.",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-[var(--sage-pale)] border border-[var(--border)] p-6"
                style={{ borderRadius: "2px", borderLeft: "3px solid #9c603850" }}
              >
                <p className="font-display italic text-2xl mb-3 leading-none" style={{ color: "#9c603850" }}>
                  0{i + 1}
                </p>
                <p className="text-sm text-[var(--charcoal-light)] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div>
          <p className="label mb-5">Key Applications</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {APPLICATIONS.map((app) => (
              <div
                key={app.label}
                className="bg-[var(--white)] border border-[var(--border)] p-4 flex items-center gap-3 hover:bg-[var(--cream-deep)] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <span className="text-lg flex-shrink-0">{app.icon}</span>
                <span className="text-[0.8125rem] font-medium text-[var(--charcoal)]">{app.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <p className="label mb-5">Team</p>
          <div className="h-px bg-[var(--border)] mb-8" />
          <div className="bg-[var(--white)] border border-[var(--border)] p-5 flex items-start gap-4 max-w-xs" style={{ borderRadius: "2px" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-xs flex-shrink-0" style={{ backgroundColor: "#9c6038cc" }}>
              VJ
            </div>
            <div>
              <p className="font-display text-[var(--charcoal)] text-sm">Vishal Jajodia</p>
              <a href="mailto:V@v-group.in" className="text-xs text-[var(--muted)] hover:text-[var(--charcoal)] transition-colors block mt-0.5">
                V@v-group.in
              </a>
              <span className="inline-block mt-2.5 label px-2.5 py-0.5 rounded-sm" style={{ backgroundColor: "#9c603812", color: "#9c6038" }}>
                Founder & Chairman
              </span>
            </div>
          </div>
        </div>

        {/* Related */}
        <div>
          <p className="label mb-5">Related Sectors</p>
          <div className="h-px bg-[var(--border)] mb-6" />
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Materials", href: "/materials/metal-alloys" },
              { label: "Chips", href: "/chips/photonics" },
              { label: "Robotics", href: "/robotics/flow-chemistry" },
            ].map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="text-[0.8125rem] font-medium px-5 py-2 border border-[#9c603850] text-[#9c6038] hover:bg-[#9c6038] hover:text-white hover:border-[#9c6038] transition-all duration-200 rounded-full"
              >
                {rel.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--charcoal)] mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <Link href="/" className="font-display italic text-white/80 text-lg">REC 2</Link>
          <p className="label text-white/30">© 2026 · Renewable Energy · Carbon Credits · Innovation · Sustainable Future</p>
        </div>
      </footer>
    </div>
  );
}
