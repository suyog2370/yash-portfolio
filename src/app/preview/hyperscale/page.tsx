import { HeroHyperscale } from "@/components/preview/HeroHyperscale";
import { PreviewBar } from "@/components/preview/PreviewBar";
import { HyperscaleFullPortfolio } from "@/components/preview/HyperscaleFullPortfolio";

/**
 * Direction C — Hyperscale
 * Full 9-section portfolio in mission-critical infrastructure aesthetic.
 */
export default function HyperscalePreview() {
  return (
    <>
      <PreviewBar
        code="C"
        name="Hyperscale"
        palette={["#0E1116", "#F0A85E", "#E8E5DE", "#F5F1E8"]}
      />
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
    </>
  );
}
