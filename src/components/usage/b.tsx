"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/beam";
import { TextGenerateEffect } from "../ui/text";

const words = `Karthikeya varma, persuing my B.tech in woxen university. I want to learn more about Full Stack Development and i have a good command in javascript, react.js,HTML&CSS.

I believe in trying out new things and picking up challenges as it is always great to have knowledge in variety of subjects and have various experiences to share. im more interested in developing my weaknesses.
`;


export function TracingBeamDemo() {
  return (
    <div className="p-4">
         <h1 className="mt-4 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Introduction
        </h1>
        
        <TextGenerateEffect words={words} className="px-32 py-8" />

        <h1 className="mt-6 mb-8 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         My Professional Experience
        </h1>

    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            

            <p className= "text-xl font-bold mb-4 text-white whitespace-nowrap">
              {item.title}
            </p>

            <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <div className="text-sm  text-white ml-8 prose prose-sm prose-invert">
              
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Articus solutions pvt ltd, Hyderabad, Telangana (January 2024 - Present)",
    description: (
      <>
        <ul className="custom-list">
            <li className="custom-list-item">Currently working on developing frontend application using React framework Next.js by using Tailwind CSS and Typescript.</li>
            <li className="custom-list-item">Integrated RESTful APIs to provide seamless data retrieval and updates in real-time for dynamic web applications</li>
            <li className="custom-list-item">Collaborated with designers and backend developers to integrate APIs and create data-driven features within the application</li>
        </ul>
      </>
    ),
    badge: "React Developer",
   
  },
  {
    title: "AI Research Centre - Woxsen University (May 2023 - July 2023)",
    description: (
        <>
        <ul className="custom-list">
            <li className="custom-list-item">Developed an virtual mall by using Three.js and Typescript.</li>
            <li className="custom-list-item">Developed interactive 3D visuals and animations using Three.js library for web applications</li>
            <li className="custom-list-item">Conducted research on best practices and innovative uses of Three.js for virtual reality applications</li>
        </ul>
      </>
    ),
    badge: "Threejs Intern",
   
  },
  {
    title: "AI Research Centre - Woxsen University, Hyderabad, Telangana (March 2023 - May 2023)",
    description: (
        <>
        <ul className="custom-list">
            <li className="custom-list-item">we have developed the whole website of Ai research center using WordPress</li>
            <li className="custom-list-item">Developed custom WordPress themes and plugins to meet client specifications and requirements</li>
            <li className="custom-list-item">Optimized website performance by implementing best practices in responsive design, SEO, and speed optimization</li>
            <li className="custom-list-item">Collaborated with cross-functional teams including designers and content creators to deliver high-quality websites on time</li>
        </ul>
      </>
    ),
    badge: "Web Developer",
   
  },
  {
    title: "Formonix Training & Consultants, Hyderabad, Telangana (January 2023 - February 2023)",
    description: (
        <>
        <ul className="custom-list">
            <li className="custom-list-item">My role in this internship is to hire the candidates personally and select some to them who meet with our all skills and we have done a project on Recruiting & Staffing.where we recruit people by doing personal interviews</li>
            
        </ul>
      </>
    ),
    badge: "Human Resources Intern",
   
  },
];
