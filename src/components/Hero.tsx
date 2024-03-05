"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function SparklesPreview() {
    const words = [
        {
            text: "Make",
            className: "text-white",
        },
        {
            text: "the",
            className: "text-white",
        },
        {
            text: "world",
            className: "text-white",
        },
        {
            text: "better",
            className: "text-white",
        },
        {
            text: "with",
            className: "text-white",
        },
        {
            text: "Colonize!",
            className: "text-yellow-500 dark:text-yellow-500",
        },
    ];
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      

      <p className="text-xs sm:text-base text-white">
        The road to the <em className="not-italic text-blue-500 font-black">future</em> starts from here
      </p>
      <TypewriterEffectSmooth words={words} />

    </div>
  );
}
