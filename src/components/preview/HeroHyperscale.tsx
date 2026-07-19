import Image from "next/image";
import { IDENTITY, HERO_SPEC } from "./portfolioContent";

/**
 * HeroHyperscale — Direction C, dark mission-critical aesthetic.
 * Rev 3: consistent name typography (both parts same weight/colour, no
 * italic, no period), feature bullets under tagline, portrait with
 * subtle border-radius, spec-schedule table under bullets, tighter
 * bottom margin, mobile-first sizing.
 */
export function HeroHyperscale() {
  return (
    <section
      className="relative flex flex-col"
      style={{
        background: "#0E1116",
        color: "#E8E5DE",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Ambient coordinate grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E8E5DE 1px, transparent 1px), linear-gradient(to bottom, #E8E5DE 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Amber accent bar */}
      <div style={{ height: 3, background: "#F0A85E" }} />

      {/* Main content — reduced padding especially at bottom */}
      <div className="relative max-w-[1200px] w-full mx-auto px-5 md:px-12 pt-10 md:pt-20 pb-8 md:pb-14">
        <div className="grid gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr] items-center">
          {/* Text column */}
          <div>
            {/* Role label */}
            <div
              className="mb-4 md:mb-6"
              style={{
                fontSize: 11.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F0A85E",
                fontWeight: 500,
              }}
            >
              {IDENTITY.title}
            </div>

            {/* Name — both parts identical treatment: same weight, same
                colour, no italic, no trailing period */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 8.5vw, 100px)",
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
                fontWeight: 500,
                color: "#F5F1E8",
                margin: 0,
              }}
            >
              Yashkumar
              <br />
              Shah
            </h1>

            {/* Tagline — amber rule on the left */}
            <div
              className="mt-6 md:mt-10 pl-4"
              style={{ borderLeft: "2px solid #F0A85E" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.4,
                  color: "rgba(232, 229, 222, 0.82)",
                  maxWidth: "40ch",
                  margin: 0,
                }}
              >
                Fire protection design for the buildings that should not burn
              </p>
            </div>

            {/* Spec-schedule table — single key/value block covering the
                headline credentials and hire info. Replaces the earlier
                bullet-list treatment; two columns on desktop so six rows
                stay visually compact, single column on mobile. */}
            <dl
              className="mt-8 md:mt-10 grid gap-x-6 md:gap-x-10 md:grid-cols-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12.5,
                color: "rgba(232, 229, 222, 0.72)",
              }}
            >
              {HERO_SPEC.map(([term, def]) => (
                <div
                  key={term}
                  className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-4 py-2 md:py-2.5"
                  style={{ borderBottom: "1px solid rgba(232, 229, 222, 0.1)" }}
                >
                  <dt
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontSize: 10,
                      color: "#F0A85E",
                      fontWeight: 500,
                      paddingTop: 3,
                    }}
                  >
                    {term}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-plex-mono), monospace",
                      fontSize: 12,
                      margin: 0,
                      color: "#E8E5DE",
                    }}
                  >
                    {def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait — subtle border radius, amber outline */}
          <div className="flex justify-center md:justify-end order-first md:order-none">
            <div
              className="relative w-[220px] md:w-[340px] aspect-square overflow-hidden"
              style={{
                borderRadius: 8,
                border: "1px solid rgba(240, 168, 94, 0.4)",
                boxShadow:
                  "0 0 0 1px rgba(240, 168, 94, 0.15), 0 20px 60px rgba(240, 168, 94, 0.08)",
              }}
            >
              <Image
                src="/headshot.webp"
                alt={`Portrait of ${IDENTITY.name}`}
                fill
                priority
                sizes="(max-width: 768px) 220px, 340px"
                className="object-cover"
                style={{ filter: "brightness(0.92) contrast(1.05)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-overlay pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(240, 168, 94, 0.12), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
