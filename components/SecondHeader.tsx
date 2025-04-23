import Image from "next/image";
import React from "react";
import { navData } from "../data/secondNavbar";
const SecondHeader = () => {
  return (
    <div className="z-10 flex flex-row justify-between w-full items-center bg-[#f6f6f6] sticky py-2  px-3 shadow-lg top-0">
      {/* Left part */}
      <div className="w-[45%] flex justify-start items-center">
        <Image
          src="https://www.kalyanimotors.com/static/media/kalyani_dark.5bca4adb5ec73478b2ce.png"
          alt="Kalyani Motors Logo"
          width={120}
          height={45}
        />
      </div>
      {/* right part  */}
      <div className="w-[55%] ">
        <ul className="flex justify-between items-center">
          {navData.map((item: string, index: number) => (
            <li key={index} className="capitalize">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondHeader;
