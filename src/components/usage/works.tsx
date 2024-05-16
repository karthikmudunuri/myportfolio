"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/cars";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div>
        <h1 className="mt-6 -mb-6 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         My Works
        </h1>
    <div className="flex flex-wrap justify-center gap-6">
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          LLM Playground
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          demo for the AI models landing page where we can have a lot of models.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://github.com/karthikmudunuri/VRMALL/assets/102793643/6001da1a-4b7c-4c80-bce4-cf6343b06139"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://llmplayground.netlify.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            See now →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          VR Mall
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          Developed an virtual mall by using Three.js and Typescript.

        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://github.com/karthikmudunuri/VRMALL/assets/102793643/786a0383-ea62-4147-b51d-c44a808b2997"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://vrmalldemo.netlify.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            See now →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          AI Research Center
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          Building a website for  AI Research Center,Hyderabad,Telangana.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://github.com/karthikmudunuri/VRMALL/assets/102793643/138ea588-e633-4b4f-b8d8-08ec5957bd29"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://aircwou.in/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            See now →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
    </div>
    </div>
  );
}
