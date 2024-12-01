"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Joti_One } from "next/font/google";
import { usePathname } from "next/navigation";

const jotiOne = Joti_One({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#33576E] shadow-sm px-5 py-2">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className={`text-3xl sm:text-5xl font-normal text-white ${jotiOne.className}`}
          >
            F-Sktk
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link
                href="/"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/home" ? "font-bold underline" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/about" ? "font-bold underline" : ""
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/support" ? "font-bold underline" : ""
                }`}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-5">
          <Link
            href="/"
            className="border px-5 py-2 rounded-lg font-medium hover:bg-white/5 duration-300 transition text-white"
          >
            500 <span className="text-emerald-400">EGP</span>
          </Link>
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
            </div>
            <p className="hidden sm:block text-lg font-bold hover:underline text-white">
              Hi, John
            </p>
          </Link>
          <div className="md:hidden mt-2">
            <button onClick={toggleMenu} className="text-white text-3xl">
              <Menu className="size-8" />
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
          <Link href="/" className="text-3xl font-normal text-white">
            F-Sktk
          </Link>
          <button onClick={toggleMenu} className="text-white text-3xl">
            <X className="size-6" />
          </button>
        </div>
        <nav className="w-full h-[80vh] flex items-center justify-center">
          <ul className="flex flex-col items-center gap-y-5 py-10">
            <li>
              <Link
                href="/"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/" ? "font-bold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/about" ? "font-bold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`text-xl font-normal text-white hover:underline ${
                  pathname === "/support" ? "font-bold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
