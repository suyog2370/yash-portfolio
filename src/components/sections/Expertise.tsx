import { EXPERTISE } from "@/components/preview/portfolioContent";

type Column = { title: string; items: readonly string[] };

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)] bg-paper-warm"
      aria-label="Core expertise"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-3">Practice</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>
          <div className="max-w-[52ch]">
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-ink">
              What I bring to a project.
            </h2>
            <p className="mt-5 text-graphite text-[16px] leading-relaxed">
              The systems I design, the codes I write to, the tools I work in,
              and how I coordinate with the rest of the design team.
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((col) => (
            <ExpertiseColumn key={col.title} column={col} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseColumn({ column }: { column: Column }) {
  return (
    <div>
      <h3 className="font-serif text-[19px] text-ink tracking-tight mb-4 pb-3 border-b border-[color:var(--rule)]">
        {column.title}
      </h3>
      <ul className="space-y-2">
        {column.items.map((item) => (
          <li
            key={item}
            className="font-mono text-[12.5px] leading-[1.6] text-graphite"
          >
            <span className="text-[color:var(--brass)] mr-2" aria-hidden>
              ·
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
