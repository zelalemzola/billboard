import HeroRightText from "@/components/HeroRightText";
import HeroText from "@/components/HeroText";
import { CircleArrowOutUpRight, Cpu, HandCoins, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ServiceText from "@/components/ServiceText";
import HeroBottom from "@/components/HeroBottom";

export default function Home() {
  return (
    <>
   <main className="bg-cover bg-center h-screen" id="main" >
     
        <nav className='fixed w-full  p-3'>
        <div className=' flex items-center  text-black gap-4  p-2 border-2 border-black shadow-md mx-auto w-fit rounded-full '>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Billboards</Link>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Contact</Link>
        </div>
    </nav>
    <div className="pt-[45%] md:pt-[20%] px-[5%] flex items-center justify-between">
      <HeroText/>
      <div className="pl-[80px] w-1/3 hidden md:flex"><HeroRightText/></div>
    </div>
   </main>
   <div className="bg-white  md:h-screen p-10 pt-[70px]" >
    <div className="w-full hidden md:flex items-end justify-between py-10 px-20">
      {/* <h1 className=" text-black text-2xl ">We offer <span className="text-secondary">services</span> designed <span className="text-gray-600">to optimize </span> your businesses <span className="text-gray-600">and achieve </span>your goals</h1> */}
       <ServiceText/>
      <div className='flex items-center'>
        <Link href='/' className='p-2 px-3 rounded-full text-black border border-2 border-black'>Learn more</Link>
        <CircleArrowOutUpRight color="black" size={32}/>
      </div>

    </div>
    <div className="md:hidden md:mx-auto ">
      <h1 className="text-black mx-auto py-10 text-2xl text-center">Our Services</h1>
    </div>
    <div className="w-full hidden md:flex flex-col md:flex-row items-center gap-4 px-20 ">
      <Card className='bg-black text-white h-[350px] w-[350px] rounded-2xl'>
       <CardContent className='card1 h-[280px] rounded-t-2xl'>
       </CardContent>
       <CardFooter className=''>
        <h1 className="rounded-full bg-white text-black px-3 py-2 mx-auto my-5">Business Consultancy</h1>
       </CardFooter>
     </Card>
      <Card className='bg-black text-white h-[350px] w-[350px] rounded-2xl'>
       <CardContent className='card2 h-[280px] rounded-t-2xl'>
       </CardContent>
       <CardFooter className=''>
        <h1 className="rounded-full bg-white text-black px-3 py-2 mx-auto my-5">Digital Marketing</h1>
       </CardFooter>
     </Card>
      <Card className='bg-black text-white h-[350px] w-[350px] rounded-2xl'>
       <CardContent className='card3 h-[280px] rounded-t-2xl'>
       </CardContent>
       <CardFooter className=''>
        <h1 className="rounded-full bg-white text-black px-3 py-2 mx-auto my-5">Tech Solutions</h1>
       </CardFooter>
     </Card>
           
    </div>
    <div className='flex flex-col items-center md:hidden gap-3'>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white w-fit">
      <HandCoins color='white'/> Business Consultancy
      </div>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white w-fit">
      <TvMinimalPlay color='white' /> Digital Marketing
      </div>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white w-fit">
      <Cpu  color='white'/> Tech Solutions
      </div>
    </div>
   </div>
   <div className="md:h-screen bg-white flex flex-col pb-[160px] ">
    <HeroBottom/>
    <Link href='/' className="rounded-full bg-black text-white px-6 py-5 w-fit mx-auto">Contact Us</Link>
   </div>
   </>
  );
}
