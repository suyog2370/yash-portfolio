/**
 * CurrentFocus
 * ------------
 * "Currently working on" — a compact block signalling specialization
 * and freshness without any availability signal. Reads like a schedule
 * note pinned to a drawing.
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

            {/* Focus tags — like schedule notes. Monospace, tight rules. */}
            <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
              <FocusTag label="Sector" value="Data centres" />
              <FocusTag label="Region" value="Europe" />
              <FocusTag label="Standards" value="NFPA / FM Global / LPC" />
              <FocusTag label="BIM" value="LOD 400 / 500" />
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
