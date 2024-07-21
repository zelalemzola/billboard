"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, Search, ThumbsUp, Check, ChevronsUpDown } from "lucide-react";
import BusinessHero from "@/components/BusinessHero";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const fetchBusinessesISR = async (category, search) => {
  const response = await fetch(
    `/api/businesses?category=${category}&search=${search}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  return data;
};

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [comboboxSearchTerm, setComboboxSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
    setFilteredCategories(response.data.categories);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
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
      return business.category && business.category._id === selectedCategory && matchesSearch;
    }
  });

  const handleSelect = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    handleCategoryChange(currentValue);
  };

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(comboboxSearchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [comboboxSearchTerm, categories]);

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
      <div className="pt-[15%] lg:pt-[8%] flex flex-col gap-2 fixed w-full mx-auto z-20 bg-black text-white border-b shadow-md rounded-b-2xl dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-slate-900/[0.2]">
        <BusinessHero />
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center mb-[20px] justify-center">
          <div className="flex items-center w-[95%] lg:w-[60%] mb-2 md:mb-0 bg-secondary p-2 px-4 rounded-full">
            <Search className="text-primary mr-2 font-bold" color="white" />
            <Input
              type="text"
              className="w-full text-black"
              placeholder="Search businesses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between bg-secondary w-fit hover:bg-secondary"
              >
                {value
                  ? value === "" ? "All Categories" : categories.find((category) => category._id === value)?.name.split(' ')[0]
                  : "Select category..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search category..."
                    value={comboboxSearchTerm}
                    onChange={(e) => {
                      setComboboxSearchTerm(e.target.value);
                      console.log("Input Value:", e.target.value);  // Debugging line
                    }}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <CommandList>
                  <CommandItem
                    value=""
                    onSelect={() => handleSelect("")}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === "" ? "opacity-100" : "opacity-0"
                      )}
                    />
                    All Categories
                  </CommandItem>
                  {filteredCategories.length > 0 ? (
                    <CommandGroup>
                      {filteredCategories.map((category) => (
                        <CommandItem
                          key={category._id}
                          value={category._id}
                          onSelect={() => handleSelect(category._id)}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === category._id ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {category.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>No category found.</CommandEmpty>
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="container mx-auto lg:p-8 pb-[160px] pt-[60%] ">
        <div className="flex flex-wrap place-items-start justify-center gap-2 pt-[19%]">
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
                    <div className="p-4 flex flex-wrap justify-between">
                      <h2 className="text-lg font-bold">{business.name}</h2>
                      <div className='flex flex-wrap justify-between gap-2'>
                        <p className="text-black flex items-center"><ThumbsUp size='14' color="gray"/>: {business.likes}</p>
                        <p className="text-black flex items-center"> <Eye size='14' color="gray"/>: {business.clicks}</p>
                      </div>
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
