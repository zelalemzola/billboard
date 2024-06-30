"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function ServiceText() {
    const words = `We offer Wide Range of Services to help your business stand out`;
  return (
    <div className="pl-[30px]">
      <TextGenerateEffect words={words} />
    </div>
  );
}
export default ServiceText;