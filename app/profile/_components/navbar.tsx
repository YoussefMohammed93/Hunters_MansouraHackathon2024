"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Joti_One } from "next/font/google";
import { Input } from "@/components/ui/input";

const jotiOne = Joti_One({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm px-5 py-2">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className={`text-3xl sm:text-5xl font-normal text-[#33576E] ${jotiOne.className}`}
          >
            F-Sktk
          </Link>
        </div>
        <div className="w-[115px] sm:w-auto block">
          <Input
            type="search"
            placeholder="Search in FAQ"
            className="rounded-full px-5"
          />
        </div>
        <div className="hidden md:flex items-center gap-x-3">
          <Link href="/premium" className="text-[#33576E] hover:underline">
            Get Premium
          </Link>
          <Link href="/" className="text-[#33576E]">
            Messages
            <span className="bg-[#498B6D] text-white py-1 px-2 rounded-sm text-sm ml-1">
              4
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          <Link href="/profile" className="flex items-center gap-x-2">
            <div className="relative w-12 h-12">
              <Image
                fill
                loading="eager"
                alt="user image"
                src="/profile.jpg"
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 48px, 96px"
              />
              <span className="w-3 h-3 bg-[#41D491] rounded-full absolute top-0 right-0"></span>
            </div>
          </Link>
          <div className="md:hidden mt-2">
            <button onClick={toggleMenu} className="text-[#33576E] text-4xl">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#33576E] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <Link
            href="/"
            className={`text-3xl sm:text-5xl font-normal text-white ${jotiOne.className}`}
          >
            F-Sktk
          </Link>
          <button onClick={toggleMenu} className="text-white text-3xl">
            <X />
          </button>
        </div>
        <nav className="w-full h-[80vh] flex items-center justify-center">
          <ul className="flex flex-col items-center gap-y-5 py-10">
            <li>
              <Link href="/premium" className="text-white">
                Get Premium
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Messages
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
