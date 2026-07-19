import { IDENTITY } from "@/components/preview/portfolioContent";

const LINKS = [
  {
    label: "Email",
    value: IDENTITY.email,
    href: `mailto:${IDENTITY.email}`,
  },
  {
    label: "Phone",
    value: IDENTITY.phone,
    href: `tel:${IDENTITY.phone.replace(/\s/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: IDENTITY.linkedin,
    href: IDENTITY.linkedinUrl,
  },
  { label: "Location", value: IDENTITY.location },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-[color:var(--rule-soft)]"
      aria-label="Contact"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-24">
          <div>
            <div className="eyebrow mb-3">Contact</div>
            <hr className="rule-brass w-8 mb-6" />
          </div>

          <div className="max-w-[62ch]">
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-ink">
              If you are working on a building that
              <br className="hidden md:inline" />{" "}
              <span className="italic">should not burn</span> — say hello.
            </h2>

            <p className="mt-6 text-graphite text-[16.5px] leading-relaxed max-w-[54ch] text-justify-prose">
              Fire protection design, hydraulic calculations, BIM coordination,
              standards review. Reach me on any of the below and I will
              answer within a day or two.
            </p>

            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {LINKS.map((link) => (
                <li
                  key={link.label}
                  className="border-t border-[color:var(--rule)] pt-4"
                >
                  <div className="tech-label-uc text-[10px] mb-1.5">
                    {link.label}
                  </div>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="font-mono text-[14px] text-ink hover:text-[color:var(--brass)] transition-colors underline-offset-4 hover:underline"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.value}
                    </a>
                  ) : (
                    <span className="font-mono text-[14px] text-ink">
                      {link.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-24 md:mt-32">
        <hr className="rule mb-4" />
        <div className="flex items-center justify-end tech-label-uc">
          <span>© {new Date().getFullYear()} {IDENTITY.name}</span>
        </div>
      </div>
    </section>
  );
}
