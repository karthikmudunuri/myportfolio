"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Wanna",
      className: "text-white",
    },
    {
      text: "work",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",

    },
    
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
          Contact me
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
        Contact me
        </button>
      </div>
    </div>
  );
}
