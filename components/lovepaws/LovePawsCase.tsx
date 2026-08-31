import FadeUp from "@/components/FadeUp";
import CoverageThreshold from "./CoverageThreshold";

/**
 * The Love Paws Foundation case, told in REC 2's design language.
 *
 * Content is ported from the Love Paws demo site and its source note
 * (storyline and evidence, dated 2024–2026). Layout, type and colour follow
 * the REC 2 sector-page system rather than the original standalone site.
 */

const ACCENT = "var(--csr)";

/* ── Shared shells ─────────────────────────────────────────────────────── */

function Band({
  id,
  deep = false,
  children,
}: {
  id?: string;
  deep?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="py-[88px] px-6 lg:px-[56px] border-b"
      style={{
        borderColor: "var(--border)",
        backgroundColor: deep ? "var(--cream-deep)" : "var(--cream)",
        scrollMarginTop: 76,
      }}
    >
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </section>
  );
}

function Head({
  eyebrow,
  title,
  accentTail,
  lede,
}: {
  eyebrow: string;
  title: string;
  accentTail?: string;
  lede?: string;
}) {
  return (
    <FadeUp>
      <p className="label mb-6">{eyebrow}</p>
      <h2
        className="font-display tracking-[-0.015em] max-w-[20ch]"
        style={{ fontSize: "clamp(30px,4.6vw,52px)", fontWeight: 300, lineHeight: 1.08, color: "var(--charcoal)" }}
      >
        {title}
        {accentTail && (
          <>
            {" "}
            <em className="italic" style={{ color: ACCENT }}>
              {accentTail}
            </em>
          </>
        )}
      </h2>
      {lede && (
        <p
          className="mt-7 max-w-[68ch] text-[16.5px] font-light"
          style={{ lineHeight: 1.82, color: "var(--charcoal-light)" }}
        >
          {lede}
        </p>
      )}
    </FadeUp>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-[15px] font-light max-w-[70ch] ${className}`}
      style={{ lineHeight: 1.85, color: "var(--charcoal-light)" }}
    >
      {children}
    </p>
  );
}

function Note({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[12px] max-w-[68ch] ${className}`} style={{ lineHeight: 1.72, color: "var(--faint)" }}>
      {children}
    </p>
  );
}

/**
 * Named source tag. The page's whole argument is that provenance should be
 * visible where the number is, so the marker carries the publisher's name and
 * links straight out, rather than a footnote digit that sends you 20,000px
 * down the page to find out who said it.
 */
function Src({ n, className = "" }: { n: number | number[]; className?: string }) {
  const list = Array.isArray(n) ? n : [n];
  return (
    <span className={`inline-flex flex-wrap items-center gap-1.5 ${className}`}>
      {list.map((i) => {
        const src = SOURCES[i - 1];
        if (!src) return null;
        return (
          <a
            key={i}
            href={src.href}
            target="_blank"
            rel="noopener noreferrer"
            className="src-tag"
            title={`Reference ${i}: ${src.label}`}
            aria-label={`Reference ${i}: ${src.label}`}
          >
            {src.tag}
            <span aria-hidden="true" style={{ opacity: 0.8, marginLeft: 3 }}>&#8599;</span>
          </a>
        );
      })}
    </span>
  );
}

/** Big figure plus argument. Used twice, at the two points the numbers settle something. */
function Verdict({ figure, caption, children }: { figure: string; caption: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div
        className="mt-16 pt-10 pb-11 border-t border-b grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 md:gap-16"
        style={{ borderColor: "var(--border-strong)" }}
      >
        <div>
          <p
            className="font-display leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,3.6vw,42px)", fontWeight: 300, color: ACCENT }}
          >
            {figure}
          </p>
          <p className="label mt-4">{caption}</p>
        </div>
        <Body className="self-center">{children}</Body>
      </div>
    </FadeUp>
  );
}

/* ── Comparison bars ───────────────────────────────────────────────────── */

