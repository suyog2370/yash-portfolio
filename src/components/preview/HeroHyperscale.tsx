import Image from "next/image";

/**
 * HeroHyperscale
 * --------------
 * Direction C — dark, mission-critical infrastructure aesthetic. Deep
 * charcoal on which content sits with an amber accent. Grotesk display,
 * subtle coordinate-grid overlay. Reads as senior infrastructure work —
 * quietly technical, not startup, no terminal-syntax pretense.
 */
export function HeroHyperscale() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col"
      style={{
        background: "#0E1116",
        color: "#E8E5DE",
        fontFamily: '"IBM Plex Sans", sans-serif',
      }}
    >
      {/* Very subtle grid overlay — ambient technical texture,
          no readable content. */}
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
      <div className="relative flex-1 max-w-[1200px] w-full mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid gap-16 md:gap-20 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            {/* Small role label — clean, no code syntax */}
            <div
              className="mb-8 flex items-center gap-3"
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F0A85E",
                fontWeight: 500,
              }}
            >
              Sr. Fire Protection Design Engineer
            </div>

            {/* Big grotesk name — no serif. Different vibe entirely. */}
            <h1
              style={{
                fontSize: "clamp(56px, 9vw, 108px)",
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
                fontWeight: 600,
                color: "#F5F1E8",
              }}
            >
              Yashkumar
              <br />
              <span style={{ fontWeight: 300, color: "#F0A85E" }}>Shah.</span>
            </h1>

            {/* Tagline — amber rule on the left */}
            <div
              className="mt-10 pl-4"
              style={{ borderLeft: "2px solid #F0A85E" }}
            >
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: "rgba(232, 229, 222, 0.78)",
                  fontWeight: 300,
                  maxWidth: "40ch",
                }}
              >
                Fire protection design for the buildings that
                <br />
                shouldn&rsquo;t burn.
              </p>
            </div>

            {/* Meta chips — clean labels, no environment-variable syntax */}
            <div
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{
                fontSize: 12.5,
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
                Mullingar, Ireland
              </span>
              <span aria-hidden style={{ color: "rgba(232, 229, 222, 0.25)" }}>
                /
              </span>
              <span>Critical Skills Work Permit · Stamp 1</span>
              <span aria-hidden style={{ color: "rgba(232, 229, 222, 0.25)" }}>
                /
              </span>
              <span>9+ years</span>
            </div>
          </div>

          {/* Portrait — clean square, amber outline. No filename caption. */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-[300px] md:w-[340px] aspect-square overflow-hidden"
              style={{
                border: "1px solid rgba(240, 168, 94, 0.4)",
                boxShadow:
                  "0 0 0 1px rgba(240, 168, 94, 0.15), 0 20px 60px rgba(240, 168, 94, 0.08)",
              }}
            >
              <Image
                src="/headshot.jpg"
                alt="Portrait of Yashkumar Shah"
                fill
                priority
                sizes="(max-width: 768px) 300px, 340px"
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
