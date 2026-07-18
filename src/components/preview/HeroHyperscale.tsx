import Image from "next/image";
import { IDENTITY } from "./portfolioContent";

/**
 * HeroHyperscale
 * --------------
 * Direction C — dark, mission-critical infrastructure aesthetic. Deep
 * charcoal on which content sits with an amber accent. Now using
 * Playfair Display for the name (matches Editorial's display fonts)
 * and Inter for body labels — for editorial polish over the dark palette.
 */
export function HeroHyperscale() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col"
      style={{
        background: "#0E1116",
        color: "#E8E5DE",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Very subtle grid overlay — ambient technical texture. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E8E5DE 1px, transparent 1px), linear-gradient(to bottom, #E8E5DE 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Amber accent bar at top — signals the palette, no text. */}
      <div style={{ height: 3, background: "#F0A85E" }} />

      {/* Main content */}
      <div className="relative flex-1 max-w-[1200px] w-full mx-auto px-5 md:px-12 py-16 md:py-32">
        <div className="grid gap-10 md:gap-20 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            {/* Role label */}
            <div
              className="mb-6 md:mb-8 flex items-center gap-3"
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F0A85E",
                fontWeight: 500,
              }}
            >
              {IDENTITY.title}
            </div>

            {/* Big editorial name — Playfair Display serif */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 9vw, 108px)",
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
                fontWeight: 500,
                color: "#F5F1E8",
                margin: 0,
              }}
            >
              Yashkumar
              <br />
              <em
                style={{
                  fontWeight: 400,
                  color: "#F0A85E",
                  fontStyle: "italic",
                }}
              >
                Shah.
              </em>
            </h1>

            {/* Tagline — amber rule on the left */}
            <div
              className="mt-8 md:mt-10 pl-4"
              style={{ borderLeft: "2px solid #F0A85E" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  lineHeight: 1.4,
                  color: "rgba(232, 229, 222, 0.82)",
                  maxWidth: "40ch",
                  margin: 0,
                }}
              >
                Fire protection design for the buildings that shouldn&rsquo;t
                burn.
              </p>
            </div>

            {/* Meta chips */}
            <div
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3"
              style={{
                fontSize: 12,
                letterSpacing: "0.06em",
                color: "rgba(232, 229, 222, 0.65)",
              }}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: "#F0A85E" }}
                />
                {IDENTITY.location}
              </span>
              <span aria-hidden style={{ color: "rgba(232, 229, 222, 0.25)" }}>
                /
              </span>
              <span>{IDENTITY.permit}</span>
              <span aria-hidden style={{ color: "rgba(232, 229, 222, 0.25)" }}>
                /
              </span>
              <span>{IDENTITY.years}</span>
            </div>
          </div>

          {/* Portrait — clean square, amber outline */}
          <div className="flex justify-center md:justify-end order-first md:order-none">
            <div
              className="relative w-[240px] md:w-[340px] aspect-square overflow-hidden"
              style={{
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
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover"
                style={{ filter: "brightness(0.92) contrast(1.05)" }}
              />
              {/* Amber tint overlay */}
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
