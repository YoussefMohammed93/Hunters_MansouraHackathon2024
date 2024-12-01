import Link from "next/link";
import { Joti_One } from "next/font/google";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const jotiOne = Joti_One({
  weight: "400",
  subsets: ["latin"],
});

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#33576E] text-white py-10">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="flex justify-center sm:justify-start w-full">
            <Link
              href="/"
              className={`text-5xl font-normal ${jotiOne.className}`}
            >
              F-Sktk
            </Link>
          </div>
          <div className="flex justify-end flex-col sm:flex-row sm:space-x-8 text-sm sm:text-base w-full">
            <Link
              href="/"
              className="mb-2 sm:mb-0 hover:underline text-center sm:text-left"
            >
              Cookies settings
            </Link>
            <Link
              href="/"
              className="mb-2 sm:mb-0 hover:underline text-center sm:text-left"
            >
              Privacy policy
            </Link>
            <Link
              href="/"
              className="mb-2 sm:mb-0 hover:underline text-center sm:text-left"
            >
              Terms of use
            </Link>
            <Link
              href="/"
              className="mb-2 sm:mb-0 hover:underline text-center sm:text-left"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="mt-10 flex justify-center sm:justify-start space-x-5">
          <Link href="/" className="text-white hover:text-sky-400 transition">
            <Facebook size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-pink-600 transition">
            <Instagram size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-blue-400 transition">
            <Twitter size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-slate-800 transition">
            <Linkedin size={24} />
          </Link>
        </div>
        <div className="mt-8 text-center text-sm sm:text-base">
          <p>&copy; {currentYear} F-Sktk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
