import { STRENGTHS } from "@/components/preview/portfolioContent";

/**
 * TrackRecord (Blueprint direction)
 * Big metric numbers up top + qualitative strengths as a two-column list.
 */
export function TrackRecord() {
  return (
    <section
      id="track-record"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="Track record"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-3">Track record</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>
          <div className="max-w-[52ch]">
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-ink">
              Nine years, more than a hundred buildings.
            </h2>
          </div>
        </div>

        {/* Metric numbers */}
        <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4 mb-14 md:mb-20">
          {STRENGTHS.metrics.map((m) => (
            <div key={m.label} className="border-t border-[color:var(--brass)] pt-4">
              <div className="font-serif text-[42px] md:text-[64px] leading-none tracking-[-0.02em] text-[color:var(--brass)] font-medium mb-2">
                {m.value}
              </div>
              <div className="tech-label-uc text-[11px] text-graphite">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative strengths */}
        <ul className="grid gap-4 md:gap-6 md:grid-cols-2">
          {STRENGTHS.qualitative.map((s) => (
            <li
              key={s}
              className="pl-6 relative text-[15.5px] leading-[1.6] text-graphite"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[0.75em] w-3 h-px bg-[color:var(--brass)]"
              />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
