"use client";

import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function BusinessHero() {
  const words = [
    {
      text: "The",
      className: "sm:text-3xl",
    },
    {
      text: "right",
      className: "sm:text-3xl",
    },
    {
      text: "destination",
      className: "sm:text-3xl",
    },
    {
      text: "to",
      className: "sm:text-3xl",
    },
    {
      text: "find",
      className: "sm:text-3xl",

    },
    {
      text: "Striving",
      className: "text-blue-500 dark:text-blue-500 sm:text-3xl",
    },
    {
      text: "Businesses.",
      className: "text-blue-500 dark:text-blue-500 sm:text-3xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] p-2">
      <p className="text-black  text-2xl  mb-10">
       Let us help pair you with the right candidates !
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col items-center  md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
       <p className="text-xl">For further assistance you may reach us via</p>
        <Link className="bg-black px-3 py-3 rounded-full text-white text-xl" href='/contact'>
          Contact us
        </Link>
      </div>
    </div>
  );

}

export default BusinessHero;
