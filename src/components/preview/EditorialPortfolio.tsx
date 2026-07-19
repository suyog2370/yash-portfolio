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
 * EditorialPortfolio — Direction: magazine spread with distinct layouts
 * per section. No repeating rhythm. Each section reads like a different
 * article in the same publication.
 *
 * Mobile: horizontal scroll for sectors becomes swipeable; the timeline
 * strip becomes vertical stack.
 */

const CREAM = "#F4EFE4";
const CREAM_DEEP = "#EBE4D2";
const INK = "#1C1A16";
const INK_SOFT = "#3A362D";
const MUTED = "#6E6858";
const ACCENT = "#B8410E"; // burnt orange
const ACCENT_DEEP = "#8B2F08";
const RULE = "#C7BFA9";

const DISPLAY = '"Playfair Display", Georgia, serif';
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = '"Inter", -apple-system, sans-serif';

export function EditorialPortfolio() {
  return (
    <main
      style={{
        background: CREAM,
        color: INK,
        fontFamily: SERIF,
      }}
    >
      {/* ============ HERO — big editorial masthead ============ */}
      <header
        style={{
          background: CREAM,
          borderBottom: `1px solid ${RULE}`,
        }}
        className="pt-16 pb-8 md:pt-24 md:pb-12"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          {/* Masthead — small caps like a magazine title */}
          <div
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 600,
              textAlign: "center",
              marginBottom: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <span aria-hidden style={{ width: 32, height: 1, background: ACCENT }} />
            <span>The Yashkumar Shah Practice</span>
            <span aria-hidden style={{ width: 32, height: 1, background: ACCENT }} />
          </div>

          {/* Big serif name + photo composition */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-[1fr_auto_1fr] items-center">
            <div
              className="text-right"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(56px, 11vw, 140px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                fontWeight: 500,
                color: INK,
              }}
            >
              Yash&shy;kumar
            </div>
            <div className="flex justify-center order-first md:order-none">
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden"
                style={{ border: `1px solid ${INK}` }}
              >
                <Image
                  src="/headshot.webp"
                  alt={IDENTITY.name}
                  fill
                  priority
                  sizes="224px"
                  className="object-cover"
                  style={{ filter: "sepia(0.15) contrast(1.05)" }}
                />
              </div>
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(56px, 11vw, 140px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                fontWeight: 500,
                color: INK,
                fontStyle: "italic",
              }}
            >
              Shah.
            </div>
          </div>

          {/* Subtitle band */}
          <div
            className="mt-10 md:mt-14 text-center"
            style={{
              fontFamily: SANS,
              fontSize: 12,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: MUTED,
              fontWeight: 500,
            }}
          >
            {IDENTITY.title} · {IDENTITY.location} · {IDENTITY.years}
          </div>
        </div>
      </header>

      {/* ============ PULL QUOTE — full-bleed editorial statement ============ */}
      <section
        style={{
          background: CREAM_DEEP,
          borderBottom: `1px solid ${RULE}`,
        }}
        className="py-16 md:py-28"
      >
        <div className="max-w-[900px] mx-auto px-5 md:px-12 text-center">
          <div
            aria-hidden
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(96px, 20vw, 200px)",
              lineHeight: 0.5,
              color: ACCENT,
              fontWeight: 500,
              opacity: 0.35,
              marginBottom: -20,
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(28px, 4.5vw, 52px)",
              lineHeight: 1.18,
              letterSpacing: "-0.015em",
              fontStyle: "italic",
              color: INK,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Fire protection design for the buildings that should not burn.
          </p>
        </div>
      </section>

      {/* ============ ABOUT — three-column editorial ============ */}
      <section className="py-16 md:py-24" style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="Introduction" note="I / IV" />
          <div
            className="mt-10 md:mt-12 grid gap-6 md:gap-10 md:grid-cols-3"
            style={{
              fontFamily: SERIF,
              fontSize: 15.5,
              lineHeight: 1.75,
              color: INK_SOFT,
              textAlign: "justify",
              hyphens: "auto",
            }}
          >
            {ABOUT_PARAS.map((p, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i === 0 && (
                  <span
                    aria-hidden
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 68,
                      lineHeight: 0.8,
                      color: ACCENT,
                      float: "left",
                      marginRight: 6,
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    M
                  </span>
                )}
                <p style={{ margin: 0 }}>
                  {i === 0 ? p.substring(1) : p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRACK RECORD — editorial ============ */}
      <section
        style={{ background: CREAM_DEEP, borderBottom: `1px solid ${RULE}` }}
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="Track record" note="Highlights" />

          <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-12 md:mb-16">
            {STRENGTHS.metrics.map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(52px, 8vw, 96px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: ACCENT,
                    fontWeight: 500,
                    marginBottom: 12,
                    fontStyle: "italic",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <ul
            className="grid gap-6 md:grid-cols-2"
            style={{ margin: 0, padding: 0, listStyle: "none", maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}
          >
            {STRENGTHS.qualitative.map((s) => (
              <li
                key={s}
                style={{
                  fontFamily: SERIF,
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: INK_SOFT,
                  paddingLeft: 20,
                  borderLeft: `2px solid ${ACCENT}`,
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ SECTORS — horizontal editorial scroll ============ */}
      <section
        style={{ background: INK, color: CREAM, borderBottom: `1px solid ${RULE}` }}
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 mb-10 md:mb-16">
          <EditorialSection
            eyebrow="Sectors"
            note="II / IV"
            invert
          />
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              fontStyle: "italic",
              fontWeight: 400,
              color: CREAM,
              maxWidth: "22ch",
              marginTop: 20,
            }}
          >
            Eight sectors, one brief: stay standing, stay serviceable, keep
            people safe.
          </p>
        </div>

        {/* Horizontal scroll of sector cards */}
        <div
          className="overflow-x-auto pb-6"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 md:gap-8 px-5 md:px-12" style={{ minWidth: "min-content" }}>
            {SECTORS.map((s, i) => (
              <article
                key={s.name}
                className="flex-shrink-0"
                style={{
                  width: "clamp(280px, 60vw, 380px)",
                  scrollSnapAlign: "start",
                  borderTop: `1px solid ${ACCENT}`,
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 10,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {String(i + 1).padStart(2, "0")} of {SECTORS.length}
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(24px, 3vw, 32px)",
                    lineHeight: 1.15,
                    fontWeight: 500,
                    color: CREAM,
                    letterSpacing: "-0.015em",
                    marginBottom: 12,
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(244,239,228,0.72)",
                    margin: 0,
                  }}
                >
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div
          className="mt-6 mx-5 md:mx-12"
          style={{
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(244,239,228,0.4)",
          }}
        >
          ← Swipe / scroll →
        </div>
      </section>

      {/* ============ EXPERTISE — infographic block ============ */}
      <section className="py-16 md:py-24" style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="Practice" note="III / IV" />

          {/* Big pull quote first, then infographic below */}
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: 1.05,
              fontWeight: 400,
              color: INK,
              letterSpacing: "-0.02em",
              maxWidth: "20ch",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            What I bring <em>to</em> a project.
          </h2>

          {/* Infographic grid — each expertise category is a labelled panel */}
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4" style={{ border: `1px solid ${INK}` }}>
            {EXPERTISE.map((col, colIndex) => (
              <div
                key={col.title}
                style={{
                  padding: 20,
                  borderRight:
                    colIndex < EXPERTISE.length - 1
                      ? `1px solid ${INK}`
                      : "none",
                  borderBottom: `1px solid ${INK}`,
                  background: colIndex % 2 === 0 ? CREAM_DEEP : CREAM,
                }}
                className={
                  colIndex >= 2
                    ? "lg:border-b-0"
                    : "md:border-b lg:border-b-0"
                }
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 10.5,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {String(colIndex + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 22,
                    lineHeight: 1.15,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                    borderBottom: `1px solid ${INK}`,
                    paddingBottom: 12,
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
                        fontSize: 12.5,
                        lineHeight: 1.7,
                        color: INK_SOFT,
                        marginBottom: 2,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APPROACH — three principles as editorial columns ============ */}
      <section
        style={{ background: CREAM_DEEP, borderBottom: `1px solid ${RULE}` }}
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: ACCENT,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Approach · three principles
            </div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.1,
                fontWeight: 400,
                color: INK,
                letterSpacing: "-0.02em",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              What I hold to on every project.
            </h2>
          </div>

          <div className="grid gap-10 md:gap-16 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title}>
                <div
                  aria-hidden
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 90,
                    lineHeight: 0.7,
                    color: ACCENT,
                    fontWeight: 400,
                    fontStyle: "italic",
                    opacity: 0.55,
                    marginBottom: 12,
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 22,
                    lineHeight: 1.2,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: INK_SOFT,
                    margin: 0,
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAREER — horizontal timeline ============ */}
      <section className="py-16 md:py-24" style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="Career" note="IV / IV" />

          {/* Horizontal timeline strip on desktop, vertical stack on mobile */}
          <div className="mt-12 md:mt-16">
            {/* Desktop: horizontal line + entries */}
            <div className="hidden md:block relative">
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 100,
                  height: 1,
                  background: INK,
                }}
              />
              <div className="grid grid-cols-5 gap-6">
                {ROLES.map((r) => (
                  <div key={r.company + r.dates} className="relative">
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        fontWeight: 600,
                        marginBottom: 12,
                      }}
                    >
                      {r.dateShort}
                    </div>
                    <div
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: 21,
                        lineHeight: 1.2,
                        fontWeight: 500,
                        color: INK,
                        marginBottom: 6,
                        letterSpacing: "-0.01em",
                        minHeight: "3em",
                      }}
                    >
                      {r.company}
                    </div>
                    {/* Timeline dot */}
                    <div
                      aria-hidden
                      style={{
                        width: r.current ? 14 : 10,
                        height: r.current ? 14 : 10,
                        borderRadius: "50%",
                        background: r.current ? ACCENT : INK,
                        border: r.current ? `2px solid ${ACCENT_DEEP}` : "none",
                        margin: "18px 0",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 10.5,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: MUTED,
                        fontWeight: 600,
                        marginTop: 12,
                        marginBottom: 6,
                      }}
                    >
                      {r.location}
                    </div>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: INK_SOFT,
                        fontStyle: "italic",
                      }}
                    >
                      {r.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical stack */}
            <div className="md:hidden space-y-6">
              {ROLES.map((r) => (
                <div key={r.company + r.dates} style={{ borderTop: `1px solid ${INK}`, paddingTop: 12 }}>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: ACCENT,
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {r.dates} {r.current && "· Present"}
                  </div>
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 22,
                      lineHeight: 1.15,
                      fontWeight: 500,
                      color: INK,
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                    }}
                  >
                    {r.company}
                    <span style={{ fontStyle: "italic", fontWeight: 400, color: MUTED, fontSize: 15 }}>
                      {" "}· {r.location}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: 14,
                      color: INK_SOFT,
                      fontStyle: "italic",
                      marginBottom: 8,
                    }}
                  >
                    {r.role}
                  </div>
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: INK_SOFT,
                      margin: 0,
                    }}
                  >
                    {r.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CURRENT FOCUS ============ */}
      <section
        className="py-16 md:py-20"
        style={{ background: CREAM_DEEP, borderBottom: `1px solid ${RULE}` }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="At present" note="Focus" />
          <div className="mt-8 md:mt-12 grid md:grid-cols-[2fr_1fr] gap-10 md:gap-16 items-center">
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: 1.4,
                fontStyle: "italic",
                color: INK,
                fontWeight: 400,
                margin: 0,
              }}
            >
              {CURRENT_FOCUS.sentence}
            </p>
            <dl className="grid grid-cols-2 gap-4">
              {CURRENT_FOCUS.tags.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    borderTop: `1px solid ${INK}`,
                    paddingTop: 8,
                  }}
                >
                  <dt
                    style={{
                      fontFamily: SANS,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: ACCENT,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: SERIF,
                      fontSize: 14,
                      color: INK,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ CREDENTIALS ============ */}
      <section className="py-16 md:py-20" style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <EditorialSection eyebrow="Credentials" note="Formation" />
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <EditorialCredBlock title="Education" items={EDUCATION} />
            <EditorialCredBlock title="Professional" items={PROFESSIONAL} />
          </div>
        </div>
      </section>

      {/* ============ CONTACT — closing masthead ============ */}
      <section
        style={{ background: INK, color: CREAM }}
        className="py-16 md:py-28"
      >
        <div className="max-w-[900px] mx-auto px-5 md:px-12 text-center">
          <div
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            Contact
          </div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(32px, 5.5vw, 64px)",
              lineHeight: 1.05,
              fontWeight: 400,
              fontStyle: "italic",
              color: CREAM,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Working on a building that should not burn?
          </h2>

          <ul
            className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2"
            style={{ margin: "56px 0 0", padding: 0, listStyle: "none" }}
          >
            {[
              ["Email", IDENTITY.email, `mailto:${IDENTITY.email}`],
              ["Phone", IDENTITY.phone, `tel:${IDENTITY.phone.replace(/\s/g, "")}`],
              ["LinkedIn", IDENTITY.linkedin, IDENTITY.linkedinUrl],
              ["Location", IDENTITY.location, ""],
            ].map(([label, value, href]) => (
              <li key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    fontWeight: 600,
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
                      fontFamily: SERIF,
                      fontSize: 15,
                      color: CREAM,
                      textDecoration: "none",
                    }}
                    className="hover:underline underline-offset-4"
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontFamily: SERIF, fontSize: 15, color: CREAM }}>
                    {value}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: 64,
              paddingTop: 24,
              borderTop: `1px solid rgba(244,239,228,0.2)`,
              fontFamily: SANS,
              fontSize: 10.5,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(244,239,228,0.5)",
            }}
          >
            © {new Date().getFullYear()} {IDENTITY.name}
          </div>
        </div>
      </section>
    </main>
  );
}

