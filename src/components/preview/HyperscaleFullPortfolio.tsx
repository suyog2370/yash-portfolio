import Image from "next/image";
import {
  SECTORS,
  EXPERTISE,
  PRINCIPLES,
  ROLES,
  EDUCATION,
  PROFESSIONAL,
  IDENTITY,
  CURRENT_FOCUS,
  ABOUT_PARAS,
  STRENGTHS,
  SOFTWARE,
  BULLETS,
  type SoftwareEntry,
} from "./portfolioContent";

/**
 * HyperscaleFullPortfolio — Rev 3 client feedback.
 *
 * Deep charcoal + amber palette. Playfair Display for editorial display
 * headings, Inter for body, IBM Plex Mono for tech labels. Each section
 * uses its own bullet symbol; headings drop trailing full stops.
 */

const BG = "#0E1116";
const BG_PANEL = "#141820";
const BG_DEEP = "#0A0C11";
const AMBER = "#F0A85E";
const AMBER_SOFT = "#D9925A";
const TEXT = "#E8E5DE";
const TEXT_SOFT = "rgba(232, 229, 222, 0.78)";
const TEXT_MUTED = "rgba(232, 229, 222, 0.55)";
const RULE = "rgba(232, 229, 222, 0.1)";
const RULE_SOFT = "rgba(232, 229, 222, 0.06)";

const DISPLAY = "var(--font-display)";
const SANS = "var(--font-inter)";
const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";

const sectionShell = "py-20 md:py-28";
const container = "max-w-[1200px] mx-auto px-5 md:px-12";

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: SANS,
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: AMBER,
        fontWeight: 500,
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
        borderTop: `1px solid ${AMBER}`,
        width: 32,
        marginBottom: 24,
      }}
    />
  );
}

/**
 * A single software item. If hasLogo is true, renders the SVG from
 * /logos/{slug}.svg. Otherwise renders a clean text-styled brand badge
 * in the vendor's colour — no handcoded fake logo, just a labelled tile.
 */
