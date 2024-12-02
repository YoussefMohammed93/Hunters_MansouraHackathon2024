import Image from "next/image";
import { Navbar } from "./_components/navbar";
import { Contact, Edit, Mail, MapPin, PhoneCall, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../home/_components/footer";

export default function Profile() {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-5 mt-10">
          <div className="flex flex-col lg:flex-row items-center sm:items-start justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-10">
              <div>
                <Image
                  src="/profile.jpg"
                  alt="user"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h2 className="text-3xl font-semibold text-[#33576E]">
                  John Kareem
                </h2>
                <div className="flex gap-x-1">
                  <Star className="text-yellow-400 fill-current" />
                  <Star className="text-yellow-400 fill-current" />
                  <Star className="text-yellow-400 fill-current" />
                  <Star className="text-yellow-400 fill-current" />
                  <div>
                    <p className="text-[#ADADAD]">(2.3k+ reviews)</p>
                  </div>
                </div>
                <p className="text-[#498B6D] text-lg">Passenger</p>
                <Button size="lg" className="text-lg">
                  Be a car owner
                </Button>
              </div>
            </div>
            <div className="bg-[#33576E] p-10 sm:p-7 rounded-lg space-y-5 mt-10 lg:mt-0">
              <p className="text-white">Your balance</p>
              <h3 className="text-white text-4xl font-bold">
                500 <span className="text-[#6CC99F]">EGP</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col py-10">
            <div className="w-full flex justify-between">
              <h1 className="text-3xl font-medium text-[#33576E]">
                Contact Info
              </h1>
              <Edit className="text-[#33576E]" />
            </div>
            <div className="mt-5 space-y-5">
              <div className="flex items-center gap-x-3 text-[#33576E]">
                <MapPin />
                <p className="text-xl font-normal">27, Malik st., Nasr city</p>
              </div>
              <div className="flex items-center gap-x-3 text-[#33576E]">
                <PhoneCall />
                <p className="text-xl font-normal text-[#4cabe7]">
                  0107372741857973
                </p>
              </div>
              <div className="flex items-center gap-x-3 text-[#33576E]">
                <Contact />
                <p className="text-xl font-normal">Male</p>
              </div>
              <div className="flex items-center gap-x-3 text-[#33576E]">
                <Mail />
                <p className="text-xl font-normal text-[#4cabe7]">
                  John23@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
