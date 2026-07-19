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
import { AnimatedCounter } from "./AnimatedCounter";

/**
 * HyperscaleFullPortfolio — Rev 3 client feedback.
 *
 * Deep charcoal + amber palette. Playfair Display for editorial display
 * headings, Inter for body, IBM Plex Mono for tech labels. Each section
 * uses its own bullet symbol; headings drop trailing full stops.
 */

// Palette resolves against CSS custom properties on <html>, so flipping
// `data-theme` in the toggle re-paints everything without a re-render.
const BG = "var(--hs-bg)";
const BG_PANEL = "var(--hs-bg-panel)";
const BG_DEEP = "var(--hs-bg-deep)";
const AMBER = "var(--hs-amber)";
const AMBER_SOFT = "var(--hs-amber-soft)";
const TEXT = "var(--hs-text)";
const TEXT_SOFT = "var(--hs-text-soft)";
const TEXT_MUTED = "var(--hs-text-muted)";
const RULE = "var(--hs-rule)";
const RULE_SOFT = "var(--hs-rule-soft)";

const DISPLAY = "var(--font-display)";
const SANS = "var(--font-inter)";
// Metadata / spec / URL font. Previously IBM Plex Mono; swapped to Inter
// per client feedback that the mono read as typewriter. Same stack as
// SANS now, so weight and letter-spacing on each usage carry the
// visual differentiation from paragraph text.
const META = "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif";

// Consistent section padding on both mobile and desktop. Kept tight —
// each section contributes ~40/56px per side so adjacent sections read
// as one continuous story rather than isolated blocks.
const sectionShell = "py-10 md:py-14";
const container = "max-w-[1200px] mx-auto px-5 md:px-12";
// Narrower container used for reading sections (About, Sectors, Career)
// so the eye does not have to travel across empty desktop whitespace.
const readingWidth = "max-w-[880px] mx-auto";

/**
 * SectionHeader — centred small heading block used across every
 * section. Renders eyebrow label + hairline rule + optional big
 * heading + optional description, all centre-aligned in a narrow
 * column. Replaces the old 2-column [label sidebar | content] pattern.
 */
