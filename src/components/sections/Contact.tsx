/**
 * Contact
 * -------
 * Understated contact block. No availability signalling — just the
 * details, positioned like the title-block signature on the final
 * sheet of a drawing set. Warmer heading, restrained delivery.
 */

const LINKS = [
  {
    label: "Email",
    value: "yashpshah.shah@gmail.com",
    href: "mailto:yashpshah.shah@gmail.com",
  },
  { label: "Phone", value: "+353 87 399 2122", href: "tel:+353873992122" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yashkumarshah",
    href: "https://linkedin.com/in/yashkumarshah",
  },
  { label: "Location", value: "Mullingar, Ireland" },
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
              If you&rsquo;re working on a building that
              <br className="hidden md:inline" />{" "}
              <span className="italic">shouldn&rsquo;t burn</span> — say hello.
            </h2>

            <p className="mt-6 text-graphite text-[16.5px] leading-relaxed max-w-[54ch]">
              Fire protection design, hydraulic calculations, BIM coordination,
              standards review. Reach me on any of the below and I&rsquo;ll
              answer within a day or two.
            </p>

            {/* Contact list — spaced like schedule entries, monospace values. */}
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

      {/* Footer — quiet copyright line. */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-24 md:mt-32">
        <hr className="rule mb-4" />
        <div className="flex items-center justify-end tech-label-uc">
          <span>© {new Date().getFullYear()} Yashkumar Shah</span>
        </div>
      </div>
    </section>
  );
}
