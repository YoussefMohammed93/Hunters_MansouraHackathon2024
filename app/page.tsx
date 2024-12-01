import { ArrowRight, Facebook, Instagram, Linkedin, LogIn, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <header className="flex items-center space-x-5 justify-center sm:justify-end fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-sky-400 transition">
            <Facebook size={32} />
          </Link>
          <Link href="/" className="text-white hover:text-pink-600 transition">
            <Instagram size={32} />
          </Link>
          <Link href="/" className="text-white hover:text-blue-400 transition">
            <Twitter size={32} />
          </Link>
          <Link href="/" className="text-white hover:text-[#ddd] transition">
            <Linkedin size={24} />
          </Link>
          <div>
            <Link
              href="/home"
              className="flex items-center gap-x-2 border px-4 py-2 rounded-lg text-lg hover:bg-white/10  duration-300 font-medium text-white"
            >
              Sign in
              <LogIn />
            </Link>
          </div>
        </div>
      </header>

      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(bg.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#73737380] via-blue-500/10 to-[#33576E80] opacity-100"></div>
        <div className="absolute inset-0 left-0 sm:left-20 flex flex-col justify-center text-white">
          <p className="text-2xl pl-3">Welcome to</p>
          <Image src="/logo.png" alt="logo" width={350} height={350} />
          <p className="text-3xl font-medium pl-3">
            Ride Together, Save Together!
          </p>
          <div className="mt-5 px-5 sm:px-0 sm: pl-3">
            <Link
              href="/home"
              className="sm:w-2/12 flex items-center justify-center gap-x-3 text-xl text-black bg-white hover:bg-[#e2e2e2] transition duration-300 rounded-lg py-2"
            >
              Explore more
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
