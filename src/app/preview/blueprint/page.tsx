import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { Sectors } from "@/components/sections/Sectors";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { Career } from "@/components/sections/Career";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";
import { PreviewBar } from "@/components/preview/PreviewBar";

/**
 * Direction A — Blueprint / Engineering-Editorial
 * Full 9-section portfolio in this visual language.
 */
export default function BlueprintPreview() {
  return (
    <>
      <PreviewBar
        code="A"
        name="Blueprint"
        palette={["#0a2540", "#f5f1e8", "#b08d57", "#c8342e"]}
      />
      <main className="w-full">
        <Hero />
        <About />
        <CurrentFocus />
        <Sectors />
        <Expertise />
        <Approach />
        <Career />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
