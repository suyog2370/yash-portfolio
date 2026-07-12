/**
 * Credentials
 * -----------
 * Education, professional standing, work permit — the credential block.
 * Set as a small schedule-of-notes at the foot of the sheet.
 */

type Item = {
  label: string;
  primary: string;
  secondary?: string;
};

const EDUCATION: Item[] = [
  {
    label: "Master of Engineering",
    primary: "Mechanical Design",
    secondary: "MIT, Pune · 2013 — 2015 · 8.41 CGPA",
  },
  {
    label: "Bachelor of Engineering",
    primary: "Mechanical",
    secondary: "AISSMS, Pune · 2008 — 2012 · 63.82%",
  },
];

const PROFESSIONAL: Item[] = [
  {
    label: "Chartered membership",
    primary: "MIEI — Engineers Ireland",
    secondary: "Application in progress",
  },
  {
    label: "Right to work",
    primary: "Critical Skills Work Permit · Stamp 1",
    secondary: "Irish Residence Permit holder",
  },
];

export function Credentials() {
  return (
    <section
      id="credentials"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)] bg-paper-warm"
      aria-label="Credentials"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-3">Credentials</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>
          <div className="max-w-[52ch]">
            <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.015em] text-ink">
              Formation & standing.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <CredentialBlock title="Education" items={EDUCATION} />
          <CredentialBlock title="Professional" items={PROFESSIONAL} />
        </div>
      </div>
    </section>
  );
}

function CredentialBlock({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  return (
    <div>
      <h3 className="font-serif text-[22px] text-ink tracking-tight mb-6 pb-3 border-b border-[color:var(--rule)]">
        {title}
      </h3>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.primary}>
            <div className="tech-label-uc text-[10px] mb-1">{item.label}</div>
            <div className="font-serif text-[19px] leading-tight text-ink mb-1">
              {item.primary}
            </div>
            {item.secondary && (
              <div className="font-mono text-[12.5px] text-graphite tracking-tight">
                {item.secondary}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