function SectionHeader({
  label,
  heading,
  description,
  variant = "default",
  className = "mb-8 md:mb-10",
}: {
  label: string;
  heading?: React.ReactNode;
  description?: string;
  variant?: "default" | "inverted";
  className?: string;
}) {
  // "inverted" is currently unused by any section but kept for future
  // panel-over-panel headings. Both variants read from CSS custom
  // properties so they follow the active theme.
  const textColor = variant === "inverted" ? "var(--hs-text-bright)" : TEXT;
  const descColor = variant === "inverted" ? "var(--hs-text-muted)" : TEXT_MUTED;
  return (
    // Outer wrapper is wide (accommodates the h2's natural line width);
    // eyebrow, rule and description sit in a narrower 70ch column so
    // long body copy stays readable.
    <div className={`text-center mx-auto ${className}`}>
      <div style={{ maxWidth: "70ch", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: AMBER,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          {label}
        </div>
        <hr
          style={{
            border: 0,
            borderTop: `1px solid ${AMBER}`,
            width: 32,
            margin: "0 auto 14px",
          }}
        />
      </div>
      {heading && (
        <h2
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(26px, 3.8vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: textColor,
            fontWeight: 500,
            margin: "0 auto",
            // Wide enough for the longest single-line heading on
            // desktop; on mobile it collapses to the section container.
            maxWidth: "min(1000px, 100%)",
          }}
        >
          {heading}
        </h2>
      )}
      {description && (
        <p
          style={{
            fontFamily: SANS,
            marginTop: 14,
            fontSize: 15,
            lineHeight: 1.65,
            color: descColor,
            fontWeight: 300,
            maxWidth: "70ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * A single software item on the marquee track. The vendor logo files
 * we have ship as colour-on-white (webp/avif/svg with baked backgrounds)
 * rather than dark-on-transparent, so a raw CSS invert wipes them out.
 * Instead we render each logo on a tight rounded white plaque — this is
 * how brand grids on dark backgrounds are conventionally shown, and it
 * keeps the vendor's native colours intact. Logos that already ship
 * light (invert: true) skip the plaque and sit directly on the bg.
 * Missing files fall back to a clean text wordmark so the track stays
 * visually consistent.
 */
function SoftwareItem({ item }: { item: SoftwareEntry }) {
  const logoSrc = `/logos/${item.slug}.${item.ext ?? "svg"}`;
  const PLAQUE_HEIGHT = 44;

  if (!item.hasLogo) {
    return (
      <div
        className="flex-shrink-0 flex items-center px-6"
        style={{ height: PLAQUE_HEIGHT }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontSize: 18,
            fontWeight: 600,
            color: TEXT,
            letterSpacing: "-0.015em",
            whiteSpace: "nowrap",
          }}
        >
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        height: PLAQUE_HEIGHT,
        // Fixed ivory in both themes — the vendor logo files ship on
        // baked white backgrounds, so the plaque needs to stay light
        // regardless of dark/light mode for the logos to read.
        background: "#F5F1E8",
        padding: "6px 14px",
        borderRadius: 6,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={`${item.name} logo`}
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
          // The vendor ships this logo white-on-transparent, which
          // vanishes on the white plaque. Invert it so it renders
          // dark and reads like the other marks.
          filter: item.invert ? "invert(1)" : "none",
        }}
      />
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
            <SectionHeader
              label="About"
              description="Mechanical engineer by training. Fire protection engineer by choice."
              heading={
                <>
                  I design the systems that buildings{" "}
                  <em style={{ fontStyle: "italic", color: AMBER_SOFT }}>
                    quietly
                  </em>{" "}
                  depend on
                </>
              }
            />
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
        className={sectionShell}
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          {/* No heading param — the italic sentence below IS the heading
              here, so drop the outer margin to keep the eyebrow → italic
              gap the same tight ~14px other sections show between the
              eyebrow rule and their h2. */}
          <SectionHeader label="At present" className="mb-0" />
          <div style={{ maxWidth: "70ch", margin: "0 auto" }}>
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
                textAlign: "center",
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
                        fontFamily: META,
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

          </div>
        </div>
      </section>

      {/* ==================== TRACK RECORD — check-mark bullets ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <SectionHeader
            label="Track record"
            heading="Nine years, more than a hundred buildings"
          />

          {/* Metric numbers — Playfair Display italic; each metric
              animates from 0 to its value when the section scrolls into
              view (see AnimatedCounter). */}
          <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
            {STRENGTHS.metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderTop: `1px solid ${AMBER}`, paddingTop: 14 }}
              >
                <AnimatedCounter
                  value={m.value}
                  style={{
                    display: "block",
                    fontFamily: DISPLAY,
                    fontStyle: "italic",
                    fontSize: "clamp(38px, 5.5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: AMBER,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                />
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
          <SectionHeader
            label="Sectors"
            heading="The buildings I design fire protection for"
            description="Sectors that share the same brief: stay standing, stay serviceable, keep people safe."
          />

          {/* Codebook-style spec rows — sector name on left, description on
              right. Thin rule between rows; thinner still on mobile. */}
          <div className={`${readingWidth} sectors-list`}>
            {SECTORS.map((sector, i) => (
              <article
                key={sector.name}
                className="grid gap-3 md:gap-8 md:grid-cols-[240px_1fr] py-4 md:py-6"
                style={{
                  borderTop:
                    i === 0 ? `1px solid ${AMBER}` : `1px solid ${RULE}`,
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
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                  className="md:!pl-0"
                >
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRACTICE — equal-height cards ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <SectionHeader
            label="What I bring to a project"
            heading="Systems, standards, tools, coordination"
            description="The systems I design, the codes I write to, the tools I work in, and how I coordinate with the rest of the design team."
          />

          {/* Equal-height cards on desktop (grid-auto-rows:1fr +
              align-items:stretch), natural height on mobile so short
              lists don't leave big empty gaps. `practice-grid` class
              carries the desktop-only rules — see globals.css. */}
          <div className="practice-grid grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                        fontFamily: META,
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
          <SectionHeader
            label="Software"
            heading="Software in the daily kit"
            description="The specialised packages I rely on for precise planning, analysis, hydraulic simulation, and multi-discipline coordination."
          />

          {/* Continuous marquee slider — the items list is duplicated
              inside the track so the loop reads as seamless. Hover to
              pause. Reduced-motion users get the animation paused via
              the global stylesheet. */}
          <div className="marquee-mask">
            <div className="marquee-track">
              {SOFTWARE.map((sw) => (
                <SoftwareItem key={sw.slug} item={sw} />
              ))}
              {/* Duplicate set for the seamless loop */}
              {SOFTWARE.map((sw) => (
                <SoftwareItem key={`${sw.slug}-loop`} item={sw} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== APPROACH — editorial numbering ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <SectionHeader
            label="Approach"
            heading={
              <>
                Three things I hold to on{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>every</em>{" "}
                project
              </>
            }
          />

          {/* Editorial-style numbering — big italic Playfair number as
              a drop cap above each principle. Each principle is
              centre-aligned within its column so the number, title and
              body all sit under a common axis. */}
          <div className="grid gap-10 md:gap-12 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <article
                key={p.title}
                style={{ textAlign: "center", maxWidth: "38ch", margin: "0 auto" }}
              >
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
                    textAlign: "center",
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
          <SectionHeader
            label="Career"
            heading="From graduate trainee in Pune to fire protection design lead in Ireland"
          />

          <ol
            className="max-w-[760px] mx-auto space-y-0"
            style={{ margin: "0 auto", padding: 0, listStyle: "none" }}
          >
            {ROLES.map((r, i) => (
              <li
                key={r.company + r.dates}
                className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-[140px_1fr] py-6 md:py-8 text-center md:text-left"
                style={{
                  borderTop: i === 0 ? `1px solid ${AMBER}` : `1px solid ${RULE}`,
                }}
              >
                {/* Dates + Present indicator. Centred on mobile above the
                    company block; on desktop returns to the 140px left
                    column with left-aligned content. */}
                <div
                  style={{
                    fontFamily: META,
                    fontSize: 11.5,
                    letterSpacing: "0.06em",
                    color: AMBER,
                  }}
                >
                  <div>{r.dates}</div>
                  {r.current && (
                    <div
                      className="justify-center md:justify-start"
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
                  {/* Paragraph fills its column on desktop (no fixed
                      maxWidth) so the right edge doesn't leave a big
                      empty gutter. Mobile stays centred. */}
                  <p
                    className="text-center md:text-justify"
                    style={{
                      fontFamily: SANS,
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: TEXT_SOFT,
                      fontWeight: 300,
                      hyphens: "auto",
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
          <SectionHeader
            label="Education"
            heading="Where I trained and where I stand"
          />

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
          <SectionHeader
            label="Contact"
            heading={
              <>
                Working on a building that{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>
                  should not burn
                </em>{" "}
                — say hello
              </>
            }
            description="Fire protection design, hydraulic calculations, BIM coordination, standards review. Reach me on any of the below and I will answer within a day or two."
          />
          <ContactRow />

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
                textAlign: "center",
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

/**
 * ContactRow — three icon-first tiles (Email, LinkedIn, Location).
 * Phone removed per Rev 3. Each tile centres its own icon → label →
 * value stack; the row itself is centred on the page.
 */
function ContactRow() {
  const items = [
    {
      key: "email",
      label: "Email",
      value: IDENTITY.email,
      href: `mailto:${IDENTITY.email}`,
      icon: <MailIcon />,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: IDENTITY.linkedin,
      href: IDENTITY.linkedinUrl,
      icon: <LinkedInIcon />,
    },
    {
      key: "location",
      label: "Location",
      value: IDENTITY.location,
      href: "",
      icon: <PinIcon />,
    },
  ];

  return (
    <ul
      className="mt-2 md:mt-4 mx-auto grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-3"
      style={{
        margin: "16px auto 0",
        padding: 0,
        listStyle: "none",
        maxWidth: 820,
      }}
    >
      {items.map(({ key, label, value, href, icon }) => {
        const iconBlock = (
          <div
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "var(--hs-amber-08)",
              color: AMBER,
              marginBottom: 12,
            }}
          >
            {icon}
          </div>
        );
        const labelBlock = (
          <div
            style={{
              fontFamily: SANS,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: AMBER,
              fontWeight: 500,
              marginBottom: 8,
            }}
          >
            {label}
          </div>
        );
        const valueStyle = {
          fontFamily: META,
          fontSize: 13.5,
          color: TEXT,
          textDecoration: "underline",
          textUnderlineOffset: 4,
          textDecorationColor: "var(--hs-text-muted)",
          wordBreak: "break-word" as const,
        };
        return (
          <li
            key={key}
            className="border-t md:border-t-0"
            style={{
              textAlign: "center",
              paddingTop: 22,
              borderColor: AMBER,
            }}
          >
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block hover:opacity-90"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {iconBlock}
                {labelBlock}
                <span style={valueStyle}>{value}</span>
              </a>
            ) : (
              <>
                {iconBlock}
                {labelBlock}
                <span
                  style={{
                    fontFamily: META,
                    fontSize: 13.5,
                    color: TEXT,
                  }}
                >
                  {value}
                </span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H10V9z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.2-7-12a7 7 0 1114 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
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
    <div style={{ textAlign: "center" }}>
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
          textAlign: "center",
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
              <div style={{ fontFamily: META, fontSize: 12, color: TEXT_MUTED, lineHeight: 1.5 }}>
                {item.secondary}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
