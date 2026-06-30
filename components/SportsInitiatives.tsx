"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./FadeUp";
import RevealLine from "./RevealLine";

/* ─────────────────────────────────────────────────────────────────────────────
   ACCENT COLOURS
───────────────────────────────────────────────────────────────────────────── */
const C = {
  sailgp:   { accent: "#0A1A3A", gold: "#C9A84C" },
  e1:       { accent: "#0057FF", sub:  "#00C2FF" },
  extremeh: { accent: "#1a7a3a", gold: "#00C853" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="label font-body text-[var(--muted)] mt-7 mb-2.5">{children}</p>;
}

function Divider() {
  return <div className="h-px bg-[var(--border)] mt-1 mb-0" />;
}

function StatPill({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 font-body text-[0.7rem] font-medium border"
      style={{
        borderRadius: "2px",
        borderColor: accent + "40",
        color: accent,
        backgroundColor: accent + "0d",
      }}
    >
      {label}
    </span>
  );
}

function BulletItem({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-2 font-body text-[0.825rem] text-[var(--charcoal-light)] leading-relaxed">
      <span className="flex-shrink-0 mt-[3px] text-[0.55rem]" style={{ color }}>◆</span>
      <span>{text}</span>
    </li>
  );
}

/* Logo cell: <img> with hidden <span> fallback that shows on error */
type LogoEntry = {
  name: string;
  src?: string;
  alt?: string;
  badgeColor?: string;
  role?: string;
  size?: "normal" | "lg";
  removeBg?: boolean;
};

function LogoCell({
  name,
  src,
  alt,
  role,
  size = "normal",
}: LogoEntry & { src: string }) {
  const [failed, setFailed] = useState(false);

  // Mobile/tablet: fill width, cap height — logo always fills its cell
  // Desktop (md+): fixed height, auto width — unchanged from before
  // w-full + max-h at every breakpoint: logo always fills cell width,
  // aspect ratio preserved by object-contain, never overflows the card.
  const imgClass = size === "lg"
    ? "w-full h-auto max-h-[48px] sm:max-h-[54px] md:max-h-[62px] lg:max-h-[70px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
    : "w-full h-auto max-h-[34px] sm:max-h-[38px] md:max-h-[44px] lg:max-h-[50px] object-contain grayscale hover:grayscale-0 transition-all duration-300";

  if (failed) return null;

  return (
    <div
      className="flex flex-col items-center justify-between gap-1.5 border border-[var(--border)] bg-white px-2.5 py-3 sm:px-3 sm:py-3"
      style={{ borderRadius: "2px", minHeight: size === "lg" ? "76px" : "62px" }}
    >
      <div className="flex items-center justify-center flex-1 w-full px-1">
        <img
          src={src}
          alt={alt ?? name}
          onError={() => setFailed(true)}
          className={imgClass}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      {role && (
        <span className="font-body text-[0.55rem] sm:text-[0.6rem] text-[var(--muted)] text-center leading-tight block w-full line-clamp-2">
          {role}
        </span>
      )}
    </div>
  );
}

function PartnerAssetBlock({
  logos,
  columns = "lg:grid-cols-6",
}: {
  logos: LogoEntry[];
  columns?: string;
}) {
  const available = logos.filter((logo): logo is LogoEntry & { src: string } => Boolean(logo.src));
  const pending = logos.filter((logo) => !logo.src);

  return (
    <div className="space-y-4">
      {available.length > 0 && (
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${columns} gap-2`}>
          {available.map((logo) => <LogoCell key={logo.name} {...logo} />)}
        </div>
      )}

      {pending.length > 0 && (
        <div className="border-y border-[var(--border)] divide-y divide-[var(--border)]">
          {pending.map((logo) => (
            <div key={logo.name} className="py-3">
              <div className="min-w-0">
                <p className="font-body text-[0.78rem] font-semibold text-[var(--charcoal)] leading-tight">
                  {logo.name}
                </p>
                {logo.role && (
                  <p className="font-body text-[0.66rem] text-[var(--muted)] leading-tight mt-1">
                    {logo.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* E1 team owner avatar card */
function OwnerCard({
  initials,
  team,
  owner,
  champion,
  accent,
}: {
  initials: string;
  team: string;
  owner: string;
  champion?: boolean;
  accent: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 border border-[var(--border)] bg-white px-3 py-2.5"
      style={{ borderRadius: "2px", borderLeft: champion ? `3px solid ${accent}` : undefined }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-body text-white text-[0.65rem] font-bold"
        style={{ backgroundColor: accent }}
      >
        {initials}
      </div>
      <div className="min-w-0">
        <p className="font-body text-[0.72rem] font-semibold text-[var(--charcoal)] leading-tight truncate">
          {team}
          {champion && (
            <span className="ml-1.5 font-body text-[0.58rem] font-medium px-1.5 py-0.5 text-white" style={{ backgroundColor: accent, borderRadius: "2px" }}>
              Champion
            </span>
          )}
        </p>
        <p className="font-body text-[0.68rem] text-[var(--muted)] leading-tight mt-0.5">{owner}</p>
      </div>
    </div>
  );
}

/* Numbered format card (SailGP race format) */
function FormatCard({
  num,
  title,
  desc,
  accent,
  gold,
}: {
  num: string;
  title: string;
  desc: string;
  accent: string;
  gold: string;
}) {
  return (
    <div
      className="bg-[var(--cream)] border border-[var(--border)] p-4"
      style={{ borderRadius: "2px", borderLeft: `3px solid ${gold}40` }}
    >
      <p className="font-display italic text-[1.5rem] leading-none mb-2" style={{ color: accent + "30" }}>
        {num}
      </p>
      <p className="font-body text-[0.8125rem] font-semibold text-[var(--charcoal)] mb-1">{title}</p>
      <p className="font-body text-[0.775rem] text-[var(--charcoal-light)] leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SAILGP PANEL
───────────────────────────────────────────────────────────────────────────── */
function SailGPPanel() {
  const { accent, gold } = C.sailgp;

  const stats = [
    "Speed: >100 km/h",
    "Prize Fund: $12M USD",
    "Season Races: 13",
    "Nations: 12 Teams",
    "2025 Season: Nov 2024 – Nov 2025",
    "Venues: Geneva · Saint-Tropez · Sydney · Sassnitz · Dubai · Abu Dhabi",
  ];

  const format = [
    { num: "01", title: "Two Day Events", desc: "Multiple short, high-intensity races packed into a spectacular two-day festival format." },
    { num: "02", title: "Iconic Venues",  desc: "Races at world-famous waterfront locations — from Sydney Harbour to the French Riviera." },
    { num: "03", title: "Close to Shore", desc: "World-class athletes and cutting-edge technology competing metres from the crowd." },
    { num: "04", title: "High Speed",     desc: "Identical hydrofoiling F50 catamarans flying above the water at over 100 km/h." },
  ];

  const logos = [
    { name: "SailGP",                        src: "/SailGP_logo.jpg",                        alt: "SailGP",              role: "Championship" },
    { name: "Oracle",                         src: "/Oracle-Logo.png",                        alt: "Oracle",              role: "Technology Partner", size: "lg" as const },
    { name: "Accor / ALL",                    src: "/Accor_logo.png",                         alt: "Accor",               role: "Title Sponsor",      size: "lg" as const },
    { name: "L'Oréal Groupe",                 src: "/L%27Or%C3%A9al_logo.png",               alt: "L'Oréal",             role: "Official Sponsor",   size: "lg" as const },
    { name: "DS Automobiles",                 src: "/DS_Automobiles_logo.png",                alt: "DS Automobiles",      role: "Title Partner",      size: "lg" as const, badgeColor: "#1e2a5e" },
    { name: "Leyton",                         src: "/leyton-logo.png",                        alt: "Leyton",              role: "Official Sponsor",   size: "lg" as const, badgeColor: "#003f87" },
    { name: "K-Way",                          src: "/K-Way_logo.png",                         alt: "K-Way",               role: "Official Partner",   size: "lg" as const, badgeColor: "#cc0000", removeBg: true as const },
    { name: "Ares Management",                src: "/Ares_Management_logo.png",               alt: "Ares Management",     role: "Minority Investor",  size: "lg" as const, badgeColor: "#1a1a1a" },
    { name: "Coalition Capital (K. Mbappé)",  src: "/Kylian%20Mbapp%C3%A9.png",              alt: "Coalition Capital",   role: "Investor",           size: "lg" as const, badgeColor: "#0a1a3a" },
    { name: "Sportsology Capital Partners",   src: "/Sportsology%20Capital%20Partners.png",  alt: "Sportsology Capital", role: "Investor",           size: "lg" as const, badgeColor: "#2a2a2a" },
    { name: "SWATI Spentose",                 src: "/SWATI%20Spentose.png",                   alt: "SWATI Spentose",      role: "Strategic Investor", size: "lg" as const, badgeColor: "#3a6a9c" },
  ];

  const sustainability = [
    { n: "01", text: "Blue Impact Program — focus on coastal regeneration and marine ecosystem restoration." },
    { n: "02", text: "Carbon Offset — over 90% reduction in carbon emissions vs conventional offshore racing." },
    { n: "03", text: "Marine Ecosystems — dedicated coastal regeneration programme at every race location." },
    { n: "04", text: "Marine Education — ocean awareness and community engagement at every host city." },
  ];
  const extras = [
    "Committed to running all race operations on clean energy by 2025 (Powered by Nature™)",
    "Oracle OCI enables remote broadcast operations — significantly reducing travel to competitions",
  ];

  return (
    <div>
      {/* Hero line */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-1">
        <div className="flex-1">
          <p className="label mb-1" style={{ color: accent }}>SailGP — France Team · Investor &amp; Stakeholder</p>
          <h3 className="font-display italic text-[1.75rem] text-[var(--charcoal)] leading-tight">
            Racing Powered by Nature
          </h3>
        </div>
        <a
          href="https://sailgp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 self-start sm:self-center text-[0.75rem] font-medium px-5 py-2 border transition-all duration-200 hover:text-white"
          style={{ borderColor: accent + "60", color: accent, borderRadius: "2px" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
        >
          SailGP.com →
        </a>
      </div>

      <Divider />

      {/* Description */}
      <SectionLabel>About the Championship</SectionLabel>
      <p className="text-[0.875rem] text-[var(--charcoal-light)] leading-[1.8]">
        SailGP is the world&apos;s most exciting sail racing championship. National teams race identical
        F50 hydrofoiling catamarans at iconic waterfront venues worldwide at speeds exceeding
        100&nbsp;km/h. Founded in 2018 by <strong>Larry Ellison</strong> (Oracle) and
        <strong> Sir Russell Coutts</strong>. The France team is operated by K-Challenge, led by
        French Olympic sailor <strong>Quentin Delapierre</strong>.
      </p>

      {/* Stat pills */}
      <SectionLabel>Key Statistics</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {stats.map((s) => <StatPill key={s} label={s} accent={accent} />)}
      </div>

      {/* Race format */}
      <SectionLabel>Race Format</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {format.map((f) => <FormatCard key={f.num} {...f} accent={accent} gold={gold} />)}
      </div>

      {/* Partners */}
      <SectionLabel>Sponsors, Partners &amp; Investors</SectionLabel>
      <PartnerAssetBlock logos={logos} />

      {/* Sustainability */}
      <SectionLabel>Sustainability Highlights</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        {sustainability.map((s) => (
          <div
            key={s.n}
            className="bg-[var(--cream)] border border-[var(--border)] p-4"
            style={{ borderRadius: "2px", borderLeft: `3px solid ${gold}50` }}
          >
            <p className="font-display italic text-[1.4rem] leading-none mb-1.5" style={{ color: gold + "60" }}>{s.n}</p>
            <p className="text-[0.8rem] text-[var(--charcoal-light)] leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-1.5">
        {extras.map((e) => <BulletItem key={e} text={e} color={gold} />)}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   E1 SERIES PANEL
───────────────────────────────────────────────────────────────────────────── */
function E1Panel() {
  const { accent, sub } = C.e1;

  const stats = [
    "Boat: RaceBird Electric Hydrofoil",
    "Top Speed: 50 knots / 93 km/h",
    "Emissions: Zero (100% electric)",
    "Season Launch: Feb 2024, Jeddah",
    "Social Reach: 90M+ views per event",
    "2024 Champion: Team Brady (Tom Brady)",
    "2025 Champion: Team Brady (back-to-back)",
    "Avg race emissions: 335 t CO₂e vs 535 t (F1)",
  ];

  const owners = [
    { initials: "TB", team: "Team Brady",             owner: "Tom Brady",               champion: true },
    { initials: "VK", team: "Team Blue Rising",        owner: "Virat Kohli",             champion: false },
    { initials: "LJ", team: "Team AlUla",              owner: "LeBron James",            champion: false },
    { initials: "RN", team: "Team Rafa",               owner: "Rafael Nadal",            champion: false },
    { initials: "WS", team: "Westbrook Racing",        owner: "Will Smith",              champion: false },
    { initials: "SA", team: "Aoki Racing Team",        owner: "Steve Aoki",              champion: false },
    { initials: "CK", team: "Sierra Racing Club",      owner: "Thibaut Courtois & Kyle Kuzma", champion: false },
    { initials: "DD", team: "Team Drogba Global Africa", owner: "Didier Drogba",         champion: false },
    { initials: "MA", team: "Team Miami",              owner: "Marc Anthony",            champion: false },
    { initials: "MC", team: "Team Monaco",             owner: "Monaco Representative",  champion: false },
  ];

  const logos = [
    { name: "E1 Series",      src: "/E1_Series_logo.png",                 alt: "E1 Series",              role: "Championship",            badgeColor: accent },
    { name: "PIF",            alt: "Public Investment Fund", role: "50% Owner via Electric 360", badgeColor: "#1a3a5c" },
    { name: "UIM",            alt: "UIM", role: "Sanctioning Body", badgeColor: "#003380" },
    { name: "SWATI Spentose", src: "/SWATI%20Spentose.png",               alt: "SWATI Spentose",         role: "League-Level Investor",   badgeColor: "#3a6a9c" },
  ];

  const sustainability = [
    { n: "01", text: "Blue Impact Program — coastal regeneration at every race location worldwide." },
    { n: "02", text: "Carbon Offset — over 90% reduction in carbon emissions vs comparable powerboat racing." },
    { n: "03", text: "Marine Conservation — strategic partnerships with WaterAid, OceanR, and 4ocean." },
    { n: "04", text: "Marine Education — ocean awareness programmes delivered at every E1 host city." },
  ];
  const extras = [
    "OceanR supplies crew uniforms manufactured from recycled plastic bottles",
    "Marine biology research programme led by Prof. Carlos Duarte",
    "Blue Impact Championship — sustainability impact scored alongside race results",
    "Sustainability judged by: Bacardi, One Ocean Foundation, Oceans2050, MSC Foundation",
    "PIF (Saudi Public Investment Fund) — AUM $1.15 trillion, world's most active SWF 2025",
  ];

  return (
    <div>
      {/* Hero line */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-1">
        <div className="flex-1">
          <p className="label mb-1" style={{ color: accent }}>E1 Series — UIM E1 World Championship · League-Level Investor</p>
          <h3 className="font-display italic text-[1.75rem] text-[var(--charcoal)] leading-tight">
            Unveiling a New Chapter in Water Sports
          </h3>
        </div>
        <a
          href="https://e1series.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 self-start sm:self-center text-[0.75rem] font-medium px-5 py-2 border transition-all duration-200"
          style={{ borderColor: accent + "60", color: accent, borderRadius: "2px" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
        >
          E1Series.com →
        </a>
      </div>

      <Divider />

      {/* Description */}
      <SectionLabel>About the Championship</SectionLabel>
      <p className="text-[0.875rem] text-[var(--charcoal-light)] leading-[1.8]">
        The UIM E1 World Championship is the world&apos;s <strong>first all-electric offshore powerboat
        racing series</strong>. Teams race in the RaceBird — an electric hydrofoil capable of
        50&nbsp;knots (93&nbsp;km/h) emitting zero emissions. Founded by <strong>Alejandro Agag</strong> (founder of
        Formula E &amp; Extreme E) and CEO <strong>Rodi Basso</strong>. Season 1 launched February 2024 in
        Jeddah, Saudi Arabia. The inaugural Doha GP (Feb 2025) generated
        <strong> 90 million social media views</strong> across platforms. Tom Brady&apos;s team won
        back-to-back championships in 2024 and 2025.
      </p>

      {/* Stat pills */}
      <SectionLabel>Key Statistics</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {stats.map((s) => <StatPill key={s} label={s} accent={accent} />)}
      </div>

      {/* Celebrity team owners */}
      <SectionLabel>Celebrity Team Owners</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {owners.map((o) => (
          <OwnerCard key={o.team} {...o} accent={accent} />
        ))}
      </div>

      {/* Partners */}
      <SectionLabel>Investors &amp; Partners</SectionLabel>
      <PartnerAssetBlock logos={logos} columns="lg:grid-cols-4" />
      <p className="text-[0.7rem] text-[var(--muted)] mt-2 leading-relaxed">
        PIF holds a 50% ownership stake in E1 Series via the Electric 360 partnership —
        alongside Formula E and Extreme E. AUM: $1.15&nbsp;trillion (world&apos;s most active SWF 2025).
      </p>

      {/* Sustainability */}
      <SectionLabel>Sustainability Highlights</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        {sustainability.map((s) => (
          <div
            key={s.n}
            className="bg-[var(--cream)] border border-[var(--border)] p-4"
            style={{ borderRadius: "2px", borderLeft: `3px solid ${sub}50` }}
          >
            <p className="font-display italic text-[1.4rem] leading-none mb-1.5" style={{ color: sub + "60" }}>{s.n}</p>
            <p className="text-[0.8rem] text-[var(--charcoal-light)] leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-1.5">
        {extras.map((e) => <BulletItem key={e} text={e} color={sub} />)}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EXTREME H PANEL
───────────────────────────────────────────────────────────────────────────── */
function ExtremeHPanel() {
  const { accent, gold } = C.extremeh;

  const stats = [
    "Fuel: Green Hydrogen H₂",
    "Emissions: Water vapour only",
    "Car: Pioneer 25 · Spark Racing Technology",
    "Power: 400 kW / 550 hp",
    "Teams: 8 international",
    "Drivers: 16 (mixed gender)",
    "Broadcast: 90 broadcasters · 180 markets",
    "Inaugural Champions: Kevin Hansen & Molly Taylor (Jameel Motorsport)",
  ];

  const teams = [
    { name: "Jameel Motorsport",       note: "2025 Inaugural Champions ★", champion: true },
    { name: "Veloce Racing",           note: "E.ON Next Veloce Racing",    champion: false },
    { name: "Carl Cox Motorsport",     note: "Music × Motorsport",          champion: false },
    { name: "ZEROID QEV Motorsport",   note: "EV technology specialist",    champion: false },
  ];
  const legacyOwners = [
    "Lewis Hamilton", "Nico Rosberg", "Jenson Button",
    "McLaren Racing", "Andretti Global", "Chip Ganassi Racing",
  ];

  const logos = [
    { name: "FIA Extreme H",           alt: "FIA", role: "Championship / Sanctioning Body", badgeColor: "#cc0000" },
    { name: "Spark Racing Technology", role: "Car Constructor (Pioneer 25)", badgeColor: "#1a1a1a" },
    { name: "Yokohama Tyres",          alt: "Yokohama", role: "Official Tyre Supplier", badgeColor: "#003399" },
    { name: "PIF",                     alt: "PIF", role: "Backer / Qiddiya City Host", badgeColor: "#1a3a5c" },
    { name: "SWATI Spentose",          src: "/SWATI%20Spentose.png",          alt: "SWATI Spentose",  role: "Strategic Investor",          badgeColor: "#3a6a9c" },
  ];

  const sustainability = [
    "Pioneer 25 emits ONLY water vapour — zero carbon, zero exhaust pollutants",
    "Evolution: H₂ charging cars only (2021) → 80% event ops on hydrogen (2024) → 100% hydrogen racing (2025)",
    "Races held in climate-damaged locations to raise global awareness of the crisis",
    "FIA-certified hydrogen safety standards — first motorsport series to achieve this",
    "Joint hydrogen working group with Formula 1 and the FIA",
    "Le Mans hydrogen racing category planned from 2026 — full H₂ top category by 2030",
    "Directly aligns with REC2's green hydrogen production mission in Vapi, Gujarat",
  ];

  return (
    <div>
      {/* Hero line */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-1">
        <div className="flex-1">
          <p className="label mb-1" style={{ color: accent }}>FIA Extreme H World Cup · Strategic Investor</p>
          <h3 className="font-display italic text-[1.75rem] text-[var(--charcoal)] leading-tight">
            World&apos;s First Hydrogen-Powered Motorsport Championship
          </h3>
        </div>
        <a
          href="https://fiaextremeh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 self-start sm:self-center text-[0.75rem] font-medium px-5 py-2 border transition-all duration-200"
          style={{ borderColor: accent + "60", color: accent, borderRadius: "2px" }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
        >
          FIAExtremeH.com →
        </a>
      </div>

      <Divider />

      {/* Description */}
      <SectionLabel>About the Championship</SectionLabel>
      <p className="text-[0.875rem] text-[var(--charcoal-light)] leading-[1.8]">
        The FIA Extreme H World Cup is the world&apos;s <strong>first hydrogen-powered off-road motorsport
        series</strong>, inaugurated October 2025 in Qiddiya City, Saudi Arabia. It evolved from Extreme E
        (all-electric off-road racing, 2021–2024). Founded by <strong>Alejandro Agag</strong>. FIA-sanctioned.
        Teams race the <strong>Pioneer 25</strong> — a spec hydrogen SUV built by Spark Racing Technology,
        delivering 400&nbsp;kW (550&nbsp;hp). Hydrogen fuel cells emit <strong>only water vapour</strong>.
        8 teams, 16 drivers (mixed gender — gender equity is a core series principle). Covered by
        90 broadcasters across 180 global markets. 2025 Inaugural Champions:
        <strong> Kevin Hansen &amp; Molly Taylor</strong> (Jameel Motorsport).
      </p>

      {/* REC2 connection callout — inline within ExtremeH */}
      <div
        className="mt-5 p-5 border-l-4"
        style={{ borderLeftColor: gold, backgroundColor: gold + "0a", borderRadius: "0 2px 2px 0", border: `1px solid ${gold}30`, borderLeft: `4px solid ${gold}` }}
      >
        <p className="label mb-1.5" style={{ color: accent }}>REC2 Green Hydrogen Connection</p>
        <p className="text-[0.85rem] text-[var(--charcoal-light)] leading-relaxed">
          SWATI&apos;s investment in Extreme H directly mirrors <strong>REC2&apos;s own green hydrogen mission</strong> —
          independently developing an integrated green hydrogen facility in <strong>Vapi, Gujarat</strong>.
          Sport proves the technology. REC2 scales it.
        </p>
      </div>

      {/* Stat pills */}
      <SectionLabel>Key Statistics</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {stats.map((s) => <StatPill key={s} label={s} accent={accent} />)}
      </div>

      {/* Teams */}
      <SectionLabel>Notable Teams</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-2 mb-3">
        {teams.map((t) => (
          <div
            key={t.name}
            className="border border-[var(--border)] bg-white px-4 py-3"
            style={{ borderRadius: "2px", borderLeft: t.champion ? `3px solid ${gold}` : undefined }}
          >
            <p className="text-[0.8rem] font-semibold text-[var(--charcoal)]">{t.name}</p>
            <p className="text-[0.7rem] text-[var(--muted)] mt-0.5">{t.note}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="label text-[var(--muted)] mb-2">Legacy Extreme E Owners (Associated)</p>
        <div className="flex flex-wrap gap-1.5">
          {legacyOwners.map((o) => (
            <span
              key={o}
              className="text-[0.7rem] px-2.5 py-1 border border-[var(--border)] bg-white text-[var(--charcoal-light)]"
              style={{ borderRadius: "2px" }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>

      {/* Partners */}
      <SectionLabel>Partners &amp; Backers</SectionLabel>
      <PartnerAssetBlock logos={logos} columns="lg:grid-cols-5" />

      {/* Sustainability */}
      <SectionLabel>Sustainability Highlights</SectionLabel>
      <ul className="space-y-2">
        {sustainability.map((s) => <BulletItem key={s} text={s} color={gold} />)}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   REC2 MISSION CALLOUT
───────────────────────────────────────────────────────────────────────────── */
function Rec2Callout() {
  return (
    <div
      className="relative overflow-hidden p-7 md:p-9 border border-[var(--sage)]"
      style={{ borderRadius: "2px", borderLeft: "4px solid var(--sage)", backgroundColor: "var(--sage-pale)" }}
    >
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 font-display italic select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(4rem,14vw,8rem)", color: "var(--sage)", opacity: 0.07 }}
      >
        H₂
      </div>
      <div className="relative z-10">
        <p className="label mb-3" style={{ color: "var(--sage)" }}>REC2 Mission Connection</p>
        <p className="font-display italic text-[var(--charcoal)] text-[1.1rem] md:text-[1.25rem] leading-[1.7] max-w-3xl">
          SWATI&apos;s investments in E1 Series and Extreme H directly mirror REC2&apos;s mission —
          producing clean green hydrogen in Vapi, Gujarat to decarbonize industry, transport,
          and energy storage. Sport proves the technology. REC2 scales it.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TAB BAR
───────────────────────────────────────────────────────────────────────────── */
const TABS: { key: string; label: string; sub: string; code: string; accent: string }[] = [
  { key: "sailgp",   label: "SailGP",    sub: "France Team",     code: "SG", accent: C.sailgp.accent   },
  { key: "e1",       label: "E1 Series", sub: "Electric Racing", code: "E1", accent: C.e1.accent       },
  { key: "extremeh", label: "Extreme H", sub: "Hydrogen Racing", code: "EH", accent: C.extremeh.accent },
];

function renderPanel(key: string) {
  if (key === "sailgp")   return <SailGPPanel />;
  if (key === "e1")       return <E1Panel />;
  if (key === "extremeh") return <ExtremeHPanel />;
  return null;
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function SportsInitiatives() {
  const [active, setActive] = useState("sailgp");
  const _activeTab = TABS.find((t) => t.key === active)!; void _activeTab;

  return (
    <FadeUp>
      <div className="font-body">
      {/* ── Section Header ── */}
      <div className="mb-7">
        <p className="label font-body text-[var(--muted)] mb-2">Sports &amp; Sustainability</p>
        <h2 className="font-display text-[1.75rem] md:text-[2rem] text-[var(--charcoal)] leading-tight mb-3">
          Sports &amp; Sustainability Initiatives
        </h2>
        <RevealLine className="mb-5" />
        <p className="font-body text-[var(--charcoal-light)] text-[0.9375rem] max-w-2xl leading-[1.8]">
          Through technological innovation and eco-conscious competition, modern sport is leading
          the way in global sustainability. As a proactive stakeholder, SWATI Spentose has
          invested in these pioneering initiatives.
        </p>
      </div>

      {/* ── REC2 mission callout ── */}
      <Rec2Callout />

      {/* ── Tab bar — Segmented pill control ── */}
      <div
        className="mt-9 flex w-full rounded-xl p-1 gap-0.5"
        style={{ backgroundColor: "var(--cream-deep)" }}
        role="tablist"
      >
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className="relative flex-1 flex items-center gap-2.5 px-4 py-3 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-0 z-10 transition-colors duration-150 font-body"
              style={{
                color: isActive ? "var(--charcoal)" : "var(--muted)",
              }}
            >
              {/* Sliding white pill — shared layoutId gives the spring */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}

              {/* Sport accent dot */}
              <span
                className="relative z-10 flex-shrink-0 w-[7px] h-[7px] rounded-full transition-opacity duration-150"
                style={{
                  backgroundColor: tab.accent,
                  opacity: isActive ? 1 : 0.35,
                }}
                aria-hidden="true"
              />

              {/* Label stack */}
              <span className="relative z-10 min-w-0">
                <span className="block font-body text-[0.8125rem] font-semibold leading-tight truncate">
                  {tab.label}
                </span>
                <span
                  className="block font-body text-[0.65rem] mt-[2px] truncate transition-opacity duration-150"
                  style={{ opacity: isActive ? 0.55 : 0.45 }}
                >
                  {tab.sub}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Tab content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-2 bg-white px-6 md:px-8 pt-7 pb-8 rounded-xl"
          style={{
            boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {renderPanel(active)}
        </motion.div>
      </AnimatePresence>

      {/* ── Data sources footnote ── */}
      <p
        className="label font-body mt-5 leading-relaxed"
        style={{ color: "var(--muted)", opacity: 0.55, fontSize: "0.62rem" }}
      >
        Data sourced from: SailGP.com, E1Series.com, FIAExtremeH.com, SWATI Spentose Pvt. Ltd. deck 2026,
        BusinessWire, L&apos;Oréal Group press release, Sportico, Sustainability Magazine. Last updated: May 2026.
      </p>
      </div>
    </FadeUp>
  );
}
