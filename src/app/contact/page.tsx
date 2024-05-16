import { HeroHighlight } from "@/components/ui/hero";
import { CanvasRevealEffectDemo } from "@/components/usage/c";
import { GlobeDemo } from "@/components/usage/g";
import { HeroHighlightDemo } from "@/components/usage/h";
import { Navbar } from "@/components/usage/nav";
import { TypewriterEffectSmoothDemo } from "@/components/usage/type";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
       <Navbar className="top-2" />

     
      <GlobeDemo/>
    
    </div>
  );
}
