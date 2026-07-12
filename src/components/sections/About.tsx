/**
 * About
 * -----
 * The personal narrative. Warmer register than the Hero. First person,
 * short paragraphs. Set against a slightly deeper paper panel so the
 * story feels like an inset column in an editorial spread.
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="About"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-24">
          {/* Section label — sits like a margin note next to editorial copy. */}
          <div>
            <div className="eyebrow mb-3">About</div>
            <hr className="rule-brass w-8 mb-6" />
            <p className="tech-label max-w-[180px]">
              Mechanical engineer by training. Fire protection engineer by
              choice.
            </p>
          </div>

          <div className="max-w-[62ch] prose">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.015em] mb-8 md:mb-10">
              I design the systems that
              <br />
              buildings <span className="italic">quietly</span> depend on.
            </h2>

            <p>
              My path into fire protection engineering started with a mechanical
              engineering degree at MIT Pune and early years at Thermax and Tata,
              learning how large industrial systems actually behave. When I
              moved into building services, it was a natural step: fire
              protection sits at the intersection of hydraulics, mechanical
              design, code compliance, and coordination with every other
              discipline on a project.
            </p>

            <p>
              Over the last nine years I&rsquo;ve worked on more than a hundred
              buildings across the US and Europe. Hyperscale data centres in
              Ireland and mainland Europe. A large healthcare campus in Harlem.
              LaGuardia&rsquo;s airport redevelopment. Power generation
              facilities, ESFR warehouses, mixed-use towers, hospitality,
              residential. Each of them has a fire protection strategy behind
              the walls that I helped design.
            </p>

            <p>
              I moved to Ireland at the end of 2025 to lead fire protection
              design at Writech Industrial Services, working primarily on
              mission-critical facilities and complex infrastructure across
              Europe. I&rsquo;m building the next stretch of my practice around
              the projects I care about most: the buildings that people trust
              to keep working, and to keep them safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
