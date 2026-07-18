/**
 * Shared portfolio content — every direction reads from this so the
 * copy stays in sync. Only layout / typography / colour changes per
 * direction.
 */

export const IDENTITY = {
  name: "Yashkumar Shah",
  title: "Design Lead · Fire Protection",
  tagline: "Fire protection design for the buildings that shouldn't burn.",
  location: "Mullingar, Ireland",
  permit: "Critical Skills Work Permit · Stamp 1",
  years: "9+ years",
  email: "yashpshah.shah@gmail.com",
  phone: "+353 87 399 2122",
  linkedin: "linkedin.com/in/yashkumarshah",
  linkedinUrl: "https://linkedin.com/in/yashkumarshah",
} as const;

export const ABOUT_PARAS = [
  "My path into fire protection engineering started with a mechanical engineering degree at MIT Pune and early years at Thermax and Tata, learning how large industrial systems actually behave. When I moved into building services, it was a natural step: fire protection sits at the intersection of hydraulics, mechanical design, code compliance, and coordination with every other discipline on a project.",
  "Over the last nine years I've worked on more than a hundred buildings across the US and Europe. Hyperscale data centres in Ireland and mainland Europe. A large healthcare campus in Harlem. LaGuardia's airport redevelopment. Power generation facilities, ESFR warehouses, mixed-use towers, hospitality, residential. Each of them has a fire protection strategy behind the walls that I helped design.",
  "I moved to Ireland at the end of 2025 to lead fire protection design at Writech Industrial Services, working primarily on mission-critical facilities and complex infrastructure across Europe. I'm building the next stretch of my practice around the projects I care about most: the buildings that people trust to keep working, and to keep them safe.",
];

export const CURRENT_FOCUS = {
  sentence:
    "Leading fire protection design at Writech Industrial Services in Ireland — focused on hyperscale data centres, power generation, and mission-critical infrastructure across Europe.",
  tags: [
    ["Sector", "Data centres"],
    ["Region", "Europe"],
    ["Standards", "NFPA · FM Global · LPCB · European Norms"],
    ["BIM", "LOD 400 / 500"],
  ] as [string, string][],
};

export const STRENGTHS = {
  metrics: [
    { value: "75+", label: "Projects delivered" },
    { value: "€10M+", label: "Multiple project values" },
    { value: "20+", label: "Designers & BIM technicians managed" },
    { value: "LOD 500", label: "Modelling standard" },
  ],
  qualitative: [
    "BIM-driven design and coordination up to LOD 500, with fabrication-level drawings delivered directly to contractors.",
    "Detailed multi-discipline coordination resolved to zero-tolerance clash rejection.",
    "Detailed QA/QC process across every submission — recognised by clients for value engineering and design optimisation.",
    "Clear communication, well-planned submissions, and reliable delivery under contract programme.",
    "Experienced across NFPA, BS EN 12845, VdS 4001 CEA, IS EN 12845, BS 9251, and FM Global.",
  ],
};

export const SECTORS = [
  {
    name: "Hyperscale data centres",
    description:
      "Sprinkler and pre-action design for mission-critical white-space, pump rooms, and support facilities across multiple European sites.",
  },
  {
    name: "Power generation buildings",
    description:
      "Deluge, water-mist, and foam suppression for turbine halls, transformer bays, and fuel handling — written to FM Global data sheets.",
  },
  {
    name: "Warehouses",
    description:
      "In-rack and ceiling-only ESFR sprinkler design for high-piled storage, sized to actual commodity classification and storage configuration.",
  },
  {
    name: "Medical / hospital",
    description:
      "Life-safety design for hospital campuses and healthcare developments, coordinated tightly with HVAC and complex compartmentation strategies.",
  },
  {
    name: "Commercial / office buildings",
    description:
      "Sprinkler design and standpipe systems for high-rise and mid-rise offices across the US and Europe, coordinated in Revit and Navisworks.",
  },
  {
    name: "Shopping complex",
    description:
      "Integrated sprinkler design for retail podiums and shopping centres, with tenant fit-out coordination baked in from the concept stage.",
  },
  {
    name: "Hospitality",
    description:
      "Fire protection design for hotels and hospitality projects, resolving suppression, standpipe, and finish coordination in the same package.",
  },
  {
    name: "Institutional",
    description:
      "Sprinkler and hydrant design for institutional developments, sized and coordinated to project-specific occupancy and life-safety strategy.",
  },
  {
    name: "Restaurants",
    description:
      "Kitchen suppression, ceiling sprinkler layouts, and coordinated fit-out drawings for standalone restaurants and food-and-beverage tenants.",
  },
  {
    name: "Residential buildings",
    description:
      "Domestic and residential sprinkler systems for apartment blocks and mixed developments across Ireland and the UK.",
  },
  {
    name: "Town houses",
    description:
      "BS 9251 and IS EN 12845 residential sprinkler systems for townhouse developments, sized and detailed for build-ready installation.",
  },
] as const;

