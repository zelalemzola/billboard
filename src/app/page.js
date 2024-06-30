import HeroRightText from "@/components/HeroRightText";
import HeroText from "@/components/HeroText";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <main className="bg-cover bg-center h-screen" id="main" >
     
        <nav className='fixed w-full  p-3'>
        <div className=' flex items-center  text-black gap-4  p-2 border-2 border-black shadow-md mx-auto w-fit rounded-full '>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>clients</Link>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Contact</Link>
        </div>
    </nav>
    <div className="pt-[20%] px-[5%] flex items-center justify-between">
      <HeroText/>
      <div className="pl-[80px] w-1/3"><HeroRightText/></div>
    </div>
   </main>
   <div className="bg-white  h-screen p-10 pt-[70px]" >
    <div className="w-full flex items-end justify-between">
      <h1 className="w-1/3 text-black text-2xl ">We offer a wide range of <span className="text-secondary">services</span> designed <span className="text-gray-600">to optimize </span> your businesses <span className="text-gray-600">and achieve </span>your goals</h1>
      <div className='flex items-center'>
        <Link href='/' className='p-2 px-3 rounded-full text-black border border-2 border-black'>Learn more</Link>
        <CircleArrowOutUpRight color="#F3CA52" size={32}/>
      </div>

    </div>
    <div className="w-full flex items-center gap-4">
       
    </div>
   </div>
   </>
  );
}
