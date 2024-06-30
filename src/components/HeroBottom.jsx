"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
 
export function HeroBottom() {
  return (
    <div className="h-[40rem] w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="flex flex-col gap-5 pb-10">
      <h1 className="md:text-3xl text-2xl lg:text-4xl font-bold text-center text-black relative z-20">
       Connect with us, Increase your Prescence !
      </h1>
      <Link href='/' className="rounded-full bg-black text-white px-6 py-5 w-fit mx-auto">Contact Us</Link>
        </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#000000"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
      </div>
    </div>
  );
}

export default HeroBottom;