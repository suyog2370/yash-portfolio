import Image from "next/image";
import { IDENTITY, HERO_SPEC } from "./portfolioContent";
import { ThemeToggle } from "./ThemeToggle";

/**
 * HeroHyperscale — home hero, mission-critical aesthetic.
 * Every colour reads from the --hs-* palette in globals.css so the
 * theme toggle (top-right of the portrait column) swaps everything
 * without any React re-render.
 */
export function HeroHyperscale() {
  return (
    <section
      className="relative flex flex-col"
      style={{
        background: "var(--hs-bg)",
        color: "var(--hs-text)",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Ambient coordinate grid — line colour follows the theme. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: "var(--hs-grid-opacity)",
          backgroundImage:
            "linear-gradient(to right, var(--hs-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--hs-grid-line) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Amber accent bar */}
      <div style={{ height: 3, background: "var(--hs-amber)" }} />

      {/* Theme toggle — top-right of the hero, above the portrait line.
          Positioned absolutely so it doesn't shift the grid rhythm. */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Main content — reduced padding especially at bottom */}
      <div className="relative max-w-[1200px] w-full mx-auto px-5 md:px-12 pt-10 md:pt-20 pb-8 md:pb-14">
        <div className="grid gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr] items-center">
          {/* Text column — centre-aligned on mobile, left-aligned from md up. */}
          <div className="text-center md:text-left">
            {/* Role label */}
            <div
              className="mb-4 md:mb-6"
              style={{
                fontSize: 11.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--hs-amber)",
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
                color: "var(--hs-text-bright)",
                margin: 0,
              }}
            >
              Yashkumar
              <br />
              Shah
            </h1>

            {/* Tagline — amber rule on the left (desktop). On mobile
                the whole hero is centred, so the left border would
                look off-axis; drop it below md. */}
            <div
              className="mt-6 md:mt-10 md:pl-4 md:border-l-2"
              style={{ borderColor: "var(--hs-amber)" }}
            >
              <p
                className="mx-auto md:mx-0"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.4,
                  color: "var(--hs-text-soft)",
                  maxWidth: "40ch",
                  margin: 0,
                }}
              >
                Fire protection design for the buildings that should not burn
              </p>
            </div>

            {/* Spec-schedule — label on top, value below. Two columns
                on every breakpoint so six specs read as three tight
                rows instead of six full-width strips (the mobile
                stacked version was eating too much vertical space). */}
            <dl
              className="mt-8 md:mt-10 grid gap-x-4 md:gap-x-10 grid-cols-2 text-center md:text-left"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12.5,
                color: "var(--hs-text-soft)",
              }}
            >
              {HERO_SPEC.map(([term, def]) => {
                const isStandards = term === "Standards";
                return (
                  <div
                    key={term}
                    className="py-2 md:py-3"
                    style={{ borderBottom: "1px solid var(--hs-rule)" }}
                  >
                    <dt
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: 10,
                        color: "var(--hs-amber)",
                        fontWeight: 500,
                        marginBottom: 4,
                      }}
                    >
                      {term}
                    </dt>
                    <dd
                      style={{
                        fontFamily: "var(--font-plex-mono), monospace",
                        fontSize: 12,
                        lineHeight: 1.35,
                        margin: 0,
                        color: "var(--hs-text)",
                      }}
                    >
                      {isStandards ? (
                        <>
                          {/* Mobile: 2×2 mini-grid, columns sized to
                              content so NFPA and LPCB sit close, not
                              across a half-width gutter. Desktop:
                              single inline line separated by dots. */}
                          <span className="md:hidden flex flex-col items-center gap-y-1">
                            <span>NFPA · LPCB</span>
                            <span>FM Global · EN</span>
                          </span>
                          <span className="hidden md:inline">
                            NFPA · FM Global · LPCB · EN
                          </span>
                        </>
                      ) : (
                        def
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Portrait — subtle border radius, amber outline. Border /
              shadow rgba amber tokens follow the current theme. */}
          <div className="flex justify-center md:justify-end order-first md:order-none">
            <div
              className="relative w-[220px] md:w-[340px] aspect-square overflow-hidden"
              style={{
                borderRadius: 8,
                border: "1px solid var(--hs-amber-40)",
                boxShadow:
                  "0 0 0 1px var(--hs-amber-15), 0 20px 60px var(--hs-amber-08)",
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
                    "linear-gradient(135deg, var(--hs-amber-12), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
