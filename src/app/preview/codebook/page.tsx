import { HeroCodebook } from "@/components/preview/HeroCodebook";
import { PreviewBar } from "@/components/preview/PreviewBar";
import { CodebookFullPortfolio } from "@/components/preview/CodebookFullPortfolio";

/**
 * Direction B — Codebook
 * Full 9-section portfolio in codebook / reference-publication aesthetic.
 */
export default function CodebookPreview() {
  return (
    <>
      <PreviewBar
        code="B"
        name="Codebook"
        palette={["#FAF7F2", "#8B1F18", "#1A1A1A", "#E5DDD1"]}
      />
      <main
        className="w-full"
        style={{
          background: "#FAF7F2",
          color: "#1A1A1A",
          fontFamily: '"IBM Plex Serif", Georgia, "Times New Roman", serif',
        }}
      >
        <HeroCodebook />
        <CodebookFullPortfolio />
      </main>
    </>
  );
}
