import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import MarutiSuzuki from "../assets/maruti_suzuki.png";
import Call from "../assets/call.png";
const FirstHeader = () => {
  return (
    <header>
      <div className="sticky sm:relative flex justify-between w-full items-center py-2 px-5 ">
        {/* Header Left Section */}
        <div className="flex gap-5 items-center justify-start">
          <div>
            <Image
              src="https://www.kalyanimotors.com/static/media/kalyani_dark.5bca4adb5ec73478b2ce.png"
              alt="Kalyani Motors Logo"
              width={120}
              height={45}
              className="w-[100px] h-[40px] sm:w-[120px] sm:h-[45px]"
            />
          </div>
          <div className="hidden sm:flex flex-row gap-1 items-center">
            <span className="-tracking-tighter text-xs">Bengaluru</span>
            <span className="opacity-50">
              <IoIosArrowDown size={13} />
            </span>
          </div>
        </div>
        {/* Header Right Section */}
        <div className="flex flex-row items-center gap-8 ">
          <div className="flex items-center flex-row gap-1 border border-[#1e5d8f] p-1 rounded-md">
            <span>
              <Image src={Call} alt="call logo" className="sm:size-4 size-2 " />
            </span>
            <span className="text-xs sm:text-sm text-[#1e5d8f]">
              9590990011
            </span>
          </div>
          <div className="hidden sm:flex">
            <Image src={MarutiSuzuki} alt="Maruti Suzuki Logo" width={150} />
          </div>
          <div className="flex sm:hidden">
            <Image
              src="https://www.kalyanimotors.com/static/media/maruthiLogo.954df9c425e13e5d5b0e.png"
              alt="Maruti Suzuki Logo"
              width={30}
              height={25}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FirstHeader;
