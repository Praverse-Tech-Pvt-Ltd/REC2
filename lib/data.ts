export type Person = {
  name: string;
  email?: string;
  role: string;
  initials: string;
};

export type SectorKey =
  | "energy"
  | "recycle"
  | "materials"
  | "chips"
  | "robotics"
  | "sports"
  | "csr";

export const SECTOR_COLORS: Record<SectorKey, string> = {
  energy: "#C17B2A",
  recycle: "#2A7A4A",
  materials: "#2856A0",
  chips: "#1A8080",
  robotics: "#6B3FA0",
  sports: "#C43820",
  csr: "#9C3F63",
};

export const SECTOR_GRADIENTS: Record<SectorKey, string> = {
  energy: "from-green-900 to-green-700",
  recycle: "from-lime-900 to-lime-700",
  materials: "from-purple-950 to-purple-800",
  chips: "from-orange-950 to-orange-700",
  robotics: "from-teal-950 to-teal-700",
  sports: "from-blue-950 to-blue-800",
  csr: "from-rose-950 to-rose-800",
};

export const PEOPLE: Record<string, Person> = {
  vishal: {
    name: "Vishal Jajodia",
    email: "V@v-group.in",
    role: "Founder & Chairman",
    initials: "VJ",
  },
  fraser: {
    name: "Fraser Castellino",
    email: "fraser.castellino@v-group.in",
    role: "CEO",
    initials: "FC",
  },
  vivek: {
    name: "Vivek Bhojwani",
    email: "vivek.bhojwani@swatispentose.com",
    role: "Sports Partnerships Lead",
    initials: "VB",
  },
  rishi: {
    name: "Rishi Tailor",
    email: "rishi.tailor@swatispentose.com",
    role: "Robotics Lead",
    initials: "RT",
  },
  mukesh: {
    name: "Mukesh Sharma",
    email: "mukesh.sharma@swatispentose.com",
    role: "Materials Lead",
    initials: "MS",
  },
  rushabh: {
    name: "Rushabh Jain",
    email: "rushabh@prithvistrategic.com",
    role: "Strategic Advisor – Materials",
    initials: "RJ",
  },
  lynette: {
    name: "Lynette Menezes",
    role: "Founder — Love Paws",
    initials: "LM",
  },
  pratham: {
    name: "Pratham Shrivastav",
    email: "pratham.shrivastav@v-group.in",
    role: "TECHNICAL DIRECTOR",
    initials: "PS",
  },
};

export type PageData = {
  title: string;
  subtitle: string;
  sector: SectorKey;
  overview: string[];
  whyRec2: string[];
  applications: { icon: string; label: string }[];
  team: string[];
  related: { label: string; href: string }[];
  partners?: string[];
};

