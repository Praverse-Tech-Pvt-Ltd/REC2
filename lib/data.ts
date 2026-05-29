export type Person = {
  name: string;
  email: string;
  role: string;
  initials: string;
};

export type SectorKey =
  | "energy"
  | "materials"
  | "chips"
  | "robotics"
  | "sports"
  | "defence";

export const SECTOR_COLORS: Record<SectorKey, string> = {
  energy: "#2e7d32",
  materials: "#6a1b9a",
  chips: "#e65100",
  robotics: "#00695c",
  sports: "#1565c0",
  defence: "#f57c00",
};

export const SECTOR_GRADIENTS: Record<SectorKey, string> = {
  energy: "from-green-800 to-green-600",
  materials: "from-purple-900 to-purple-700",
  chips: "from-orange-900 to-orange-600",
  robotics: "from-teal-900 to-teal-600",
  sports: "from-blue-900 to-blue-700",
  defence: "from-amber-700 to-amber-500",
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
  "energy/hydrogen-hybrid": {
    title: "Hydrogen + Hybrid Energy",
    subtitle: "Clean fuel for a zero-carbon future",
    sector: "energy",
    overview: [
      "Hydrogen is the most abundant element in the universe — and the cleanest fuel we can produce at scale. Rec 2 is at the forefront of green hydrogen production, where renewable electricity splits water into hydrogen and oxygen with zero emissions. Our hybrid energy systems combine hydrogen with solar, wind, and battery storage to deliver reliable, dispatchable clean power.",
      "The transition from fossil fuels demands energy that can be stored, transported and deployed on demand. Hydrogen uniquely fulfills this requirement. From powering heavy industry and shipping to fuelling next-generation vehicles and aviation, hydrogen is the bridge between intermittent renewables and always-on energy demand.",
      "Rec 2's hydrogen portfolio encompasses electrolyser technology partnerships, green ammonia production, hydrogen storage innovations, and hybrid microgrids designed for remote industrial operations and data centres.",
    ],
    whyRec2: [
      "Global green hydrogen capacity is projected to reach 300 GW by 2030, representing a $500B+ investment opportunity.",
      "Rec 2 brings together energy policy expertise, engineering partnerships, and strategic capital to accelerate hydrogen deployment at scale.",
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
      { label: "Defence", href: "/defence" },
    ],
  },

  "energy/solar": {
    title: "Solar Energy",
    subtitle: "Photovoltaic innovation at utility scale",
    sector: "energy",
    overview: [
      "Solar photovoltaic technology has become the world's cheapest source of electricity, and Rec 2 is investing across the full solar value chain — from high-efficiency panel manufacturing to large-scale utility farms and distributed rooftop networks.",
      "Our solar strategy focuses on next-generation cell technologies including perovskite-silicon tandems that push efficiencies beyond 30%, bifacial panels for higher yield, and agrivoltaic systems that combine food production with energy generation on the same land.",
      "Rec 2 partners with developers, grid operators and off-takers to structure bankable solar projects across emerging markets in South Asia, the Middle East and Africa — regions with exceptional solar irradiance and rapidly growing energy demand.",
    ],
    whyRec2: [
      "Solar additions will exceed 500 GW annually by 2026. Early investment in next-gen cell technology creates lasting competitive advantage.",
      "Rec 2's network across policy, finance and technology enables end-to-end project delivery from land acquisition to grid connection.",
      "Integration with our battery recycling and energy storage capabilities creates vertically integrated clean energy value chains.",
    ],
    applications: [
      { icon: "☀️", label: "Utility-Scale Farms" },
      { icon: "🏘️", label: "Distributed Rooftop" },
      { icon: "🌾", label: "Agrivoltaics" },
      { icon: "🔬", label: "Perovskite R&D" },
      { icon: "📡", label: "Off-Grid Systems" },
      { icon: "🏗️", label: "Building-Integrated PV" },
    ],
    team: ["vishal"],
    related: [
      { label: "Renewable Solar", href: "/energy/renewable-solar" },
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
    ],
  },

  "energy/renewable-solar": {
    title: "Renewable Solar",
    subtitle: "Green grids powering sustainable communities",
    sector: "energy",
    overview: [
      "Renewable solar goes beyond the panel — it encompasses the intelligent grid infrastructure, energy management systems, and community ownership models that make solar power truly transformative. Rec 2 focuses on building green grids that integrate seamlessly with existing energy infrastructure while enabling new decentralised energy models.",
      "Virtual power plants, peer-to-peer energy trading, and AI-driven demand forecasting are central to our renewable solar thesis. These technologies allow communities, businesses and utilities to optimise solar generation in real time, reducing curtailment and maximising the economic value of each kilowatt-hour generated.",
      "Our work includes greenfield solar parks with integrated storage, solar-powered desalination projects, and community solar programmes that democratise access to clean energy in underserved regions.",
    ],
    whyRec2: [
      "The renewable energy transition requires not just generation capacity but intelligent grid infrastructure — an area where Rec 2's technology partnerships provide distinct advantage.",
      "Carbon credit generation from certified renewable projects is a key revenue stream, and Rec 2's expertise in carbon markets enhances project economics significantly.",
      "Our robotics and automation capabilities enable cost-effective operations and maintenance at scale.",
    ],
    applications: [
      { icon: "🌍", label: "Green Grid Infrastructure" },
      { icon: "🤖", label: "AI Energy Management" },
      { icon: "💱", label: "Peer-to-Peer Trading" },
      { icon: "💧", label: "Solar Desalination" },
      { icon: "🏙️", label: "Smart City Integration" },
      { icon: "📊", label: "Carbon Credit Generation" },
    ],
    team: ["vishal"],
    related: [
      { label: "Solar", href: "/energy/solar" },
      { label: "Robotics", href: "/robotics/automated-reactors" },
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
    ],
  },

  "energy/battery-recycling": {
    title: "Battery Recycling",
    subtitle: "Second-life solutions for a circular energy economy",
    sector: "energy",
    overview: [
      "The electric vehicle revolution is creating an unprecedented wave of end-of-life lithium-ion batteries — and with it, a massive opportunity in battery recycling. Rec 2 is investing in hydrometallurgical and direct recycling technologies that recover lithium, cobalt, nickel and manganese at commercial scale, closing the loop on critical battery materials.",
      "Second-life battery applications are equally compelling. EV batteries that no longer meet automotive performance standards retain 70-80% of their capacity — making them ideal for stationary energy storage in solar farms, industrial facilities and grid-scale applications. Rec 2 structures second-life projects that extend battery value while reducing waste.",
      "Our materials expertise in rare metals and metal alloys gives us deep insight into battery chemistry and recycling economics, enabling smarter investment decisions across the entire battery value chain.",
    ],
    whyRec2: [
      "Global battery recycling market is projected to reach $23B by 2030. Rec 2's early positioning across recycling technology and second-life applications creates compounding advantage.",
      "Regulatory mandates in the EU, US and China are driving mandatory recycling rates, guaranteeing feedstock for recycling operations.",
      "Synergies with our rare metals portfolio ensure recovered materials can be channelled into new battery production, creating circular supply chains.",
    ],
    applications: [
      { icon: "♻️", label: "Li-Ion Recycling" },
      { icon: "🔋", label: "Second-Life Storage" },
      { icon: "⛏️", label: "Critical Material Recovery" },
      { icon: "🏭", label: "Gigafactory Supply" },
      { icon: "🌱", label: "Carbon Footprint Reduction" },
      { icon: "📦", label: "Battery Logistics" },
    ],
    team: ["vishal"],
    related: [
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "Solar", href: "/energy/solar" },
      { label: "Recycling", href: "/energy/recycling" },
    ],
  },

  "energy/recycling": {
    title: "Energy Recycling",
    subtitle: "Circular economy principles for energy systems",
    sector: "energy",
    overview: [
      "Energy recycling encompasses the recovery, repurposing and optimisation of energy flows across industrial and commercial systems. Rec 2 approaches this through waste heat recovery, energy-from-waste technologies, industrial symbiosis networks, and the circular economy principles that minimise energy losses across entire value chains.",
      "Industrial waste heat represents one of the largest untapped energy sources globally — billions of kilowatt-hours are vented to atmosphere every year from steel mills, cement plants, refineries and data centres. Rec 2 invests in organic Rankine cycle systems, absorption chillers and heat pump technologies that capture and utilise this wasted energy.",
      "Our broader recycling thesis extends to the full lifecycle of energy equipment — from solar panel recycling and wind turbine blade repurposing to transformer oil reclamation and power electronics refurbishment — creating a truly circular energy economy.",
    ],
    whyRec2: [
      "Waste heat recovery alone represents a $15B+ annual opportunity in industrial energy efficiency, with short payback periods and strong ESG credentials.",
      "Rec 2's presence across materials, manufacturing and energy sectors enables cross-sector partnerships that unlock circular economy value chains.",
      "Carbon credits generated from energy recycling projects provide additional revenue streams that improve project IRR.",
    ],
    applications: [
      { icon: "🌡️", label: "Waste Heat Recovery" },
      { icon: "🏗️", label: "Industrial Symbiosis" },
      { icon: "🔄", label: "Energy-from-Waste" },
      { icon: "❄️", label: "Absorption Cooling" },
      { icon: "🛠️", label: "Equipment Lifecycle" },
      { icon: "📈", label: "Efficiency Analytics" },
    ],
    team: ["vishal"],
    related: [
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
      { label: "Materials", href: "/materials/metal-alloys" },
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
    ],
  },

  "materials/metal-alloys": {
    title: "Metal Alloys",
    subtitle: "Advanced metallurgy for defence and deep tech",
    sector: "materials",
    overview: [
      "Advanced metal alloys form the backbone of modern defence systems, aerospace structures, and next-generation energy infrastructure. Rec 2 invests in novel alloy development — from titanium-aluminium intermetallics for hypersonic applications to nickel superalloys for jet engines and high-entropy alloys that push the boundaries of strength, temperature resistance and corrosion performance.",
      "Our materials portfolio is built around dual-use applications: alloys developed for military platforms often find commercial applications in power generation turbines, oil and gas equipment, and medical implants. This dual-use strategy maximises R&D return on investment while building strategic resilience.",
      "Rec 2 partners with national laboratories, tier-1 defence contractors and specialist foundries to develop, qualify and commercialise alloys that meet the most demanding specifications in the world.",
    ],
    whyRec2: [
      "Global advanced alloys market exceeds $150B annually, with defence and aerospace segments growing at 6-8% CAGR driven by rearmament programmes worldwide.",
      "Rec 2's defence connectivity provides privileged access to classified material requirements, enabling development of proprietary alloys with government-guaranteed offtake.",
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
      { label: "Defence", href: "/defence" },
    ],
  },

  "materials/rare-metals": {
    title: "Rare Metals",
    subtitle: "Strategic minerals for the technology age",
    sector: "materials",
    overview: [
      "Rare earth elements and critical minerals are the invisible foundation of the modern economy. From the neodymium in EV motors and wind turbine generators to the cobalt in lithium-ion batteries and the indium in solar panels — the clean energy transition is as much a mining challenge as an engineering one. Rec 2 is building strategic positions across rare metal supply chains before mainstream capital arrives.",
      "China currently controls 60-85% of global rare earth production and processing, creating acute supply chain vulnerabilities for Western nations and their allies. Rec 2 works with allied governments and mining companies to develop alternative supply chains across Africa, Australia, Canada and Central Asia — a mission with both commercial and strategic national importance.",
      "Beyond mining, Rec 2 invests in rare metal processing and refining technologies, urban mining from electronic waste, and the development of rare-earth-free alternatives for critical applications.",
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
      "Small Modular Reactors represent the most significant innovation in nuclear energy in decades. Unlike traditional gigawatt-scale nuclear plants that require 15+ years and tens of billions to build, SMRs are factory-manufactured, scalable and deployable in 3-5 years at a fraction of the cost. Rec 2 is positioning at the intersection of advanced materials science and nuclear energy development.",
      "The materials challenges in SMR development are immense and fascinating: reactor pressure vessels require steels with extraordinary radiation resistance and fracture toughness; fuel cladding demands zirconium alloys with optimised neutron cross-sections; and heat exchangers need nickel alloys that maintain integrity at 700°C for decades. Rec 2's advanced materials expertise makes us a natural partner for SMR developers.",
      "Our SMR strategy focuses on materials qualification and supply, strategic investment in SMR developers, and the development of SMR-powered industrial complexes that provide clean baseload power to energy-intensive manufacturing including green hydrogen production and data centres.",
    ],
    whyRec2: [
      "SMR orders are accelerating globally — the UK, Canada, US and Poland have all committed to SMR programmes, with cumulative investment exceeding $20B.",
      "Materials qualification is the critical path for SMR deployment, and Rec 2's metallurgical expertise positions us as an essential supply chain partner.",
      "SMR-powered hydrogen production is the most economical pathway to 24/7 green hydrogen — a market Rec 2 is uniquely positioned to capture.",
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
      { label: "Defence", href: "/defence" },
    ],
  },

  "chips/photonics": {
    title: "Photonics",
    subtitle: "Light-speed computing and sensing",
    sector: "chips",
    overview: [
      "Photonic integrated circuits use light rather than electrons to process and transmit information, enabling speeds and energy efficiencies that silicon electronics cannot match. Rec 2 is investing in photonic chip design, fabrication and integration — targeting applications in AI accelerators, quantum computing interfaces, LiDAR systems and ultra-fast optical communications.",
      "The convergence of photonics with AI hardware is creating a new paradigm in computing. Optical neural networks can perform matrix multiplications — the fundamental operation in deep learning — at the speed of light with near-zero energy cost. Rec 2's photonics portfolio is built around this convergence, targeting the data centre, defence and automotive markets.",
      "Defence applications are particularly compelling: photonic chips enable laser-based directed energy weapons, hypersonic vehicle guidance systems, and quantum key distribution networks that are immune to classical computing attacks. Rec 2's dual-use approach maximises the strategic and commercial value of photonic technology investments.",
    ],
    whyRec2: [
      "Photonic chip market is growing at 25% CAGR, driven by AI infrastructure buildout and defence modernisation programmes.",
      "Rec 2's position across chips, defence and materials provides unique access to both military and commercial photonics programmes.",
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
      { label: "Defence", href: "/defence" },
      { label: "Robotics", href: "/robotics/automated-reactors" },
    ],
  },

  "chips/biochips": {
    title: "Biochips",
    subtitle: "Diagnostics and biosensing at the nanoscale",
    sector: "chips",
    overview: [
      "Biochips integrate biological molecules with microelectronic substrates to create miniaturised platforms for diagnostics, drug discovery and environmental monitoring. Rec 2 invests in the full biochip ecosystem — from lab-on-chip devices for point-of-care diagnostics to DNA sequencing chips and organ-on-chip systems that replace animal testing in pharmaceutical development.",
      "The COVID-19 pandemic demonstrated the global demand for rapid, portable, accurate diagnostics. Biochips are the enabling technology for the next generation of pandemic preparedness: multiplexed assays that detect hundreds of pathogens simultaneously, wearable biosensors for continuous health monitoring, and implantable chips for chronic disease management.",
      "From a defence perspective, biochips are critical for chemical and biological threat detection, field-deployable medical diagnostics, and the development of medical countermeasures. Rec 2's biochip investments are structured to serve both civilian healthcare and defence readiness markets.",
    ],
    whyRec2: [
      "Biochip market is projected to exceed $30B by 2030, with the point-of-care diagnostics segment growing fastest as healthcare decentralises.",
      "Defence and homeland security demand for portable biological threat detection creates guaranteed government procurement for best-in-class biochip technologies.",
      "Rec 2's chemistry and materials expertise accelerates biochip surface functionalisation — the critical bottleneck in device sensitivity and specificity.",
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
      { label: "Defence", href: "/defence" },
    ],
  },

  "robotics/flow-chemistry": {
    title: "Flow Chemistry",
    subtitle: "Continuous automated chemical synthesis",
    sector: "robotics",
    overview: [
      "Flow chemistry replaces batch reactors with continuous tubular systems where reagents flow through precisely controlled microreactors, mixing, reacting and separating in a seamless automated process. Rec 2 is investing in flow chemistry systems that dramatically accelerate pharmaceutical synthesis, specialty chemical production and green chemistry — reducing waste, improving safety and enabling chemistries impossible in batch mode.",
      "The advantages of flow chemistry are profound: reactions can be run at extreme temperatures and pressures safely, hazardous intermediates are consumed immediately rather than accumulated, and scale-up from laboratory to production is achieved simply by running reactors in parallel ('numbering up'). Rec 2 sees flow chemistry as foundational to the future of chemical manufacturing.",
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
      { label: "Defence", href: "/defence" },
    ],
  },

  "robotics/automated-reactors": {
    title: "Automated Reactors",
    subtitle: "Industrial automation for next-generation manufacturing",
    sector: "robotics",
    overview: [
      "Automated reactor systems represent the convergence of robotics, process control and artificial intelligence in industrial manufacturing. Rec 2 invests in fully autonomous reactor platforms for hydrogen electrolysis, nuclear fuel processing, advanced materials synthesis and pharmaceutical manufacturing — systems that operate continuously with minimal human intervention.",
      "The integration of AI-driven process optimisation with robotic handling and advanced sensor arrays creates reactors that self-tune, self-correct and self-maintain. Rec 2 partners with industrial automation companies and research institutions to develop the next generation of autonomous chemical and materials processing plants.",
      "From automated electrolyser farms that produce green hydrogen to robotic SMR fuel fabrication facilities and AI-optimised metal alloy foundries, Rec 2's automated reactor thesis cuts across every sector in our portfolio — creating operational efficiencies and quality improvements that transform project economics.",
    ],
    whyRec2: [
      "Industrial automation in chemical and materials processing is a $60B+ market growing at 8% annually, driven by labour costs, quality requirements and safety imperatives.",
      "Rec 2's cross-sector presence enables the development of reactor automation solutions with multiple customer segments, reducing commercial risk.",
      "Automated reactors are central to Rec 2's hydrogen, SMR and flow chemistry strategies — creating internal demand that de-risks early-stage development.",
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
      "Rec 2's sports investment thesis is built around three converging megatrends: the electrification of motorsport, the globalisation of premium sporting events, and the growing demand for ESG-aligned investment in entertainment and media. We target sports properties at the intersection of technology, sustainability and global audience growth — the opposite of traditional asset-heavy sports ownership.",
      "Our portfolio centres on next-generation racing series that showcase clean technology to global audiences of hundreds of millions. SailGP's French Team, E1 Series electric powerboat racing, and Extreme H hydrogen off-road racing are not just sports investments — they are rolling showcases for Rec 2's energy and propulsion technologies, providing unparalleled brand visibility and technology validation.",
      "Beyond motorsport, we build strategic positions in sports that are undergoing digital transformation: sports analytics platforms, athlete performance technology, and the emerging convergence of sport with web3 fan engagement and tokenised ownership models.",
    ],
    whyRec2: [
      "Premium sports rights are among the most resilient asset classes, with global sports media rights growing to $60B+ annually.",
      "Clean motorsport series provide Rec 2 with direct technology showcasing opportunities — every race is a live demonstration of our hydrogen and electric propulsion investments.",
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
      { label: "Defence", href: "/defence" },
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
      "Strategic partnerships are the multiplier force in Rec 2's sports strategy. Beyond ownership stakes, we build commercial partnerships with sports organisations, governing bodies, venues and media companies that create mutually beneficial relationships between Rec 2's technology portfolio and the global sports ecosystem.",
      "Our partnership model focuses on three value creation levers: technology integration (deploying Rec 2's energy, materials and digital technologies within sports operations), sustainability credentialling (helping sports organisations achieve net-zero commitments using our clean energy solutions), and brand co-activation (linking Rec 2's brand with aspirational sports properties at the highest level of global sport).",
      "Key partnership verticals include stadium decarbonisation programmes using our solar and hydrogen technologies, sports apparel and equipment using our advanced materials, data analytics partnerships that leverage AI and chip technologies, and athlete performance monitoring using our biochip innovations.",
    ],
    whyRec2: [
      "Sports partnerships provide Rec 2 with access to global audiences at a fraction of traditional advertising costs, with significantly higher engagement and brand recall.",
      "Technology deployment partnerships generate direct commercial revenue while simultaneously validating Rec 2 technologies in highly visible, demanding environments.",
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

  defence: {
    title: "Defence",
    subtitle: "The central hub of deep-tech innovation at Rec 2",
    sector: "defence",
    overview: [
      "Defence sits at the heart of Rec 2's innovation architecture — not as a conventional arms business, but as the strategic connective tissue that links advanced materials, chip technologies and robotic systems into integrated platforms for national security and dual-use commercial applications. Our defence thesis is built on deep-tech, not weapons systems.",
      "The modern battlefield is defined by information dominance, autonomous systems and advanced materials — precisely the domains where Rec 2's portfolio is concentrated. Photonic chips for electronic warfare, rare metal supply chain security, biochips for field diagnostics, flow chemistry for munitions, and automated reactors for forward-deployed energy production — each of our technology verticals has a clear defence application.",
      "Rec 2 operates as a dual-use innovation platform: technologies developed for defence requirements find civilian applications in energy, healthcare and industry, while commercial innovations are adapted and hardened for defence use. This bidirectional flow maximises R&D efficiency and creates technology portfolios with multiple revenue streams.",
    ],
    whyRec2: [
      "Global defence spending exceeds $2.2T annually and is growing at its fastest rate since the Cold War, creating unprecedented demand for advanced technologies.",
      "Dual-use innovation allows Rec 2 to access defence R&D funding while retaining commercial rights to civilian applications — the optimal structure for maximising technology value.",
      "Our unique combination of materials, chips and robotics expertise mirrors the core technology priorities of all major defence procurement programmes globally.",
    ],
    applications: [
      { icon: "🛡️", label: "Electronic Warfare" },
      { icon: "🤖", label: "Autonomous Systems" },
      { icon: "⚛️", label: "Nuclear Propulsion" },
      { icon: "🧬", label: "Field Diagnostics" },
      { icon: "🔋", label: "Advanced Power Systems" },
      { icon: "📡", label: "Communications Security" },
    ],
    team: ["vishal"],
    related: [
      { label: "Materials", href: "/materials/metal-alloys" },
      { label: "Chips", href: "/chips/photonics" },
      { label: "Robotics", href: "/robotics/automated-reactors" },
    ],
  },
};

export const NAV_ITEMS = [
  {
    label: "Energy",
    color: "#2e7d32",
    href: "/energy/hydrogen-hybrid",
    items: [
      { label: "Hydrogen + Hybrid", href: "/energy/hydrogen-hybrid" },
      { label: "Solar", href: "/energy/solar" },
      { label: "Renewable Solar", href: "/energy/renewable-solar" },
      { label: "Battery Recycling", href: "/energy/battery-recycling" },
      { label: "Recycling", href: "/energy/recycling" },
    ],
  },
  {
    label: "Materials",
    color: "#6a1b9a",
    href: "/materials/metal-alloys",
    items: [
      { label: "Metal Alloys", href: "/materials/metal-alloys" },
      { label: "Rare Metals", href: "/materials/rare-metals" },
      { label: "SMR", href: "/materials/smr" },
    ],
  },
  {
    label: "Chips",
    color: "#e65100",
    href: "/chips/photonics",
    items: [
      { label: "Photonics", href: "/chips/photonics" },
      { label: "Biochips", href: "/chips/biochips" },
    ],
  },
  {
    label: "Robotics",
    color: "#00695c",
    href: "/robotics/flow-chemistry",
    items: [
      { label: "Flow Chemistry", href: "/robotics/flow-chemistry" },
      { label: "Automated Reactors", href: "/robotics/automated-reactors" },
    ],
  },
  {
    label: "Sports",
    color: "#1565c0",
    href: "/sports/investments",
    items: [
      { label: "Sports Investments", href: "/sports/investments" },
      { label: "Sports Partnerships", href: "/sports/partnerships" },
    ],
  },
];

export const SECTOR_DESCRIPTIONS: Record<SectorKey, string> = {
  energy:
    "Clean energy across hydrogen, solar and circular systems — powering a zero-carbon future.",
  materials:
    "Advanced alloys, rare earths and modular nuclear — materials for the most demanding applications on Earth.",
  chips:
    "Photonic and bio-integrated chips — computing and sensing at the frontier of physics.",
  robotics:
    "Automated chemical synthesis and industrial robotics — factories that think.",
  sports:
    "Sustainable sports investments and global partnerships — where elite performance meets innovation.",
  defence:
    "Deep-tech dual-use innovation hub — connecting materials, chips and robotics for national security.",
};

export const SECTOR_ICONS: Record<SectorKey, string> = {
  energy: "⚡",
  materials: "🧪",
  chips: "💡",
  robotics: "🤖",
  sports: "🏆",
  defence: "🛡️",
};
