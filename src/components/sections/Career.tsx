import { ROLES, type RoleEntry } from "@/components/preview/portfolioContent";

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
            <RoleEntryView key={`${r.company}-${r.dates}`} role={r} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleEntryView({ role }: { role: RoleEntry }) {
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
