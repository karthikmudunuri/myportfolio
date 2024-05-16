"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover";

export function HoverBorderGradientDemo() {
  return (
    <div>
        <h1 className="mt-6 -mb-20 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         My Skills
        </h1>
       
    <div className="m-40  flex gap-6 justify-center text-center">
    
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span className="whitespace-nowrap">Data Structures</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>TypeScript</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>React.js</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>Next.js</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span className="whitespace-nowrap">Tailwind css</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>Javascript</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>Three.js</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>Html</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white flex items-center space-x-2"
      >
       
        <span>CSS</span>
      </HoverBorderGradient>
    </div>
    </div>
  );
}

