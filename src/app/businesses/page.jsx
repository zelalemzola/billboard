"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import BusinessHero from "@/components/BusinessHero";

// Utility to fetch data with ISR (Incremental Static Regeneration)
const fetchBusinessesISR = async (category, search) => {
  const response = await fetch(
    `/api/businesses?category=${category}&search=${search}`,
    {
      next: { revalidate: 10 }, // Revalidate the cached data every 10 seconds
    }
  );
  const data = await response.json();
  return data;
};

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetchBusinesses();
    fetchCategories();
  }, [selectedCategory, searchTerm]);

  const fetchBusinesses = async () => {
    const data = await fetchBusinessesISR(selectedCategory, searchTerm);
    setBusinesses(data.businesses);
  };

  const fetchCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSearchTerm("");
  };

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!selectedCategory) {
      return matchesSearch;
    } else {
      // Check if the business's category matches the selected category ID
      return business.category && business.category._id === selectedCategory && matchesSearch;
    }
  });
  

  return (
    <div className="flex flex-col">
      <nav className="fixed w-full p-3 z-30">
        <div className="flex items-center bg-white text-black gap-4 p-2 border-1 border-secondary shadow-md mx-auto w-fit rounded-full">
          <Link href="/" className="rounded-full hover:bg-secondary hover:text-white p-2">
            Home
          </Link>
          <Link
            href="/businesses"
            className="rounded-full hover:bg-secondary hover:text-white p-2"
          >
            Billboards
          </Link>
          <Link
            href="/contact"
            className="rounded-full hover:bg-secondary hover:text-white p-2"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className="pt-[10%] lg:pt-[8%] flex flex-col gap-3  fixed w-full mx-auto z-20 bg-black text-white border-b shadow-md rounded-br-2xl dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-blue-500/[0.2]   ">
        <BusinessHero />
        <div className="flex flex-col md:flex-row gap-8 items-center mb-[20px] justify-center">
          <div className="flex items-center lg:w-[60%] w-full mb-2 md:mb-0 bg-secondary p-2 px-4 rounded-full">
            <Search className="text-primary mr-2 font-bold" color="white" />
            <Input
              type="text"
              className="w-full"
              placeholder="Search businesses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <select
              className="bg-secondary text-white px-4 py-2 rounded-full"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
           
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:p-8 pb-[160px]">
        

        <div className="flex flex-wrap place-items-start justify-center gap-2">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div key={business._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded-lg">
                <Link href={`/businesses/${business._id}`}>
                  <div className="border rounded-lg overflow-hidden cursor-pointer shadow-lg">
                    <Image
                      src={business.bannerImageUrl}
                      alt={business.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold">{business.name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>No businesses found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Businesses;
