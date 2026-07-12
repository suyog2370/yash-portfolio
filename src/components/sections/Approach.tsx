/**
 * Approach
 * --------
 * Thought-leadership / philosophy section. Three short principles,
 * each with a name (serif) and one paragraph (sans) of substance.
 * Set on ink background so it reads like a chapter break in the
 * document — a change of voice, not another list.
 */

type Principle = {
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    title: "Life safety first, always.",
    body: "Every decision on a fire protection drawing has to work backwards from the same question — will this system perform the moment it matters. Coverage, density, response time, water supply, redundancy. If a design choice makes any of those weaker, it isn't a good choice, no matter how elegant it looks on the model.",
  },
  {
    title: "The best drawing is the one the fabricator can build from.",
    body: "LOD 500 isn't a badge; it's a promise to the installer. My models are meant to be built from, not admired. Sizing, hangers, offsets, and coordination clashes get resolved in the model — so the pipes go up in the field with fewer changes, less rework, and cleaner finishes.",
  },
  {
    title: "Coordination is a design deliverable.",
    body: "Fire protection lives above ceilings, alongside HVAC, cable trays, medical gas, and structure. The value I bring isn't just the sprinkler design — it's the negotiation with every other discipline to make sure the design still works when they've all had their turn.",
  },
];

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
              style={{ borderTop: "1px solid var(--brass)", border: 0, borderTopWidth: 1 }}
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

function Principle({ principle }: { principle: Principle }) {
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
