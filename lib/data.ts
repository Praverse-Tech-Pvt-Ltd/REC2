export type Person = {
  name: string;
  email: string;
  role: string;
  initials: string;
};

export type SectorKey =
  | "energy"
  | "recycle"
  | "materials"
  | "chips"
  | "robotics"
  | "sports";

export const SECTOR_COLORS: Record<SectorKey, string> = {
  energy:    "#5f8a62",
  recycle:   "#6b8a3e",
  materials: "#7260a0",
  chips:     "#9c6038",
  robotics:  "#3a7d74",
  sports:    "#3a6a9c",
};

export const SECTOR_GRADIENTS: Record<SectorKey, string> = {
  energy:    "from-green-900 to-green-700",
  recycle:   "from-lime-900 to-lime-700",
  materials: "from-purple-950 to-purple-800",
  chips:     "from-orange-950 to-orange-700",
  robotics:  "from-teal-950 to-teal-700",
  sports:    "from-blue-950 to-blue-800",
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
    role: "Sports Director",
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
    role: "Materials & Robotics Lead",
    initials: "RT",
  },
  rushabh: {
    name: "Rushabh Jain",
    email: "rushabh@prithvistrategic.com",
    role: "Strategic Advisor – Materials",
    initials: "RJ",
  },
  pratham: {
    name: "Pratham Shrivastav",
    email: "pratham.shrivastav@v-group.in",
    role: "Deep Tech Lead",
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
    team: ["vishal"],
    related: [
      { label: "Hydrogen",          href: "/energy/hydrogen" },
      { label: "Hybrid",            href: "/energy/hybrid" },
      { label: "Solar Recycling",   href: "/recycle/solar-recycling" },
    ],
  },

  "energy/hydrogen": {
    title: "Hydrogen",
    subtitle: "Green hydrogen — the clean fuel at industrial scale",
    sector: "energy",
    overview: [
      "Hydrogen is the most abundant element in the universe and the cleanest fuel we can produce at scale. REC 2 focuses on green hydrogen production where renewable electricity splits water through electrolysis — yielding hydrogen and oxygen with zero emissions. As electrolyser costs continue to fall, green hydrogen is rapidly approaching cost parity with grey hydrogen across industrial applications.",
      "REC 2's hydrogen portfolio spans electrolyser technology partnerships, green ammonia production for maritime and agricultural sectors, long-duration hydrogen storage innovations, and fuel cell deployment across industrial corridors in Europe and Asia. The Hydrogen Festival by REC 2 is the group's flagship thought-leadership platform for shaping the global hydrogen economy.",
      "Industrial decarbonisation has no viable alternative to hydrogen for sectors such as steel, cement, chemicals and long-haul transport. Green hydrogen production costs have fallen 60% in five years and are projected to reach $1/kg by 2030 in regions with abundant renewable resources — creating a step-change in addressable market size.",
    ],
    whyRec2: [
      "Global green hydrogen capacity is projected to reach 300 GW by 2030, a $500B+ investment opportunity. REC 2's early positioning across electrolysers, storage and infrastructure creates compounding advantage.",
      "REC 2 brings together energy policy expertise, engineering partnerships and strategic capital to accelerate hydrogen deployment at scale — with unique dual-use access across military logistics and critical infrastructure.",
      "Our position at the intersection of materials, SMR and energy gives us privileged access to nuclear-powered hydrogen production — the most economical pathway to 24/7 green hydrogen at industrial volumes.",
    ],
    applications: [
      { icon: "⚡", label: "Green H₂ Production" },
      { icon: "🔋", label: "Hydrogen Storage" },
      { icon: "🏭", label: "Industrial Decarbonisation" },
      { icon: "🚢", label: "Maritime Fuel Cells" },
      { icon: "✈️", label: "Aviation & Mobility" },
      { icon: "🌱", label: "Green Ammonia" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar",             href: "/energy/solar" },
      { label: "Hybrid",            href: "/energy/hybrid" },
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
    ],
  },

  "energy/hybrid": {
    title: "Hybrid Energy Systems",
    subtitle: "Multi-source combinations for resilient, dispatchable clean power",
    sector: "energy",
    overview: [
      "Hybrid energy systems combine two or more clean generation or storage technologies to overcome the intermittency limitations of any single source. REC 2 designs and invests in hybrid configurations spanning hydrogen-solar, hydrogen-nuclear (SMR-H₂), hydrogen-battery and multi-vector microgrids — delivering dispatchable clean power for industrial sites, islands, data centres and remote operations.",
      "The most compelling hybrid architecture today is the solar-hydrogen system: daytime solar surplus generates green hydrogen via electrolysis, which is then reconverted via fuel cells when solar output drops. This creates a fully renewable, 24/7 dispatchable energy system with no reliance on the grid. REC 2 is actively structuring projects across Southeast Asia and the Middle East using this architecture.",
      "Hydrogen-nuclear hybrids represent the next frontier: SMR baseload produces low-cost, always-on electricity and heat, which drives large-scale electrolysis during off-peak demand periods. The resulting hydrogen is stored and dispatched to industry, mobility or reconversion. REC 2's unique position across materials, SMR and energy makes us a natural integrator of this emerging value chain.",
    ],
    whyRec2: [
      "Hybrid systems solve intermittency — the single largest barrier to 100% renewable grids. Dispatchable clean power commands a 30–50% premium over spot solar or wind in PPA negotiations.",
      "REC 2's cross-sector presence across hydrogen, solar, SMR and battery storage creates integration capability that single-technology investors cannot replicate — enabling us to structure projects and equity positions that span the full value chain.",
      "AI-driven energy management systems for hybrid plants generate compounding process IP and data assets. Digital twin operations reduce OPEX by 20–35% versus conventional O&M.",
    ],
    applications: [
      { icon: "⚡", label: "Solar-Hydrogen Systems" },
      { icon: "⚛️", label: "SMR-Hydrogen Hybrid" },
      { icon: "🔋", label: "Hydrogen-Battery Storage" },
      { icon: "🌐", label: "Hybrid Microgrids" },
      { icon: "🤖", label: "AI Energy Management" },
      { icon: "🏭", label: "Industrial Hybrid Plants" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar",    href: "/energy/solar" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "SMR",      href: "/materials/smr" },
    ],
  },

  // ── RECYCLE ──────────────────────────────────────────────────────────

  "recycle/battery-recycling": {
    title: "Battery Recycling",
    subtitle: "Second-life solutions for a circular energy economy",
    sector: "recycle",
    overview: [
      "The electric vehicle revolution is creating an unprecedented wave of end-of-life lithium-ion batteries — and with it, a massive opportunity in battery recycling. REC 2 invests in hydrometallurgical and direct recycling technologies that recover lithium, cobalt, nickel and manganese at commercial scale, closing the loop on critical battery materials.",
      "Second-life battery applications are equally compelling. EV batteries that no longer meet automotive performance standards retain 70–80% of their original capacity — making them ideal for stationary energy storage in solar farms, industrial facilities and grid-scale applications. REC 2 structures second-life projects that extend battery value while reducing waste and carbon footprint.",
      "Our materials expertise in rare metals and metal alloys gives us deep insight into battery chemistry and recycling economics, enabling smarter investment decisions across the entire battery value chain from collection logistics to refined material offtake.",
    ],
    whyRec2: [
      "Global battery recycling market is projected to reach $23B by 2030. EU Battery Regulation mandates 70% recycled content by 2030 — guaranteeing feedstock for recycling operations and regulatory tailwind for investment.",
      "Recovered materials are priced at 60–80% of virgin price, improving project economics. Second-life battery systems cost 40% less than new storage, dramatically improving solar and renewable project returns.",
      "Synergies with REC 2's rare metals portfolio ensure recovered materials flow into new battery production, creating closed-loop supply chains that command strategic premium from battery and EV manufacturers.",
    ],
    applications: [
      { icon: "♻️", label: "Li-Ion Processing" },
      { icon: "🔋", label: "Second-Life Storage" },
      { icon: "⛏️", label: "Critical Material Recovery" },
      { icon: "🏭", label: "Gigafactory Supply" },
      { icon: "🌱", label: "Carbon Footprint Reduction" },
      { icon: "📦", label: "Battery Logistics" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar Recycling", href: "/recycle/solar-recycling" },
      { label: "ASWM",            href: "/recycle/aswm" },
      { label: "Rare Metals",     href: "/materials/rare-metals" },
    ],
  },

  "recycle/solar-recycling": {
    title: "Solar Recycling",
    subtitle: "Closing the loop on photovoltaic systems",
    sector: "recycle",
    overview: [
      "The global solar industry is approaching a critical inflection point: the first large-scale wave of end-of-life solar panels — installed during the boom years of 2005–2015 — is now reaching the end of its operational life. By 2030, the world will generate an estimated 8 million tonnes of solar panel waste annually. REC 2 is building the infrastructure and technology partnerships to capture this material stream before it becomes an environmental liability.",
      "Modern crystalline silicon panels contain recoverable silicon (92%), aluminium frames (8%), silver (0.1%), copper and glass. REC 2 invests in thermal, mechanical and chemical delamination processes that recover these materials at commercially viable purities. The recovered silver and silicon are particularly valuable — silver at spot price, and high-purity recycled silicon increasingly accepted by panel manufacturers as a feedstock.",
      "Solar recycling also intersects with REC 2's broader circular economy thesis. Waste heat from thermal delamination can be recovered via organic Rankine cycle systems. Recovered glass finds applications in construction and advanced materials. Our energy recycling framework maps these industrial symbiosis opportunities to maximise value across the full panel lifecycle.",
    ],
    whyRec2: [
      "Solar panel waste will reach 78 million tonnes cumulatively by 2050. EU WEEE and emerging Asian regulations are mandating producer take-back — creating guaranteed feedstock and compliance-driven demand for recycling capacity.",
      "Silver recovery alone generates significant revenue: a single GW of decommissioned panels yields approximately 60 tonnes of silver. REC 2's materials expertise enables optimised recovery at lower processing cost than generic e-waste recyclers.",
      "Vertical integration with REC 2's solar energy and rare metals verticals creates closed-loop supply chains — recovered silicon and silver feed directly back into new panel manufacturing via our offtake partnerships.",
    ],
    applications: [
      { icon: "☀️", label: "Panel Delamination" },
      { icon: "🔬", label: "Silicon Recovery" },
      { icon: "⚙️", label: "Silver & Metal Reclaim" },
      { icon: "🏗️", label: "Glass Recycling" },
      { icon: "🌡️", label: "Thermal Processing" },
      { icon: "🌱", label: "Second-Life Modules" },
    ],
    team: ["vishal"],
    related: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "ASWM",             href: "/recycle/aswm" },
      { label: "Solar Energy",     href: "/energy/solar" },
    ],
  },

  "recycle/aswm": {
    title: "Advanced Solid Waste Management",
    subtitle: "Converting waste streams into energy, materials and value",
    sector: "recycle",
    overview: [
      "Advanced Solid Waste Management (ASWM) encompasses the systematic collection, processing, valorisation and safe disposal of solid waste streams from municipal, industrial and construction sources. REC 2 approaches ASWM through a hierarchy of intervention — reduce, reuse, recover, recycle — deploying technologies that extract maximum value from waste before any residual material reaches landfill.",
      "REC 2's ASWM thesis centres on three converging technologies: Mechanical Biological Treatment (MBT) for sorting and stabilising mixed municipal waste; thermal conversion — including pyrolysis and gasification — for energy recovery from non-recyclable fractions; and anaerobic digestion for organic waste, producing biogas for power and heat alongside nutrient-rich digestate for agriculture. Together these pathways can divert over 90% of incoming waste from landfill while generating clean energy and recovered materials.",
      "Policy is a critical driver of ASWM economics. Extended Producer Responsibility (EPR) schemes are spreading across Asia, Africa and Latin America — shifting the cost of waste management to producers and creating guaranteed revenue streams for compliant recyclers. REC 2's policy engagement across these markets positions us ahead of regulatory mandates, securing first-mover advantage in waste infrastructure concessions.",
    ],
    whyRec2: [
      "Global solid waste generation will reach 3.4 billion tonnes annually by 2050. Waste-to-energy and materials recovery from ASWM is a $530B+ market growing at 6% CAGR, with the highest growth in emerging markets where REC 2 is already active.",
      "EPR policy expansion is creating captive waste feedstock and compliance-driven revenue. REC 2's regulatory engagement across South Asia, Southeast Asia and Africa provides privileged access to concession opportunities before markets are competed.",
      "ASWM integrates naturally with REC 2's energy and recycling verticals — biogas feeds into hybrid energy systems, recovered metals flow into our materials supply chains, and waste heat is captured via energy recycling infrastructure.",
    ],
    applications: [
      { icon: "🏭", label: "Mechanical Biological Treatment" },
      { icon: "🔥", label: "Pyrolysis & Gasification" },
      { icon: "🌱", label: "Anaerobic Digestion" },
      { icon: "⚡", label: "Waste-to-Energy" },
      { icon: "🌍", label: "EPR Policy & Compliance" },
      { icon: "🤖", label: "Smart Waste Infrastructure" },
    ],
    team: ["vishal"],
    related: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "Solar Recycling",   href: "/recycle/solar-recycling" },
      { label: "Flow Chemistry",    href: "/robotics/flow-chemistry" },
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
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "materials/metal-alloys": {
    title: "Metal Alloys",
    subtitle: "Advanced metallurgy for defence and deep tech",
    sector: "materials",
    overview: [
      "Advanced metal alloys form the backbone of modern defence systems, aerospace structures, and next-generation energy infrastructure. REC 2 invests in novel alloy development — from titanium-aluminium intermetallics for hypersonic applications to nickel superalloys for jet engines and high-entropy alloys that push the boundaries of strength, temperature resistance and corrosion performance.",
      "Our materials portfolio is built around dual-use applications: alloys developed for military platforms often find commercial applications in power generation turbines, oil and gas equipment, and medical implants. This dual-use strategy maximises R&D return on investment while building strategic resilience.",
      "REC 2 partners with national laboratories, tier-1 defence contractors and specialist foundries to develop, qualify and commercialise alloys that meet the most demanding specifications in the world.",
    ],
    whyRec2: [
      "Global advanced alloys market exceeds $150B annually, with defence and aerospace segments growing at 6-8% CAGR driven by rearmament programmes worldwide.",
      "REC 2's defence connectivity provides privileged access to classified material requirements, enabling development of proprietary alloys with government-guaranteed offtake.",
      "Our rare metals expertise ensures secure supply of critical alloying elements, a strategic advantage as geopolitical tensions tighten global supply chains.",
    ],
    applications: [
      { icon: "✈️", label: "Aerospace Structures" },
      { icon: "🛡️", label: "Armour Systems" },
      { icon: "⚙️", label: "Turbine Components" },
      { icon: "🚀", label: "Hypersonic Materials" },
      { icon: "🏥", label: "Medical Implants" },
      { icon: "⚡", label: "Energy Equipment" },
    ],
    team: ["vishal", "rishi", "rushabh"],
    related: [
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "SMR", href: "/materials/smr" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "materials/rare-metals": {
    title: "Rare Metals",
    subtitle: "Strategic minerals for the technology age",
    sector: "materials",
    overview: [
      "Rare earth elements and critical minerals are the invisible foundation of the modern economy. From the neodymium in EV motors and wind turbine generators to the cobalt in lithium-ion batteries and the indium in solar panels — the clean energy transition is as much a mining challenge as an engineering one. REC 2 is building strategic positions across rare metal supply chains before mainstream capital arrives.",
      "China currently controls 60-85% of global rare earth production and processing, creating acute supply chain vulnerabilities for Western nations and their allies. REC 2 works with allied governments and mining companies to develop alternative supply chains across Africa, Australia, Canada and Central Asia — a mission with both commercial and strategic national importance.",
      "Beyond mining, REC 2 invests in rare metal processing and refining technologies, urban mining from electronic waste, and the development of rare-earth-free alternatives for critical applications.",
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
    team: ["vishal", "rishi", "rushabh"],
    related: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "SMR", href: "/materials/smr" },
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
    ],
  },

  "materials/smr": {
    title: "Small Nuclear Reactors",
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
    team: ["vishal", "rishi", "rushabh"],
    related: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
      { label: "Robotics", href: "/robotics/flow-chemistry" },
    ],
  },

  "chips/photonics": {
    title: "Photonics",
    subtitle: "Light-speed computing and sensing",
    sector: "chips",
    overview: [
      "Photonic integrated circuits use light rather than electrons to process and transmit information, enabling speeds and energy efficiencies that silicon electronics cannot match. REC 2 is investing in photonic chip design, fabrication and integration — targeting applications in AI accelerators, quantum computing interfaces, LiDAR systems and ultra-fast optical communications.",
      "The convergence of photonics with AI hardware is creating a new paradigm in computing. Optical neural networks can perform matrix multiplications — the fundamental operation in deep learning — at the speed of light with near-zero energy cost. REC 2's photonics portfolio is built around this convergence, targeting the data centre, defence and automotive markets.",
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
      "Biochips integrate biological molecules with microelectronic substrates to create miniaturised platforms for diagnostics, drug discovery and environmental monitoring. REC 2 invests in the full biochip ecosystem — from lab-on-chip devices for point-of-care diagnostics to DNA sequencing chips and organ-on-chip systems that replace animal testing in pharmaceutical development.",
      "The COVID-19 pandemic demonstrated the global demand for rapid, portable, accurate diagnostics. Biochips are the enabling technology for the next generation of pandemic preparedness: multiplexed assays that detect hundreds of pathogens simultaneously, wearable biosensors for continuous health monitoring, and implantable chips for chronic disease management.",
      "From a defence perspective, biochips are critical for chemical and biological threat detection, field-deployable medical diagnostics, and the development of medical countermeasures. REC 2's biochip investments are structured to serve both civilian healthcare and defence readiness markets.",
    ],
    whyRec2: [
      "Biochip market is projected to exceed $30B by 2030, with the point-of-care diagnostics segment growing fastest as healthcare decentralises.",
      "Defence and homeland security demand for portable biological threat detection creates guaranteed government procurement for best-in-class biochip technologies.",
      "REC 2's chemistry and materials expertise accelerates biochip surface functionalisation — the critical bottleneck in device sensitivity and specificity.",
    ],
    applications: [
      { icon: "🧬", label: "DNA Sequencing" },
      { icon: "🔬", label: "Lab-on-Chip Diagnostics" },
      { icon: "💊", label: "Drug Discovery" },
      { icon: "🫀", label: "Continuous Health Monitoring" },
      { icon: "⚠️", label: "Biodefence Detection" },
      { icon: "🌿", label: "Environmental Biosensing" },
    ],
    team: ["vishal"],
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
      "The advantages of flow chemistry are profound: reactions can be run at extreme temperatures and pressures safely, hazardous intermediates are consumed immediately rather than accumulated, and scale-up from laboratory to production is achieved simply by running reactors in parallel ('numbering up'). REC 2 sees flow chemistry as foundational to the future of chemical manufacturing.",
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
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
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
      { icon: "📊", label: "Sports Analytics" },
      { icon: "🌍", label: "Emerging Market Sports" },
      { icon: "🎮", label: "Fan Engagement Tech" },
    ],
    team: ["vishal", "fraser", "vivek"],
    related: [
      { label: "Sports Partnerships", href: "/sports/partnerships" },
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
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
    color: "#5f8a62",
    href: "/energy/solar",
    items: [
      { label: "Solar",    href: "/energy/solar" },
      { label: "Hydrogen", href: "/energy/hydrogen" },
      { label: "Hybrid",   href: "/energy/hybrid" },
    ],
  },
  {
    label: "Recycle",
    color: "#6b8a3e",
    href: "/recycle/battery-recycling",
    items: [
      { label: "Battery Recycling", href: "/recycle/battery-recycling" },
      { label: "Solar Recycling",   href: "/recycle/solar-recycling" },
      { label: "ASWM",              href: "/recycle/aswm" },
    ],
  },
  {
    label: "Materials",
    color: "#7260a0",
    href: "/materials/metal-alloys",
    items: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Rare Metals",  href: "/materials/rare-metals" },
      { label: "SMR",          href: "/materials/smr" },
    ],
  },
  {
    label: "Chips",
    color: "#9c6038",
    href: "/chips/photonics",
    items: [
      { label: "Photonics", href: "/chips/photonics" },
      { label: "Biochips",  href: "/chips/biochips" },
    ],
  },
  {
    label: "Robotics",
    color: "#3a7d74",
    href: "/robotics/flow-chemistry",
    items: [
      { label: "Flow Chemistry",     href: "/robotics/flow-chemistry" },
      { label: "Automated Reactors", href: "/robotics/automated-reactors" },
    ],
  },
  {
    label: "Sports",
    color: "#3a6a9c",
    href: "/sports/investments",
    items: [
      { label: "Sports Investments",  href: "/sports/investments" },
      { label: "Sports Partnerships", href: "/sports/partnerships" },
    ],
  },
];

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
};

export const SECTOR_NUMBERS: Record<SectorKey, string> = {
  energy:    "01",
  recycle:   "02",
  materials: "03",
  chips:     "04",
  robotics:  "05",
  sports:    "06",
};

export const SECTOR_ICONS: Record<SectorKey, string> = {
  energy:    "⚡",
  recycle:   "♻",
  materials: "◈",
  chips:     "◉",
  robotics:  "⬡",
  sports:    "△",
};
