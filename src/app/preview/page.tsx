import Link from "next/link";

/**
 * /preview — picker page. All directions to compare.
 */

type Direction = {
  slug: string;
  code: string;
  name: string;
  palette: string;
  layout: string;
  personality: string;
  note?: string;
};

const DIRECTIONS: Direction[] = [
  {
    slug: "dossier",
    code: "D",
    name: "Dossier",
    palette: "Off-white · black · red",
    layout: "CV-first density. Career timeline as the dominant spine. Small photo. Data-rich, compact.",
    personality: "Hire-me focused. Serious. Information-dense.",
  },
  {
    slug: "editorial",
    code: "E",
    name: "Editorial",
    palette: "Cream · burnt orange · deep charcoal",
    layout: "Magazine spread. Each section has a distinct layout — pull quotes, drop caps, horizontal-scroll sector cards, horizontal timeline strip.",
    personality: "Brand-conscious. Curated. Warm editorial voice.",
  },
  {
    slug: "split",
    code: "S",
    name: "Split-screen",
    palette: "Light gray · black · electric blue",
    layout: "Fixed left panel (photo, nav, contact) + scrolling right pane. Sectors as accordion. Expertise as filter chips.",
    personality: "Modern consultant. Functional. Product-designer flavour.",
  },
  {
    slug: "blueprint",
    code: "A",
    name: "Blueprint",
    palette: "Navy · warm ivory · brass",
    layout: "One-page scroll. Left-column section labels + right-column content grid throughout.",
    personality: "Editorial engineering-firm. Restrained.",
    note: "Same structural layout as B and C — differs only in palette.",
  },
  {
    slug: "codebook",
    code: "B",
    name: "Codebook",
    palette: "Ivory · deep red · charcoal",
    layout: "Same as Blueprint. NFPA/FM Global reference-publication colouring.",
    personality: "Authoritative, standards-first.",
    note: "Same structural layout as A and C — differs only in palette.",
  },
  {
    slug: "hyperscale",
    code: "C",
    name: "Hyperscale",
    palette: "Deep charcoal · amber · graphite",
    layout: "Same as Blueprint. Dark palette with amber accent.",
    personality: "Infrastructure engineer console vibe.",
    note: "Same structural layout as A and B — differs only in palette.",
  },
];

const STRUCTURAL = DIRECTIONS.filter((d) => !d.note);
const PALETTE_ONLY = DIRECTIONS.filter((d) => d.note);

export default function PreviewPicker() {
  return (
    <main className="min-h-screen bg-white text-black py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50 mb-4">
            Portfolio · Design directions
          </div>
          <h1 className="font-serif text-[42px] md:text-[64px] leading-[0.98] tracking-[-0.03em] font-medium">
            Six directions
            <br />
            for the same portfolio.
          </h1>
          <p className="mt-6 max-w-[62ch] text-[15.5px] leading-[1.6] text-black/70">
            Three of these have distinct structural layouts (Dossier, Editorial,
            Split-screen). The other three (Blueprint, Codebook, Hyperscale)
            share one layout but differ in palette. Take a look, tell me which
            direction reads right, and I&rsquo;ll finish that one.
          </p>
        </div>

        <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-black/50 mb-4">
          Structurally different
        </div>
        <div className="space-y-4 mb-16">
          {STRUCTURAL.map((d) => (
            <DirectionCard key={d.slug} d={d} />
          ))}
        </div>

        <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-black/50 mb-4">
          Palette variants (same layout)
        </div>
        <div className="space-y-4">
          {PALETTE_ONLY.map((d) => (
            <DirectionCard key={d.slug} d={d} />
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-black/10 font-mono text-[10.5px] tracking-[0.18em] uppercase text-black/50">
          Pick one and I&rsquo;ll finish. Or ask for a different direction entirely.
        </div>
      </div>
    </main>
  );
}

function DirectionCard({ d }: { d: Direction }) {
  return (
    <Link
      href={`/preview/${d.slug}`}
      className="block border-t border-black/15 hover:bg-black/[0.03] transition-colors -mx-4 px-4 pt-6 pb-5 group"
    >
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-black/50">
            {d.code}
          </span>
          <h2 className="font-serif text-[26px] md:text-[32px] leading-tight tracking-[-0.02em] font-medium">
            {d.name}
          </h2>
        </div>
        <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-black/40 group-hover:text-black transition-colors whitespace-nowrap">
          View →
        </span>
      </div>
      <dl className="grid gap-3 md:grid-cols-[140px_1fr_1fr] md:gap-8 text-[13px]">
        <div>
          <dt className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-black/50 mb-1">
            Palette
          </dt>
          <dd className="text-black/80 font-mono text-[12px]">{d.palette}</dd>
        </div>
        <div>
          <dt className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-black/50 mb-1">
            Layout
          </dt>
          <dd className="text-black/80 leading-[1.5]">{d.layout}</dd>
        </div>
        <div>
          <dt className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-black/50 mb-1">
            Personality
          </dt>
          <dd className="text-black/80 leading-[1.5]">{d.personality}</dd>
        </div>
      </dl>
    </Link>
  );
}
