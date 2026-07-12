import Link from "next/link";

type Direction = { slug: string; letter: string; label: string };

const DIRECTIONS: Direction[] = [
  { slug: "blueprint", letter: "A", label: "Blueprint" },
  { slug: "codebook", letter: "B", label: "Codebook" },
  { slug: "hyperscale", letter: "C", label: "Hyperscale" },
  { slug: "dossier", letter: "D", label: "Dossier" },
  { slug: "editorial", letter: "E", label: "Editorial" },
  { slug: "split", letter: "S", label: "Split-screen" },
];

/**
 * PreviewBar — thin top bar that lives above the portfolio content
 * in each preview. Lets the viewer swap directions and see which one
 * they're on. Neutral styling so it doesn't interfere.
 */
export function PreviewBar({
  code,
  name,
  palette,
}: {
  code: string;
  name: string;
  palette: string[];
}) {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Link
            href="/preview"
            className="font-mono text-[10px] tracking-[0.14em] uppercase text-black/50 hover:text-black transition-colors"
          >
            ← All
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-[10.5px] text-black">{name}</span>
          </div>
          <div className="flex items-center gap-1">
            {palette.map((hex) => (
              <span
                key={hex}
                title={hex}
                className="block w-3 h-3 rounded-full border border-black/10"
                style={{ background: hex }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {DIRECTIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/preview/${d.slug}`}
              className={`font-mono text-[10.5px] tracking-tight px-2 py-1 rounded transition-colors ${
                d.letter === code
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black hover:bg-black/5"
              }`}
              title={d.label}
            >
              {d.letter}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
