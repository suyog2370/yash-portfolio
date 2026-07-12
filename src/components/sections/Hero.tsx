import Image from "next/image";

/**
 * Hero
 * -----
 * The signature section. A drawing plate: title block at top and bottom
 * with technical annotations, main content in the middle. The frame is
 * deliberately restrained so the name and one clean thought carry the page.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between"
      aria-label="Introduction"
    >
      {/* Top rule — a hairline dimension line, no scaffolding text. */}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-8 md:pt-10">
          <hr className="rule" />
        </div>
      </div>

      {/* Main content — name + tagline on the left, portrait on the right.
          On mobile, portrait sits above. */}
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 py-16 md:py-24 flex-1 grid gap-12 md:gap-16 md:grid-cols-[1.35fr_1fr] items-center">
        <div className="order-2 md:order-1">
          <div className="eyebrow mb-6">
            Sr. Fire Protection Design Engineer
          </div>

          <h1 className="font-serif text-[52px] md:text-[80px] leading-[0.95] tracking-[-0.02em] text-ink">
            Yashkumar
            <br />
            <span className="italic font-light">Shah</span>
          </h1>

          <p className="mt-8 max-w-[46ch] font-serif text-[22px] md:text-[26px] leading-[1.3] text-ink-soft">
            Fire protection design for the buildings that
            <br className="hidden md:inline" />{" "}
            <span className="italic">shouldn&rsquo;t burn.</span>
          </p>

          {/* Location + credential chips — small monospace tags,
              positioned like schedule notes on a drawing. */}
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 tech-label">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--brass)]"
              />
              Mullingar, Ireland
            </span>
            <span aria-hidden className="text-[color:var(--rule)]">
              /
            </span>
            <span>Critical Skills Work Permit · Stamp 1</span>
            <span aria-hidden className="text-[color:var(--rule)]">/</span>
            <span>9+ years</span>
          </div>
        </div>

        {/* Portrait — sits inside blueprint corner brackets. Deliberately
            not centered on the page; the drawing frame is asymmetric. */}
        <div className="order-1 md:order-2 flex md:justify-end">
          <figure className="w-full max-w-[380px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Yashkumar Shah"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
              />
              {/* Subtle brass tint over portrait — unifies it with the
                  palette without dominating it. */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-multiply bg-[color:var(--brass)]/[0.04] pointer-events-none"
              />
            </div>
          </figure>
        </div>
      </div>

      {/* Bottom rule — mirrors the top. Quiet frame, no scaffolding text. */}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-8 md:pb-10">
          <hr className="rule" />
        </div>
      </div>
    </section>
  );
}