export const PAGES: Record<string, PageData> = {

  // ── ENERGY ───────────────────────────────────────────────────────────

  "energy/solar": {
    title: "Solar Energy",
    subtitle: "Photovoltaic power and intelligent green grids",
    sector: "energy",
    overview: [
      "Solar photovoltaic technology is now the world's cheapest source of electricity. REC 2 invests across the full solar value chain — from high-efficiency panel manufacturing and utility-scale farms to distributed rooftop networks and agrivoltaic systems that combine food production with clean energy generation on the same land.",
      "Our solar strategy encompasses next-generation cell technologies including perovskite-silicon tandems pushing efficiencies beyond 30%, bifacial panels for higher yield, and AI-driven grid management systems. Renewable solar goes beyond the panel — REC 2 builds the intelligent grid infrastructure, virtual power plants, and community ownership models that make solar truly transformative.",
      "REC 2 partners with developers, grid operators, DFIs and off-takers across emerging markets in South Asia, the Middle East and Africa — regions with exceptional solar irradiance and rapidly growing energy demand. Carbon credit generation from certified renewable projects provides a key additional revenue stream across all solar portfolios.",
    ],
    whyRec2: [
      "Solar additions will exceed 500 GW annually by 2026. LCOE dropped 90% in a decade — carbon credits add 15–25% IRR on top of energy revenues.",
      "REC 2's AI dispatch and grid digital twin capabilities increase solar revenue by 12–18%. Community ownership models reduce opposition risk and unlock DFI concessional capital.",
      "Agrivoltaics unlock land-use synergies unavailable to competing technologies. Integration with our battery recycling and rare metals verticals creates vertically integrated clean energy value chains.",
    ],
    applications: [
      { icon: "☀️", label: "Utility-Scale Farms" },
      { icon: "🏘️", label: "Distributed Rooftop" },
      { icon: "🌾", label: "Agrivoltaics" },
      { icon: "🌍", label: "AI Grid Management" },
      { icon: "📊", label: "Carbon Credit Generation" },
      { icon: "💱", label: "Peer-to-Peer Trading" },
    ],
    team: ["vishal", "fraser", "vivek"],
    related: [
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Hybrid", href: "/energy/hybrid" },
      { label: "Solar Recycling", href: "/recycle/solar-recycling" },
    ],
  },

  "energy/hydrogen": {
    title: "Hydrogen Energy",
    subtitle: "Green hydrogen production, fuel cells and H₂ infrastructure",
    sector: "energy",
    overview: [
      "Green hydrogen — produced by splitting water using renewable electricity, with only water vapour and heat as by-products — is the critical link between intermittent renewable generation and industrial decarbonisation. REC 2 is currently developing a green hydrogen project in Gujarat, with production designed to be integrated with on-site solar generation and battery energy storage. We are in active discussions to finalise implementing partners and offtakers, with the project planned for phased rollout rather than a single big-bang launch.",
      "We do not manufacture our own electrolysers today, so we are building this vertical the honest way: through partnership. REC 2 is in discussions with FCTecNrgy Pvt. Ltd. (FCT) — a Gurgaon-based manufacturer and, through its joint venture with Germany's SFC Energy AG, India's first company to commercialise hydrogen and methanol fuel cells at scale, with over 3,000 deployments across defence, oil & gas and disaster management. Two pathways are under evaluation with FCT: supplying hydrogen fuel-cell backup power to replace diesel gensets at data centres, and entering the electrolyser OEM/technology-supply market — manufacturing or supplying the core hardware of the green hydrogen economy rather than only trading in it.",
      "India's hydrogen landscape is being built by three forces at once: the National Green Hydrogen Mission (₹19,744 crore through FY 2029-30, targeting 5 MMTPA of green hydrogen and ~125 GW of renewable capacity by 2030), the SIGHT production and electrolyser-manufacturing incentive scheme (₹17,490 crore), and a wave of private capital from Reliance, Adani, JSW, ACME, Avaada and ReNew. As of early 2026 the pipeline spans MoU-stage announcements, projects under active construction, and a smaller set that are commissioned and producing today — commissioned green hydrogen capacity nationally stands at roughly 8,000 TPA against the 2030 target, so most of the sector's value creation still sits ahead of us, not behind it.",
      "The scale being committed nationally is real: Reliance's Jamnagar giga complex is targeting 3 MTPA of green hydrogen by 2032, NTPC's Pudimadaka hub represents a ₹1.85 lakh crore (~$22bn) single-site commitment, and Adani-TotalEnergies have committed $50bn over a decade at Mundra/Kutch. JSW's Vijayanagar plant, commissioned November 2025 to feed its DRI steelmaking process, is the first project formally delivered under the SIGHT scheme — a template for how REC 2 expects its own offtake-anchored hydrogen projects to be structured. State policy adds a further layer: the Uttar Pradesh Green Hydrogen Policy 2024 offers up to ₹50 crore in capital subsidy for electrolyser-OEM workstreams and a 10-year exemption on electricity duty and transmission charges for green data-centre power — precisely the two pathways REC 2 is evaluating with FCT. The H₂ Festival, conceived by REC 2, brings together hydrogen technology companies, investors and regulators in an annual showcase event, and we leverage our sports investment arm to position hydrogen-powered racing as a live demonstration platform for the technology at scale.",
    ],
    whyRec2: [
      "Fuel cells convert hydrogen directly into electricity at 40-60% efficiency (up to 60%+ for PEM systems) with zero emissions beyond water vapour — a real efficiency and emissions edge over combustion that REC 2's Gujarat project and FCT partnership are built to capture, not merely claim.",
      "Partnering with an operationally proven manufacturer like FCT — 3,000+ fuel-cell deployments already in the field, not a lab concept — lets REC 2 move to bankable pilots faster while staying honest about what is ours and what is a partnership.",
      "With commissioned Indian green hydrogen capacity at only ~8,000 TPA against a 5 MMTPA 2030 target, and India's data-centre capacity alone set to triple to 4 GW by 2030, the addressable market for hydrogen backup power and electrolyser supply is still almost entirely unclaimed.",
    ],
    applications: [
      { icon: "⚡", label: "Green H₂ Production" },
      { icon: "🔋", label: "Electrolyser OEM" },
      { icon: "🏭", label: "Fuel Cell Backup Power" },
      { icon: "🖥️", label: "Data Centre Microgrids" },
      { icon: "✈️", label: "H₂ Festival" },
      { icon: "🌱", label: "Industrial H₂" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Hybrid", href: "/energy/hybrid" },
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
    ],
  },

  "energy/hybrid": {
    title: "Hybrid Energy Systems",
    subtitle: "Integrated solar-hydrogen-storage microgrids and virtual power plants",
    sector: "energy",
    overview: [
      "Hybrid energy systems — combining solar photovoltaic, hydrogen storage and battery banks — deliver the reliable, dispatchable clean power that neither technology can provide alone. Hybrid is one of the most active technology races in clean energy today, with developers worldwide racing to combine generation and storage into a single dispatchable asset.",
      "REC 2 is implementing its own hybrid roadmap in that context: designing and planning hybrid microgrids intended to provide 24/7 clean power to industrial sites, island communities and remote operations without any fossil fuel input. Our approach emphasises AI-driven dispatch optimisation — predictive algorithms to balance solar generation, hydrogen production and discharge, and battery cycling — which we are building toward rather than claiming as delivered.",
      "Carbon credit generation from hybrid systems is particularly attractive: by displacing diesel and heavy fuel oil in island and remote markets, hybrid projects can generate Gold Standard carbon credits with premium pricing. As our hybrid projects move from planning into deployment, REC 2 intends to structure carbon credit agreements with off-takers at project initiation, providing a bankable revenue stream for DFI and institutional investors.",
    ],
    whyRec2: [
      "Island and remote markets with high diesel costs represent a $400B annual fuel spend. Hybrid systems undercut diesel LCOE by 40–60% today — and the gap widens as solar and electrolyser costs fall further.",
      "REC 2 is implementing an AI dispatch approach designed to reduce hybrid system LCOE versus passive switching systems — a capability we are actively building, not one we are claiming today.",
      "Gold Standard carbon credits from diesel displacement command $25–80/tonne premiums over standard credits. As our hybrid project pipeline matures, it is designed to generate high-quality credits that directly enhance investor returns.",
    ],
    applications: [
      { icon: "🌐", label: "Hybrid Microgrids" },
      { icon: "⚙️", label: "Grid Balancing" },
      { icon: "🔋", label: "Long-Duration Storage" },
      { icon: "⚡", label: "Virtual Power Plants" },
      { icon: "🏝️", label: "Island Grids" },
      { icon: "🔌", label: "EV Fast Charging" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
    ],
  },

  "energy/h2-hybrid": {
    title: "H₂ Hybrid Systems",
    subtitle: "Hydrogen-hybrid solutions bridging industry, mobility and sport",
    sector: "energy",
    overview: [
      "H₂ Hybrid Systems represent the convergence of hydrogen energy production and hybrid power management — delivering zero-emission power for the most demanding industrial, maritime and motorsport applications. Around the world, projects are trialling green hydrogen fuel cells paired with solar-charged batteries, and exploring related pathways such as the conversion of iron for hydrogen-based reduction and storage. REC 2 is mapping this landscape closely as we shape our own H₂ Hybrid roadmap.",
      "In motorsport, H₂ Hybrid powertrains combine hydrogen combustion with hybrid electric recovery to achieve performance parity with conventional engines while eliminating carbon emissions. REC 2 is planning to partner with racing teams and series organisers to develop H₂ Hybrid powertrain architectures — using competition as a real-world durability testbed for technology destined for commercial vehicles and vessels.",
      "For heavy industry and maritime, H₂ Hybrid Systems are envisioned as a bridge solution: plants and vessels operating on hydrogen when production is available and switching seamlessly to battery-backed power during supply interruptions. REC 2 intends to provide the integration software, project finance, and carbon credit origination across the full H₂ Hybrid value chain as this technology matures.",
    ],
    whyRec2: [
      "Motorsport is a $5B annual technology procurement market. H₂ Hybrid systems validated in competition enter commercial licensing agreements 3–5 years faster than lab-developed alternatives.",
      "IMO 2050 net-zero targets make hydrogen-hybrid propulsion the only scalable solution for long-haul maritime routes. REC 2's early positioning gives first-mover advantage in a $200B ship conversion market.",
      "H₂ Hybrid Systems generate stacked carbon credits from both renewable energy production and fossil fuel displacement. REC 2's credit origination capabilities add a 20–30% premium to base project returns.",
    ],
    applications: [
      { icon: "🏭", label: "Industrial H₂-Hybrid" },
      { icon: "🚢", label: "Maritime Propulsion" },
      { icon: "🏁", label: "Motorsport Powertrains" },
      { icon: "✈️", label: "Aviation Testing" },
      { icon: "📊", label: "Carbon Credits" },
      { icon: "🌐", label: "Grid Integration" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Sports Investments", href: "/sports/investments" },
    ],
  },

  // ── RECYCLE ──────────────────────────────────────────────────────────

  "recycle/battery-recycling": {
    title: "Battery Recycling",
    subtitle: "Critical material recovery from end-of-life lithium-ion batteries",
    sector: "recycle",
    overview: [
      "The global electric vehicle revolution is creating an imminent wave of end-of-life lithium-ion batteries — an estimated 12 million tonnes by 2030. The technology frontier here is moving fast: operators in Germany and across Europe are advancing hydrolysis-based processes that dissolve and mechanically separate cell components to recover clean metal fractions at high purity, and specialists such as Li-Cycle and Redwood Materials have shown what recovery rates of 95%+ are possible at scale. REC 2 is studying this landscape closely as we shape our own battery recycling capability.",
      "Our battery recycling strategy is designed to be vertically integrated with our materials and energy verticals: recovered lithium and cobalt would feed directly into battery supply chains, while recovered nickel and manganese would supply our rare metals trading operations. Second-life battery programmes — refurbishing cells that retain 70–80% capacity — are part of our vision to extend the economic life of packs before final recycling.",
      "Carbon credit generation from battery recycling is a growing but underutilised revenue stream. REC 2 structures certified Scope 3 emission reduction credits from each recycling operation, verified against baseline scenarios of virgin material extraction. These credits are sold to battery manufacturers, automakers and technology companies seeking to meet supply chain decarbonisation commitments.",
    ],
    whyRec2: [
      "Lithium demand is projected to grow 6× by 2030 driven by EV adoption. Battery recycling is the only near-term solution to the supply gap — and REC 2 sits at the intersection of supply and demand.",
      "Hydrometallurgical recycling recovers 95%+ of critical metals versus 60–70% from conventional smelting. REC 2's process advantage translates directly into higher recovered material value per tonne of input.",
      "Battery manufacturers face mandatory recycled content requirements in the EU from 2030 onwards. REC 2's certified recycled material streams are contractually valuable to compliance-driven buyers well in advance of the regulatory deadline.",
    ],
    applications: [
      { icon: "♻️", label: "Li-ion Recycling" },
      { icon: "🔋", label: "Second-Life Batteries" },
      { icon: "⛏️", label: "Lithium Recovery" },
      { icon: "⚙️", label: "Cobalt Recovery" },
      { icon: "🏭", label: "Nickel Recovery" },
      { icon: "📦", label: "Manganese Reclaim" },
    ],
    team: ["vishal", "fraser", "vivek"],
    related: [
      { label: "Solar Recycling", href: "/recycle/solar-recycling" },
      { label: "ASWM", href: "/recycle/aswm" },
      { label: "Rare Metals", href: "/materials/rare-metals" },
    ],
  },

  "recycle/solar-recycling": {
    title: "Solar Recycling",
    subtitle: "End-of-life panel recovery and critical material reclamation",
    sector: "recycle",
    overview: [
      "Solar panels installed during the first renewable energy boom of 2000–2015 are now approaching end of life — generating an estimated 80 million tonnes of panel waste by 2050. Companies like SolarCycle in Texas have already demonstrated that panels can be broken down without the high heat traditional recyclers rely on, separating glass, silicon and silver into clean, reusable fractions at world-leading recovery rates. REC 2 invests in solar panel recycling infrastructure aimed at that same standard — recovering high-purity silicon, silver, glass and aluminium from decommissioned photovoltaic modules, closing the loop on the solar supply chain.",
      "Silver recovery is the key economic driver: each tonne of decommissioned panels yields approximately 50g of silver — a metal in critical demand for next-generation electronics and solar cells. REC 2's planned thermal and chemical recovery processes target silver purity levels suitable for direct re-use in panel manufacturing, creating a genuinely circular supply chain.",
      "REC 2 establishes certified collection networks, partnering with utility operators, government bodies and project developers to create end-of-life obligations and guaranteed feedstock volumes. Carbon credits from certified panel recycling operations provide an additional revenue layer on top of recovered material sales.",
    ],
    whyRec2: [
      "80 million tonnes of solar waste by 2050 with limited certified recycling capacity today. REC 2 builds infrastructure ahead of the volume inflection — when land, permits and talent are cheapest.",
      "Silver scarcity is a structural constraint on solar panel manufacturing. REC 2's high-purity silver recovery from recycled panels commands premium pricing from panel manufacturers facing supply chain pressure.",
      "EU Solar Panel Recycling Regulation creates a compliance-driven feedstock pipeline. REC 2's certified collection networks provide panel operators with an accredited disposal solution — delivering captive feedstock volumes.",
    ],
    applications: [
      { icon: "☀️", label: "Panel Reclamation" },
      { icon: "🔬", label: "Silicon Recovery" },
      { icon: "⚙️", label: "Silver Extraction" },
      { icon: "🏗️", label: "Glass Recycling" },
      { icon: "🌡️", label: "Encapsulant Processing" },
      { icon: "📊", label: "Carbon Credits" },
    ],
    team: ["vishal"],
    related: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "ASWM", href: "/recycle/aswm" },
      { label: "Solar Energy", href: "/energy/solar" },
    ],
  },

  "recycle/aswm": {
    title: "Alibaugh Solid Waste Management",
    subtitle: "Converting waste streams into energy, materials and value",
    sector: "recycle",
    overview: [
      "Alibaugh Solid Waste Management (ASWM) encompasses the systematic collection, processing, valorisation and safe disposal of solid waste streams from municipal, industrial and construction sources. Anchored by REC 2's flagship facility in Alibaugh, Maharashtra, ASWM approaches waste through a hierarchy of intervention — reduce, reuse, recover, recycle — deploying technologies that extract maximum value from waste before any residual material reaches landfill.",
      "REC 2's ASWM thesis centres on three converging technologies: Mechanical Biological Treatment (MBT) for sorting and stabilising mixed municipal waste; thermal conversion — including pyrolysis and gasification — for energy recovery from non-recyclable fractions; and anaerobic digestion for organic waste, producing biogas for power and heat alongside nutrient-rich digestate for agriculture. Together these pathways can divert over 90% of incoming waste from landfill while generating clean energy and recovered materials.",
      "Policy is a critical driver of ASWM economics. Extended Producer Responsibility (EPR) schemes are spreading across Asia, Africa and Latin America — shifting the cost of waste management to producers and creating guaranteed revenue streams for compliant recyclers. REC 2's policy engagement across these markets, anchored by the Alibaugh facility's operating track record, positions us ahead of regulatory mandates, securing first-mover advantage in waste infrastructure concessions.",
    ],
    whyRec2: [
      "Global municipal solid waste is projected to reach 3.4 billion tonnes annually by 2050. Extended Producer Responsibility regulations create mandatory cost obligations — REC 2 converts liability into managed asset for industrial clients.",
      "AI sorting reduces per-tonne processing costs by 35–45% versus mechanical-only systems while increasing material recovery rates. REC 2's sorting technology generates premium recovered streams that command market prices well above landfill gate fees.",
      "Biogenic waste-to-energy with carbon capture generates negative-emission carbon credits — among the highest-value carbon instruments available. REC 2's ASWM facilities are structured to maximise credit generation alongside energy and material revenues.",
    ],
    applications: [
      { icon: "⚡", label: "Waste-to-Energy" },
      { icon: "🤖", label: "AI Smart Sorting" },
      { icon: "🏭", label: "Landfill Diversion" },
      { icon: "🌱", label: "Biogas Production" },
      { icon: "🏗️", label: "Industrial Waste" },
      { icon: "📊", label: "Carbon Credits" },
    ],
    team: ["vishal"],
    related: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "Solar Recycling", href: "/recycle/solar-recycling" },
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
    ],
  },

  "recycle/nuclear-recycling": {
    title: "Nuclear Recycling",
    subtitle: "Recovering value from spent nuclear fuel and reactor materials",
    sector: "recycle",
    overview: [
      "Spent nuclear fuel still contains more than 90% of its original energy content, along with recoverable zirconium, stainless steel and high-value isotopes used in medicine and industry. As the global nuclear renaissance accelerates — driven in large part by the small modular reactor build-out — the volume of spent fuel and end-of-life reactor material requiring responsible management is set to grow sharply.",
      "This is a vision REC 2 is building deliberately rather than one it is announcing as complete. We have not developed proprietary reprocessing or vitrification technology of our own, and we do not claim to. Our approach is to map the field, understand where genuine value can be recovered safely and under full regulatory oversight, and identify the specialists who already hold that capability.",
      "REC 2 is actively looking for partners — research institutions, licensed reprocessing operators and materials-recovery technology developers — who can help us build a credible, safety-first nuclear recycling proposition alongside our existing work in metal alloys and small modular reactors. This is a long-horizon, heavily regulated space, and we intend to approach it that way: through collaboration, not overreach.",
    ],
    whyRec2: [
      "Global installed nuclear capacity is expanding for the first time in decades, driven by SMR programmes across the UK, Canada, the US and Poland — creating a parallel, longer-term need for responsible spent-fuel and end-of-life material management.",
      "REC 2's existing footprint in metal alloys and small modular reactors gives us a natural, credible entry point to engage specialist nuclear recycling partners, rather than approaching the sector cold.",
      "We are positioning early and honestly — as a platform seeking the right technology and research partners, not as a claimant to capability we have not yet built.",
    ],
    applications: [
      { icon: "☢️", label: "Spent Fuel Management" },
      { icon: "🔩", label: "Zirconium & Steel Recovery" },
      { icon: "🧪", label: "Isotope Recovery" },
      { icon: "🛡️", label: "Regulatory Compliance" },
      { icon: "🤝", label: "Partner & Research Network" },
      { icon: "⚛️", label: "SMR Lifecycle Support" },
    ],
    team: ["vishal", "mukesh", "rushabh"],
    related: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "ASWM", href: "/recycle/aswm" },
      { label: "Small Modular Reactors", href: "/materials/smr" },
    ],
  },

  // ── LEGACY REDIRECT ENTRIES (kept for any deep-links) ────────────────

  "energy/hydrogen-hybrid": {
    title: "Hydrogen + Hybrid Energy",
    subtitle: "Clean fuel for a zero-carbon future",
    sector: "energy",
    overview: [
      "Hydrogen is the most abundant element in the universe — and the cleanest fuel we can produce at scale. REC 2 is at the forefront of green hydrogen production, where renewable electricity splits water into hydrogen and oxygen with zero emissions. Our hybrid energy systems combine hydrogen with solar, wind, and battery storage to deliver reliable, dispatchable clean power.",
      "The transition from fossil fuels demands energy that can be stored, transported and deployed on demand. Hydrogen uniquely fulfills this requirement. From powering heavy industry and shipping to fuelling next-generation vehicles and aviation, hydrogen is the bridge between intermittent renewables and always-on energy demand.",
      "REC 2's hydrogen portfolio encompasses electrolyser technology partnerships, green ammonia production, hydrogen storage innovations, and hybrid microgrids designed for remote industrial operations and data centres.",
    ],
    whyRec2: [
      "Global green hydrogen capacity is projected to reach 300 GW by 2030, representing a $500B+ investment opportunity.",
      "REC 2 brings together energy policy expertise, engineering partnerships, and strategic capital to accelerate hydrogen deployment at scale.",
      "Our unique position at the intersection of defence, materials and energy sectors gives us access to dual-use hydrogen applications across military logistics and critical infrastructure.",
    ],
    applications: [
      { icon: "⚡", label: "Green Hydrogen Production" },
      { icon: "🔋", label: "Hydrogen Storage Systems" },
      { icon: "🚢", label: "Maritime Fuel Cells" },
      { icon: "🏭", label: "Industrial Decarbonisation" },
      { icon: "🌐", label: "Hybrid Microgrids" },
      { icon: "✈️", label: "Aviation Fuel Cells" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "materials/metal-alloys": {
    title: "Metal Alloys",
    subtitle: "Advanced high-performance alloys for aerospace, nuclear and defence",
    sector: "materials",
    overview: [
      "Advanced metal alloys form the physical backbone of the energy transition and deep-tech economy. REC 2's ambition is to develop, process and supply high-performance titanium, nickel and aluminium alloys — materials engineered to withstand extreme temperatures, pressures and corrosive environments where standard engineering grades fail — for defence and precision engineering applications.",
      "Our alloy strategy focuses on three demand drivers: the civil aerospace recovery, the global nuclear renaissance, and the rapid expansion of defence procurement. We are in discussions with an Italian polytechnic institute whose metallurgy research programme aligns closely with this goal, with a view to jointly developing special alloys and solving specific material-performance problems raised by defence and engineering partners — work we want to do, structured as a genuine research collaboration rather than a claim of existing capability.",
      "The vertical integration between REC 2's rare metals, alloy manufacturing and recycling operations creates a closed-loop materials economy. Scrap from alloy manufacturing feeds back into our recycling streams, while recovered rare earths from battery and solar recycling supply our alloy development programmes — each vertical strengthening the others.",
    ],
    whyRec2: [
      "Civil aerospace is recovering to pre-pandemic delivery rates with a 20-year backlog of 40,000+ aircraft requiring advanced alloy components. REC 2's qualified alloy supply chains command long-term procurement agreements at fixed margins.",
      "The nuclear renaissance — 50+ SMR projects in development globally — requires specialised zirconium, nickel and stainless alloys with decade-long supply contracts. REC 2's early positioning in nuclear-grade alloy supply is a first-mover advantage with high switching costs.",
      "Additive manufacturing with advanced alloys reduces component weight by 40–60% and cuts supply chain lead times from months to weeks. REC 2's AM-ready alloy powders command 3–5× premium pricing over wrought equivalents.",
    ],
    applications: [
      { icon: "✈️", label: "Titanium Alloys" },
      { icon: "⚙️", label: "Nickel Superalloys" },
      { icon: "🏗️", label: "Aluminium Alloys" },
      { icon: "🛡️", label: "Specialty Steel" },
      { icon: "🔩", label: "Powder Metallurgy" },
      { icon: "🤖", label: "Additive Manufacturing" },
    ],
    team: ["vishal", "mukesh", "rushabh"],
    related: [
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "SMR", href: "/materials/smr" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "materials/rare-metals": {
    title: "Rare Metals",
    subtitle: "Critical mineral supply chains for the energy and technology transition",
    sector: "materials",
    overview: [
      "Rare earth elements and critical minerals — lithium, cobalt, nickel, neodymium, dysprosium, tungsten and the full suite of technology metals — underpin every major pillar of the energy and technology transition. It helps to be precise about the categories: rare earth elements are the 17 periodic-table elements (the lanthanides, plus scandium and yttrium) prized for magnetism and optical properties; critical minerals are a broader, policy-defined list of materials — including tungsten, cobalt and lithium — flagged by governments as essential and at supply risk, whether or not they are geologically rare. REC 2's educational and investment thesis treats these as related but distinct clusters.",
      "REC 2 invests in the mining, processing and refining of these strategic materials, with a focus on supply chain sovereignty for markets that cannot afford geopolitical exposure in critical mineral sourcing.",
      "Our rare metals strategy is built around three integrated capabilities: primary production partnerships with mining operators in politically stable jurisdictions, secondary recovery through our battery and solar recycling operations, and specialty processing to refine ore concentrates into battery-grade, magnet-grade and semiconductor-grade outputs that command premium market pricing over raw ore equivalents.",
      "China currently controls 60–85% of global rare earth production and processing, creating acute supply chain vulnerabilities for Western nations and their allies. REC 2 works with allied governments and mining companies to develop alternative supply chains across Africa, Australia, Canada and Central Asia — a mission with both commercial and strategic national importance.",
    ],
    whyRec2: [
      "Critical mineral supply security is now a national security priority across NATO, the G7 and allied nations — creating substantial government-backed investment and offtake opportunities.",
      "First-mover advantage in African and Central Asian rare earth projects provides access to world-class deposits at pre-discovery valuations.",
      "Synergies with battery recycling and metal alloys create vertically integrated critical minerals platforms with multiple revenue streams.",
    ],
    applications: [
      { icon: "🧲", label: "Permanent Magnets" },
      { icon: "🔋", label: "Battery Cathodes" },
      { icon: "🖥️", label: "Semiconductor Materials" },
      { icon: "☀️", label: "Solar Cell Materials" },
      { icon: "📡", label: "Defence Electronics" },
      { icon: "🌍", label: "Urban Mining" },
    ],
    team: ["vishal", "mukesh", "rushabh"],
    related: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "SMR", href: "/materials/smr" },
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
    ],
  },

  "materials/smr": {
    title: "Small Modular Reactors",
    subtitle: "Modular clean energy for the 21st century",
    sector: "materials",
    overview: [
      "Small Modular Reactors represent the most significant innovation in nuclear energy in decades. Unlike traditional gigawatt-scale nuclear plants that require 15+ years and tens of billions to build, SMRs are factory-manufactured, scalable and deployable in 3-5 years at a fraction of the cost. REC 2 is positioning at the intersection of advanced materials science and nuclear energy development.",
      "The materials challenges in SMR development are immense and fascinating: reactor pressure vessels require steels with extraordinary radiation resistance and fracture toughness; fuel cladding demands zirconium alloys with optimised neutron cross-sections; and heat exchangers need nickel alloys that maintain integrity at 700°C for decades. REC 2's advanced materials expertise makes us a natural partner for SMR developers.",
      "Our SMR strategy focuses on materials qualification and supply, strategic investment in SMR developers, and the development of SMR-powered industrial complexes that provide clean baseload power to energy-intensive manufacturing including green hydrogen production and data centres.",
    ],
    whyRec2: [
      "SMR orders are accelerating globally — the UK, Canada, US and Poland have all committed to SMR programmes, with cumulative investment exceeding $20B.",
      "Materials qualification is the critical path for SMR deployment, and REC 2's metallurgical expertise positions us as an essential supply chain partner.",
      "SMR-powered hydrogen production is the most economical pathway to 24/7 green hydrogen — a market REC 2 is uniquely positioned to capture.",
    ],
    applications: [
      { icon: "⚛️", label: "Reactor Pressure Vessels" },
      { icon: "🔩", label: "Fuel Cladding Materials" },
      { icon: "♨️", label: "Heat Exchanger Alloys" },
      { icon: "🏭", label: "Industrial Power Supply" },
      { icon: "💧", label: "SMR-Hydrogen Integration" },
      { icon: "🛡️", label: "Nuclear Waste Management" },
    ],
    team: ["vishal", "mukesh", "rushabh"],
    related: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "chips/photonics": {
    title: "Photonics",
    subtitle: "Light-speed computing and sensing",
    sector: "chips",
    overview: [
      "Photonic integrated circuits use light rather than electrons to process and transmit information, enabling speeds and energy efficiencies that silicon electronics cannot match. REC 2 is investing in photonic chip design, fabrication and integration — targeting applications in AI accelerators, quantum computing interfaces, LiDAR systems and ultra-fast optical communications.",
      "The convergence of photonics with AI hardware is creating a new paradigm in computing. Optical neural networks can perform matrix multiplications — the fundamental operation in deep learning — at the speed of light with near-zero energy cost. Data centre demand is scaling faster than conventional electronic interconnects and cooling infrastructure can keep up with, and REC 2's photonics thesis is built around bringing solutions to data centres that are struggling to meet that bar — targeting the data centre, defence and automotive markets.",
      "Defence applications are particularly compelling: photonic chips enable laser-based directed energy weapons, hypersonic vehicle guidance systems, and quantum key distribution networks that are immune to classical computing attacks. REC 2's dual-use approach maximises the strategic and commercial value of photonic technology investments.",
    ],
    whyRec2: [
      "Photonic chip market is growing at 25% CAGR, driven by AI infrastructure buildout and defence modernisation programmes.",
      "REC 2's position across chips, defence and materials provides unique access to both military and commercial photonics programmes.",
      "Pratham Shrivastav's deep tech expertise in photonic systems enables technical due diligence at the frontier of the field.",
    ],
    applications: [
      { icon: "💡", label: "Optical Neural Networks" },
      { icon: "🔭", label: "LiDAR Systems" },
      { icon: "🔐", label: "Quantum Cryptography" },
      { icon: "📡", label: "Optical Communications" },
      { icon: "🎯", label: "Directed Energy" },
      { icon: "🧪", label: "Photonic Biosensing" },
    ],
    team: ["vishal", "pratham"],
    related: [
      { label: "Biochips", href: "/chips/biochips" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
      { label: "Robotics", href: "/robotics/automated-reactors" },
    ],
  },

  "chips/biochips": {
    title: "Biochips",
    subtitle: "Diagnostics and biosensing at the nanoscale",
    sector: "chips",
    overview: [
      "Biochips integrate biological molecules with microelectronic substrates to create miniaturised platforms for diagnostics, drug discovery and organ modelling. REC 2's primary focus in this vertical is organ-on-chip systems — microfluidic devices that replicate the function of human organs and reduce reliance on animal testing in pharmaceutical development.",
      "Our particular interest is the bladder: bladder disease research is comparatively underserved by existing organ-on-chip platforms, and we see a genuine gap for a dedicated model. REC 2 is looking for research and technology partners to develop organ-on-chip solutions specifically for bladder disease, rather than claiming to have built this capability ourselves.",
      "From a defence perspective, biochips are also relevant for field-deployable diagnostics and chemical and biological threat detection. REC 2's biochip investments are structured to serve both civilian healthcare and defence readiness markets, with organ-on-chip work as the anchor programme.",
    ],
    whyRec2: [
      "Biochip market is projected to exceed $30B by 2030, with organ-on-chip and point-of-care diagnostics among the fastest-growing segments as pharma seeks alternatives to animal testing.",
      "A dedicated bladder-disease organ-on-chip model addresses a clear gap in the current research landscape, giving REC 2 a differentiated entry point rather than competing head-on in crowded diagnostic categories.",
      "REC 2's chemistry and materials expertise is well suited to biochip surface functionalisation — the critical bottleneck in device sensitivity and specificity — once the right research partner is in place.",
    ],
    applications: [
      { icon: "🧬", label: "DNA Sequencing" },
      { icon: "🔬", label: "Lab-on-Chip Diagnostics" },
      { icon: "💊", label: "Drug Discovery" },
      { icon: "🫀", label: "Continuous Health Monitoring" },
      { icon: "⚠️", label: "Biodefence Detection" },
      { icon: "🌿", label: "Environmental Biosensing" },
    ],
    team: ["vishal", "pratham"],
    related: [
      { label: "Photonics", href: "/chips/photonics" },
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "robotics/flow-chemistry": {
    title: "Flow Chemistry",
    subtitle: "Continuous automated chemical synthesis",
    sector: "robotics",
    overview: [
      "Flow chemistry replaces batch reactors with continuous tubular systems where reagents flow through precisely controlled microreactors, mixing, reacting and separating in a seamless automated process. REC 2 is investing in flow chemistry systems that dramatically accelerate pharmaceutical synthesis, specialty chemical production and green chemistry — reducing waste, improving safety and enabling chemistries impossible in batch mode.",
      "This is why the chemical industry worldwide is shifting toward flow: reactions can be run at extreme temperatures and pressures safely, hazardous intermediates are consumed immediately rather than accumulated, and scale-up from laboratory to production is achieved simply by running reactors in parallel ('numbering up') rather than rebuilding a plant. Automated reactors are what make this shift practical at industrial scale — they hold the tight temperature, pressure and residence-time control that flow chemistry depends on far more precisely than manual operation ever could. REC 2 sees flow chemistry, backed by automated reactor systems, as foundational to the future of chemical manufacturing.",
      "Defence applications include the on-demand synthesis of propellants, explosives and chemical countermeasures — eliminating the need for large munitions stockpiles and enabling just-in-time production near the point of use. Our flow chemistry investments serve both the commercial specialty chemicals market and defence procurement.",
    ],
    whyRec2: [
      "Flow chemistry reduces synthesis times from days to minutes and increases yields by 20-50%, providing compelling economics across the $5T global chemicals market.",
      "Pharmaceutical companies are rapidly adopting continuous manufacturing mandated by regulatory agencies, creating strong pull-through demand for flow chemistry systems.",
      "Defence synthesis applications carry premium margins and long-term government contracts, providing revenue predictability.",
    ],
    applications: [
      { icon: "💊", label: "Pharmaceutical Synthesis" },
      { icon: "🧪", label: "Specialty Chemicals" },
      { icon: "🌱", label: "Green Chemistry" },
      { icon: "🔥", label: "Energetic Materials" },
      { icon: "🏭", label: "Continuous Manufacturing" },
      { icon: "🤖", label: "Autonomous Synthesis" },
    ],
    team: ["vishal", "rishi", "pratham"],
    related: [
      { label: "Automated Reactors", href: "/robotics/automated-reactors" },
      { label: "Biochips", href: "/chips/biochips" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "robotics/automated-reactors": {
    title: "Automated Reactors",
    subtitle: "Industrial automation for next-generation manufacturing",
    sector: "robotics",
    overview: [
      "Automated reactor systems represent the convergence of robotics, process control and artificial intelligence in industrial manufacturing. REC 2 invests in fully autonomous reactor platforms for hydrogen electrolysis, nuclear fuel processing, advanced materials synthesis and pharmaceutical manufacturing — systems that operate continuously with minimal human intervention.",
      "The integration of AI-driven process optimisation with robotic handling and advanced sensor arrays creates reactors that self-tune, self-correct and self-maintain. REC 2 partners with industrial automation companies and research institutions to develop the next generation of autonomous chemical and materials processing plants.",
      "From automated electrolyser farms that produce green hydrogen to robotic SMR fuel fabrication facilities and AI-optimised metal alloy foundries, REC 2's automated reactor thesis cuts across every sector in our portfolio — creating operational efficiencies and quality improvements that transform project economics.",
    ],
    whyRec2: [
      "Industrial automation in chemical and materials processing is a $60B+ market growing at 8% annually, driven by labour costs, quality requirements and safety imperatives.",
      "REC 2's cross-sector presence enables the development of reactor automation solutions with multiple customer segments, reducing commercial risk.",
      "Automated reactors are central to REC 2's hydrogen, SMR and flow chemistry strategies — creating internal demand that de-risks early-stage development.",
    ],
    applications: [
      { icon: "🤖", label: "Autonomous Process Control" },
      { icon: "💧", label: "Electrolyser Automation" },
      { icon: "⚛️", label: "Nuclear Fuel Processing" },
      { icon: "🏗️", label: "Alloy Foundry Automation" },
      { icon: "📊", label: "AI Process Optimisation" },
      { icon: "🔧", label: "Predictive Maintenance" },
    ],
    team: ["vishal", "rishi", "pratham"],
    related: [
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
      { label: "SMR", href: "/materials/smr" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
    ],
  },

  "sports/investments": {
    title: "Sports Investments",
    subtitle: "The future of sport is sustainable, global and electric",
    sector: "sports",
    overview: [
      "REC 2's sports investment thesis is built around three converging megatrends: the electrification of motorsport, the globalisation of premium sporting events, and the growing demand for ESG-aligned investment in entertainment and media. We target sports properties at the intersection of technology, sustainability and global audience growth — the opposite of traditional asset-heavy sports ownership.",
      "Our portfolio centres on next-generation racing series that showcase clean technology to global audiences of hundreds of millions. SailGP's French Team, E1 Series electric powerboat racing, and Extreme H hydrogen off-road racing are not just sports investments — they are rolling showcases for REC 2's energy and propulsion technologies, providing unparalleled brand visibility and technology validation.",
      "Beyond motorsport, we build strategic positions in sports that are undergoing digital transformation: sports analytics platforms, athlete performance technology, and the emerging convergence of sport with web3 fan engagement and tokenised ownership models.",
    ],
    whyRec2: [
      "Premium sports rights are among the most resilient asset classes, with global sports media rights growing to $60B+ annually.",
      "Clean motorsport series provide REC 2 with direct technology showcasing opportunities — every race is a live demonstration of our hydrogen and electric propulsion investments.",
      "Partner relationships with Oracle, Accor, L'Oréal and Leyton bring corporate hospitality, brand activation and co-investment opportunities that amplify returns.",
    ],
    applications: [
      { icon: "⛵", label: "SailGP – French Team" },
      { icon: "⚡", label: "E1 Electric Racing" },
      { icon: "🏎️", label: "Extreme H Racing" },
      { icon: "🏁", label: "Formula E" },
      { icon: "🌍", label: "Emerging Market Sports" },
      { icon: "🎮", label: "Fan Engagement Tech" },
    ],
    team: ["vishal", "fraser", "vivek"],
    related: [
      { label: "Sports Partnerships", href: "/sports/partnerships" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Solar", href: "/energy/solar" },
    ],
    partners: [
      "SailGP – French Team",
      "E1 Series",
      "Extreme H",
      "Oracle",
      "Accor",
      "L'Oréal",
      "Leyton",
      "Kylian Mbappé",
      "PIF",
    ],
  },

  "sports/partnerships": {
    title: "Sports Partnerships",
    subtitle: "Strategic alliances that amplify sustainable sport",
    sector: "sports",
    overview: [
      "Strategic partnerships are the multiplier force in REC 2's sports strategy. Beyond ownership stakes, we build commercial partnerships with sports organisations, governing bodies, venues and media companies that create mutually beneficial relationships between REC 2's technology portfolio and the global sports ecosystem.",
      "Our partnership model focuses on three value creation levers: technology integration (deploying REC 2's energy, materials and digital technologies within sports operations), sustainability credentialling (helping sports organisations achieve net-zero commitments using our clean energy solutions), and brand co-activation (linking REC 2's brand with aspirational sports properties at the highest level of global sport).",
      "Key partnership verticals include stadium decarbonisation programmes using our solar and hydrogen technologies, sports apparel and equipment using our advanced materials, data analytics partnerships that leverage AI and chip technologies, and athlete performance monitoring using our biochip innovations.",
    ],
    whyRec2: [
      "Sports partnerships provide REC 2 with access to global audiences at a fraction of traditional advertising costs, with significantly higher engagement and brand recall.",
      "Technology deployment partnerships generate direct commercial revenue while simultaneously validating REC 2 technologies in highly visible, demanding environments.",
      "The regulatory push for sports sustainability creates strong demand pull for our clean energy and materials technologies from sports organisations worldwide.",
    ],
    applications: [
      { icon: "🏟️", label: "Stadium Decarbonisation" },
      { icon: "👟", label: "Sports Materials" },
      { icon: "📈", label: "Performance Analytics" },
      { icon: "🌱", label: "Sustainability Programmes" },
      { icon: "🤝", label: "Brand Co-Activation" },
      { icon: "🌐", label: "Global Media Rights" },
    ],
    team: ["vishal", "fraser", "vivek"],
    related: [
      { label: "Sports Investments", href: "/sports/investments" },
      { label: "Solar", href: "/energy/solar" },
      { label: "Biochips", href: "/chips/biochips" },
    ],
  },

};

export const NAV_ITEMS = [
  {
    label: "Energy",
    color: "#C17B2A",
    href: "/energy/solar",
    items: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Hybrid", href: "/energy/hybrid" },
      { label: "H₂ Hybrid", href: "/energy/h2-hybrid" },
    ],
  },
  {
    label: "Recycle",
    color: "#2A7A4A",
    href: "/recycle/battery-recycling",
    items: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "Solar Recycling", href: "/recycle/solar-recycling" },
      { label: "ASWM", href: "/recycle/aswm" },
      { label: "Nuclear Recycling", href: "/recycle/nuclear-recycling" },
    ],
  },
  {
    label: "Materials",
    color: "#2856A0",
    href: "/materials/metal-alloys",
    items: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "Mod. Nuclear", href: "/materials/smr" },
    ],
  },
  {
    label: "Chips",
    color: "#1A8080",
    href: "/chips/photonics",
    items: [
      { label: "Photonics", href: "/chips/photonics" },
      { label: "Biochips", href: "/chips/biochips" },
    ],
  },
  {
    label: "Robotics",
    color: "#6B3FA0",
    href: "/robotics/flow-chemistry",
    items: [
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
      { label: "Automated Reactors", href: "/robotics/automated-reactors" },
    ],
  },
  {
    label: "Sports",
    color: "#C43820",
    href: "/sports/investments",
    items: [
      { label: "Sports Investments", href: "/sports/investments" },
      { label: "Sports Partnerships", href: "/sports/partnerships" },
    ],
  },
];

/**
 * CSR is a single page rather than a sector, and it carries the Love Paws
 * Foundation case instead of PageLayout's standard body, so it keeps its own
 * small content block here.
 */
export const CSR_PAGE = {
  title: "Corporate Social Responsibility",
  subtitle: "The social licence that makes deep-tech industry durable",
  team: ["lynette", "pratham"],
  overview: [
    "REC 2 builds where the technology arrives before the infrastructure — solar farms on agricultural land, recycling plants at the edge of industrial towns, materials facilities in districts with thin technical education. In every one of them the same discipline decides whether the project survives its first five years: draw a boundary, measure a baseline inside it, and pay against a verified outcome rather than a reported effort. That discipline is what we mean by corporate responsibility. It is not a line item in the annual report.",
    "Love Paws Foundation is where we put that discipline to work outside our own fence line. India runs stray animal sterilisation programmes without a count, without a threshold and without proof — roughly 6.2 crore free-roaming dogs against an official census of 1.53 crore, 47.5 lakh reported dog bites in 2025, and no national dashboard that can name a single locality as finished. Money is not the binding constraint. The missing piece is the one that would sink any of our own plants: nobody owns a boundary, and nothing is verified.",
    "So Love Paws proposes the opposite of a charity campaign. A defined zone. A measured population as the denominator. Every animal traceable from catch to release on a record that cannot be faked, and payment released only when the chain is complete. It is our own operating logic pointed at a public health failure. What follows is the full argument, the evidence behind it, and the ask.",
  ],
};

/** Single page, no sub-sections — rendered beside NAV_ITEMS, not inside it. */
export const CSR_NAV = { label: "CSR", color: "#9C3F63", href: "/csr" };

export const SECTOR_DESCRIPTIONS: Record<SectorKey, string> = {
  energy:
    "Solar, hydrogen and hybrid systems — clean energy production at every scale.",
  recycle:
    "Battery, solar and advanced solid waste management — closing the loop on critical materials.",
  materials:
    "Advanced alloys, rare earths and modular nuclear — materials for the most demanding applications on Earth.",
  chips:
    "Photonic and bio-integrated chips — computing and sensing at the frontier of physics.",
  robotics:
    "Automated chemical synthesis and industrial robotics — factories that think.",
  sports:
    "Sustainable sports investments and global partnerships — where elite performance meets innovation.",
  csr:
    "Local capability, environmental restitution and audited impact — the social licence deep-tech industry runs on.",
};

export const SECTOR_NUMBERS: Record<SectorKey, string> = {
  energy: "01",
  recycle: "02",
  materials: "03",
  chips: "04",
  robotics: "05",
  sports: "06",
  csr: "07",
};

export const SECTOR_ICONS: Record<SectorKey, string> = {
  energy: "⚡",
  recycle: "♻",
  materials: "◈",
  chips: "◉",
  robotics: "⬡",
  sports: "△",
  csr: "❖",
};
