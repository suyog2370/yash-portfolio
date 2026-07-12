import { EditorialPortfolio } from "@/components/preview/EditorialPortfolio";
import { PreviewBar } from "@/components/preview/PreviewBar";

/**
 * Direction — Editorial (magazine spread, distinct layouts per section)
 */
export default function EditorialPreview() {
  return (
    <>
      <PreviewBar
        code="E"
        name="Editorial"
        palette={["#F4EFE4", "#1C1A16", "#B8410E", "#C7BFA9"]}
      />
      <EditorialPortfolio />
    </>
  );
}
