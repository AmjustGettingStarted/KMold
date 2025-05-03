"use client";
import Image from "next/image";
import React from "react";
import MarutiSuzuki from "../assets/maruti_suzuki.png";
import Call from "../assets/call.png";
import { FaCarRear } from "react-icons/fa6";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { SelectMenu } from "./sub/SelectMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const FirstHeader = () => {
  const pathName = usePathname();
  const isDetailsPage =
    pathName.includes("details") ||
    pathName.includes("service") ||
    pathName.includes("allCars");
  return (
    <header>
      <div
        className={`sm:static z-20  ${
          isDetailsPage ? "!fixed" : "!md:flex"
        } top-0 left-0 bg-white flex justify-between w-full items-center py-2 px-5 shadow-md`}
      >
        {/* Header Left Section */}
        <div className="flex gap-2 items-center justify-start">
          <div>
            <Link href="/">
              <Image
                src="https://www.kalyanimotors.com/static/media/kalyani_dark.5bca4adb5ec73478b2ce.png"
                alt="Kalyani Motors Logo"
                width={120}
                height={45}
                className="w-[100px] h-[40px] sm:w-[120px] sm:h-[45px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden sm:flex  items-center cursor-pointer border-none">
            <SelectMenu />
          </div>
        </div>
        {/* Header Right Section */}
        <div className="flex flex-row items-center gap-8 ">
          <div className="flex items-center flex-row gap-1 border border-[#1e5d8f] p-1 cursor-pointer rounded-md">
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
      {/* bottom bar */}
      <div className="fixed bottom-0 left-0 flex sm:hidden w-full h-[60px] bg-[#2d3393] z-20 ">
        <div className="flex justify-between w-full px-8 py-2 text-white">
          <span className="flex flex-col space-y-2 items-center">
            <Link href="/allCars">
              <FaCarRear size={25} />
              <h2 className="text-[0.65rem] ">Cars</h2>
            </Link>
          </span>
          <a href="https://api.whatsapp.com/send/?phone=%2B919845166144&text&type=phone_number&app_absent=0&wame_ctl=1">
            <span className="flex flex-col space-y-1 items-center">
              <PiWhatsappLogoThin size={25} />
              <h2 className="text-[0.65rem] ">Whatsapp</h2>
            </span>
          </a>
          <span className="flex flex-col space-y-1 items-center cursor-not-allowed">
            <IoCallOutline size={25} />
            <h2 className="text-[0.65rem] ">Call</h2>
          </span>
          <span className="flex flex-col space-y-1 items-center cursor-not-allowed">
            <IoLocationOutline size={25} />
            <h2 className="text-[0.65rem] ">Contact Us</h2>
          </span>
        </div>
      </div>
    </header>
  );
};

export default FirstHeader;
