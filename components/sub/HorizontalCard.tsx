"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetailsSelect } from "./CarDetailsSelect";
import { carImage } from "@/data/carDetailsImages";

export interface Cars {
  id: number;
  url: string;
  title: string;
  price: string;
}

interface CardProps {
  carDetails: Cars;
}
const HorizontalCard: React.FC<CardProps> = ({ carDetails }) => {
  const [iniImage, setIniImage] = useState(carDetails.url);
  const handleClick = (id: number) => {
    setIniImage(id === 0 ? carDetails.url : carImage[id].image);
  };

  return (
    <div className="w-full border border-gray-300">
      <div className="grid grid-cols-2">
        {/* left side */}
        <div className="w-full flex flex-col space-y-2">
          {/* Top Image */}
          <div className="flex items-center justify-center object-contain bg-[#f5deb3]">
            <Image
              src={iniImage}
              alt={carDetails.title}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          {/* Bottom Display Images */}
          <div className="w-full grid grid-cols-9 gap-2">
            {carImage.map((item, index) => (
              <div
                key={index}
                className="w-[45px] h-[30px] onclick cursor-pointer"
              >
                <Image
                  src={index === 0 ? carDetails.url : item.image}
                  alt="carimages"
                  width={45}
                  height={30}
                  onClick={() => handleClick(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col">
          <div className="flex w-full ">
            <div className="w-full border border-gray-300 py-4 px-4 ">
              <p className="tracking-tight text-sm text-[#474747]">Version</p>
              <div className="w-full  ">
                <CarDetailsSelect title={carDetails.title} />
              </div>
            </div>
            <div className="w-full border border-gray-300 py-4 px-4">
              <p className="tracking-tight text-sm text-[#474747]">Color</p>
              <h1 className="text-sm font-semibold py-2">Gallant Red</h1>
            </div>
          </div>
          <div className="py-4 px-2 space-y-4">
            <h1 className="font-semibold text-xl">{carDetails.price}</h1>
            <p className="text-sm">Ex-showroom Price</p>
            <p className="text-[#477Ed6] text-sm">Download Brochure</p>
            <div className="flex justify-between items-center px-4 py-2 bg-[#fbfbfb]">
              <div className="flex flex-col leading-tight ">
                <p>Calculate Your EMI</p>
                <p className="text-xs text-[#477Ed6] font-semibold">
                  EMI calculator
                </p>
              </div>
              <button className="border text-sm px-6 py-2 text-[#00afa0] border-[#00afa0]">
                Get Emi Offer
              </button>
            </div>
            <h1 className="text-[#0288D1]">Get on-road Price</h1>
            <button className="text-xl text-white font-bold bg-[#e53012]  py-2 w-[60%]">
              Get Best Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
