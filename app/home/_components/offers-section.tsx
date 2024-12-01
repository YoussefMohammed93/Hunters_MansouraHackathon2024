import Image from "next/image";

export const OffersSection = () => {
  return (
    <section>
      <div className="w-full max-w-7xl m-auto flex flex-col items-center justify-center p-5">
        <h1 className="text-3xl font-semibold text-[#33576E]">What we offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-3 rounded-md bg-[#eee]">
              <Image
                width={120}
                height={120}
                alt="carpooling"
                src="/carpooling.png"
                className="object-cover w-20 h-20 sm:w-30 sm:h-30 max-w-fit"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#33576E]">
                Convenient carpooling
              </h3>
              <p className="mt-2 text-[#33576E]">
                Effortlessly find and share rides with people traveling in the
                same direction, saving time and reducing travel costs.
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-3.5 rounded-md bg-[#eee]">
              <Image
                width={120}
                height={120}
                alt="affordable-rides"
                src="/affordable-rides.png"
                className="object-cover w-20 h-20 sm:w-30 sm:h-30 max-w-fit"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#33576E]">
                Affordable rides
              </h3>
              <p className="mt-2 text-[#33576E]">
                Share the cost of travel and enjoy pocket-friendly rides without
                compromising on comfort.
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-3 rounded-md bg-[#eee]">
              <Image
                width={120}
                height={120}
                alt="route-optimization"
                src="/route-optimization.png"
                className="object-cover w-20 h-20 sm:w-30 sm:h-30 max-w-fit"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#33576E]">
                Route Optimization
              </h3>
              <p className="mt-2 text-[#33576E]">
                Smart algorithms ensure that shared rides are quick and follow
                the most convenient routes.
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-3.5 rounded-md bg-[#eee]">
              <Image
                width={100}
                height={100}
                alt="safety-first"
                src="/safe.png"
                className="object-cover w-20 h-20 max-w-fit"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#33576E]">
                Safety First
              </h3>
              <p className="mt-2 text-[#33576E]">
                Every user is verified, and real-time tracking ensures a secure
                travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
