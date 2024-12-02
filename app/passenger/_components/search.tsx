"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LocateFixedIcon, Search, Timer } from "lucide-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface Journey {
  id: number;
  from_place: string;
  to_place: string;
  start_at: string;
  driver: {
    full_name: string;
    picture: string;
  };
  riders: number[];
  passengers_count: number[];
  car: {
    max_passengers_count: number;
    car_name: string;
    car_id: string;
    riders: string[];
  };
}

export const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [showHello, setShowHello] = useState(false);
  const [journeys, setJourneys] = useState<Journey[]>([]);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleFindRide = async () => {
    console.log("From:", fromPlace, "To:", toPlace);

    const apiUrl = "https://web-production-b837.up.railway.app/journey/get/";

    const params = new URLSearchParams();
    params.append("from_place", fromPlace);
    params.append("to_place", toPlace);

    try {
      const response = await fetch(`${apiUrl}?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setJourneys(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="py-10 px-5 pb-32">
      <div className="w-full sm:w-3/4 max-w-7xl mx-auto flex items-center space-x-8">
        <div className="relative w-1/2">
          <Popover open={showHello} onOpenChange={setShowHello}>
            <PopoverTrigger className="w-full">
              <Input
                type="text"
                placeholder="From"
                className="pl-12 relative h-[45px] placeholder-[#33576E]"
                value={fromPlace}
                onChange={(e) => setFromPlace(e.target.value)}
                onClick={() => setShowHello(true)}
              />
              <LocateFixedIcon className="absolute top-2.5 left-2 text-[#33576E]" />
            </PopoverTrigger>
            {showHello && (
              <div className="absolute mt-2 p-2 bg-white shadow-sm border rounded-lg w-[350px] md:w-[540px] overflow-y-auto max-h-40">
                {journeys.length > 0 ? (
                  journeys.map((journey) => (
                    <div
                      key={journey.id}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between p-3 border-b border-gray-300 last:border-b-0"
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Image
                              src={`https://web-production-b837.up.railway.app${journey.driver.picture}`}
                              alt="user"
                              width={56}
                              height={56}
                              className="rounded-full object-cover cursor-pointer"
                            />
                            <div className="flex flex-col">
                              <h2 className="md:text-lg sm:font-medium cursor-pointer">
                                {journey.driver.full_name}
                              </h2>
                              <div className="w-fit mt-1 px-2 py-1 text-xs md:text-sm rounded-md text-white bg-[#498B6D]">
                                {journey.passengers_count.length}{" "}
                                <span>out of </span>
                                {journey.car.max_passengers_count}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <h3 className="font-medium text-[#33576E]">
                          {journey.car.car_name}
                        </h3>
                        <h4 className="text-[#33576E]">{journey.car.car_id}</h4>
                        <div className="flex items-start md:justify-center mt-2 border-[#33576E]">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant="link"
                                size="sm"
                                className="border border-[#33576E] text-[#33576E]"
                              >
                                Who is in the ride?
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {journey.car.riders.length > 0 ? (
                                journey.car.riders.map((rider, index) => (
                                  <DropdownMenuItem key={index}>
                                    {rider}
                                  </DropdownMenuItem>
                                ))
                              ) : (
                                <DropdownMenuItem>
                                  No riders available
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No journeys found</p>
                )}
              </div>
            )}
          </Popover>
        </div>
        <div className="relative w-1/2">
          <Input
            type="text"
            placeholder="To"
            className="pl-12 h-[45px] placeholder-[#33576E] focus:border-[]"
            value={toPlace}
            onChange={(e) => setToPlace(e.target.value)}
          />
          <Search className="absolute top-2.5 left-2 text-[#33576E]" />
          <div className="hidden sm:block absolute right-0 top-0">
            <div className="relative">
              <Button
                className="absolute top-[4.5px] right-1"
                onClick={handleClick}
              >
                <Timer />
                Now
              </Button>
              {showInput && (
                <input
                  type="datetime-local"
                  className="mt-12 border rounded p-2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button
          type="button"
          size="lg"
          className="text-xl"
          onClick={handleFindRide}
        >
          Find a ride
        </Button>
      </div>
    </div>
  );
};