function Bars({ rows, caption, foot, src }: { rows: { label: string; value: string; pct: number; hot?: boolean }[]; caption: string; foot?: string; src?: number[] }) {
  return (
    <div>
      <Note className="mb-6">{caption}</Note>
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[minmax(74px,110px)_1fr_auto] items-center gap-4 sm:gap-5">
            <span className="text-[11px] tracking-[0.06em]" style={{ color: "var(--muted)" }}>
              {r.label}
            </span>
            <span className="h-[7px] relative" style={{ backgroundColor: "var(--border)" }}>
              <span
                className="absolute inset-y-0 left-0"
                style={{ width: `${r.pct}%`, backgroundColor: r.hot ? ACCENT : "var(--border-strong)" }}
              />
            </span>
            <span
              className="text-[12px] tabular-nums text-right"
              style={{ color: r.hot ? ACCENT : "var(--charcoal)", minWidth: 66 }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
      {foot && <Note className="mt-6">{foot}</Note>}
      {src && <Src n={src} className="mt-5" />}
    </div>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */

const BEATS = [
  {
    t: "Nobody knows the number",
    c: "No reliable national count, no state-wise sterilisation totals, no dashboard. Every plan built on top of this is a guess.",
  },
  {
    t: "The 70 per cent line is biology, not opinion",
    c: "Below the threshold, survivors breed back faster than the programme cuts. Sixty-nine per cent is close to zero.",
  },
  {
    t: "Money spread thin buys nothing",
    c: "Any budget spread evenly across a city closes zero areas. The same budget inside one boundary closes it permanently.",
  },
  {
    t: "The dog that came back",
    c: "Paying per animal caught produces double billing, wrong-locality releases and skipped recovery. The wrong unit of payment creates every failure downstream.",
  },
  {
    t: "It has already been done, in India",
    c: "Goa, Jaipur, Sikkim and Ahmedabad each got there with a map, a phone and one rule: finish the polygon. The demonstrations exist. The repeatable format does not.",
  },
  {
    t: "The Love Paws bet",
    c: "Take one area, close it out past the threshold with every animal traceable, publish the evidence, and hand the format to policy.",
  },
];

const LEDGER: { fig: string; lab: string; note: string; src: number[]; hot?: boolean }[] = [
  {
    fig: "6.2 cr",
    lab: "Free-roaming dogs in India, independent estimate",
    note: "The last official exercise was the 2019 Livestock Census, widely treated as an undercount.",
    src: [5],
  },
  {
    fig: "47,48,478",
    lab: "Reported dog bite cases in 2025",
    note: "Up roughly 10 lakh on 2024, when 37,17,336 cases were recorded by the NCDC.",
    src: [2, 1],
    hot: true,
  },
  {
    fig: "5,726",
    lab: "Estimated human rabies deaths a year, ICMR",
    note: "An older WHO framing put India at roughly 36 per cent of a global toll near 59,000, implying a far higher number. The two estimates use different methods and should not be read together.",
    src: [3, 4],
  },
  {
    fig: "8",
    lab: "Animal Birth Control centres serving all of Mumbai",
    note: "Against a city population counted at 90,757 dogs and over 1.28 lakh bites in 2024.",
    src: [6, 7],
  },
];

const FAILURES = [
  {
    n: "01",
    h: "Money without a boundary, and money without a check",
    b: "Payment is made per animal claimed, against paper records, with no independent verification of identity or release. Audits in Bhopal have surfaced inflated figures, ghost surgeries and substandard facilities. Because no animal carries a durable identity record, a claim is effectively unfalsifiable, and an unfalsifiable claim will always be inflated.",
    side: "Poor allocation is not only theft. It is also honest money spent without a boundary.",
    pull: true,
  },
  {
    n: "02",
    h: "No area is anybody's job to finish",
    b: "There is no systematic, area-wise ownership of the assignment. Work is measured in animals processed, never in territory closed out, so no area ever reaches the point at which the population stops replacing itself. A city can run a programme for twenty years, process lakhs of animals, and still not name one locality that is finished.",
    side: "Documented gap: no national management information system or real-time dashboard publicly tracks sterilisation or vaccination coverage.",
  },
  {
    n: "03",
    h: "Random catch and release",
    b: "Dogs are released in the wrong locality, which the ABC Rules 2023 expressly prohibit. Re-caught animals are billed twice. There is no traceability from catch to release, and no way to prove an individual animal was ever sterilised, vaccinated or returned home.",
    side: "The unit of payment is the dog caught. That single choice creates every failure downstream.",
    pull: true,
  },
  {
    n: "04",
    h: "Centres that cannot carry the load",
    b: "Municipal bodies cannot find appropriately equipped centres. Mumbai runs eight for a city counted at over ninety thousand dogs. Under-equipped theatres and compressed recovery windows produce post-operative infection, which is both an animal welfare failure and the fastest way to lose community consent for the whole programme.",
    side: "Add to this a documented shortage of trained veterinary personnel, and catching work handed to the least trained people on the payroll.",
  },
];

const MODEL = [
  {
    n: "01",
    span: "md:col-span-7",
    h: "Map and define areas with statistics",
    b: "Divide the territory into micro-zones, a polygon per lane cluster rather than per ward. Each zone carries a baseline: estimated dog count, caregiver contacts, bite incident history, conflict hotspots. Surveyed once, then used as the denominator for everything that follows.",
  },
  {
    n: "02",
    span: "md:col-span-5",
    h: "Budget against zone statistics",
    b: "Money is committed to a zone with an explicit target: cross 70 per cent inside this boundary, then move. Sequencing follows bite incidence and density, not convenience.",
  },
  {
    n: "03",
    span: "md:col-span-5",
    h: "Technology as the control layer",
    b: "Every animal gets a record at the moment of catch. The record follows it through surgery, recovery and release. Its by-product is the coverage number that does not currently exist anywhere.",
  },
  {
    n: "04",
    span: "md:col-span-7",
    h: "Track activity and release, and pay on verified outcome",
    b: "The payment milestone moves from animal caught to animal released, at the recorded catch location, with photographic and GPS proof, after the mandated recovery period. This one change removes most of the leakage without needing a single new regulation.",
  },
  {
    n: "05",
    span: "md:col-span-6",
    h: "Build the centres, the ecosystem, the people",
    b: "Right-sized surgical capacity with real post-operative recovery space. Trained and certified catchers rather than casual labour. Veterinary protocol and infection audit. Community caregivers integrated as the field network instead of treated as obstructions.",
  },
  {
    n: "06",
    span: "md:col-span-6",
    h: "Vaccination in the same motion",
    b: "Anti-rabies vaccination rides on the same visit and the same record. Sterilisation is a multi-year population play. Vaccination coverage cuts human deaths within a single season, and auditable data makes the ask to pharmaceutical partners a far easier one.",
  },
];

const CHAIN = [
  { n: "01", h: "Catch", b: "Geotag, photograph, sex, condition, marking ID. Works offline, syncs later." },
  { n: "02", h: "Surgery", b: "Vet ID, procedure, vaccination batch, complications, against the same record." },
  { n: "03", h: "Recovery", b: "The mandated post-operative window enforced by the workflow, not by trust." },
  { n: "04", h: "Release", b: "Geotagged and photographed inside a permitted radius of the catch point." },
  { n: "05", h: "Verify", b: "Complete chain or no claim. Duplicate animals surface automatically." },
  { n: "06", h: "Publish", b: "Coverage, bites and vaccination by zone, on a dashboard anyone can audit." },
];

const GOA = [
  { y: "2013", h: "The campaign begins with the state government", b: "No location-specific canine rabies surveillance data existed anywhere in Goa, so the first job was building the map, not vaccinating against it." },
  { y: "Mar 2014", h: "A 24 hour rabies hotline", b: "One public number for reporting a suspect rabid animal at any hour. This is the piece most programmes skip, and without it there is no way to know whether the vaccination is working." },
  { y: "2014–19", h: "Polygon by polygon, on repeat", b: "Teams directed to assigned polygons on a smartphone app, every dog logged with GPS, working offline. The entire state re-vaccinated every twelve months, peaking above 25,000 dogs in a single month." },
  { y: "2019", h: "Canine rabies collapses", b: "A 92 per cent reduction in monthly canine rabies cases against the start of the campaign. The reservoir, not just the symptoms.", good: true },
  { y: "Jun 2021", h: "First Rabies Controlled Area in India", b: "Declared after three consecutive years with zero human rabies deaths.", good: true },
  { y: "2022", h: "Published, and taught", b: "Results appear in Nature Communications, making the method citable in a policy room. Education teams were reaching 150,000 children a year in Goa; across India the programme reports more than 27 lakh children taught to date." },
  { y: "Today", h: "Over four million doses", b: "Delivered in Goa since 2013, the largest continuous rabies control effort ever run in India." },
];

const PRECEDENTS = [
  {
    place: "Jaipur",
    sub: "Help in Suffering / since 1994",
    src: [13],
    stat: "7.2 → 2.2",
    statLab: "Dog bites per 1,000 people",
    body: [
      "One of the longest continuously running ABC programmes in the world, built on WHO and WSPA guidelines. More than 1,50,000 dogs have passed through it. Over 70 per cent of female street dogs are sterilised, and over 70 per cent of the street dog population is vaccinated.",
      "It is credited with averting an estimated 500 human rabies deaths and 3,60,000 bite injuries. Thirty years is also the honest answer to how long a city takes when it starts without a map.",
    ],
  },
  {
    place: "Sikkim",
    sub: "SARAH programme / since 2006",
    src: [14],
    stat: "4 → 0",
    statLab: "Human rabies deaths a year",
    body: [
      "The first government-sanctioned programme in India to put animal welfare and public health inside one structure. Four human rabies deaths in 2005, then none at all from 2006 through 2015.",
      "Two deaths appeared in 2016, both near the West Bengal border. That detail matters more than the zeros: it is the case for drawing boundaries around whole administrative units, because a partially covered neighbour re-seeds you.",
    ],
  },
  {
    place: "Ahmedabad",
    sub: "Municipal ABC programme",
    src: [10],
    stat: "89%",
    statLab: "Sterilisation coverage reached",
    body: [
      "1,88,828 sterilisations delivered against roughly ₹18.11 crore of spending, which works out near ₹960 an animal. A major Indian city approaching the threshold on a municipal budget.",
      "It is the cleanest evidence available that surgical cost is not what stops the rest of the country. Ahmedabad paid roughly what everybody else is offered. What it did differently was keep going in the same place.",
    ],
  },
];

const CLOCK = [
  { y: "1960", h: "Prevention of Cruelty to Animals Act", b: "The parent statute. Every rule since is made under it." },
  { y: "2001", h: "First ABC (Dogs) Rules", b: "Catch, neuter, vaccinate, return becomes national policy. Delivery is left to urban local bodies, and so is the measurement." },
  { y: "2021", h: "NAPRE, and Zero by 30", b: "India commits to eliminating dog-mediated human rabies by 2030, aligned to the global Zero by 30 target. The interim animal-health goal was 75 per cent dog vaccination coverage by 2025." },
  { y: "2023", h: "ABC Rules revised", b: "Return to the exact original location, ear-notching, monitoring committees, AWBI recognition. The traceability this page asks for is, on paper, already compulsory." },
  { y: "2025", h: "Funding raised", b: "₹800 per dog, up from ₹445, plus a one-time ₹2 crore infrastructure grant for state veterinary hospitals. States are advised to cover at least 70 per cent." },
  { y: "Aug 2025", h: "The Supreme Court intervenes", b: "Removal from Delhi NCR ordered on 11 August, modified on 22 August to release back into the same territory after sterilisation and immunisation. All states and union territories impleaded for a pan-India policy." },
  { y: "May 2026", h: "The Court settles the framework", b: "Final nationwide directions in the suo motu stray dog matter. The ABC Rules 2023 are reaffirmed, the AWBI standard operating procedure is upheld, an ABC centre is directed in every district, and states are held accountable on pain of contempt. The rulebook is now closed. What it still does not specify is how coverage gets measured." },
  { y: "Now", h: "The measurement gap outlived the argument", b: "Reported bites rose from 37,17,336 in 2024 to 47,48,478 in 2025, an increase of roughly 28 per cent, while the 2025 vaccination-coverage target went unmet. No national dashboard exists to explain why, because none was ever built.", now: true },
  { y: "2030", h: "The deadline", b: "Four years out. Reaching it needs coverage that can be proved, zone by zone, which is the one thing nobody currently produces." },
];

const ASKS = [
  {
    who: "Municipal bodies",
    h: "Give us a boundary",
    b: "One ward, an agreed baseline survey and permission to run the chain of custody inside it. We publish everything, including what fails.",
  },
  {
    who: "CSR and philanthropy",
    h: "Fund the close-out, not the activity",
    b: "Money committed to a zone until it crosses the threshold, released against verified outcomes rather than reported effort.",
  },
  {
    who: "Pharmaceutical partners",
    h: "Vaccine at scale",
    b: "Supply and cold chain against auditable zone-level coverage data, backed by government directive.",
  },
];

const RECORD: [string, string][] = [
  ["Zone", "04B / Sewri lane cluster"],
  ["Sex", "Female, approx. 2 years"],
  ["Caught", "12 Aug, 06:42"],
  ["Surgery", "12 Aug, 09:15 / Vet ID 114"],
  ["Vaccine", "ARV batch 2291"],
  ["Released", "15 Aug, 07:10 / 40 m from catch"],
  ["Marking", "Left ear notched"],
];

const GOALS = [
  {
    g: "Reduce the stray animal population through humane sterilisation.",
    s: "Coverage measured against a defined map, never against an activity count.",
  },
  {
    g: "Reduce the incidence of human and stray conflict.",
    s: "Sequenced by bite incidence, so the zones that hurt people most are closed first.",
  },
  {
    g: "Increase anti-rabies vaccination drives, with pharmaceutical commitments secured through government directive.",
    s: "Auditable zone data turns a request into a case.",
  },
  {
    g: "Establish practices, methods, formats and protocols for coverage in smaller towns and villages.",
    s: "Where there is currently no model at all.",
  },
  {
    g: "Reduce pressure on community caregivers.",
    s: "Who today absorb the cost, the labour and the hostility of a failed public programme.",
  },
];

const BHAG = [
  {
    h: "Prove it in one area",
    b: "One ward or cluster, taken from baseline to past 70 per cent, fully traceable, with bite incidence measured before and after. The deliverable is not the dogs. It is the evidence pack.",
  },
  {
    h: "Package the format",
    b: "SOPs, app, cost per outcome, staffing norms, centre specification, audit method. Assembled so a municipal commissioner can adopt it without redesigning anything.",
  },
  {
    h: "Take it to policy",
    b: "Enter the national conversation with a working model rather than a position paper. One ward proved is worth more than ten thousand untraceable surgeries.",
  },
];

const SHAPE = [
  { k: "Control", n: "2", b: "Direction, accountability, government relationships." },
  { k: "Working core", n: "4 to 6", b: "Policy drafting, operations design, data, technology, partnerships." },
  { k: "Representation", n: "10", b: "Advocacy, city and state relationships, forums, media, CSR and pharma channels." },
];

const SOURCES = [
  { label: "NCDC dog bite and rabies figures for 2024, as given to Parliament", tag: "NCDC", href: "https://www.dailypioneer.com/2025/india/over-37-lakh-dog-bite-cases--54-human-rabies-deaths-in-2024--govt.html" },
  { label: "2025 dog bite total, compiled from IDSP data under RTI", tag: "IDSP · RTI", href: "https://straydogmenace.com/2026/02/13/exclusive-india-4748478-dog-bite-cases-2025-10-lakh-rise-7-58-crore-since-2010/" },
  { label: "ICMR-funded Lancet estimate of annual rabies deaths", tag: "ICMR · Lancet", href: "https://www.theweek.in/news/health/2025/10/22/from-dog-bites-to-deaths-understanding-rabies-prevention-in-india.html" },
  { label: "WHO rabies fact sheet — 99% dog-mediated, ~59,000 deaths globally", tag: "WHO", href: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
  { label: "Livestock Census counts and independent population estimates", tag: "Livestock Census", href: "https://visionias.in/blog/current-affairs/stray-dogs-management-in-india-balancing-public-safety-with-animal-welfare" },
  { label: "Mumbai dog population and centre capacity", tag: "BMC survey", href: "https://www.deccanherald.com/amp/story/india%2Fmaharashtra%2Fover-90000-stray-dogs-in-mumbai-but-only-8-shelters-for-them-bmc-officials-3791354" },
  { label: "Mumbai dog bite cases, 2024", tag: "Maharashtra govt", href: "https://www.freepressjournal.in/mumbai/mumbai-records-over-128-lakh-stray-dog-bites-in-2024-authorities-ramp-up-control-measures" },
  { label: "BMC allocation — ₹23 crore over three years, 1,35,000 sterilisations", tag: "BMC budget", href: "https://www.freepressjournal.in/mumbai/mumbai-bmc-plans-sterilisation-of-45000-stray-dogs-annually-allocates-23-crore-for-control-drive" },
  { label: "Revised central funding — ₹800 per dog, ₹2 crore infrastructure grant", tag: "DAHD", href: "https://www.devdiscourse.com/article/headlines/3530458-govt-ups-funding-for-stray-dog-sterilisation-to-rs-800-per-animal-rs-2-cr-for-vet-hospitals" },
  { label: "Ahmedabad coverage, sterilisation count and spending", tag: "AMC Ahmedabad", href: "https://www.prokerala.com/news/articles/a1770413.html" },
  { label: "Goa rabies elimination, Nature Communications 2022", tag: "Nature Comms", href: "https://www.nature.com/articles/s41467-022-30371-y" },
  { label: "Mission Rabies India — doses delivered, children educated, 2021 declaration", tag: "Mission Rabies", href: "https://www.missionrabies.com/en/our-projects/india" },
  { label: "Jaipur ABC programme outcomes, Help in Suffering / ICAM", tag: "Help in Suffering", href: "https://www.icam-coalition.org/jaipur-abc-costs-greatly-outweighed-by-benefits/" },
  { label: "Sikkim SARAH, ten-year outcomes", tag: "SARAH", href: "https://pubmed.ncbi.nlm.nih.gov/28361056/" },
  { label: "Supreme Court order of 22 August 2025, modifying the 11 August order", tag: "SC · Aug 2025", href: "https://www.scconline.com/blog/post/2025/08/22/supreme-court-stray-dogs-order-modified-vaccinated-release-banned-feeding/" },
  { label: "Supreme Court directions of 19 May 2026 — nationwide framework", tag: "SC · May 2026", href: "https://www.mondaq.com/india/trials-appeals-compensation/1808544/supreme-court-directions-on-stray-dog-management-may-2026-implementation-priorities-for-municipal-bodies-and-state-administrators" },
  { label: "NAPRE and the Zero by 30 target", tag: "NAPRE", href: "https://rabiesfreeindia.mohfw.gov.in/About-NAPRE" },
  { label: "ABC Rules 2023, implementation gaps and AWBI disbursement", tag: "ABC Rules 2023", href: "https://www.impriindia.com/insights/policy-update/animal-birth-control-abc-rules-2023/" },
  { label: "AWBI revised ABC guidelines", tag: "AWBI", href: "https://awbi.gov.in/uploads/documents/175508789397Revised%20ABC%20Guidelines.pdf" },
];

/* ── The page body ─────────────────────────────────────────────────────── */

export default function LovePawsCase() {
  return (
    <>
      {/* ── Thesis ─────────────────────────────────────────────────────── */}
      <Band deep>
        <FadeUp>
          <p className="label mb-8">Love Paws Foundation / the argument</p>
          <p
            className="font-display tracking-[-0.02em] max-w-[17ch]"
            style={{ fontSize: "clamp(36px,6.4vw,76px)", fontWeight: 300, lineHeight: 1.03, color: "var(--charcoal)" }}
          >
            We are not short of money. We are short of a{" "}
            <em className="italic" style={{ color: ACCENT }}>
              boundary
            </em>
            .
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p
            className="mt-11 max-w-[64ch] text-[17px] font-light"
            style={{ lineHeight: 1.82, color: "var(--charcoal-light)" }}
          >
            India runs sterilisation programmes without a count, without a threshold and without
            proof. Love Paws Foundation proposes the opposite: a defined area, a measured
            population, and every animal traceable from catch to release.
          </p>
        </FadeUp>
      </Band>

      {/* ── Six beats ──────────────────────────────────────────────────── */}
      <Band>
        <Head
          eyebrow="The storyline"
          title="The argument, in six"
          accentTail="beats."
          lede="India is not failing at stray management because it is spending too little. It is failing because it spends without a boundary, without a threshold, and without proof."
        />
        <ol className="mt-14">
          {BEATS.map((b, i) => (
            <FadeUp key={b.t} delay={i * 0.04}>
              <li
                className="grid md:grid-cols-[52px_minmax(0,1fr)_minmax(0,1.25fr)] gap-x-8 gap-y-3 py-7 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-display tabular-nums leading-none pt-1"
                  style={{ fontSize: 26, fontWeight: 300, color: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display leading-[1.24]"
                  style={{ fontSize: 21, fontWeight: 400, color: "var(--charcoal)" }}
                >
                  {b.t}
                </h3>
                <Body>{b.c}</Body>
              </li>
            </FadeUp>
          ))}
        </ol>
      </Band>

      {/* ── The scale ──────────────────────────────────────────────────── */}
      <Band deep id="lp-scale">
        <Head
          eyebrow="01 / The scale"
          title="The number nobody"
          accentTail="owns."
          lede="There has been no reliable national count of free-roaming dogs. The Ministry has told Parliament it does not hold state-wise sterilisation totals, and no national dashboard tracks coverage. Every plan built on top of this is a guess."
        />

        <div className="mt-14">
          {LEDGER.map((row, i) => (
            <FadeUp key={row.fig} delay={i * 0.05}>
              <div
                className="grid md:grid-cols-[minmax(0,190px)_minmax(0,1fr)_minmax(0,1.1fr)] gap-x-9 gap-y-2 py-8 border-t items-baseline"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="font-display leading-none tabular-nums tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(30px,4vw,44px)",
                    fontWeight: 300,
                    color: row.hot ? ACCENT : "var(--charcoal)",
                  }}
                >
                  {row.fig}
                </p>
                <p className="text-[14px] font-light" style={{ lineHeight: 1.6, color: "var(--charcoal)" }}>
                  {row.lab}
                </p>
                <div>
                  <Note>{row.note}</Note>
                  <Src n={row.src} className="mt-3" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp>
            <Bars
              caption="Human rabies deaths in 2024: what was reported, against what is estimated."
              src={[1, 3]}
              rows={[
                { label: "Reported", value: "54", pct: 1 },
                { label: "Estimated", value: "5,726", pct: 100, hot: true },
              ]}
              foot="A hundredfold gap. We are not measuring the thing we claim to be solving."
            />
            <div className="mt-11">
              <Bars
                caption="Stray dog population: official census against independent estimate."
                src={[5]}
                rows={[
                  { label: "2012 census", value: "1.71 cr", pct: 27.6 },
                  { label: "2019 census", value: "1.53 cr", pct: 24.7 },
                  { label: "Independent", value: "≈ 6.2 cr", pct: 100, hot: true },
                ]}
                foot="Both cannot be true. Until one is settled, no coverage percentage anyone quotes has a denominator."
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h3 className="font-display mb-5" style={{ fontSize: 23, fontWeight: 400, color: "var(--charcoal)" }}>
              Where the burden actually sits
            </h3>
            <Body className="mb-9">
              Five states carried roughly half of India&apos;s reported dog bites in 2024. This is the
              argument for sequencing: the map is not uniform, so the money should not be either.
            </Body>
            <Bars
              caption="Reported dog bite cases by state, 2024."
              src={[1]}
              rows={[
                { label: "Maharashtra", value: "4,85,345", pct: 100, hot: true },
                { label: "Tamil Nadu", value: "4,80,427", pct: 99 },
                { label: "Gujarat", value: "3,92,837", pct: 81 },
                { label: "Karnataka", value: "3,61,494", pct: 74 },
                { label: "Bihar", value: "2,63,930", pct: 54 },
              ]}
            />
          </FadeUp>
        </div>
      </Band>

      {/* ── The threshold ──────────────────────────────────────────────── */}
      <Band id="lp-threshold">
        <Head
          eyebrow="02 / The threshold"
          title="Sixty-nine per cent is not"
          accentTail="almost."
          lede="Population stabilisation requires sustained sterilisation coverage of about 70 per cent of the dogs inside a defined area. The Centre's own advisory to states says the same. Below that line, the survivors breed back faster than the programme cuts."
        />
        <FadeUp>
          <Src n={[19, 11]} className="mt-8" />
        </FadeUp>
        <div className="mt-12">
          <CoverageThreshold color="#9C3F63" />
        </div>
      </Band>

      {/* ── The arithmetic ─────────────────────────────────────────────── */}
      <Band deep id="lp-arithmetic">
        <Head eyebrow="03 / The arithmetic" title="Spread thin, any budget buys" accentTail="nothing." />

        <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16">
          <FadeUp>
            <Body>
              Roughly 6.2 crore dogs. Seventy per cent coverage means on the order of{" "}
              <strong style={{ fontWeight: 600, color: "var(--charcoal)" }}>4.3 crore surgeries</strong>. At the
              Centre&apos;s revised support of{" "}
              <strong style={{ fontWeight: 600, color: "var(--charcoal)" }}>₹800 per dog</strong>, that is thousands
              of crores of work, and real delivered cost runs higher once catching, transport, three days of
              post-operative care and release are counted.
            </Body>
            <Body className="mt-6">
              Against that arithmetic, central disbursement under the AWBI birth control scheme was often under
              ₹50 lakh a year before 2023. Municipal budgets are small too: BMC has committed about ₹23 crore
              over three years against a target of 1,35,000 sterilisations, roughly 45,000 a year.
            </Body>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p
              className="font-display italic"
              style={{ fontSize: "clamp(22px,2.9vw,30px)", lineHeight: 1.36, fontWeight: 300, color: "var(--charcoal)" }}
            >
              The conclusion is not &ldquo;give us more money&rdquo;.
            </p>
            <Body className="mt-6">
              Any finite budget, spread evenly across a city, closes zero areas. The same budget, concentrated
              inside one boundary until it crosses 70 per cent, closes that area permanently. Coverage is not a
              percentage of money spent. It is a percentage of a defined map.
            </Body>
          </FadeUp>
        </div>

        <FadeUp>
          <h3 className="font-display mt-20 mb-3" style={{ fontSize: 25, fontWeight: 400, color: "var(--charcoal)" }}>
            What one sterilisation actually costs
          </h3>
          <Note className="mb-10">Three published figures, which do not agree. The gap between them is the whole problem.</Note>
        </FadeUp>

        {[
          { k: "₹800", h: "Central support per dog", b: "The revised 2025 scheme, up from ₹445. This is what the Centre contributes, not what the work costs.", c: [9] },
          { k: "₹960", h: "Ahmedabad, delivered", b: "1,88,828 sterilisations against ₹18.11 crore. Close to the surgical cost alone, on a programme now reporting about 89 per cent coverage.", c: [10] },
          { k: "₹1,704", h: "Mumbai, implied by budget", b: "₹23 crore committed over three years against 1,35,000 sterilisations. Still well above Ahmedabad’s delivered figure — roughly what the work costs once catching, transport, recovery and release are counted rather than surgery alone.", c: [8] },
        ].map((r, i) => (
          <FadeUp key={r.k} delay={i * 0.05}>
            <div
              className="grid md:grid-cols-[130px_minmax(0,1fr)] gap-x-9 gap-y-2 py-7 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="font-display leading-none tabular-nums"
                style={{ fontSize: 30, fontWeight: 300, color: ACCENT }}
              >
                {r.k}
              </p>
              <div>
                <h4 className="font-display mb-2" style={{ fontSize: 18, fontWeight: 400, color: "var(--charcoal)" }}>
                  {r.h}
                </h4>
                <Body>{r.b}</Body>
                <Src n={r.c} className="mt-3.5" />
              </div>
            </div>
          </FadeUp>
        ))}

        <Verdict figure="₹4,100 to ₹7,300 crore" caption="Arithmetic for national 70% coverage">
          Roughly 4.3 crore surgeries, priced across the delivered range above — ₹960 an animal at the bottom,
          ₹1,704 at the top. This is not a funding request. It is a
          reason to stop pretending the country can be covered uniformly. No plausible budget does every ward at
          once, which is precisely why the money has to finish one boundary before it moves to the next.
        </Verdict>
      </Band>

      {/* ── Failures ───────────────────────────────────────────────────── */}
      <Band id="lp-failures">
        <Head eyebrow="04 / Where it breaks" title="Four failures, one" accentTail="root." />
        <div className="mt-14">
          {FAILURES.map((f, i) => (
            <FadeUp key={f.n} delay={i * 0.05}>
              <article
                className="grid md:grid-cols-[56px_minmax(0,1.7fr)_minmax(0,1fr)] gap-x-9 gap-y-5 py-10 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-display tabular-nums leading-none"
                  style={{ fontSize: 30, fontWeight: 300, color: "var(--border-strong)" }}
                >
                  {f.n}
                </span>
                <div>
                  <h3
                    className="font-display mb-4"
                    style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.26, color: "var(--charcoal)" }}
                  >
                    {f.h}
                  </h3>
                  <Body>{f.b}</Body>
                </div>
                <div className="md:pt-1">
                  {f.pull ? (
                    <p
                      className="font-display italic"
                      style={{ fontSize: 19, lineHeight: 1.44, fontWeight: 300, color: ACCENT }}
                    >
                      {f.side}
                    </p>
                  ) : (
                    <Note>{f.side}</Note>
                  )}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </Band>

      {/* ── The model ──────────────────────────────────────────────────── */}
      <Band deep id="lp-model">
        <Head
          eyebrow="05 / The model"
          title="Fund the map, not the"
          accentTail="calendar."
          lede="Six commitments, each of which exists because one of the failures above exists."
        />

        <div className="mt-14 grid md:grid-cols-12 gap-x-10">
          {MODEL.map((m, i) => (
            <FadeUp key={m.n} delay={i * 0.04} className={m.span}>
              <div className="py-8 border-t h-full" style={{ borderColor: "var(--border-strong)" }}>
                <span className="label" style={{ color: ACCENT }}>
                  {m.n}
                </span>
                <h3
                  className="font-display mt-4 mb-3"
                  style={{ fontSize: 21, fontWeight: 400, lineHeight: 1.28, color: "var(--charcoal)" }}
                >
                  {m.h}
                </h3>
                <Body>{m.b}</Body>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div
            className="mt-16 py-9 px-7 sm:px-10 border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 flex-wrap"
            style={{ borderColor: ACCENT, backgroundColor: "var(--cream)" }}
          >
            <span className="label flex-shrink-0">Payment milestone</span>
            <s className="font-display text-[19px]" style={{ color: "var(--faint)", fontWeight: 300 }}>
              Dog caught
            </s>
            <span aria-hidden="true" style={{ color: ACCENT }}>
              →
            </span>
            <strong className="font-display text-[19px]" style={{ color: ACCENT, fontWeight: 400 }}>
              Release verified: geotag, photograph, recovery window
            </strong>
          </div>
        </FadeUp>
      </Band>

      {/* ── Chain of custody ───────────────────────────────────────────── */}
      <Band id="lp-chain">
        <Head
          eyebrow="06 / The control layer"
          title="Not an app for donors. A chain of"
          accentTail="custody."
          lede="Every animal gets a record at the moment of catch, and the record follows it through surgery, recovery and release. Its by-product is the coverage number that does not currently exist anywhere in India."
        />
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {CHAIN.map((c, i) => (
            <FadeUp key={c.n} delay={i * 0.04}>
              <li className="py-7 border-t h-full" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="label" style={{ color: ACCENT }}>
                    {c.n}
                  </span>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 400, color: "var(--charcoal)" }}>
                    {c.h}
                  </h3>
                </div>
                <Body>{c.b}</Body>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp>
          <div
            className="mt-16 pt-10 border-t grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-10 md:gap-16"
            style={{ borderColor: "var(--border)" }}
          >
            <figure
              className="m-0 border self-start"
              style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--cream)" }}
            >
              <figcaption
                className="flex items-baseline justify-between gap-4 px-6 py-4 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="label">Catch record</span>
                <span className="text-[12px] tabular-nums font-medium" style={{ color: ACCENT }}>
                  LP-04B-0117
                </span>
              </figcaption>
              <dl className="m-0 px-6 py-1">
                {RECORD.map(([k, v], i) => (
                  <div
                    key={k}
                    className="grid grid-cols-[86px_minmax(0,1fr)] gap-4 py-3"
                    style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)" }}
                  >
                    <dt className="label pt-[3px]">{k}</dt>
                    <dd className="m-0 text-[13px] font-light" style={{ color: "var(--charcoal)" }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div
                className="flex items-center gap-2.5 px-6 py-4 border-t"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--cream-deep)" }}
              >
                <span
                  className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: ACCENT }}
                  aria-hidden="true"
                />
                <span className="label">Chain complete / payment released</span>
              </div>
            </figure>

            <div>
              <h3 className="font-display mb-5" style={{ fontSize: 23, fontWeight: 400, color: "var(--charcoal)" }}>
                One animal, one record, six timestamps
              </h3>
              <Body>
                This is the whole system in one card. A claim is payable only when every field is filled by the
                person who did the work, at the moment they did it, with the phone&apos;s own clock and
                coordinates. A dog caught twice shows up as a duplicate. A dog released a kilometre away fails the
                radius check. A recovery window cut from three days to three hours fails on the timestamps.
              </Body>
              <Body className="mt-5">
                None of this requires new law. The ABC Rules already mandate return to the exact original
                location, ear-notching and record keeping. It requires only that somebody check &mdash; and
                checking is cheap once the record exists.
              </Body>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16 pt-10 border-t grid md:grid-cols-2 gap-10 md:gap-16" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="label mb-5">Why vaccination comes first</p>
              <p
                className="font-display"
                style={{ fontSize: "clamp(21px,2.7vw,28px)", lineHeight: 1.36, fontWeight: 300, color: "var(--charcoal)" }}
              >
                Two places to cut the same chain.
              </p>
            </div>
            <div>
              <Body>
                Dogs are the source of about 99 per cent of human rabies cases.{" "}
                <Src n={[4]} />{" "}
                Sterilisation is the long game: it
                shrinks the reservoir over years, and it is the only thing that ends the cycle rather than managing
                it. Vaccination is the fast one. Push coverage past 70 per cent inside a zone and human deaths from
                that zone stop within a single season, whether or not a single dog has been sterilised yet.
              </Body>
              <Body className="mt-5">
                Which is why they belong on the same visit and in the same record. Every catch is already a
                vaccination opportunity, and every vaccination round is already a census. Running them separately,
                as most programmes do, pays the catching cost twice and produces two sets of numbers that never
                reconcile.
              </Body>
            </div>
          </div>
        </FadeUp>
      </Band>

      {/* ── Proof ──────────────────────────────────────────────────────── */}
      <Band deep id="lp-proof">
        <Head
          eyebrow="07 / It has been done"
          title="Goa already proved the"
          accentTail="method."
          lede="Declared India's first rabies controlled state in 2021 after three consecutive years with zero human rabies deaths. The method was not more money. It was a map divided into polygons, a phone that recorded every animal where it stood, a rule that a polygon is not finished until it clears the threshold, and a surveillance line that told the truth while it was still fixable."
        />

        <div className="mt-16">
          {GOA.map((g, i) => (
            <FadeUp key={g.y} delay={i * 0.03}>
              <div
                className="grid md:grid-cols-[130px_minmax(0,1fr)] gap-x-9 gap-y-2 py-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="label pt-1"
                  style={{ color: g.good ? ACCENT : "var(--muted)" }}
                >
                  {g.y}
                </span>
                <div>
                  <h4
                    className="font-display mb-2"
                    style={{ fontSize: 18, fontWeight: 400, color: g.good ? ACCENT : "var(--charcoal)" }}
                  >
                    {g.h}
                  </h4>
                  <Body>{g.b}</Body>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <Src n={[11, 12]} className="mt-9" />
        </FadeUp>

        <FadeUp>
          <p className="label mt-20 mb-6">Three more, already done</p>
          <p
            className="font-display mb-4"
            style={{ fontSize: "clamp(26px,3.6vw,40px)", fontWeight: 300, lineHeight: 1.12, color: "var(--charcoal)" }}
          >
            Goa is not a{" "}
            <em className="italic" style={{ color: ACCENT }}>
              fluke.
            </em>
          </p>
          <Note className="mb-4">
            Every one of these ran in India, on Indian budgets, solving catching, transport and post-operative care
            exactly as we will have to.
          </Note>
        </FadeUp>

        <div className="mt-8">
          {PRECEDENTS.map((p, i) => (
            <FadeUp key={p.place} delay={i * 0.05}>
              <article
                className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,0.7fr)_minmax(0,1.6fr)] gap-x-9 gap-y-5 py-10 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <p className="font-display" style={{ fontSize: 26, fontWeight: 400, color: "var(--charcoal)" }}>
                    {p.place}
                  </p>
                  <p className="label mt-2">{p.sub}</p>
                </div>
                <div>
                  <p
                    className="font-display leading-none tabular-nums"
                    style={{ fontSize: "clamp(26px,3vw,34px)", fontWeight: 300, color: ACCENT }}
                  >
                    {p.stat}
                  </p>
                  <Note className="mt-3">{p.statLab}</Note>
                </div>
                <div className="space-y-4">
                  {p.body.map((t, j) => (
                    <Body key={j}>{t}</Body>
                  ))}
                  <Src n={p.src} />
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </Band>

      {/* ── The policy clock ───────────────────────────────────────────── */}
      <Band id="lp-clock">
        <Head
          eyebrow="08 / The policy clock"
          title="The law is not the missing"
          accentTail="piece."
          lede="Almost everything this page argues for is already policy. It has been written, funded, revised and given a deadline. What was never built is the machinery that shows whether any of it happened."
        />

        <div className="mt-14">
          {CLOCK.map((c, i) => (
            <FadeUp key={c.y} delay={i * 0.03}>
              <div
                className="grid md:grid-cols-[130px_minmax(0,1fr)] gap-x-9 gap-y-2 py-6 border-t"
                style={{ borderColor: c.now ? ACCENT : "var(--border)" }}
              >
                <span className="label pt-1" style={{ color: c.now ? ACCENT : "var(--muted)" }}>
                  {c.y}
                </span>
                <div>
                  <h4
                    className="font-display mb-2"
                    style={{ fontSize: 18, fontWeight: 400, color: c.now ? ACCENT : "var(--charcoal)" }}
                  >
                    {c.h}
                  </h4>
                  <Body>{c.b}</Body>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <Src n={[18, 17, 9, 15, 16]} className="mt-9" />
        </FadeUp>

        <Verdict figure="37,17,336 → 47,48,478" caption="Reported dog bites, 2024 to 2025">
          A 28 per cent rise in a single year, against a 2030 elimination deadline and a 2025 vaccination-coverage
          target that was missed. This is the gap Love Paws exists to close, and it is not a gap in intent,
          funding or law — all three exist. It is a gap in verification. No national dashboard publishes
          zone-level coverage, so nobody can say which of those bites happened inside a covered area and which
          did not.
        </Verdict>
      </Band>

      {/* ── The ask ────────────────────────────────────────────────────── */}
      {/* ── Goals ─────────────────────────────────────────────────────── */}
      <Band deep id="lp-goals">
        <Head eyebrow="09 / Love Paws Foundation" title="What we are here to" accentTail="do." />
        <ol className="mt-14">
          {GOALS.map((g, i) => (
            <FadeUp key={g.g} delay={i * 0.04}>
              <li
                className="grid md:grid-cols-[46px_minmax(0,1.35fr)_minmax(0,1fr)] gap-x-8 gap-y-3 py-7 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-display tabular-nums leading-none pt-1"
                  style={{ fontSize: 24, fontWeight: 300, color: "var(--border-strong)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-display m-0"
                  style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.34, color: "var(--charcoal)" }}
                >
                  {g.g}
                </p>
                <Note className="md:pt-1.5">{g.s}</Note>
              </li>
            </FadeUp>
          ))}
        </ol>
      </Band>

      {/* ── The big goal ──────────────────────────────────────────────── */}
      <Band id="lp-bhag">
        <Head
          eyebrow="10 / The big goal"
          title="Prove one area. Package the format. Take it to"
          accentTail="policy."
          lede="The Supreme Court's May 2026 directions settled the rulebook and put an ABC centre in every district on the states' account. What no order can supply is proof that a boundary was actually closed. That is the gap a demonstrated, evidence-backed operating model fills, and it is open now."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-x-10">
          {BHAG.map((b, i) => (
            <FadeUp key={b.h} delay={i * 0.06}>
              <div className="py-8 border-t h-full" style={{ borderColor: "var(--border-strong)" }}>
                <span
                  className="font-display tabular-nums leading-none block mb-4"
                  style={{ fontSize: 26, fontWeight: 300, color: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: 21, fontWeight: 400, lineHeight: 1.28, color: "var(--charcoal)" }}
                >
                  {b.h}
                </h3>
                <Body>{b.b}</Body>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="label mt-20 mb-8">What it takes to run</p>
          <dl className="m-0 grid sm:grid-cols-3 gap-x-10">
            {SHAPE.map((t) => (
              <div key={t.k} className="py-7 border-t" style={{ borderColor: "var(--border)" }}>
                <dt className="label">{t.k}</dt>
                <p
                  className="font-display tabular-nums leading-none my-4"
                  style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: 300, color: "var(--charcoal)" }}
                >
                  {t.n}
                </p>
                <dd className="m-0">
                  <Note>{t.b}</Note>
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </Band>

      <Band id="lp-ask">
        <Head
          eyebrow="11 / The ask"
          title="One zone. One budget cycle. Full"
          accentTail="evidence."
          lede="Three counterparties, three different commitments, one boundary."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-x-10">
          {ASKS.map((a, i) => (
            <FadeUp key={a.who} delay={i * 0.06}>
              <div className="py-8 border-t h-full" style={{ borderColor: "var(--border-strong)" }}>
                <p className="label" style={{ color: ACCENT }}>
                  {a.who}
                </p>
                <h3
                  className="font-display mt-4 mb-3"
                  style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.26, color: "var(--charcoal)" }}
                >
                  {a.h}
                </h3>
                <Body>{a.b}</Body>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <a
            href="/contact"
            className="inline-block mt-14 text-[10px] tracking-[0.12em] uppercase font-bold px-[34px] py-[15px]"
            style={{ backgroundColor: ACCENT, color: "var(--cream)", borderRadius: 2 }}
          >
            Start a conversation →
          </a>
        </FadeUp>

        {/* Sources */}
        <FadeUp>
          <div className="mt-20 pt-9 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="label mb-6">Sources</p>
<ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-3 m-0 p-0 list-none">
              {SOURCES.map((src, i) => (
                <li
                  key={src.href}
                  id={`src-${i + 1}`}
                  className="grid grid-cols-[22px_minmax(0,1fr)] gap-2"
                  style={{ scrollMarginTop: 90 }}
                >
                  <span className="text-[11px] tabular-nums pt-[2px]" style={{ color: ACCENT }}>
                    {i + 1}
                  </span>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nlink text-[12px] font-light"
                    style={{ color: "var(--muted)" }}
                  >
                    {src.label}
                  </a>
                </li>
              ))}
            </ol>
            <Note className="mt-8">
              Figures are drawn from the sources above and dated 2024 to 2026. Nothing here claims a result Love
              Paws has already achieved.
            </Note>
          </div>
        </FadeUp>
      </Band>
    </>
  );
}
