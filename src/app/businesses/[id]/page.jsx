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
      <div className="container mx-auto p-4 pt-[100px] ">
        <div className="border rounded-lg overflow-hidden p-3 relative">
          <div className='flex gap-4'>
            <div className='w-full lg:w-1/2 relative'>
              <Image
                src={business.bannerImageUrl}
                alt={business.name}
                width={600}
                height={400}
                className="w-full lg:w-full object-contain rounded-lg border"
              />
              <p className='absolute top-0 right-0 bg-secondary text-white rounded-full p-1 m-2'>{business.category.name}</p>
            </div>
            <div className='hidden lg:flex flex-col gap-2 px-6'>
              <div className='hidden lg:flex items-center gap-2'>
                <p className='text-xl text-secondary'>Name : </p>
                <h1 className="text-2xl font-bold">{business.name}</h1>
              </div>
              <h2 className="text-xl font-bold mt-4 text-secondary">Our Locations</h2>
              {business.locations.map((location, index) => (
                <div key={index} className="mb-2 flex flex-wrap gap-2 items-center">
                  <p className="font-semibold text-secondary">Address:</p>
                  <p>{location.address}</p>
                  <p className="font-semibold text-secondary">Contact:</p>
                  <p>{location.contact}</p>
                </div>
              ))}
              <h2 className="text-xl font-bold mt-4 text-secondary">Social Media</h2>
              {business.socialMedias.map((socialMedia, index) => (
                <div key={index} className="mb-2 flex items-center flex-wrap gap-2">
                  <p className="font-semibold">{socialMedia.name} :</p>
                  <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" className="text-teal-500">
                    {socialMedia.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">
            <div className='flex items-center gap-2 lg:hidden'>
              <p className='text-xl text-secondary'>Name : </p>
              <h1 className="text-2xl font-bold">{business.name}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-xl text-secondary'>Details : </p>
              <p className="text-gray-600">{business.details}</p>
            </div>
            <div className='flex flex-col gap-2 lg:hidden'>
              <h2 className="text-xl font-bold mt-4 text-secondary">Our Locations</h2>
              {business.locations.map((location, index) => (
                <div key={index} className="mb-2 flex flex-wrap gap-2 items-center">
                  <p className="font-semibold text-secondary">Address:</p>
                  <p>{location.address}</p>
                  <p className="font-semibold text-secondary">Contact:</p>
                  <p>{location.contact}</p>
                </div>
              ))}
              <h2 className="text-xl font-bold mt-4 text-secondary">Social Media</h2>
              {business.socialMedias.map((socialMedia, index) => (
                <div key={index} className="mb-2 flex items-center flex-wrap gap-2">
                  <p className="font-semibold">{socialMedia.name} :</p>
                  <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" className="text-teal-500">
                    {socialMedia.link}
                  </a>
                </div>
              ))}
            </div>
            <div className='flex items-center gap-4 mt-4 lg:absolute top-0 right-0 p-4'>
           
              <button 
                className="bg-bg text-white px-4 py-2 rounded-full hover:bg-red-500 active:bg-red-500"
                onClick={handleLike}
              >
               <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
