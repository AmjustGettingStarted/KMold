import Image from "next/image";
import React from "react";
import { navData } from "../data/secondNavbar";
import Link from "next/link";
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
            className="cursor-pointer"
          />
        </div>
        {/* right part  */}
        <div className="grow overflow-x-auto lg:overflow-visible scrollbar-hidden basis-[55%]">
          <ul className="flex justify-between items-center space-x-6 whitespace-nowrap">
            {navData.map((item, index) => (
              <li
                key={index}
                className="capitalize cursor-pointer font-medium text-[#4a4a4a]"
              >
                <Link href={item.id}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default SecondHeader;
