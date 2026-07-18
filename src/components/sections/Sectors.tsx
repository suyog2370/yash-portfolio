import { SECTORS } from "@/components/preview/portfolioContent";

type Sector = { name: string; description: string };

export function Sectors() {
  return (
    <section
      id="sectors"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="Sectors served"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-3">Sectors</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>
          <div className="max-w-[52ch]">
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-ink">
              The buildings I design fire protection for.
            </h2>
            <p className="mt-5 text-graphite text-[16px] leading-relaxed">
              Nine years of work across sectors that share the same brief:
              stay standing, stay serviceable, keep people safe.
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {SECTORS.map((sector) => (
            <SectorCard key={sector.name} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <article className="group border-t border-[color:var(--rule)] pt-6">
      <h3 className="font-serif text-[22px] md:text-[24px] leading-tight text-ink mb-3">
        {sector.name}
      </h3>
      <p className="text-[15.5px] leading-[1.55] text-graphite max-w-[54ch]">
        {sector.description}
      </p>
    </article>
  );
}
