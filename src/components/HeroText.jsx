"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Circle, CircleArrowOutUpRight } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { faCircle, faCircleArrowLeft, faCircleArrowUp, faCircleArrowUpLeft } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Link from 'next/link';

const words = `Lets help you connect with successfull businesses in the game`;
 
const HeroText = () => {
    return (
        <div className="mx-auto md:mx-0 bg-white md:bg-transparent md:w-1/3 flex flex-col gap-3 items-start justify-start py-10 px-3 md:px-0md:py-0">
        <div className='flex items-start gap-2'>
            <div className='flex items-center pt-2'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#000000",}} />
            </div >
                <TextGenerateEffect words={words} />
            </div>
        <p className="text-gray-600 text-justify">We also offer innovative solutions and techniques based on years of experience working with various companies.</p>
        <div className='flex items-center gap-2'>
            <Link href='/' className='bg-secondary rounded-full text-black text-lg shadow-sm p-1 pl-2 flex items-center gap-2'>Discover our works   <FontAwesomeIcon icon={faCircleArrowLeft} size='2xl' className='rotIcon ' /></Link>
            <Link href='/' className='border border-black p-3 rounded-full'>Get a call</Link>
        </div>
        </div>

    );
  
}

export default HeroText