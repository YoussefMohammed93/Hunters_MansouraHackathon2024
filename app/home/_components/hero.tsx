import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <main className="w-full flex justify-center py-10 px-5 bg-[#eee]">
      <div className="flex flex-col items-center max-w-7xl w-full">
        <div className="flex flex-col space-y-5 text-center mb-10">
          <h2 className="text-lg sm:text-xl font-medium text-[#33576E]">
            Welcome back, John
          </h2>
          <h1 className="text-[1.4rem] sm:text-3xl lg:text-4xl font-bold text-[#33576E]">
            Please state whether you are:
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-10 sm:gap-14 p-5">
          <div className="flex flex-col items-center space-y-5">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/car.png"
                alt="car owner"
                fill
                sizes="(max-width: 640px) 6rem, (max-width: 1024px) 8rem, 10rem"
              />
            </div>
            <div>
              <Button className="text-lg" size="lg">
                Car owner
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/person.png"
                alt="passenger"
                fill
                sizes="(max-width: 640px) 6rem, (max-width: 1024px) 8rem, 10rem"
              />
            </div>
            <div>
              <Link href="/passenger">
                <Button className="text-lg" size="lg">
                  Passenger
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
