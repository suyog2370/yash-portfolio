import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Sectors } from "@/components/sections/Sectors";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { Career } from "@/components/sections/Career";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <CurrentFocus />
      <TrackRecord />
      <Sectors />
      <Expertise />
      <Approach />
      <Career />
      <Credentials />
      <Contact />
    </main>
  );
}
