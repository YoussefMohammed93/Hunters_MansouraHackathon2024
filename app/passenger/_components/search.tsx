"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, Timer, Verified } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openWhoIsInTheRide, setOpenWhoIsInTheRide] = useState(false);

  const handleFindRide = async () => {
    console.log("From:", fromPlace, "To:", toPlace);

    const apiUrl = "https://bc0d-196-134-147-156.ngrok-free.app/journey/get/";

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
        console.log(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="py-10 px-5 pb-40">
      <div className="w-full sm:w-3/4 max-w-7xl mx-auto flex items-center space-x-8">
        <div className="relative w-1/2">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger>
              <Input
                type="text"
                placeholder="From"
                className="pl-12 h-[45px] placeholder-[#33576E]"
                value={fromPlace}
                onChange={(e) => setFromPlace(e.target.value)}
                onClick={() => setIsOpen(true)} // Open popover on input click
              />
            </PopoverTrigger>
            <PopoverContent className="w-auto sm:w-[650px] bg-white shadow-lg rounded-lg">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuContent className="w-auto sm:w-[650px] bg-white shadow-lg rounded-lg">
                  <DropdownMenuItem>
                    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="flex items-center gap-x-4">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src="/profile.jpg" alt="avatar" />
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <h2 className="sm:text-lg sm:font-medium">
                              Mohammed Ahmed
                            </h2>
                            <Verified className="text-[#498B6D]" />
                          </div>
                          <div className="w-fit mt-1 px-2 py-1 rounded-md text-white bg-[#498B6D]">
                            3 out of 4
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <h3 className="font-medium">Toyota Corolla</h3>
                        <h4>ABC-1234</h4>
                        <div className="flex items-center sm:justify-center mt-2">
                          <DropdownMenu
                            open={openWhoIsInTheRide}
                            onOpenChange={setOpenWhoIsInTheRide}
                          >
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="link"
                                size="sm"
                                className="border border-gray-500"
                              >
                                Who is in the ride
                                <ChevronDown />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white shadow-lg rounded-lg">
                              <DropdownMenuItem className="flex flex-col">
                                <p>menna</p>
                                <p>adam</p>
                                <p>sara</p>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </PopoverContent>
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
                onClick={() => {}}
              >
                <Timer />
                Now
              </Button>
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
