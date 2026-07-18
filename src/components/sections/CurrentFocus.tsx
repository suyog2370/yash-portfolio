import { CURRENT_FOCUS } from "@/components/preview/portfolioContent";

/**
 * Currently working on (Blueprint direction).
 */
export function CurrentFocus() {
  return (
    <section
      id="focus"
      className="py-20 md:py-24 border-t border-[color:var(--rule-soft)] bg-paper-warm"
      aria-label="Currently working on"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
          <div>
            <div className="eyebrow mb-3">At present</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>

          <div>
            <p className="font-serif text-[26px] md:text-[34px] leading-[1.3] text-ink tracking-[-0.01em]">
              Leading fire protection design at{" "}
              <span className="italic">Writech Industrial Services</span> in
              Ireland — focused on hyperscale data centres, power generation,
              and mission-critical infrastructure across Europe.
            </p>

            <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
              {CURRENT_FOCUS.tags.map(([label, value]) => (
                <FocusTag key={label} label={label} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[color:var(--rule)] pt-3">
      <div className="tech-label-uc text-[10px] mb-1.5">{label}</div>
      <div className="font-mono text-[13px] text-ink tracking-tight">{value}</div>
    </div>
  );
}
