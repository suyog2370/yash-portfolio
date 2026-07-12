/**
 * Career
 * ------
 * A compact chronological timeline. Because this genuinely is a
 * sequence, numbered markers earn their place. Each entry is a
 * horizontal record: dates, company, role, and one line of context.
 */

type Role = {
  dates: string;
  company: string;
  location: string;
  role: string;
  context: string;
  current?: boolean;
};

const ROLES: Role[] = [
  {
    dates: "Nov 2025 — Present",
    company: "Writech Industrial Services Ltd.",
    location: "Ireland",
    role: "Sr. Fire Protection Design Engineer",
    context:
      "Leading fire protection design for hyperscale data centres, power generation, and mission-critical infrastructure across Europe.",
    current: true,
  },
  {
    dates: "Mar 2019 — Aug 2025",
    company: "JB Everest Technical Services",
    location: "Pune",
    role: "Sr. Public Health & Fire Protection Engineer",
    context:
      "Sprinkler, hydrant, and suppression design for large commercial, healthcare, and infrastructure projects across European clients. Coordinated construction packages and led delivery for a 20+ person team.",
  },
  {
    dates: "Dec 2016 — Feb 2020",
    company: "New York Engineers",
    location: "Pune",
    role: "Plumbing & Fire Protection Design Engineer",
    context:
      "Plumbing and fire protection systems to NYC codes and NFPA — commercial and residential developments. Site utility drawings, calcs, submittals, and RFIs.",
  },
  {
    dates: "Post-graduate",
    company: "Thermax Ltd.",
    location: "Pune",
    role: "Post Graduate Project Trainee",
    context:
      "Early mechanical engineering experience on large industrial systems — the foundation for a career designing systems that need to actually work.",
  },
  {
    dates: "Undergraduate",
    company: "Tata Motors PCBU & TAL",
    location: "Pune",
    role: "Graduate Project Trainee",
    context:
      "Automation and manufacturing exposure — where engineering discipline first became second nature.",
  },
];

export function Career() {
  return (
    <section
      id="career"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="Career journey"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-3">Career</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>
          <div className="max-w-[52ch]">
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-ink">
              From graduate trainee in Pune to fire protection design lead in
              Ireland.
            </h2>
          </div>
        </div>

        <ol className="space-y-8 md:space-y-10">
          {ROLES.map((r) => (
            <RoleEntry key={`${r.company}-${r.dates}`} role={r} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="grid gap-3 md:gap-6 md:grid-cols-[140px_1fr] pt-6 border-t border-[color:var(--rule)]">
      <div className="tech-label-uc text-[color:var(--brass)] flex md:block items-center justify-between">
        <span>{role.dates}</span>
        {role.current && (
          <span className="hidden md:inline-flex items-center gap-1.5 mt-2 text-[color:var(--safety)]">
            <span
              aria-hidden
              className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--safety)]"
            />
            Present
          </span>
        )}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-2">
          <h3 className="font-serif text-[22px] md:text-[24px] leading-tight text-ink">
            {role.company}
            <span className="text-graphite-soft text-[18px] italic font-light">
              {" "}
              · {role.location}
            </span>
          </h3>
        </div>
        <div className="font-mono text-[12.5px] tracking-tight text-[color:var(--brass)] mb-3">
          {role.role}
        </div>
        <p className="text-[15.5px] leading-[1.6] text-graphite max-w-[62ch]">
          {role.context}
        </p>
      </div>
    </li>
  );
}
