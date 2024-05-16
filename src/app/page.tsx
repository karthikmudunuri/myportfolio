import { HeroHighlight } from "@/components/ui/hero";
import { TracingBeamDemo } from "@/components/usage/b";
import { CanvasRevealEffectDemo } from "@/components/usage/c";
import { Contact } from "@/components/usage/contact";
import { GlobeDemo } from "@/components/usage/g";
import { HeroHighlightDemo } from "@/components/usage/h";
import { Navbar } from "@/components/usage/nav";
import { HoverBorderGradientDemo } from "@/components/usage/skills";
import { TypewriterEffectSmoothDemo } from "@/components/usage/type";
import { ThreeDCardDemo } from "@/components/usage/works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
       {/* <Navbar className="top-2" /> */}

      <HeroHighlightDemo/>
      {/* <CanvasRevealEffectDemo/> */}
      <TracingBeamDemo/>
      <HoverBorderGradientDemo/>
      <ThreeDCardDemo/>
      <Contact/>
      {/* <TypewriterEffectSmoothDemo/> */}
      {/* <GlobeDemo/> */}
    
    </div>
  );
}
