/**
 * Sectors
 * -------
 * Descriptive cards for the sectors Yash designs fire protection for.
 * Each card is a short line of what he actually does in that sector,
 * not a client list. Warmer tone, first person where it lands well.
 *
 * Cards use a numbered marker because sectors are enumerated on his
 * resume; the number is a schedule reference, not a ranking.
 */

type Sector = {
  name: string;
  description: string;
};

const SECTORS: Sector[] = [
  {
    name: "Hyperscale data centres",
    description:
      "Sprinkler and pre-action design for mission-critical white-space, pump rooms, and support facilities across multiple European sites.",
  },
  {
    name: "Healthcare",
    description:
      "Life-safety design for large hospital campuses, coordinated tightly with medical gas, HVAC, and complex compartmentation strategies.",
  },
  {
    name: "Aviation",
    description:
      "Airport terminal fire protection at scale — high-ceiling suppression, foam systems, and coordination across an active landside programme.",
  },
  {
    name: "Warehouses (ESFR)",
    description:
      "In-rack and ceiling-only ESFR sprinkler design for high-piled storage, sized to actual commodity classification and storage configuration.",
  },
  {
    name: "Power generation",
    description:
      "Deluge, water-mist, and foam suppression for turbine halls, transformer bays, and fuel handling. Written to FM Global data sheets.",
  },
  {
    name: "Commercial & office",
    description:
      "Sprinkler design and standpipe systems for high-rise and mid-rise offices in the US and Europe, coordinated in Revit and Navisworks.",
  },
  {
    name: "Mixed-use & retail",
    description:
      "Integrated sprinkler design for towers with retail podiums, restaurants, and hospitality — tenant fit-out coordination baked in from concept.",
  },
  {
    name: "Residential",
    description:
      "Domestic and residential sprinkler systems for townhouses, apartment blocks, and mixed developments across Ireland and the UK.",
  },
];

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

        {/* Sector grid — restrained cards. Rule at top,
            name in serif, one clean line of description. */}
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
