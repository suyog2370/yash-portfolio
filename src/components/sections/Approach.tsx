import { PRINCIPLES } from "@/components/preview/portfolioContent";

type PrincipleData = { title: string; body: string };

export function Approach() {
  return (
    <section
      id="approach"
      className="py-24 md:py-36 bg-ink text-paper"
      aria-label="Approach"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-16 md:mb-20">
          <div>
            <div
              className="eyebrow mb-3"
              style={{ color: "var(--brass-soft)" }}
            >
              Approach
            </div>
            <hr
              className="w-8 mb-6"
              style={{
                borderTop: "1px solid var(--brass)",
                border: 0,
                borderTopWidth: 1,
              }}
            />
          </div>
          <div className="max-w-[54ch]">
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-paper">
              Three things I hold to on <span className="italic">every</span>{" "}
              project.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:gap-16 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <Principle key={p.title} principle={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Principle({ principle }: { principle: PrincipleData }) {
  return (
    <article>
      <h3 className="font-serif text-[24px] md:text-[26px] leading-[1.2] mb-4 tracking-tight text-paper">
        {principle.title}
      </h3>
      <p
        className="text-[15px] leading-[1.65]"
        style={{ color: "rgba(245, 241, 232, 0.72)" }}
      >
        {principle.body}
      </p>
    </article>
  );
}
