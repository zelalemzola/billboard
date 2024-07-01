
import { PinContainer } from '@/components/ui/3d-pin'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    const words1 = `Connect with us, Increase your Prescence !`;
    const wordsphone= `0988745721`
    const wordsfacebook= `facebook`
    const wordsinstagram= `instagram`
    const wordstwitter= `twitter`
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
   <nav className='fixed w-full  p-3'>
        <div className=' flex items-center  text-black gap-4  p-2 border-2 border-black shadow-md mx-auto  w-fit rounded-full z-30'>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Billboards</Link>
        <Link href='/contact' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Contact</Link>
        </div>
    </nav> 
    <div className='py-20 text-center'>
    <TextGenerateEffect words={words1} className='text-4xl'/>
    </div>
    {/* Radial gradient for the container to give a faded look */}
    <div className='hidden lg:flex items-center px-[200px]  gap-[200px] pt-[100px]'>
    <div className="h-[10rem] w-[100px] flex items-center justify-center rounded-full ">
      <PinContainer
        title="0988745721"
        href="/"
    
      >
       <div className='rounded-full'>
        
       <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#ffffff",}} className='' />
       </div>
      </PinContainer>
    </div>
    <div className="h-[10rem] w-[100px] flex items-center justify-center rounded-full ">
      <PinContainer
        title="0988745721"
        href="/"
    
      >
       <div className='rounded-full'>
        
        <FontAwesomeIcon icon={faFacebookF} size="2xl" style={{color: "#fafafa",}} />
       </div>
      </PinContainer>
    </div>
    <div className="h-[10rem] w-[100px] flex items-center justify-center rounded-full ">
      <PinContainer
        title="0988745721"
        href="/"
    
      >
       <div className='rounded-full'>
        
        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />
       </div>
      </PinContainer>
    </div>
    <div className="h-[10rem] w-[100px] flex items-center justify-center rounded-full ">
      <PinContainer
        title="0988745721"
        href="/"
    
      >
       <div className='rounded-full'>
        
        <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#ffffff",}} />
       </div>
      </PinContainer>
    </div>
    </div>
    <div className="flex flex-col items-start gap-8 lg:hidden px-[60px]">
        <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#ffffff",}} className='rounded-full bg-black p-2' />
        <TextGenerateEffect words={wordsphone} />
        </div>
        <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faFacebook} size='2xl' style={{color: "#ffffff",}} className='rounded-full bg-black p-2'/>        
        <TextGenerateEffect words={wordsfacebook} />
        </div>
        <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} className='rounded-full bg-black p-2' />
        <TextGenerateEffect words={wordsinstagram} />
        </div>
        <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#ffffff",}} className='rounded-full bg-black p-2' />
        <TextGenerateEffect words={wordstwitter} />
        </div>
    </div>
  </div>
  )
}

export default Contact