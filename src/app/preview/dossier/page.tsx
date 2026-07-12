import { DossierPortfolio } from "@/components/preview/DossierPortfolio";
import { PreviewBar } from "@/components/preview/PreviewBar";

/**
 * Direction — Dossier (CV-first density, career as spine)
 */
export default function DossierPreview() {
  return (
    <>
      <PreviewBar
        code="D"
        name="Dossier"
        palette={["#FAFAF7", "#0A0A0A", "#B12324", "#D8D3C7"]}
      />
      <DossierPortfolio />
    </>
  );
}
