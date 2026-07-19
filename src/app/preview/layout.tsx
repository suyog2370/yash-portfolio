import "@/styles/direction-drafts.css";

/**
 * Preview layout — applies only under /preview/*. Loads the
 * direction-drafts stylesheet (Blueprint tokens, .eyebrow / .tech-label /
 * .plate-corners utility classes, prose defaults) so the draft
 * directions still render correctly. Also wraps children in a container
 * with the ivory paper background + ink text colour that the drafts
 * expect but the Hyperscale home has taken off the <body>.
 */
export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="direction-drafts">{children}</div>;
}
