import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      
       <div className="h-screen w-full bg-slate-800 flex flex-col items-center justify-center gap-6">
           <h1 className='text-5xl text-white'><span className='text-bold text-5xl text-[#f2758b]'>Connect</span>  &  <span  className='text-bold text-5xl text-[#36bbf8]'> Collaborate </span> with Succesful Businesses </h1>
           <p  className="text-white text-4xl">From all Around the Country</p>
       </div>
    </div>
  )
}

export default Home