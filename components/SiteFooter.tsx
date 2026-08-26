import Link from "next/link";

/**
 * The ticker + footer that closes every interior page. Extracted so pages that
 * do not use PageLayout (currently /csr) still end the same way.
 */

const TICKER_ITEMS = [
  ["Carbon Credits", "var(--energy)"], ["Innovation", "var(--recycle)"],
  ["Sustainable Future", "var(--materials)"], ["Deep Tech", "var(--chips)"],
  ["Hydrogen", "var(--robotics)"], ["Photonics", "var(--sports)"],
  ["Biochips", "var(--energy)"], ["Rare Metals", "var(--recycle)"],
  ["Automated Reactors", "var(--materials)"], ["Renewable Energy", "var(--chips)"],
  ["Flow Chemistry", "var(--robotics)"], ["Solar Systems", "var(--sports)"],
] as const;

const SECTORS = [
  { label: "Energy", href: "/energy/solar" },
  { label: "Recycle", href: "/recycle/battery-recycling" },
  { label: "Materials", href: "/materials/metal-alloys" },
  { label: "Chips", href: "/chips/photonics" },
  { label: "Robotics", href: "/robotics/flow-chemistry" },
  { label: "Sports", href: "/sports/investments" },
];

export default function SiteFooter() {
  return (
    <>
      {/* Ticker */}
      <section className="py-[30px] overflow-hidden border-y" style={{ backgroundColor: "var(--cream-deep)", borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 38s linear infinite" }}>
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center flex-shrink-0" aria-hidden={rep === 1}>
              {TICKER_ITEMS.map(([label, c], i) => (
                <span key={i} className="text-[10px] tracking-[0.18em] uppercase font-medium px-7" style={{ color: "var(--muted)" }}>
                  {label} <span style={{ color: c, fontSize: 12 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-[56px] pb-12" style={{ backgroundColor: "var(--cream-deep)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 lg:[grid-template-columns:1.6fr_1fr_1fr]">
          <div>
            <div className="font-display font-semibold mb-4" style={{ fontSize: 26, letterSpacing: "0.05em", color: "var(--charcoal)" }}>REC 2</div>
            <p className="text-[13px] leading-[1.8] font-light max-w-[260px]" style={{ color: "var(--muted)" }}>
              Renewable Energy · Carbon Credits · Innovation · Sustainable Future
            </p>
            <a href="mailto:V@v-group.in" className="inline-block mt-6 text-[12px] font-medium" style={{ color: "var(--charcoal)" }}>
              V@v-group.in
            </a>
          </div>
          <div>
            <p className="label mb-6">Sectors</p>
            <div className="flex flex-col gap-3.5">
              {SECTORS.map((s) => (
                <Link key={s.label} href={s.href} className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="label mb-6">Connect</p>
            <div className="flex flex-col gap-3.5">
              <Link href="/contact" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>Contact</Link>
              <Link href="/csr" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>CSR</Link>
              <Link href="/mechatronics" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>About</Link>
              <Link href="/" className="nlink text-[13px] font-light" style={{ color: "var(--muted)" }}>All Sectors</Link>
            </div>
          </div>
        </div>
        <div
          className="max-w-[1200px] mx-auto mt-[52px] pt-7 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="text-[10px]" style={{ color: "var(--faint)" }}>© 2026 REC 2. All rights reserved.</span>
          <span className="text-[10px]" style={{ color: "var(--hairline-faint)" }}>Renewable Energy · Carbon Credits · Innovation</span>
        </div>
      </footer>
    </>
  );
}
