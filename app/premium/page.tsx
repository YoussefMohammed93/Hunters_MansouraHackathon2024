import { Footer } from "../home/_components/footer";
import { Navbar } from "../home/_components/navbar";

export default function Premium() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl font-bold text-[#33576E] text-center py-10">
          Premium packages
        </h1>

        <div className="flex flex-wrap justify-center pb-10">
          <div className="bg-white p-10 m-3 rounded-lg text-center border-[5px] border-[#33576E] transition duration-300 cursor-pointer hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-[#33576E]">
              Silver Journey Package
            </h2>
            <ul className="max-w-[300px]">
              <li className="text-[#33576E] mb-3">
                For frequent travelers needing extra perks.
              </li>
              <li className="border-[3px] font-bold rounded-lg border-dashed border-[#33576E] p-3 text-[#33576E]">
                Price: 600 EGP/month or 6,000 EGP/year
              </li>
            </ul>
            <ul className="max-w-[300px] text-start mt-4">
              <li className="text-[#33576E] mb-3 list-disc font-bold">
                Features :
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Access to female-only rides.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Elders-only rides for secure and comfortable travel.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Priority support for booking and inquiries.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Limited access to ride customization (e.g., music and route
                preferences).
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Up to 10 premium rides per month.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-[#498B6D] to-[#33576E] p-10 relative xl:bottom-5 m-3 rounded-lg text-center transition duration-300 cursor-pointer hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Gold Horizon Package
            </h2>
            <ul className="max-w-[300px]">
              <li className="text-white mb-3">
                For frequent travelers needing extra perks.
              </li>
              <li className="border-[3px] font-bold rounded-lg border-dashed border-white p-3 text-white">
                Price: 600 EGP/month or 6,000 EGP/year
              </li>
            </ul>
            <ul className="max-w-[300px] text-start mt-4">
              <li className="text-white mb-3 list-disc font-bold">
                Features :
              </li>
              <li className="text-white mb-3 list-disc">
                Everything in the Silver Journey Package.
              </li>
              <li className="text-white mb-3 list-disc">
                Unlimited access to female-only and elders-only rides.
              </li>
              <li className="text-white mb-3 list-disc">
                Full ride customization (e.g., stopovers, vehicle preferences).
              </li>
              <li className="text-white mb-3 list-disc">
                Exclusive discounts on long-distance rides.
              </li>
              <li className="text-white mb-3 list-disc">
                Enhanced ride-matching algorithm for faster bookings.
              </li>
            </ul>
          </div>
          <div className="bg-white p-10 m-3 rounded-lg text-center border-[5px] border-[#33576E] transition duration-300 cursor-pointer hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-[#33576E]">
              Gold Horizon Package
            </h2>
            <ul className="max-w-[300px]">
              <li className="text-[#33576E] mb-3">
                For premium users wanting the ultimate experience.
              </li>
              <li className="border-[3px] font-bold rounded-lg border-dashed border-[#33576E] p-3 text-[#33576E]">
                Price: 900 EGP/month or 9,000 EGP/year
              </li>
            </ul>
            <ul className="max-w-[300px] text-start mt-4">
              <li className="text-[#33576E] mb-3 list-disc font-bold">
                Features :
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Everything in the Gold Horizon Package.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Dedicated customer service hotline.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Monthly free ride credits.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Early access to new features and exclusive offers.
              </li>
              <li className="text-[#33576E] mb-3 list-disc">
                Flexible ride cancellations with no penalties.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
