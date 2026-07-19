import { HeroHyperscale } from "@/components/preview/HeroHyperscale";
import { HyperscaleFullPortfolio } from "@/components/preview/HyperscaleFullPortfolio";

/**
 * Home — Hyperscale direction, promoted from /preview/hyperscale.
 * Renders the full portfolio (hero + all sections) in the deep charcoal
 * + amber palette. Other design directions still live under
 * src/app/preview/* for reference but are 404'd in production by
 * src/middleware.ts.
 */
export default function Home() {
  return (
    <main
      className="w-full"
      style={{
        background: "#0E1116",
        color: "#E8E5DE",
        fontFamily: '"IBM Plex Sans", sans-serif',
      }}
    >
      <HeroHyperscale />
      <HyperscaleFullPortfolio />
    </main>
  );
}
