/**
 * CodebookFullPortfolio
 * ---------------------
 * All 8 sections after the Hero in the Codebook aesthetic.
 * Deep red accents, spec-schedule tables, serif display, ivory paper.
 */

const RED = "#8B1F18";
const RED_SOFT = "#A93E36";
const INK = "#1A1A1A";
const INK_SOFT = "#333333";
const MUTED = "#666666";
const RULE = "#E5DDD1";
const PAPER = "#FAF7F2";
const PAPER_WARM = "#F2ECE0";
const SERIF = '"IBM Plex Serif", Georgia, serif';
const SANS = '"IBM Plex Sans", sans-serif';
const MONO = '"IBM Plex Mono", monospace';

const SECTOR_LIST = [
  {
    name: "Hyperscale data centres",
    description:
      "Sprinkler and pre-action design for mission-critical white-space, pump rooms, and support facilities across multiple European sites.",
  },
  {
    name: "Healthcare",
    description:
      "Life-safety design for large hospital campuses, coordinated tightly with medical gas, HVAC, and complex compartmentation strategies.",
  },
  {
    name: "Aviation",
    description:
      "Airport terminal fire protection at scale — high-ceiling suppression, foam systems, and coordination across an active landside programme.",
  },
  {
    name: "Warehouses (ESFR)",
    description:
      "In-rack and ceiling-only ESFR sprinkler design for high-piled storage, sized to actual commodity classification and storage configuration.",
  },
  {
    name: "Power generation",
    description:
      "Deluge, water-mist, and foam suppression for turbine halls, transformer bays, and fuel handling. Written to FM Global data sheets.",
  },
  {
    name: "Commercial & office",
    description:
      "Sprinkler design and standpipe systems for high-rise and mid-rise offices in the US and Europe, coordinated in Revit and Navisworks.",
  },
  {
    name: "Mixed-use & retail",
    description:
      "Integrated sprinkler design for towers with retail podiums, restaurants, and hospitality — tenant fit-out coordination baked in from concept.",
  },
  {
    name: "Residential",
    description:
      "Domestic and residential sprinkler systems for townhouses, apartment blocks, and mixed developments across Ireland and the UK.",
  },
];

const EXPERTISE = [
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
      "LPC Rules",
      "EN 12845 (fixed sprinkler)",
      "EN 9251 (domestic & residential)",
      "VdS",
      "Irish & UK Building Regs",
      "NYC Building Code / IBC",
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
      "Clash detection & resolution",
      "Fabrication & shop drawings",
      "Construction drawing packages",
      "Discipline coordination",
      "Bill of quantities (BOQ)",
      "Hydraulic calculations",
      "Technical submittals & QA/QC",
    ],
  },
];

const PRINCIPLES = [
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
    body: "Fire protection lives above ceilings, alongside HVAC, cable trays, medical gas, and structure. The value I bring isn't just the sprinkler design — it's the negotiation with every other discipline to make sure the design still works when they've all had their turn.",
  },
];

const ROLES = [
  {
    dates: "Nov 2025 — Present",
    company: "Writech Industrial Services Ltd.",
    location: "Ireland",
    role: "Sr. Fire Protection Design Engineer",
    context:
      "Leading fire protection design for hyperscale data centres, power generation, and mission-critical infrastructure across Europe.",
    current: true,
  },
  {
    dates: "Mar 2019 — Aug 2025",
    company: "JB Everest Technical Services",
    location: "Pune",
    role: "Sr. Public Health & Fire Protection Engineer",
    context:
      "Sprinkler, hydrant, and suppression design for large commercial, healthcare, and infrastructure projects across European clients. Coordinated construction packages and led delivery for a 20+ person team.",
  },
  {
    dates: "Dec 2016 — Feb 2020",
    company: "New York Engineers",
    location: "Pune",
    role: "Plumbing & Fire Protection Design Engineer",
    context:
      "Plumbing and fire protection systems to NYC codes and NFPA — commercial and residential developments.",
  },
  {
    dates: "Post-graduate",
    company: "Thermax Ltd.",
    location: "Pune",
    role: "Post Graduate Project Trainee",
    context:
      "Early mechanical engineering experience on large industrial systems.",
  },
  {
    dates: "Undergraduate",
    company: "Tata Motors PCBU & TAL",
    location: "Pune",
    role: "Graduate Project Trainee",
    context: "Automation and manufacturing exposure.",
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "yashpshah.shah@gmail.com",
    href: "mailto:yashpshah.shah@gmail.com",
  },
  { label: "Phone", value: "+353 87 399 2122", href: "tel:+353873992122" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yashkumarshah",
    href: "https://linkedin.com/in/yashkumarshah",
  },
  { label: "Location", value: "Mullingar, Ireland" },
];

const sectionShell = "py-24 md:py-32";
const container = "max-w-[1100px] mx-auto px-6 md:px-12";

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: SANS,
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: RED,
        fontWeight: 600,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

function LabelRule() {
  return (
    <hr
      style={{
        border: 0,
        borderTop: `1px solid ${RED}`,
        width: 32,
        marginBottom: 24,
      }}
    />
  );
}

