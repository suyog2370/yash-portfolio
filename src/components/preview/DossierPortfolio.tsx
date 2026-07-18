import Image from "next/image";
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
 * DossierPortfolio — Direction: CV-first density.
 *
 * The career timeline is the spine of the whole document. Everything
 * else is compact data around it. No hero-scale photo. Feels like a
 * well-typeset dossier or a serious CV.
 *
 * Mobile: everything stacks. The career spine becomes a mobile timeline
 * with dates above each entry rather than beside.
 */

const RED = "#B12324";
const INK = "#0A0A0A";
const INK_SOFT = "#333";
const MUTED = "#666";
const PAPER = "#FAFAF7";
const PAPER_WARM = "#F2EFE8";
const RULE = "#D8D3C7";

const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';
const MONO = '"JetBrains Mono", "IBM Plex Mono", monospace';

export function DossierPortfolio() {
  return (
    <main
      style={{
        background: PAPER,
        color: INK,
        fontFamily: SANS,
        fontSize: 15,
        lineHeight: 1.55,
      }}
    >
      {/* ============ HEADER STRIP — compact, dossier-style ============ */}
      <header
        style={{ background: PAPER, borderBottom: `2px solid ${INK}` }}
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-6 md:py-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-10 items-center">
            <div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: RED,
                  fontWeight: 500,
                  marginBottom: 8,
                }}
              >
                {IDENTITY.title}
              </div>
              <h1
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(32px, 6vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: INK,
                  margin: 0,
                }}
              >
                {IDENTITY.name}
              </h1>

              {/* Contact strip — compact, inline. Dossier signature. */}
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 14px",
                  fontFamily: MONO,
                  fontSize: 11.5,
                  color: MUTED,
                }}
              >
                <span>{IDENTITY.location}</span>
                <span style={{ color: RULE }} aria-hidden>·</span>
                <a
                  href={`mailto:${IDENTITY.email}`}
                  style={{ color: MUTED }}
                  className="hover:text-black"
                >
                  {IDENTITY.email}
                </a>
                <span style={{ color: RULE }} aria-hidden>·</span>
                <span>{IDENTITY.phone}</span>
                <span style={{ color: RULE }} aria-hidden>·</span>
                <a
                  href={IDENTITY.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: MUTED }}
                  className="hover:text-black"
                >
                  {IDENTITY.linkedin}
                </a>
              </div>
            </div>

            {/* Small photo, top-right, not hero-scaled */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 relative overflow-hidden flex-shrink-0"
              style={{ border: `2px solid ${INK}` }}
            >
              <Image
                src="/headshot.webp"
                alt={IDENTITY.name}
                fill
                priority
                sizes="96px"
                className="object-cover"
                style={{ filter: "grayscale(0.35)" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ============ CAREER SPINE — the dominant feature ============ */}
      <section
        style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <SectionHeading label="Career" note={IDENTITY.years} />

          {/* Timeline: on desktop the line runs down the left with big
              dates; on mobile it stacks with dates above each entry. */}
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {ROLES.map((r, i) => (
              <li
                key={r.company + r.dates}
                className="grid gap-2 md:gap-8 md:grid-cols-[180px_1fr] py-6 md:py-8"
                style={{
                  borderTop: i === 0 ? `2px solid ${INK}` : `1px solid ${RULE}`,
                  position: "relative",
                }}
              >
                <div
                  className="flex md:block items-center gap-2"
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: RED,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  <span>{r.dates}</span>
                  {r.current && (
                    <span
                      style={{
                        color: RED,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        marginLeft: 8,
                      }}
                      className="md:block md:ml-0 md:mt-2"
                    >
                      ● Present
                    </span>
                  )}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: "clamp(20px, 3vw, 24px)",
                      lineHeight: 1.2,
                      fontWeight: 600,
                      color: INK,
                      marginBottom: 2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {r.company}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: 16,
                        color: MUTED,
                        marginLeft: 8,
                      }}
                    >
                      · {r.location}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: RED,
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    {r.role}
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: INK_SOFT,
                      maxWidth: "60ch",
                      margin: 0,
                    }}
                  >
                    {r.context}
                  </p>
                </div>
              </li>
            ))}
            <li aria-hidden style={{ borderTop: `2px solid ${INK}` }} />
          </ol>
        </div>
      </section>

      {/* ============ TRACK RECORD ============ */}
      <section
        style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <SectionHeading label="Track record" note="Highlights" />

          {/* Metrics row — dense */}
          <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-4 mb-10">
            {STRENGTHS.metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderTop: `2px solid ${INK}`, paddingTop: 12 }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(32px, 5vw, 52px)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: RED,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 10.5,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: MUTED,
                    fontWeight: 600,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Qualitative strengths — dense list */}
          <ul
            className="grid gap-3 md:gap-4 md:grid-cols-2"
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            {STRENGTHS.qualitative.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: SANS,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: INK_SOFT,
                  paddingLeft: 18,
                  position: "relative",
                }}
              >
                <span
                  aria-hidden
                  style={{ color: RED, position: "absolute", left: 0 }}
                >
                  ▸
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ ABOUT — dense prose block ============ */}
      <section
        style={{ background: PAPER_WARM, borderBottom: `1px solid ${RULE}` }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <SectionHeading label="About" note="Bio" />
          <div
            className="grid gap-6 md:gap-10 md:grid-cols-[1fr_1fr]"
            style={{ fontSize: 14.5, lineHeight: 1.7, color: INK_SOFT }}
          >
            <p style={{ margin: 0 }}>{ABOUT_PARAS[0]}</p>
            <p style={{ margin: 0 }}>{ABOUT_PARAS[1]}</p>
            <p
              style={{ margin: 0, gridColumn: "1 / -1", maxWidth: "80ch" }}
            >
              {ABOUT_PARAS[2]}
            </p>
          </div>
        </div>
      </section>

      {/* ============ SIDE-BY-SIDE: Sectors + Expertise ============ */}
      <section
        style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Sectors — compact tile grid, 2 cols on mobile, 2 on desktop */}
            <div>
              <SectionHeading
                label="Sectors"
                note={`${SECTORS.length} categories`}
              />
              <ul
                className="grid gap-3 grid-cols-2"
                style={{ margin: 0, padding: 0, listStyle: "none" }}
              >
                {SECTORS.map((s) => (
                  <li
                    key={s.name}
                    style={{
                      border: `1px solid ${RULE}`,
                      padding: "12px 14px",
                      background: PAPER,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: INK,
                        marginBottom: 6,
                        lineHeight: 1.15,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 11.5,
                        lineHeight: 1.4,
                        color: MUTED,
                      }}
                    >
                      {s.description.split(".")[0]}.
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise — dense matrix as checklist */}
            <div>
              <SectionHeading label="Expertise" note="Systems / Std / Tools" />
              <div className="grid gap-6 grid-cols-2">
                {EXPERTISE.map((col) => (
                  <div key={col.title}>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: RED,
                        fontWeight: 600,
                        borderBottom: `1px solid ${INK}`,
                        paddingBottom: 6,
                        marginBottom: 10,
                      }}
                    >
                      {col.title}
                    </div>
                    <ul
                      style={{ margin: 0, padding: 0, listStyle: "none" }}
                    >
                      {col.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily: MONO,
                            fontSize: 11.5,
                            lineHeight: 1.7,
                            color: INK_SOFT,
                          }}
                        >
                          <span
                            aria-hidden
                            style={{ color: RED, marginRight: 6 }}
                          >
                            ▸
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES — three columns ============ */}
      <section
        style={{
          background: INK,
          color: PAPER,
          borderBottom: `1px solid ${RULE}`,
        }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: RED,
              fontWeight: 600,
              marginBottom: 8,
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            <span>Approach</span>
            <span aria-hidden style={{ flex: 1, height: 1, background: RED }} />
            <span style={{ color: "rgba(250,250,247,0.4)", fontSize: 10 }}>
              3 principles
            </span>
          </div>
          <div className="grid gap-8 md:gap-12 md:grid-cols-3 mt-6">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 20,
                    lineHeight: 1.25,
                    fontWeight: 500,
                    color: PAPER,
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: "rgba(250,250,247,0.72)",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRENT FOCUS + CREDENTIALS side by side ============ */}
      <section
        style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
        className="py-12 md:py-20"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Current focus */}
            <div>
              <SectionHeading label="At present" note="Focus" />
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: INK,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {CURRENT_FOCUS.sentence}
              </p>
              <dl
                className="mt-6 grid grid-cols-2 gap-3"
                style={{ margin: "24px 0 0" }}
              >
                {CURRENT_FOCUS.tags.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      borderTop: `1px solid ${RED}`,
                      paddingTop: 8,
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: SANS,
                        fontSize: 9.5,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: RED,
                        fontWeight: 600,
                        marginBottom: 3,
                      }}
                    >
                      {label}
                    </dt>
                    <dd
                      style={{
                        fontFamily: MONO,
                        fontSize: 12,
                        color: INK,
                        margin: 0,
                      }}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Credentials */}
            <div>
              <SectionHeading label="Credentials" note="Formation" />
              <div className="grid gap-6">
                <CredBlock title="Education" items={EDUCATION} />
                <CredBlock title="Professional" items={PROFESSIONAL} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT FOOTER ============ */}
      <section
        style={{ background: PAPER_WARM }}
        className="py-12 md:py-16"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16 items-end">
            <div>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: INK,
                  margin: 0,
                }}
              >
                Working on a building that shouldn&rsquo;t burn?
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: MUTED,
                  marginTop: 12,
                  maxWidth: "50ch",
                }}
              >
                Fire protection design, hydraulic calculations, BIM coordination,
                standards review. Reach me on any of the below.
              </p>
            </div>
            <ul
              className="grid gap-3"
              style={{ margin: 0, padding: 0, listStyle: "none" }}
            >
              {[
                ["Email", IDENTITY.email, `mailto:${IDENTITY.email}`],
                ["Phone", IDENTITY.phone, `tel:${IDENTITY.phone.replace(/\s/g, "")}`],
                ["LinkedIn", IDENTITY.linkedin, IDENTITY.linkedinUrl],
                ["Location", IDENTITY.location, ""],
              ].map(([label, value, href]) => (
                <li
                  key={label}
                  style={{
                    borderTop: `1px solid ${INK}`,
                    paddingTop: 8,
                    display: "grid",
                    gridTemplateColumns: "70px 1fr",
                    gap: 12,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: RED,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: MONO,
                        fontSize: 12.5,
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
                        fontSize: 12.5,
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
          <div
            style={{
              marginTop: 40,
              paddingTop: 16,
              borderTop: `1px solid ${RULE}`,
              fontFamily: MONO,
              fontSize: 10.5,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: MUTED,
              textAlign: "right",
            }}
          >
            © {new Date().getFullYear()} {IDENTITY.name}
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ label, note }: { label: string; note: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          fontFamily: SANS,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: RED,
          fontWeight: 600,
          margin: 0,
        }}
      >
        {label}
      </h2>
      <span aria-hidden style={{ flex: 1, height: 1, background: RED }} />
      <span
        style={{
          fontFamily: MONO,
          fontSize: 10.5,
          color: MUTED,
          letterSpacing: "0.06em",
        }}
      >
        {note}
      </span>
    </div>
  );
}

function CredBlock({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; primary: string; secondary?: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: INK,
          fontWeight: 700,
          borderBottom: `1px solid ${INK}`,
          paddingBottom: 6,
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.primary} style={{ marginBottom: 12 }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 9.5,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: RED,
                fontWeight: 600,
                marginBottom: 3,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 16,
                lineHeight: 1.3,
                color: INK,
                fontWeight: 500,
              }}
            >
              {item.primary}
            </div>
            {item.secondary && (
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: MUTED,
                  marginTop: 3,
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
