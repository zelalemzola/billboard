"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Circle, CircleArrowOutUpRight } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { faCircle, faCircleArrowLeft, faCircleArrowUp, faCircleArrowUpLeft, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Link from 'next/link';

const words = `Connect and Collaborate with Successfull Businesses All around the World`;
 
const HeroText = () => {
    return (
        <div className="mx-auto md:mx-0 bg-white md:bg-transparent md:w-1/3 flex flex-col gap-3 items-start justify-start py-5 px-3 md:px-0md:py-0">
        <div className='flex items-start gap-2'>
            <div className='flex items-center pt-2'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#000000",}} />
            </div >
                <TextGenerateEffect words={words} />
            </div>
        <p className="text-gray-600 text-justify">We also offer innovative solutions and techniques based on years of experience working with various companies.</p>
        <div className='flex flex-wrap items-center gap-2'>
            <Button className='flex items-center gap-2 rounded-full bg-slate-900 pr-0 py-1'>
            <Link href='/businesses' className=' text-white text-lg '>Discover our works</Link>
            <FontAwesomeIcon icon={faCircleArrowLeft} size='xl' className='rotIcon p-1' color='white'/>
            </Button>
            <Button className='flex items-center gap-2 rounded-full bg-slate-900 pr-0 py-1 pr-1'>
            <Link href='/contact' className='  text-white text-lg'>Call</Link>
            <FontAwesomeIcon icon={faPhone} size="xl" color='black' className='bg-white p-1 rounded-full'/>
            </Button>
        </div>
        </div>

    );
  
}

export default HeroText