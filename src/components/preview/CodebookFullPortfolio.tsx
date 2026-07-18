import {
  IDENTITY,
  ABOUT_PARAS,
  CURRENT_FOCUS,
  STRENGTHS,
  SECTORS,
  EXPERTISE,
  PRINCIPLES,
  ROLES,
  EDUCATION,
  PROFESSIONAL,
} from "./portfolioContent";

/**
 * CodebookFullPortfolio — Direction B, all sections after the Hero.
 * Deep red accents, spec-schedule tables, serif display, ivory paper.
 * Content is sourced from the shared portfolioContent module.
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
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 12,
                  color: MUTED,
                  maxWidth: 180,
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
                  fontFamily: SERIF,
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.015em",
                  marginBottom: 36,
                  fontWeight: 500,
                }}
              >
                I design the systems that buildings{" "}
                <em style={{ fontWeight: 400 }}>quietly</em> depend on.
              </h2>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 16.5,
                  lineHeight: 1.7,
                  color: INK_SOFT,
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
                {CURRENT_FOCUS.tags.map(([label, value]) => (
                  <div
                    key={label}
                    style={{ borderTop: `1px solid ${RED}`, paddingTop: 12 }}
                  >
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: RED,
                        fontWeight: 600,
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: 13, color: INK }}>
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
        style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}
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
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                Nine years, more than a hundred buildings.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-12 md:mb-16">
            {STRENGTHS.metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderTop: `1px solid ${RED}`, paddingTop: 14 }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(40px, 5.5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: RED,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 11.5,
                    letterSpacing: "0.06em",
                    color: MUTED,
                    lineHeight: 1.4,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <ul
            className="grid gap-4 md:gap-6 md:grid-cols-2"
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            {STRENGTHS.qualitative.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: SANS,
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: INK_SOFT,
                  paddingLeft: 24,
                  position: "relative",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.75em",
                    width: 12,
                    height: 1,
                    background: RED,
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
        style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Sectors</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(30px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                The buildings I design fire protection for.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: MUTED,
                }}
              >
                Sectors that share the same brief: stay standing, stay
                serviceable, keep people safe.
              </p>
            </div>
          </div>

          <div>
            {SECTORS.map((sector, i) => (
              <article
                key={sector.name}
                className="grid gap-4 md:gap-8 md:grid-cols-[220px_1fr] py-7"
                style={{
                  borderTop: i === 0 ? `2px solid ${RED}` : `1px solid ${RULE}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 22,
                    lineHeight: 1.2,
                    color: INK,
                    fontWeight: 500,
                  }}
                >
                  {sector.name}
                </h3>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: INK_SOFT,
                    maxWidth: "62ch",
                  }}
                >
                  {sector.description}
                </p>
              </article>
            ))}
            <div style={{ borderTop: `2px solid ${RED}` }} />
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE ==================== */}
      <section
        className={sectionShell}
        style={{ background: PAPER_WARM, borderTop: `1px solid ${RULE}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Practice</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(30px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                What I bring to a project.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: MUTED,
                }}
              >
                The systems I design, the codes I write to, the tools I work
                in, and how I coordinate with the rest of the design team.
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
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
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
      <section
        className={sectionShell}
        style={{ background: INK, color: PAPER }}
      >
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
              <hr
                style={{
                  border: 0,
                  borderTop: `1px solid ${RED}`,
                  width: 32,
                }}
              />
            </div>
            <div style={{ maxWidth: "54ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: PAPER,
                  fontWeight: 400,
                }}
              >
                Three things I hold to on{" "}
                <em style={{ fontWeight: 400 }}>every</em> project.
              </h2>
            </div>
          </div>
          <div className="grid gap-12 md:gap-16 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article key={p.title}>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 24,
                    lineHeight: 1.2,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                    color: PAPER,
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(250, 247, 242, 0.72)",
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
        style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Career</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(30px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                From graduate trainee in Pune to fire protection design lead
                in Ireland.
              </h2>
            </div>
          </div>

          <ol
            className="space-y-0"
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            {ROLES.map((r, i) => (
              <li
                key={r.company + r.dates}
                className="grid gap-3 md:gap-6 md:grid-cols-[160px_1fr] py-8"
                style={{
                  borderTop: i === 0 ? `2px solid ${RED}` : `1px solid ${RULE}`,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11.5,
                    letterSpacing: "0.06em",
                    color: RED,
                  }}
                >
                  <div>{r.dates}</div>
                  {r.current && (
                    <div
                      style={{
                        color: RED_SOFT,
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
                          background: RED_SOFT,
                        }}
                      />
                      Present
                    </div>
                  )}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: 22,
                      lineHeight: 1.2,
                      color: INK,
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {r.company}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: 17,
                        color: MUTED,
                        marginLeft: 8,
                      }}
                    >
                      · {r.location}
                    </span>
                  </h3>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 12.5,
                      letterSpacing: "0.06em",
                      color: RED,
                      marginBottom: 12,
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {r.role}
                  </div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: INK_SOFT,
                      maxWidth: "62ch",
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

      {/* ==================== CREDENTIALS ==================== */}
      <section
        className={sectionShell}
        style={{ background: PAPER_WARM, borderTop: `1px solid ${RULE}` }}
      >
        <div className={container}>
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
            <div>
              <SectionLabel>Education</SectionLabel>
              <LabelRule />
            </div>
            <div style={{ maxWidth: "52ch" }}>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                Where I trained and where I stand.
              </h2>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <CredentialBlock title="Education" items={EDUCATION} />
            <CredentialBlock title="Professional" items={PROFESSIONAL} />
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section
        className={sectionShell}
        style={{ background: PAPER, borderTop: `1px solid ${RULE}` }}
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
                  fontFamily: SERIF,
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: INK,
                  fontWeight: 400,
                }}
              >
                If you&rsquo;re working on a building that{" "}
                <em>shouldn&rsquo;t burn</em> — say hello.
              </h2>
              <p
                style={{
                  fontFamily: SANS,
                  marginTop: 24,
                  fontSize: 16.5,
                  lineHeight: 1.7,
                  color: MUTED,
                  maxWidth: "54ch",
                }}
              >
                Fire protection design, hydraulic calculations, BIM
                coordination, standards review. Reach me on any of the below
                and I&rsquo;ll answer within a day or two.
              </p>

              <ul className="mt-12 grid gap-6 md:grid-cols-2">
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
                    style={{ borderTop: `1px solid ${RED}`, paddingTop: 16 }}
                  >
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: RED,
                        fontWeight: 600,
                        marginBottom: 8,
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
                          fontSize: 14,
                          color: INK,
                          textDecoration: "none",
                        }}
                        className="hover:underline underline-offset-4"
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 14,
                          color: INK,
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

          <div style={{ maxWidth: 1100, margin: "96px auto 0" }}>
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
                color: MUTED,
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
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.primary} style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: RED,
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 19,
                lineHeight: 1.3,
                color: INK,
                marginBottom: 4,
                fontWeight: 500,
              }}
            >
              {item.primary}
            </div>
            {item.secondary && (
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 12.5,
                  color: MUTED,
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
