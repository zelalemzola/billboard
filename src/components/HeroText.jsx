"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Circle } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Link from 'next/link';

const words = `With Special Strategic and Operational Management lets work together to elevate your Business`;
 
const HeroText = () => {
    return (
        <div className="w-1/3 flex flex-col gap-3 items-start justify-start">
        <div className='flex items-start gap-2'>
            <div className='flex items-center pt-2'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#000000",}} />
            </div >
                <TextGenerateEffect words={words} />
            </div>
        <p className="text-gray-600 text-justify">We offer innovative solutions and techniques based on years of experience working with various companies.</p>
        <div className='flex items-center gap-2'>
            <Link href='/' className='bg-secondary rounded-full text-black shadow-sm p-3'>Discover our works</Link>
            <Link href='/' className='border border-black p-3 rounded-full'>Get a call</Link>
        </div>
        </div>

    );
  
}

export default HeroText