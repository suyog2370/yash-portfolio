import { SplitPortfolio } from "@/components/preview/SplitPortfolio";
import { PreviewBar } from "@/components/preview/PreviewBar";

/**
 * Direction — Split-screen (fixed left, scrolling right, modern consultant)
 */
export default function SplitPreview() {
  return (
    <>
      <PreviewBar
        code="S"
        name="Split-screen"
        palette={["#F6F6F4", "#0F0F10", "#2A5DFF", "#DEDCD5"]}
      />
      <SplitPortfolio />
    </>
  );
}
