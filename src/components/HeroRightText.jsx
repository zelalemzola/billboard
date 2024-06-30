import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const HeroRightText = () => {
  return (
    <div className="  h-[300px]  py-5 px-1 rounded-3xl bg-neutral-950 relative flex flex-col items-center justify-center gap-4 antialiased">
     <div className='flex items-center'>
     <FontAwesomeIcon icon={faCircle} style={{color: "white",}} />
     <FontAwesomeIcon icon={faCircle} style={{color: "white",}} />
     <FontAwesomeIcon icon={faCircle} style={{color: "white",}} />
     </div>
     <div className='flex flex-col items-center gap-8'>
        <h1 className='text-white'>Experience & Expertise</h1>
        <p className='bg-secondary text-black p-2 rounded-full text-center'>Individual Approach</p>
        <p className='text-white'>Supported by Innovation & Technology</p>
     </div>
    <BackgroundBeams />
  </div>
  )
}

export default HeroRightText