"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, ChevronsUpDown, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import BusinessHero from "@/components/BusinessHero";
import { ScrollArea } from "@/components/ui/scroll-area";

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetchBusinesses();
    fetchCategories();
  }, []);

  const fetchBusinesses = async () => {
    const response = await axios.get("/api/businesses");
    setBusinesses(response.data.businesses);
  };

  const fetchCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  };

  const filteredBusinesses = businesses.filter((business) => {
    return (
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? business.category._id === selectedCategory : true)
    );
  });

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col ">
       <nav className='fixed w-full  p-3 '>
        <div className=' flex items-center bg-white text-black gap-4  p-2 border-1 border-blue-500 shadow-md mx-auto w-fit rounded-full '>
        <Link href='/' className='rounded-full hover:bg-blue-500 hover:text-white p-2 rounded-full'>Home</Link>
        <Link href='/businesses' className='rounded-full hover:bg-blue-500 hover:text-white p-2 rounded-full'>Billboards</Link>
        <Link href='/contact' className='rounded-full hover:bg-blue-500 hover:text-white p-2 rounded-full'>Contact</Link>
        </div>
    </nav>
      <div className="pt-[1%] ">
      <BusinessHero/>
      </div>
    <div className="container mx-auto lg:p-8 pb-[160px]">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-[80px] justify-center">
        <div className="flex items-center lg:w-[60%] w-full  mb-2 md:mb-0 bg-black p-2 px-4 rounded-full">
          <Search className="text-primary mr-2 font-bold" color="white" />
          <Input
            type="text"
            className="w-full "
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center ">
          <Popover open={open} onOpenChange={setOpen} className='bg-black text-white '>
            <PopoverTrigger asChild className="bg-blue-500 hover:bg-blue-500 hover:text-white py-6">
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between text-white "
              >
                {selectedCategory
                  ? categories.find(
                      (category) => category._id === selectedCategory
                    )?.name
                  : "Select category..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-white" color="white" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 ">
              <Command className='bg-blue-500 text-white '>
                <CommandInput
                  placeholder="Search category..."
                  value={filterTerm}
                  
                  onValueChange={(value) => setFilterTerm(value)}
                  className='placeholder-white text-white'
                />
                <CommandList>
                  <CommandEmpty className='text-white p-2'>No category found.</CommandEmpty>
                  <CommandGroup className='text-white'>
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <CommandItem
                          key={category._id}
                          value={category._id}
                          onSelect={(currentValue) => {
                            setSelectedCategory(
                              currentValue === selectedCategory
                                ? ""
                                : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4 ",
                              selectedCategory === category._id
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.name}
                        </CommandItem>
                      ))
                    ) : (
                      <CommandEmpty className='text-white'>No matching categories found.</CommandEmpty>
                    )}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <ScrollArea className='w-full'>
       <div className="flex flex-wrap  place-items-start justify-center gap-2">
        {filteredBusinesses.map((business) => (
          <div
            key={business._id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 rounded-lg "
          >
            <Link href={`/businesses/${business._id}`}>
              <div className="border rounded-lg overflow-hidden cursor-pointer shadow-md">
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
        ))}
      </div>
      </ScrollArea>
    </div>
    </div>
  );
};

export default Businesses;
