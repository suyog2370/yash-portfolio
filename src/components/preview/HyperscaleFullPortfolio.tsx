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
} from "./portfolioContent";

/**
 * HyperscaleFullPortfolio
 * -----------------------
 * All sections after the Hero in the Hyperscale aesthetic. Deep
 * charcoal + amber accent, Playfair Display + Inter for the editorial
 * fonts requested, monospace for technical labels.
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

// Font stacks — Playfair for display, Inter for body, IBM Plex Mono for tech.
const DISPLAY = "var(--font-display)";
const SANS = "var(--font-inter)";
const MONO = "var(--font-plex-mono), 'IBM Plex Mono', monospace";

const sectionShell = "py-20 md:py-32";
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

export function HyperscaleFullPortfolio() {
  return (
    <>
      {/* ==================== ABOUT ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>About</SectionLabel>
              <LabelRule />
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 12,
                  color: TEXT_MUTED,
                  maxWidth: 200,
                  lineHeight: 1.55,
                }}
              >
                Mechanical engineer by training. Fire protection engineer by
                choice.
              </p>
            </div>
            <div style={{ maxWidth: "62ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4.5vw, 48px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: 32,
                  fontWeight: 500,
                  color: TEXT,
                }}
              >
                I design the systems that buildings{" "}
                <em style={{ fontStyle: "italic", color: AMBER_SOFT }}>
                  quietly
                </em>{" "}
                depend on.
              </h2>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: TEXT_SOFT,
                  fontWeight: 300,
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
        </div>
      </section>

      {/* ==================== AT PRESENT ==================== */}
      <section
        className="py-16 md:py-24"
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
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
                  fontFamily: DISPLAY,
                  fontSize: "clamp(20px, 2.8vw, 32px)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  color: TEXT,
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                Leading fire protection design at{" "}
                <span style={{ color: AMBER, fontStyle: "normal", fontWeight: 500 }}>
                  Writech Industrial Services
                </span>{" "}
                in Ireland — focused on hyperscale data centres, power
                generation, and mission-critical infrastructure across Europe.
              </p>
              <div className="mt-8 md:mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRACK RECORD ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Track record</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                Nine years, more than a hundred buildings.
              </h2>
            </div>
          </div>

          {/* Big metrics row */}
          <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-12 md:mb-16">
            {STRENGTHS.metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderTop: `1px solid ${AMBER}`, paddingTop: 16 }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
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

          {/* Qualitative strengths */}
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
                  paddingLeft: 24,
                  position: "relative",
                  fontWeight: 300,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.7em",
                    width: 12,
                    height: 1,
                    background: AMBER,
                  }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== SECTORS ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Sectors</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                The buildings I design fire protection for.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 16,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: TEXT_MUTED,
                  fontWeight: 300,
                }}
              >
                Sectors that share the same brief: stay standing, stay
                serviceable, keep people safe.
              </p>
            </div>
          </div>

          <div className="grid gap-x-8 md:gap-x-10 gap-y-8 md:gap-y-10 md:grid-cols-2">
            {SECTORS.map((sector) => (
              <article
                key={sector.name}
                style={{ borderTop: `1px solid ${RULE}`, paddingTop: 20 }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    aria-hidden
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 1,
                      background: AMBER,
                      marginTop: 12,
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(19px, 2.2vw, 22px)",
                      lineHeight: 1.2,
                      color: TEXT,
                      fontWeight: 500,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {sector.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: TEXT_SOFT,
                    maxWidth: "54ch",
                    fontWeight: 300,
                    paddingLeft: 20,
                  }}
                >
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRACTICE / EXPERTISE ==================== */}
      <section
        className={sectionShell}
        style={{ background: BG_PANEL, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Practice</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                What I bring to a project.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 16,
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

          <div className="grid gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE.map((col) => (
              <div key={col.title}>
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
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: MONO,
                        fontSize: 12.5,
                        lineHeight: 1.85,
                        color: TEXT_SOFT,
                        paddingLeft: 14,
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.65em",
                          width: 6,
                          height: 1,
                          background: AMBER,
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
      <section
        className={sectionShell}
        style={{ background: BG_DEEP, borderTop: `1px solid ${RULE_SOFT}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Approach</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "54ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(30px, 4.5vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                Three things I hold to on{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>every</em>{" "}
                project.
              </h2>
            </div>
          </div>
          <div className="grid gap-10 md:gap-16 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article key={p.title}>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 22,
                    lineHeight: 1.25,
                    marginBottom: 14,
                    letterSpacing: "-0.015em",
                    color: AMBER,
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: TEXT_SOFT,
                    fontWeight: 300,
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
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Career</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                From graduate trainee in Pune to fire protection design lead
                in Ireland.
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
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-12 md:mb-16">
            <div>
              <SectionLabel>Education</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                Where I trained and where I stand.
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
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "62ch" }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(28px, 4.5vw, 50px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: TEXT,
                  fontWeight: 500,
                }}
              >
                Working on a building that{" "}
                <em style={{ fontStyle: "italic", color: AMBER }}>
                  shouldn&rsquo;t burn
                </em>{" "}
                — say hello.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 20,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: TEXT_MUTED,
                  maxWidth: "54ch",
                  fontWeight: 300,
                }}
              >
                Fire protection design, hydraulic calculations, BIM
                coordination, standards review. Reach me on any of the below
                and I&rsquo;ll answer within a day or two.
              </p>

              <ul
                className="mt-10 md:mt-12 grid gap-4 md:gap-6 md:grid-cols-2"
                style={{ margin: 0, padding: 0, listStyle: "none" }}
              >
                {[
                  {
                    label: "Email",
                    value: IDENTITY.email,
                    href: `mailto:${IDENTITY.email}`,
                  },
                  {
                    label: "Phone",
                    value: IDENTITY.phone,
                    href: `tel:${IDENTITY.phone.replace(/\s/g, "")}`,
                  },
                  {
                    label: "LinkedIn",
                    value: IDENTITY.linkedin,
                    href: IDENTITY.linkedinUrl,
                  },
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
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
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
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 13.5,
                          color: TEXT,
                        }}
                      >
                        {value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              maxWidth: 1200,
              margin: "80px auto 0",
            }}
          >
            <hr
              style={{
                border: 0,
                borderTop: `1px solid ${RULE}`,
                marginBottom: 16,
              }}
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
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 12,
                  color: TEXT_MUTED,
                  lineHeight: 1.5,
                }}
              >
                {item.secondary}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
