import Image from "next/image";
import React from "react";
import { navData } from "../data/secondNavbar";
import { FaCarRear } from "react-icons/fa6";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const SecondHeader = () => {
  return (
    <>
      <div className="z-10 hidden sm:flex pr-4 xl:pr-8 flex-row justify-between w-full items-center bg-[#f6f6f6] sticky py-2  px-3 shadow-md top-0">
        {/* Left part */}
        <div className="flex justify-start items-center basis-[45%]">
          <Image
            src="https://www.kalyanimotors.com/static/media/kalyani_dark.5bca4adb5ec73478b2ce.png"
            alt="Kalyani Motors Logo"
            width={120}
            height={45}
          />
        </div>
        {/* right part  */}
        <div className="grow overflow-x-auto lg:overflow-visible scrollbar-hidden basis-[55%]">
          <ul className="flex justify-between items-center space-x-6 whitespace-nowrap">
            {navData.map((item: string, index: number) => (
              <li
                key={index}
                className="capitalize cursor-pointer font-medium text-[#4a4a4a]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* bottom bar */}
      <div className="fixed   bottom-0 left-0 flex sm:hidden w-full h-[60px] bg-[#2d3393] z-20 ">
        <div className="flex justify-between w-full px-8 py-2 text-white">
          <span className="flex flex-col space-y-2 items-center">
            <FaCarRear size={25} />
            <h2 className="text-[0.65rem] ">Cars</h2>
          </span>
          <span className="flex flex-col space-y-1 items-center">
            <PiWhatsappLogoThin size={25} />
            <h2 className="text-[0.65rem] ">Whatsapp</h2>
          </span>
          <span className="flex flex-col space-y-1 items-center">
            <IoCallOutline size={25} />
            <h2 className="text-[0.65rem] ">Call</h2>
          </span>
          <span className="flex flex-col space-y-1 items-center">
            <IoLocationOutline size={25} />
            <h2 className="text-[0.65rem] ">Contact Us</h2>
          </span>
        </div>
      </div>
    </>
  );
};

export default SecondHeader;