function EditorialSection({
  eyebrow,
  note,
  invert,
}: {
  eyebrow: string;
  note: string;
  invert?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 16,
        paddingBottom: 14,
        borderBottom: `1px solid ${invert ? "rgba(244,239,228,0.15)" : INK}`,
      }}
    >
      <span
        style={{
          fontFamily: SANS,
          fontSize: 11,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: ACCENT,
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </span>
      <span aria-hidden style={{ flex: 1, height: 1, background: invert ? "rgba(244,239,228,0.15)" : RULE }} />
      <span
        style={{
          fontFamily: SANS,
          fontSize: 10.5,
          color: invert ? "rgba(244,239,228,0.5)" : MUTED,
          letterSpacing: "0.1em",
        }}
      >
        {note}
      </span>
    </div>
  );
}

function EditorialCredBlock({
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
          fontSize: 26,
          lineHeight: 1.2,
          fontWeight: 500,
          color: INK,
          borderBottom: `1px solid ${INK}`,
          paddingBottom: 10,
          marginBottom: 20,
          letterSpacing: "-0.01em",
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
                color: ACCENT,
                fontWeight: 600,
                marginBottom: 5,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 20,
                lineHeight: 1.25,
                fontWeight: 500,
                color: INK,
                letterSpacing: "-0.01em",
                marginBottom: 3,
              }}
            >
              {item.primary}
            </div>
            {item.secondary && (
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 13,
                  fontStyle: "italic",
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