function SoftwareItem({ item }: { item: SoftwareEntry }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3"
      style={{
        background: "rgba(232, 229, 222, 0.03)",
        border: `1px solid ${RULE}`,
        borderRadius: 6,
        minWidth: "fit-content",
      }}
    >
      {item.hasLogo ? (
        <div
          className="relative flex-shrink-0"
          style={{
            width: 32,
            height: 32,
            background: TEXT,
            padding: 4,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/logos/${item.slug}.svg`}
            alt={`${item.name} logo`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ) : (
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: 32,
            height: 32,
            background: item.color,
            borderRadius: 4,
            color: "#FFF",
            fontFamily: SANS,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {item.name.charAt(0)}
        </div>
      )}
      <span
        style={{
          fontFamily: SANS,
          fontSize: 14,
          fontWeight: 500,
          color: TEXT,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {item.name}
      </span>
    </div>
  );
}

/**
 * Standards badges — text-styled badges for NFPA / FM Global / LPCB / EN.
 * Consistent visual across the four, rendered inline.
 */
type StandardBadge = { text: string; sub?: string; color: string };
const STANDARDS_BADGES: StandardBadge[] = [
  { text: "NFPA", sub: "National Fire Protection Association", color: "#C8342E" },
  { text: "FM", sub: "FM Global Data Sheets", color: "#1E4B8E" },
  { text: "LPCB", sub: "Loss Prevention Certification Board", color: "#B58B32" },
  { text: "EN", sub: "European Norms", color: "#1E4B8E" },
];

function StandardBadgeTile({ badge }: { badge: StandardBadge }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3"
      style={{
        background: "rgba(232, 229, 222, 0.03)",
        border: `1px solid ${RULE}`,
        borderRadius: 6,
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          background: badge.color,
          color: "#FFF",
          fontFamily: SANS,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          borderRadius: 4,
        }}
      >
        {badge.text}
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 13,
            fontWeight: 600,
            color: TEXT,
            letterSpacing: "-0.005em",
          }}
        >
          {badge.text}
        </div>
        {badge.sub && (
          <div
            style={{
              fontFamily: SANS,
              fontSize: 10.5,
              color: TEXT_MUTED,
              lineHeight: 1.35,
              marginTop: 1,
            }}
          >
            {badge.sub}
          </div>
        )}
      </div>
    </div>
  );
}

export function HyperscaleFullPortfolio() {
  return (
    <>
      {/* ==================== ABOUT — single column ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div style={{ maxWidth: "70ch", margin: "0 auto" }}>
            <SectionLabel>About</SectionLabel>
            <LabelRule />
            <p
              style={{
                fontFamily: SANS,
                fontSize: 12,
                color: TEXT_MUTED,
                lineHeight: 1.55,
                marginBottom: 24,
              }}
            >
              Mechanical engineer by training. Fire protection engineer by
              choice.
            </p>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                marginBottom: 28,
                fontWeight: 500,
                color: TEXT,
              }}
            >
              I design the systems that buildings{" "}
              <em style={{ fontStyle: "italic", color: AMBER_SOFT }}>quietly</em>{" "}
              depend on
            </h2>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 16,
                lineHeight: 1.75,
                color: TEXT_SOFT,
                fontWeight: 300,
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              {ABOUT_PARAS.map((p, i) => (
                <p key={i} style={{ marginBottom: 20 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AT PRESENT — tighter spacing + standards ==================== */}
      <section
        className="py-16 md:py-20"
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>At present</SectionLabel>
              <LabelRule />
            </div>
            <div>
              <p
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(20px, 2.6vw, 30px)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  color: TEXT,
                  fontWeight: 400,
                  fontStyle: "italic",
                  marginTop: 0,
                }}
              >
                Leading fire protection design at{" "}
                <span style={{ color: AMBER, fontStyle: "normal", fontWeight: 500 }}>
                  Writech Industrial Services
                </span>{" "}
                in Ireland — focused on hyperscale data centres, power
                generation, and mission-critical infrastructure across Europe.
              </p>

              {/* Focus tags */}
              <div className="mt-6 md:mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
                {CURRENT_FOCUS.tags.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      borderTop: `1px solid ${AMBER}`,
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: AMBER,
                        fontWeight: 500,
                        marginBottom: 5,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 12.5,
                        color: TEXT,
                        lineHeight: 1.4,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Standards row — badges with brand colour, on a single row on
                  desktop and 2 columns on mobile */}
              <div className="mt-6 md:mt-8">
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: AMBER,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  Standards I design to
                </div>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {STANDARDS_BADGES.map((b) => (
                    <StandardBadgeTile key={b.text} badge={b} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRACK RECORD — check-mark bullets ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-14">
            <div>
              <SectionLabel>Track record</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Nine years, more than a hundred buildings
              </h2>
            </div>
          </div>

          {/* Metric numbers — Playfair Display italic (kept from prior fix) */}
          <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
            {STRENGTHS.metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderTop: `1px solid ${AMBER}`, paddingTop: 14 }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontStyle: "italic",
                    fontSize: "clamp(38px, 5.5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: AMBER,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    color: TEXT_SOFT,
                    lineHeight: 1.4,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Qualitative strengths — check-mark bullets */}
          <ul
            className="grid gap-4 md:gap-6 md:grid-cols-2"
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            {STRENGTHS.qualitative.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: SANS,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: TEXT_SOFT,
                  paddingLeft: 28,
                  position: "relative",
                  fontWeight: 300,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.15em",
                    color: AMBER,
                    fontFamily: SANS,
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {BULLETS.strengths}
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== SECTORS — Codebook card pattern ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-8 md:mb-12">
            <div>
              <SectionLabel>Sectors</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "56ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                The buildings I design fire protection for
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: TEXT_MUTED,
                  fontWeight: 300,
                }}
              >
                Sectors that share the same brief: stay standing, stay
                serviceable, keep people safe.
              </p>
            </div>
          </div>

          {/* Codebook-style spec rows — sector name on left, description on
              right. Thin rule between rows; thinner still on mobile. */}
          <div className="sectors-list">
            {SECTORS.map((sector, i) => (
              <article
                key={sector.name}
                className="grid gap-3 md:gap-8 md:grid-cols-[240px_1fr] py-4 md:py-6"
                style={{
                  borderTop:
                    i === 0
                      ? `1px solid ${AMBER}`
                      : "var(--sector-rule, 1px solid rgba(232, 229, 222, 0.08))",
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    style={{
                      color: AMBER,
                      fontSize: 14,
                      lineHeight: 1.2,
                      marginTop: 3,
                    }}
                  >
                    {BULLETS.sectorMarker}
                  </span>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(18px, 2vw, 21px)",
                      lineHeight: 1.2,
                      color: TEXT,
                      fontWeight: 500,
                      letterSpacing: "-0.005em",
                      margin: 0,
                    }}
                  >
                    {sector.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: TEXT_SOFT,
                    maxWidth: "62ch",
                    fontWeight: 300,
                    margin: 0,
                    paddingLeft: 22,
                  }}
                  className="md:!pl-0"
                >
                  {sector.description}
                </p>
              </article>
            ))}
            <div style={{ borderTop: `1px solid ${AMBER}` }} />
          </div>
        </div>
      </section>

      {/* ==================== PRACTICE — equal-height cards ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-14">
            <div>
              <SectionLabel>What I bring to a project</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Systems, standards, tools, coordination
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: TEXT_MUTED,
                  fontWeight: 300,
                }}
              >
                The systems I design, the codes I write to, the tools I work
                in, and how I coordinate with the rest of the design team.
              </p>
            </div>
          </div>

          {/* Grid with grid-auto-rows:1fr + align-items:stretch forces
              equal heights on desktop. Each card is a flex column so the
              bottom seal anchors even when list is shorter. */}
          <div
            className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ alignItems: "stretch", gridAutoRows: "1fr" }}
          >
            {EXPERTISE.map((col) => (
              <div
                key={col.title}
                style={{
                  background: BG_DEEP,
                  border: `1px solid ${RULE}`,
                  padding: "22px 22px 20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 20,
                    color: TEXT,
                    fontWeight: 500,
                    paddingBottom: 12,
                    marginBottom: 16,
                    borderBottom: `1px solid ${AMBER}`,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {col.title}
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    flexGrow: 1,
                  }}
                >
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: MONO,
                        fontSize: 12.5,
                        lineHeight: 1.85,
                        color: TEXT_SOFT,
                        paddingLeft: 18,
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          color: AMBER,
                          fontSize: 12.5,
                          lineHeight: 1.85,
                        }}
                      >
                        {BULLETS.practice}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  aria-hidden
                  style={{
                    marginTop: 20,
                    paddingTop: 8,
                    borderTop: `1px solid ${RULE_SOFT}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: AMBER,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10.5,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: TEXT_MUTED,
                    }}
                  >
                    {col.items.length} items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOFTWARE — horizontal logo row ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-12">
            <div>
              <SectionLabel>Software</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "56ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Software in the daily kit
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 14,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: TEXT_MUTED,
                  fontWeight: 300,
                }}
              >
                The specialised packages I rely on for precise planning,
                analysis, hydraulic simulation, and multi-discipline
                coordination.
              </p>
            </div>
          </div>

          {/* Horizontal scroll on mobile, wrap on desktop */}
          <div
            className="flex flex-wrap gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {SOFTWARE.map((sw) => (
              <SoftwareItem key={sw.slug} item={sw} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPROACH — editorial numbering ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-14">
            <div>
              <SectionLabel>Approach</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "54ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4.5vw, 48px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Three things I hold to on{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>every</em>{" "}
                project
              </h2>
            </div>
          </div>

          {/* Editorial-style numbering — big italic Playfair number as
              a drop cap above each principle. Matches the Editorial
              direction's approach styling. */}
          <div className="grid gap-10 md:gap-12 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <article key={p.title}>
                <div
                  aria-hidden
                  style={{
                    fontFamily: DISPLAY,
                    fontStyle: "italic",
                    fontSize: "clamp(76px, 10vw, 110px)",
                    lineHeight: 0.75,
                    color: AMBER,
                    fontWeight: 500,
                    opacity: 0.55,
                    marginBottom: 20,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 22,
                    lineHeight: 1.2,
                    marginBottom: 14,
                    letterSpacing: "-0.015em",
                    color: TEXT,
                    fontWeight: 500,
                  }}
                >
                  {p.title.replace(/\.$/, "")}
                </h3>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: TEXT_SOFT,
                    fontWeight: 300,
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAREER ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-14">
            <div>
              <SectionLabel>Career</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "56ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.8vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                From graduate trainee in Pune to fire protection design lead
                in Ireland
              </h2>
            </div>
          </div>

          <ol className="space-y-0" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {ROLES.map((r, i) => (
              <li
                key={r.company + r.dates}
                className="grid gap-3 md:gap-6 md:grid-cols-[160px_1fr] py-6 md:py-8"
                style={{
                  borderTop: i === 0 ? `1px solid ${AMBER}` : `1px solid ${RULE}`,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11.5,
                    letterSpacing: "0.06em",
                    color: AMBER,
                  }}
                >
                  <div>{r.dates}</div>
                  {r.current && (
                    <div
                      style={{
                        color: AMBER_SOFT,
                        marginTop: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          display: "inline-block",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: AMBER,
                          boxShadow: `0 0 8px ${AMBER}`,
                        }}
                      />
                      Present
                    </div>
                  )}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 22,
                      lineHeight: 1.2,
                      color: TEXT,
                      fontWeight: 500,
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {r.company}
                    <span
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: 16,
                        color: TEXT_MUTED,
                        marginLeft: 8,
                      }}
                    >
                      · {r.location}
                    </span>
                  </h3>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      color: AMBER,
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {r.role}
                  </div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: TEXT_SOFT,
                      maxWidth: "62ch",
                      fontWeight: 300,
                    }}
                  >
                    {r.context}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== EDUCATION & CREDENTIALS ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24 mb-10 md:mb-14">
            <div>
              <SectionLabel>Education</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(24px, 3.4vw, 36px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Where I trained and where I stand
              </h2>
            </div>
          </div>

          <div className="grid gap-10 md:gap-16 md:grid-cols-2">
            <CredentialBlock title="Education" items={EDUCATION} />
            <CredentialBlock title="Professional" items={PROFESSIONAL} />
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "62ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 4.2vw, 48px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: TEXT,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Working on a building that{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>
                  should not burn
                </em>{" "}
                — say hello
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 18,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: TEXT_MUTED,
                  maxWidth: "54ch",
                  fontWeight: 300,
                  textAlign: "justify",
                  hyphens: "auto",
                }}
              >
                Fire protection design, hydraulic calculations, BIM
                coordination, standards review. Reach me on any of the below
                and I will answer within a day or two.
              </p>

              <ul
                className="mt-10 md:mt-12 grid gap-4 md:gap-6 md:grid-cols-2"
                style={{ margin: 0, padding: 0, listStyle: "none" }}
              >
                {[
                  { label: "Email", value: IDENTITY.email, href: `mailto:${IDENTITY.email}` },
                  { label: "Phone", value: IDENTITY.phone, href: `tel:${IDENTITY.phone.replace(/\s/g, "")}` },
                  { label: "LinkedIn", value: IDENTITY.linkedin, href: IDENTITY.linkedinUrl },
                  { label: "Location", value: IDENTITY.location, href: "" },
                ].map(({ label, value, href }) => (
                  <li
                    key={label}
                    style={{ borderTop: `1px solid ${AMBER}`, paddingTop: 12 }}
                  >
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: AMBER,
                        fontWeight: 500,
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: MONO,
                          fontSize: 13.5,
                          color: TEXT,
                          textDecoration: "none",
                          wordBreak: "break-all",
                        }}
                        className="hover:underline underline-offset-4"
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: MONO, fontSize: 13.5, color: TEXT }}>
                        {value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ maxWidth: 1200, margin: "80px auto 0" }}>
            <hr
              style={{ border: 0, borderTop: `1px solid ${RULE}`, marginBottom: 16 }}
            />
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                textAlign: "right",
              }}
            >
              © {new Date().getFullYear()} {IDENTITY.name}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CredentialBlock({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; primary: string; secondary?: string }[];
}) {
  return (
    <div>
      <h3
        style={{
          fontFamily: DISPLAY,
          fontSize: 22,
          color: TEXT,
          fontWeight: 500,
          paddingBottom: 12,
          marginBottom: 20,
          borderBottom: `1px solid ${AMBER}`,
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.primary} style={{ marginBottom: 20 }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: AMBER,
                fontWeight: 500,
                marginBottom: 5,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 18,
                lineHeight: 1.3,
                color: TEXT,
                marginBottom: 5,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {item.primary}
            </div>
            {item.secondary && (
              <div style={{ fontFamily: MONO, fontSize: 12, color: TEXT_MUTED, lineHeight: 1.5 }}>
                {item.secondary}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
