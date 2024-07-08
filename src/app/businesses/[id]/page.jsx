"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const BusinessDetail = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState("secondary");
  useEffect(() => {
    if (id) {
      fetchBusiness();
    }
  }, [id]);

  const fetchBusiness = async () => {
    try {
      const response = await axios.get(`/api/businesses/${id}`);
      setBusiness(response.data.business);
      incrementClicks();
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch business details:", error);
      setLoading(false);
    }
  };

  const incrementClicks = async () => {
    try {
      await axios.patch(`/api/businesses/${id}/click`);
    } catch (error) {
      console.error("Failed to increment clicks:", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.patch(`/api/businesses/${id}/like`);
      setBusiness({ ...business, likes: response.data.likes });
      if(bg === "secondary"){setBg("red-500")}
      else{setBg("secondary")}

    } catch (error) {
      console.error("Failed to increment likes:", error);
    }
  };

  if (loading) {
    return <div className='flex items-center justify-center text-4xl'>Loading...</div>;
  }

  if (!business) {
    return <div className='flex items-center justify-center text-4xl'>Business not found</div>;
  }

  return (
    <div>
      <nav className="fixed w-full p-3 z-30">
        <div className="flex items-center bg-white text-black gap-4 p-2 border-1 border-secondary shadow-md mx-auto w-fit rounded-full">
          <Link
            href="/"
            className="rounded-full hover:bg-secondary hover:text-white p-2 rounded-full"
          >
            Home
          </Link>
          <Link
            href="/businesses"
            className="rounded-full hover:bg-secondary hover:text-white p-2 rounded-full"
          >
            Billboards
          </Link>
          <Link
            href="/contact"
            className="rounded-full hover:bg-secondary hover:text-white p-2 rounded-full"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className='p-3 m-3 mt-10 lg:p-6 lg:m-6' >
      <div className='container px-[5%] py-[10%] lg:px-[10%] lg:py-[5%] flex flex-col gap-8 shadow-xl rounded-2xl border '>
           <div className='flex items-center justify-between pt-[8%] lg:pt-0'>
             <h1 className="text-2xl font-bold text-secondary">{business.name}</h1> 
             <button 
                className=" bg-secondary text-white px-4 py-2 rounded-full hover:bg-red-500 active:bg-red-500 hidden lg:flex items-center justify-center :w-fit "
                onClick={handleLike}
              >
               <Heart />
              </button>
           </div>
            <div className='flex flex-wrap gap-10'>
            <div className='w-full lg:w-[60%] relative p-2 rounded-2xl border shadow-xl'>
              <Image
                src={business.bannerImageUrl}
                alt={business.name}
                width={600}
                height={400}
                className="w-full lg:w-full object-contain rounded-lg border"
              />
              <p className='absolute top-0 right-0 bg-secondary text-white rounded-full p-1 m-2 '>{business.category.name.split(' ')[0]}</p>
            </div>
            <div className='flex flex-col gap-4 items-center '>
            <div className='flex flex-col px-5 py-4 rounded-2xl border w-fit h-fit shadow-lg'>
            <h2 className="text-xl font-bold mt-4 text-secondary text-center">Our Locations</h2>
              {business.locations.map((location, index) => (
                <div key={index} className="mb-2 pt-4  flex flex-wrap gap-6 items-center">
                  <div className='flex items-center gap-2'> 
                    <p className="font-semibold text-secondary">Address:</p>
                    <p>{location.address}</p>
                  </div> 
                 <div className='flex items-center gap-2'>
                    <p className="font-semibold text-secondary">Contact:</p>
                    <p>{location.contact}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-col px-8 py-4 rounded-2xl border w-fit h-fit shadow-lg'>
            <h2 className="text-xl font-bold mt-4 text-secondary text-center">Social Media</h2>
              {business.socialMedias.map((socialMedia, index) => (
                <div key={index} className="mb-2 flex items-center flex-wrap gap-2 pt-4">
                  <p className="font-semibold">{socialMedia.name} :</p>
                  <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" className="text-teal-500">
                    {socialMedia.link}
                  </a>
                </div>
              ))}
            </div>
            </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-2xl shadow-xl px-3 py-4'>
              <p className='text-xl text-secondary'>Details : </p>
              <div dangerouslySetInnerHTML={{ __html: business.details }} className="" />
            </div>
            <div className ='w-full lg:hidden'>
            <button 
                className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-red-500 active:bg-red-500 w-full flex items-center justify-center  "
                onClick={handleLike}
              >
               <Heart />
              </button>
            </div>
      </div>
      </div>

    </div>
  );
};

export default BusinessDetail;

