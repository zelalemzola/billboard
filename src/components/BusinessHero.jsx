"use client";

import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function BusinessHero() {
  const words = [
    {
      text: "The",
    },
    {
      text: "right",
    },
    {
      text: "destination",
    },
    {
      text: "to",
    },
    {
      text: "find",
    },
    {
      text: "Striving",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Businesses.",
      className: "text-blue-500 dark:text-blue-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[75vh]">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
       Let us help pair you with the right candidates !
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col items-center  md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
       <p>For further assistance you may reach us via</p>
        <Link className="bg-blue-500 px-3 py-2 rounded-full text-white" href='/contact'>
          Contact us
        </Link>
      </div>
    </div>
  );

}

export default BusinessHero;