export function CodebookFullPortfolio() {
  return (
    <>
      {/* ==================== ABOUT ==================== */}
      <section className={sectionShell} style={{ background: PAPER }}>
        <div className={container}>
          <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>About</SectionLabel>
              <LabelRule />
              <p style={{ fontFamily: SANS, fontSize: 12, color: MUTED, maxWidth: 180, lineHeight: 1.55 }}>
                Mechanical engineer by training. Fire protection engineer by choice.
              </p>
            </div>
            <div style={{ maxWidth: "62ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.015em",
                  marginBottom: 36,
                  fontWeight: 500,
                }}
              >
                I design the systems that buildings <em style={{ fontWeight: 400 }}>quietly</em> depend on.
              </h2>
              <div style={{ fontFamily: SANS, fontSize: 16.5, lineHeight: 1.7, color: INK_SOFT }}>
                <p style={{ marginBottom: 20 }}>
                  My path into fire protection engineering started with a mechanical engineering degree at MIT Pune and early years at Thermax and Tata, learning how large industrial systems actually behave. When I moved into building services, it was a natural step: fire protection sits at the intersection of hydraulics, mechanical design, code compliance, and coordination with every other discipline on a project.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Over the last nine years I&rsquo;ve worked on more than a hundred buildings across the US and Europe. Hyperscale data centres in Ireland and mainland Europe. A large healthcare campus in Harlem. LaGuardia&rsquo;s airport redevelopment. Power generation facilities, ESFR warehouses, mixed-use towers, hospitality, residential. Each of them has a fire protection strategy behind the walls that I helped design.
                </p>
                <p>
                  I moved to Ireland at the end of 2025 to lead fire protection design at Writech Industrial Services, working primarily on mission-critical facilities and complex infrastructure across Europe. I&rsquo;m building the next stretch of my practice around the projects I care about most: the buildings that people trust to keep working, and to keep them safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CURRENT FOCUS ==================== */}
      <section
        className="py-20 md:py-24"
        style={{ background: PAPER_WARM, borderTop: `1px solid ${RULE}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>At present</SectionLabel>
              <LabelRule />
            </div>
            <div>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(24px, 3vw, 34px)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: INK,
                }}
              >
                Leading fire protection design at{" "}
                <em style={{ fontWeight: 400 }}>Writech Industrial Services</em>{" "}
                in Ireland — focused on hyperscale data centres, power
                generation, and mission-critical infrastructure across Europe.
              </p>
              <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
                {[
                  ["Sector", "Data centres"],
                  ["Region", "Europe"],
                  ["Standards", "NFPA / FM Global / LPC"],
                  ["BIM", "LOD 400 / 500"],
                ].map(([label, value]) => (
                  <div key={label} style={{ borderTop: `1px solid ${RED}`, paddingTop: 12 }}>
                    <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: RED, fontWeight: 600, marginBottom: 6 }}>
                      {label}
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: 13, color: INK }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTORS ==================== */}
      <section className={sectionShell} style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Sectors</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: INK, fontWeight: 500 }}>
                The buildings I design fire protection for.
              </h2>
              <p style={{ fontFamily: SANS, marginTop: 20, fontSize: 16, lineHeight: 1.65, color: MUTED }}>
                Nine years of work across sectors that share the same brief:
                stay standing, stay serviceable, keep people safe.
              </p>
            </div>
          </div>

          {/* Sectors listed as spec-schedule rows — very codebook. */}
          <div>
            {SECTOR_LIST.map((sector, i) => (
              <article
                key={sector.name}
                className="grid gap-4 md:gap-8 md:grid-cols-[220px_1fr] py-7"
                style={{
                  borderTop: i === 0 ? `2px solid ${RED}` : `1px solid ${RULE}`,
                }}
              >
                <h3 style={{ fontFamily: SERIF, fontSize: 22, lineHeight: 1.2, color: INK, fontWeight: 500 }}>
                  {sector.name}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.6, color: INK_SOFT, maxWidth: "62ch" }}>
                  {sector.description}
                </p>
              </article>
            ))}
            <div style={{ borderTop: `2px solid ${RED}` }} />
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE ==================== */}
      <section className={sectionShell} style={{ background: PAPER_WARM, borderTop: `1px solid ${RULE}` }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Practice</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: INK, fontWeight: 500 }}>
                What I bring to a project.
              </h2>
              <p style={{ fontFamily: SANS, marginTop: 20, fontSize: 16, lineHeight: 1.65, color: MUTED }}>
                The systems I design, the codes I write to, the tools I work in,
                and how I coordinate with the rest of the design team.
              </p>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE.map((col) => (
              <div key={col.title}>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 20,
                    color: INK,
                    fontWeight: 500,
                    paddingBottom: 12,
                    marginBottom: 16,
                    borderBottom: `1px solid ${RED}`,
                  }}
                >
                  {col.title}
                </h3>
                <ul>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: SANS,
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        color: INK_SOFT,
                        paddingLeft: 14,
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.55em",
                          width: 6,
                          height: 1,
                          background: RED,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPROACH ==================== */}
      <section className={sectionShell} style={{ background: INK, color: PAPER }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: RED_SOFT,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                Approach
              </div>
              <hr style={{ border: 0, borderTop: `1px solid ${RED}`, width: 32 }} />
            </div>
            <div style={{ maxWidth: "54ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: PAPER, fontWeight: 400 }}>
                Three things I hold to on{" "}
                <em style={{ fontWeight: 400 }}>every</em> project.
              </h2>
            </div>
          </div>
          <div className="grid gap-12 md:gap-16 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article key={p.title}>
                <h3 style={{ fontFamily: SERIF, fontSize: 24, lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em", color: PAPER, fontWeight: 500 }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: "rgba(250, 247, 242, 0.72)" }}>
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAREER ==================== */}
      <section className={sectionShell} style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Career</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: INK, fontWeight: 500 }}>
                From graduate trainee in Pune to fire protection design lead in Ireland.
              </h2>
            </div>
          </div>

          <ol className="space-y-0">
            {ROLES.map((r, i) => (
              <li
                key={r.company + r.dates}
                className="grid gap-3 md:gap-6 md:grid-cols-[160px_1fr] py-8"
                style={{
                  borderTop: i === 0 ? `2px solid ${RED}` : `1px solid ${RULE}`,
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.06em", color: RED }}>
                  <div>{r.dates}</div>
                  {r.current && (
                    <div style={{ color: RED_SOFT, marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
                      <span aria-hidden style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: RED_SOFT }} />
                      Present
                    </div>
                  )}
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 22, lineHeight: 1.2, color: INK, fontWeight: 500, marginBottom: 4 }}>
                    {r.company}
                    <span style={{ fontStyle: "italic", fontWeight: 400, fontSize: 17, color: MUTED, marginLeft: 8 }}>· {r.location}</span>
                  </h3>
                  <div style={{ fontFamily: SANS, fontSize: 12.5, letterSpacing: "0.06em", color: RED, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>
                    {r.role}
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.6, color: INK_SOFT, maxWidth: "62ch" }}>
                    {r.context}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== CREDENTIALS ==================== */}
      <section className={sectionShell} style={{ background: PAPER_WARM, borderTop: `1px solid ${RULE}` }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Credentials</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(28px, 3.5vw, 40px)", lineHeight: 1.15, letterSpacing: "-0.015em", color: INK, fontWeight: 500 }}>
                Formation & standing.
              </h2>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <CodebookCredentialBlock title="Education" items={[
              { label: "Master of Engineering", primary: "Mechanical Design", secondary: "MIT, Pune · 2013 — 2015 · 8.41 CGPA" },
              { label: "Bachelor of Engineering", primary: "Mechanical", secondary: "AISSMS, Pune · 2008 — 2012 · 63.82%" },
            ]} />
            <CodebookCredentialBlock title="Professional" items={[
              { label: "Chartered membership", primary: "MIEI — Engineers Ireland", secondary: "Application in progress" },
              { label: "Right to work", primary: "Critical Skills Work Permit · Stamp 1", secondary: "Irish Residence Permit holder" },
            ]} />
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className={sectionShell} style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}>
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "62ch" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: INK, fontWeight: 400 }}>
                If you&rsquo;re working on a building that{" "}
                <em>shouldn&rsquo;t burn</em> — say hello.
              </h2>
              <p style={{ fontFamily: SANS, marginTop: 24, fontSize: 16.5, lineHeight: 1.7, color: MUTED, maxWidth: "54ch" }}>
                Fire protection design, hydraulic calculations, BIM coordination, standards review. Reach me on any of the below and I&rsquo;ll answer within a day or two.
              </p>

              <ul className="mt-12 grid gap-6 md:grid-cols-2">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.label} style={{ borderTop: `1px solid ${RED}`, paddingTop: 16 }}>
                    <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: RED, fontWeight: 600, marginBottom: 8 }}>
                      {link.label}
                    </div>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ fontFamily: MONO, fontSize: 14, color: INK, textDecoration: "none" }}
                        className="hover:underline underline-offset-4"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: MONO, fontSize: 14, color: INK }}>{link.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ maxWidth: 1100, margin: "96px auto 0" }}>
            <hr style={{ border: 0, borderTop: `1px solid ${RULE}`, marginBottom: 16 }} />
            <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, textAlign: "right" }}>
              © {new Date().getFullYear()} Yashkumar Shah
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CodebookCredentialBlock({
  title,
  items,
}: {
  title: string;
  items: { label: string; primary: string; secondary?: string }[];
}) {
  return (
    <div>
      <h3
        style={{
          fontFamily: SERIF,
          fontSize: 22,
          color: INK,
          fontWeight: 500,
          paddingBottom: 12,
          marginBottom: 24,
          borderBottom: `1px solid ${RED}`,
        }}
      >
        {title}
      </h3>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.primary}>
            <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: RED, fontWeight: 600, marginBottom: 6 }}>
              {item.label}
            </div>
            <div style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.3, color: INK, marginBottom: 4, fontWeight: 500 }}>
              {item.primary}
            </div>
            {item.secondary && (
              <div style={{ fontFamily: MONO, fontSize: 12.5, color: MUTED }}>
                {item.secondary}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