export const EXPERTISE = [
  {
    title: "Systems",
    items: [
      "Wet & dry sprinkler",
      "Pre-action (single & double interlock)",
      "Deluge",
      "Water mist",
      "Foam suppression (AFFF / high-expansion)",
      "Standpipe & hose systems",
      "Fire hydrant networks",
      "Fire pump rooms",
    ],
  },
  {
    title: "Codes & Standards",
    items: [
      "NFPA — 13, 14, 15, 20, 24, 750",
      "FM Global Data Sheets",
      "BS EN 12845",
      "IS EN 12845",
      "BS 9251",
      "VdS 4001 CEA",
      "LPCB Rules",
      "Irish & UK Building Regs",
    ],
  },
  {
    title: "Tools",
    items: [
      "Revit MEP",
      "AutoCAD",
      "Navisworks Manage",
      "Autosprink RVT",
      "Fire Elite / SprinkCAD",
      "Autodesk Construction Cloud",
      "Bluebeam Revu",
      "BIM 360",
    ],
  },
  {
    title: "BIM & Coordination",
    items: [
      "LOD 400 / 500 modelling",
      "Clash detection",
      "Fabrication drawings",
      "Construction packages",
      "Discipline coordination",
      "Bill of quantities",
      "Hydraulic calculations",
      "QA/QC & submittals",
    ],
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Life safety first, always.",
    body: "Every decision on a fire protection drawing has to work backwards from the same question — will this system perform the moment it matters. Coverage, density, response time, water supply, redundancy. If a design choice makes any of those weaker, it isn't a good choice, no matter how elegant it looks on the model.",
  },
  {
    title: "The best drawing is the one the fabricator can build from.",
    body: "LOD 500 isn't a badge; it's a promise to the installer. My models are meant to be built from, not admired. Sizing, hangers, offsets, and coordination clashes get resolved in the model — so the pipes go up in the field with fewer changes, less rework, and cleaner finishes.",
  },
  {
    title: "Coordination is a design deliverable.",
    body: "Fire protection lives above ceilings, alongside HVAC, cable trays, and structure. The value I bring isn't just the sprinkler design — it's the negotiation with every other discipline to make sure the design still works when they've all had their turn.",
  },
] as const;

export type RoleEntry = {
  dates: string;
  dateShort: string;
  company: string;
  location: string;
  role: string;
  context: string;
  current?: boolean;
};

export const ROLES: readonly RoleEntry[] = [
  {
    dates: "Jun 2027 — Present",
    dateShort: "2027—",
    company: "Writech Industrial Services Ltd.",
    location: "Ireland",
    role: "Design Lead — Fire Protection",
    context:
      "Leading fire protection design for hyperscale data centres, power generation, and mission-critical infrastructure across Europe. Promoted from Sr. Fire Protection Design Engineer (joined Nov 2025) to Design Lead in June 2027.",
    current: true,
  },
  {
    dates: "Mar 2019 — Aug 2025",
    dateShort: "2019—25",
    company: "JB Everest Technical Services",
    location: "Pune",
    role: "Sr. Public Health & Fire Protection Engineer",
    context:
      "Sprinkler, hydrant, and suppression design for large commercial, healthcare, and infrastructure projects across European clients. Coordinated construction packages and led delivery for a 20+ person team.",
  },
  {
    dates: "Dec 2016 — Feb 2020",
    dateShort: "2016—20",
    company: "New York Engineers",
    location: "Pune",
    role: "Plumbing & Fire Protection Design Engineer",
    context:
      "Plumbing and fire protection systems to NYC codes and NFPA — commercial and residential developments.",
  },
  {
    dates: "Post-graduate",
    dateShort: "2015",
    company: "Thermax Ltd.",
    location: "Pune",
    role: "Post Graduate Project Trainee",
    context:
      "Early mechanical engineering experience on large industrial systems.",
  },
  {
    dates: "Undergraduate",
    dateShort: "2012",
    company: "Tata Motors PCBU & TAL",
    location: "Pune",
    role: "Graduate Project Trainee",
    context: "Automation and manufacturing exposure.",
  },
];

export const EDUCATION = [
  {
    label: "Master of Engineering",
    primary: "Mechanical Design",
    secondary: "MIT, Pune · 2013 — 2015 · 8.41 CGPA",
  },
  {
    label: "Bachelor of Engineering",
    primary: "Mechanical",
    secondary: "AISSMS, Pune · 2008 — 2012 · 63.82%",
  },
] as const;

export const PROFESSIONAL = [
  {
    label: "Chartered membership",
    primary: "MIEI — Engineers Ireland",
    secondary: "Application in progress",
  },
  {
    label: "Right to work",
    primary: "Critical Skills Work Permit · Stamp 1",
    secondary: "Irish Residence Permit holder",
  },
] as const;
