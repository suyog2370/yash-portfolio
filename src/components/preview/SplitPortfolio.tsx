"use client";

import Image from "next/image";
import { useState } from "react";
import {
  IDENTITY,
  ABOUT_PARAS,
  CURRENT_FOCUS,
  SECTORS,
  EXPERTISE,
  PRINCIPLES,
  ROLES,
  EDUCATION,
  PROFESSIONAL,
} from "./portfolioContent";

/**
 * SplitPortfolio — Direction: fixed left panel, scrolling right pane.
 *
 * On desktop: identity/photo/nav/contact live in a sticky left column,
 * content flows on the right. Sectors as accordion, expertise as chips.
 *
 * On mobile: everything stacks vertically. The left column becomes a
 * top header. Accordion still functions.
 */

const BG = "#F6F6F4";
const PANEL = "#0F0F10";
const PANEL_SOFT = "#181819";
const INK = "#0F0F10";
const INK_SOFT = "#2A2A2B";
const MUTED = "#6B6B70";
const CREAM = "#F6F6F4";
const ACCENT = "#2A5DFF"; // electric blue
const ACCENT_SOFT = "#5C82FF";
const RULE = "#DEDCD5";
const RULE_DARK = "rgba(246,246,244,0.12)";

const SANS = '"Inter", -apple-system, sans-serif';
const MONO = '"JetBrains Mono", "IBM Plex Mono", monospace';

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "focus", label: "At present" },
  { id: "sectors", label: "Sectors" },
  { id: "practice", label: "Practice" },
  { id: "approach", label: "Approach" },
  { id: "career", label: "Career" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export function SplitPortfolio() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: BG,
        color: INK,
        fontFamily: SANS,
      }}
    >
      <div className="lg:grid lg:grid-cols-[380px_1fr]">
        {/* ============ LEFT COLUMN — fixed on desktop ============ */}
        <aside
          className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
          style={{
            background: PANEL,
            color: CREAM,
          }}
        >
          <div className="px-6 py-8 md:px-10 md:py-12 lg:h-full lg:flex lg:flex-col">
            {/* Photo */}
            <div className="flex items-start justify-between lg:block">
              <div
                className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden"
                style={{ border: `1px solid ${RULE_DARK}`, borderRadius: 4 }}
              >
                <Image
                  src="/headshot.jpg"
                  alt={IDENTITY.name}
                  fill
                  priority
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div className="lg:mt-8">
                <div
                  className="lg:hidden"
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: ACCENT_SOFT,
                    fontWeight: 500,
                  }}
                >
                  {IDENTITY.location}
                </div>
              </div>
            </div>

            {/* Name + title */}
            <div className="mt-6 lg:mt-8">
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 10.5,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: ACCENT_SOFT,
                  fontWeight: 500,
                  marginBottom: 10,
                }}
              >
                {IDENTITY.title}
              </div>
              <h1
                style={{
                  fontFamily: SANS,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  color: CREAM,
                  margin: 0,
                }}
              >
                Yashkumar
                <br />
                Shah
              </h1>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(246,246,244,0.68)",
                  maxWidth: "30ch",
                }}
              >
                {IDENTITY.tagline}
              </p>
            </div>

            {/* Nav */}
            <nav className="mt-10 lg:mt-12 hidden lg:block">
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 9.5,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(246,246,244,0.4)",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                Sections
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {NAV_ITEMS.map((item, i) => (
                  <li
                    key={item.id}
                    style={{
                      borderBottom: `1px solid ${RULE_DARK}`,
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        fontSize: 13.5,
                        color: "rgba(246,246,244,0.85)",
                        textDecoration: "none",
                        fontFamily: SANS,
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                      }}
                      className="hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 10.5,
                          color: "rgba(246,246,244,0.35)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact — always visible on desktop, in sticky panel */}
            <div className="mt-10 lg:mt-auto lg:pt-12">
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 9.5,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(246,246,244,0.4)",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                Contact
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                <li>
                  <a
                    href={`mailto:${IDENTITY.email}`}
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      color: "rgba(246,246,244,0.85)",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                    className="hover:text-white"
                  >
                    {IDENTITY.email}
                  </a>
                </li>
                <li
                  style={{ fontFamily: MONO, fontSize: 12, color: "rgba(246,246,244,0.85)" }}
                >
                  {IDENTITY.phone}
                </li>
                <li>
                  <a
                    href={IDENTITY.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      color: ACCENT_SOFT,
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                    className="hover:underline"
                  >
                    {IDENTITY.linkedin}
                  </a>
                </li>
                <li
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "rgba(246,246,244,0.55)",
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: `1px solid ${RULE_DARK}`,
                  }}
                >
                  {IDENTITY.location} · {IDENTITY.permit}
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* ============ RIGHT COLUMN — scrolling content ============ */}
        <div className="min-w-0">
          <div className="max-w-[820px] mx-auto px-6 py-10 md:px-12 md:py-16 lg:py-24">
            {/* ABOUT */}
            <SplitSection id="about" num="01" label="About">
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  color: INK,
                  margin: "0 0 24px",
                }}
              >
                Mechanical engineer by training.
                <br />
                Fire protection engineer by choice.
              </h2>
              {ABOUT_PARAS.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.7,
                    color: INK_SOFT,
                    marginBottom: 16,
                  }}
                >
                  {p}
                </p>
              ))}
            </SplitSection>

            {/* AT PRESENT */}
            <SplitSection id="focus" num="02" label="At present">
              <p
                style={{
                  fontSize: "clamp(19px, 2.4vw, 24px)",
                  lineHeight: 1.4,
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  margin: "0 0 32px",
                }}
              >
                {CURRENT_FOCUS.sentence}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {CURRENT_FOCUS.tags.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      background: "white",
                      border: `1px solid ${RULE}`,
                      borderRadius: 8,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 9.5,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: MUTED,
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: 13.5,
                        color: INK,
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </SplitSection>

            {/* SECTORS — ACCORDION */}
            <SplitSection id="sectors" num="03" label="Sectors">
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: INK,
                  margin: "0 0 8px",
                }}
              >
                The buildings I design fire protection for.
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: MUTED,
                  margin: "0 0 24px",
                  maxWidth: "60ch",
                }}
              >
                Nine years across sectors that share the same brief: stay
                standing, stay serviceable, keep people safe.
              </p>
              <SectorAccordion />
            </SplitSection>

            {/* EXPERTISE — FILTER CHIPS */}
            <SplitSection id="practice" num="04" label="Practice">
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: INK,
                  margin: "0 0 24px",
                }}
              >
                What I bring to a project.
              </h2>
              <ExpertiseChips />
            </SplitSection>

            {/* APPROACH */}
            <SplitSection id="approach" num="05" label="Approach">
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                  color: INK,
                  margin: "0 0 24px",
                }}
              >
                Three things I hold to on every project.
              </h2>
              <div className="space-y-6">
                {PRINCIPLES.map((p, i) => (
                  <div
                    key={p.title}
                    style={{
                      background: "white",
                      border: `1px solid ${RULE}`,
                      borderRadius: 8,
                      padding: "20px 22px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        fontWeight: 600,
                        marginBottom: 8,
                      }}
                    >
                      Principle {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        fontWeight: 600,
                        color: INK,
                        margin: "0 0 10px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.65,
                        color: INK_SOFT,
                        margin: 0,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </SplitSection>

            {/* CAREER — compact vertical list */}
            <SplitSection id="career" num="06" label="Career">
              <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {ROLES.map((r, i) => (
                  <li
                    key={r.company + r.dates}
                    style={{
                      borderTop: i === 0 ? `1px solid ${INK}` : `1px solid ${RULE}`,
                      padding: "18px 0",
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3
                        style={{
                          fontSize: 17,
                          lineHeight: 1.2,
                          letterSpacing: "-0.01em",
                          fontWeight: 600,
                          color: INK,
                          margin: 0,
                        }}
                      >
                        {r.company}
                        <span style={{ fontWeight: 400, color: MUTED, fontSize: 15 }}>
                          {" "}· {r.location}
                        </span>
                      </h3>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 11,
                          color: r.current ? ACCENT : MUTED,
                          whiteSpace: "nowrap",
                          fontWeight: r.current ? 600 : 400,
                        }}
                      >
                        {r.current && "● "}
                        {r.dates}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      {r.role}
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: INK_SOFT,
                        margin: 0,
                      }}
                    >
                      {r.context}
                    </p>
                  </li>
                ))}
              </ol>
            </SplitSection>

            {/* CREDENTIALS */}
            <SplitSection id="credentials" num="07" label="Credentials">
              <div className="grid gap-8 md:grid-cols-2">
                <SplitCredBlock title="Education" items={EDUCATION} />
                <SplitCredBlock title="Professional" items={PROFESSIONAL} />
              </div>
            </SplitSection>

            {/* CONTACT */}
            <SplitSection id="contact" num="08" label="Contact" last>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  color: INK,
                  margin: "0 0 16px",
                }}
              >
                Working on a building that
                <br />
                shouldn&rsquo;t burn?
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: INK_SOFT,
                  margin: "0 0 32px",
                  maxWidth: "50ch",
                }}
              >
                Fire protection design, hydraulic calculations, BIM
                coordination, standards review. Any of the below.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  ["Email", IDENTITY.email, `mailto:${IDENTITY.email}`],
                  ["Phone", IDENTITY.phone, `tel:${IDENTITY.phone.replace(/\s/g, "")}`],
                  ["LinkedIn", IDENTITY.linkedin, IDENTITY.linkedinUrl],
                  ["Location", IDENTITY.location, ""],
                ].map(([label, value, href]) => (
                  <div
                    key={label}
                    style={{
                      background: "white",
                      border: `1px solid ${RULE}`,
                      borderRadius: 8,
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: MONO,
                        fontSize: 9.5,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: MUTED,
                        marginBottom: 4,
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
                          fontSize: 12.5,
                          color: INK,
                          textDecoration: "none",
                          wordBreak: "break-all",
                        }}
                        className="hover:text-[color:#2A5DFF] hover:underline underline-offset-4"
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
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 20,
                  borderTop: `1px solid ${RULE}`,
                  fontFamily: MONO,
                  fontSize: 10.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: MUTED,
                }}
              >
                © {new Date().getFullYear()} {IDENTITY.name}
              </div>
            </SplitSection>
          </div>
        </div>
      </div>
    </div>
  );
}

