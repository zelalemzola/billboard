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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ServiceSmallText from "@/components/ServiceSmallText";
import { Button } from "@/components/ui/button";
import HeroFooter from "@/components/HeroFooter";

export default function Home() {
  return (
    <>
   <main className="bg-cover bg-center md:h-screen" id="main" >
     
        <nav className='fixed w-full  p-3'>
        <div className=' flex items-center  text-black gap-4  p-2 border-2 border-black shadow-md mx-auto w-fit rounded-full '>
        <Link href='/' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/businesses' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Billboards</Link>
        <Link href='/contact' className='rounded-full hover:bg-black hover:text-white p-2 rounded-full'>Contact</Link>
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
       <Button className='bg-slate-900 rounded-full flex items-center gap-2'>
        <Link href='/contact' className='text-white text-lg'>Learn more</Link>
        <FontAwesomeIcon icon={faCircleArrowLeft} size='xl'color='white' className='rotIcon ' />
    </Button>
    </div>
    <div className="md:hidden md:mx-auto flex flex-col gap-4 mb-8">
      <h1 className="text-black mx-auto py-10 text-2xl text-center">Our Services</h1>
      <ServiceSmallText/>
    </div>
    <div className="w-full hidden md:flex flex-col md:flex-row items-center gap-4 px-20 ">
    <Card className='bg-slate-900 text-white h-[350px] w-[350px] rounded-2xl shadow-md'>
       <div className='px-3 pt-2'>
       <CardContent className='card1 h-[280px] rounded-2xl'>
       </CardContent>
      </div>
       <CardFooter className=''>
        <h1 className=" text-white text-xl my-5"> Business Consultancy</h1>
       </CardFooter>
     </Card>
      <Card className='bg-slate-900 text-white h-[350px] w-[350px] rounded-2xl shadow-md'>
       <div className='px-3 pt-2'>
       <CardContent className='card2 h-[280px] rounded-2xl'>
       </CardContent>
      </div>
       <CardFooter className=''>
        <h1 className=" text-white text-xl my-5">Digital Marketing</h1>
       </CardFooter>
     </Card>
      <Card className='bg-slate-900 text-white h-[350px] w-[350px] rounded-2xl shadow-md'>
       <div className='px-3 pt-2'>
       <CardContent className='card3 h-[280px] rounded-2xl'>
       </CardContent>
      </div>
       <CardFooter className=''>
        <h1 className=" text-white text-xl my-5">Tech Solutions</h1>
       </CardFooter>
     </Card>
    
           
    </div>
    <div className='flex flex-col items-center md:hidden gap-5 pt-6'>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white text-xl w-fit">
      <HandCoins color='white'/> Business Consultancy
      </div>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white text-xl w-fit">
      <TvMinimalPlay color='white' /> Digital Marketing
      </div>
      <div className="flex items-center rounded-full px-2 py-2 gap-2 bg-black text-white text-xl w-fit">
      <Cpu  color='white'/> Tech Solutions
      </div>
    </div>
   </div>
   <div className="h-screen bg-white flex flex-col pb-[160px] ">
    <HeroBottom/>

   </div>
   <HeroFooter/>
   </>
  );
}
