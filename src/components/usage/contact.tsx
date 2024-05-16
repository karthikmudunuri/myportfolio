import React from "react";
import { SignupFormDemo } from "./form";
import { GlobeDemo } from "./g";


export function Contact(){
    return(
        <div>
        <h1 className="mt-6 -mb-6 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
         Contact Me
        </h1>
        <div className="flex space-x-4 p-4">
            <div className="w-1/2">
                <SignupFormDemo />
            </div>
            <div className="w-1/2">
                <GlobeDemo />
            </div>
        </div>
        </div>
    )
}