function SplitSection({
  id,
  num,
  label,
  children,
  last,
}: {
  id: string;
  num: string;
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      id={id}
      style={{
        paddingTop: 40,
        paddingBottom: last ? 40 : 80,
        borderBottom: last ? "none" : `1px solid ${RULE}`,
        scrollMarginTop: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10.5,
            color: ACCENT,
            letterSpacing: "0.12em",
            fontWeight: 600,
          }}
        >
          {num}
        </span>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10.5,
            color: MUTED,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <span aria-hidden style={{ flex: 1, height: 1, background: RULE }} />
      </div>
      {children}
    </section>
  );
}

function SectorAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div style={{ borderTop: `1px solid ${RULE}` }}>
      {SECTORS.map((s, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={s.name} style={{ borderBottom: `1px solid ${RULE}` }}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: SANS,
                color: INK,
              }}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontSize: 16.5,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: INK,
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: ACCENT,
                    marginRight: 12,
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.name}
              </span>
              <span
                aria-hidden
                style={{
                  fontFamily: MONO,
                  fontSize: 16,
                  color: MUTED,
                  transition: "transform 200ms",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  paddingBottom: 16,
                  paddingLeft: 40,
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: INK_SOFT,
                }}
              >
                {s.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ExpertiseChips() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div>
      {/* Category tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label="Expertise categories"
      >
        {EXPERTISE.map((col, i) => (
          <button
            key={col.title}
            type="button"
            role="tab"
            aria-selected={activeIdx === i}
            onClick={() => setActiveIdx(i)}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: `1px solid ${activeIdx === i ? ACCENT : RULE}`,
              background: activeIdx === i ? ACCENT : "white",
              color: activeIdx === i ? "white" : INK,
              fontSize: 12.5,
              fontFamily: SANS,
              fontWeight: 500,
              letterSpacing: "-0.005em",
              cursor: "pointer",
              transition: "all 150ms",
            }}
          >
            {col.title}
          </button>
        ))}
      </div>

      {/* Active category items as chips */}
      <div className="flex flex-wrap gap-2">
        {EXPERTISE[activeIdx].items.map((item) => (
          <span
            key={item}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: "white",
              border: `1px solid ${RULE}`,
              fontSize: 12.5,
              fontFamily: MONO,
              color: INK_SOFT,
              letterSpacing: "-0.005em",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SplitCredBlock({
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
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: ACCENT,
          fontWeight: 600,
          borderBottom: `1px solid ${INK}`,
          paddingBottom: 10,
          marginBottom: 16,
        }}
      >
        {title}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.primary} style={{ marginBottom: 16 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 4,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: 16,
                lineHeight: 1.3,
                fontWeight: 600,
                color: INK,
                letterSpacing: "-0.015em",
                marginBottom: 3,
              }}
            >
              {item.primary}
            </div>
            {item.secondary && (
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11.5,
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
