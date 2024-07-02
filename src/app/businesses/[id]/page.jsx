"use client"
// src/app/businesses/[id]/page.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const BusinessDetail = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    if (id) {
      fetchBusiness();
    }
  }, [id]);

  const fetchBusiness = async () => {
    try {
      const response = await axios.get(`/api/businesses/${id}`);
      setBusiness(response.data.business);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Failed to fetch business details:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-lg overflow-hidden">
        <Image
          src={business.bannerImageUrl}
          alt={business.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold">{business.name}</h1>
          <p className="text-gray-600">{business.details}</p>
          <h2 className="text-xl font-bold mt-4">Locations</h2>
          {business.locations.map((location, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">Address:</p>
              <p>{location.address}</p>
              <p className="font-semibold">Contact:</p>
              <p>{location.contact}</p>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Social Media</h2>
          {business.socialMedias.map((socialMedia, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{socialMedia.name}:</p>
              <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {socialMedia.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
