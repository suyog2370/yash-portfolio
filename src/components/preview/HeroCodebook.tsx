import Image from "next/image";
import { IDENTITY } from "./portfolioContent";

/**
 * HeroCodebook — Direction B, reference-publication aesthetic.
 * Serif on ivory, deep red as accent, spec-schedule blocks for facts.
 */
export function HeroCodebook() {
  return (
    <section
      className="min-h-[92vh] flex flex-col"
      style={{
        background: "#FAF7F2",
        color: "#1A1A1A",
        fontFamily:
          '"IBM Plex Serif", Georgia, "Times New Roman", serif',
      }}
    >
      <div style={{ background: "#8B1F18", height: 8 }} />

      <div className="flex-1 max-w-[1100px] w-full mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1.35fr_1fr] items-start">
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#8B1F18",
                  fontWeight: 600,
                }}
              >
                {IDENTITY.title}
              </span>
              <span
                aria-hidden
                style={{ flex: 1, height: 1, background: "#8B1F18" }}
              />
            </div>

            <h1
              style={{
                fontSize: "clamp(48px, 8vw, 84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              Yashkumar
              <br />
              Shah
            </h1>

            <div
              className="mt-10 pl-6"
              style={{ borderLeft: "3px solid #8B1F18" }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: "#2E2E2E",
                  maxWidth: "42ch",
                }}
              >
                Fire protection design for the buildings that shouldn&rsquo;t
                burn.
              </p>
            </div>

            <dl
              className="mt-12"
              style={{
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontSize: 13,
                color: "#333",
              }}
            >
              {[
                ["Location", IDENTITY.location],
                ["Right to work", IDENTITY.permit],
                ["Experience", `${IDENTITY.years} · US and Europe`],
                [
                  "Standards",
                  "NFPA · FM Global · LPCB · European Norms",
                ],
              ].map(([term, def]) => (
                <div
                  key={term}
                  className="grid grid-cols-[130px_1fr] gap-4 py-2 md:py-2.5"
                  style={{ borderBottom: "1px solid #E5DDD1" }}
                >
                  <dt
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontSize: 10.5,
                      color: "#8B1F18",
                      fontWeight: 500,
                      paddingTop: 3,
                    }}
                  >
                    {term}
                  </dt>
                  <dd
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: 12.5,
                    }}
                  >
                    {def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden"
              style={{ border: "6px solid #8B1F18" }}
            >
              <Image
                src="/headshot.webp"
                alt={`Portrait of ${IDENTITY.name}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
                style={{ filter: "grayscale(0.15) contrast(1.02)" }}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
