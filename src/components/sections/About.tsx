import { ABOUT_PARAS } from "@/components/preview/portfolioContent";

/**
 * About (Blueprint direction) — personal narrative.
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="About"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-24">
          <div>
            <div className="eyebrow mb-3">About</div>
            <hr className="rule-brass w-8 mb-6" />
            <p className="tech-label max-w-[180px]">
              Mechanical engineer by training. Fire protection engineer by
              choice.
            </p>
          </div>

          <div className="max-w-[62ch] prose">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.015em] mb-8 md:mb-10">
              I design the systems that
              <br />
              buildings <span className="italic">quietly</span> depend on.
            </h2>

            {ABOUT_PARAS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
