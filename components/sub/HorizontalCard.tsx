"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetailsSelect } from "./CarDetailsSelect";
import { carImage } from "@/data/carDetailsImages";
import { DialogDemo } from "./Dialog";
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
  const [modelOpen, setModelOpen] = useState(false);
  const handleClickModelClick = (title: string) => {
    setModelOpen(true);
    setDialogTitle(title); //
  };

  // sending title of the button to the dialogue box
  const [dialogTitle, setDialogTitle] = React.useState("");

  return (
    <div className="w-full border border-gray-300 rounded-md">
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* left side */}
        <div className="w-full flex flex-col space-y-2">
          {/* Top Image */}
          <div className="flex items-center justify-center object-cover md:object-contain bg-[#fff] ">
            <Image
              src={iniImage}
              alt={carDetails.title}
              width={500}
              height={500}
              className="object-cover rounded-tl-md"
            />
          </div>
          {/* Bottom Display Images */}
          <div className="w-full grid grid-cols-11 sm:grid-cols-12 md:grid-cols-8  lg:grid-cols-9 gap-2 p-1 md:p-2">
            {carImage.map((item, index) => (
              <div
                key={index}
                className="w-[30px] sm:w-[45px] h-[20px] sm:h-[30px] onclick cursor-pointer"
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
          {/* Right top */}
          <div className="flex w-full ">
            <div className="w-1/2 border border-gray-300 py-4 px-4 ">
              <p className="tracking-tight text-sm text-[#474747]">Version</p>
              <div className="w-full  ">
                <CarDetailsSelect title={carDetails.title} />
              </div>
            </div>
            <div className="w-1/2 border border-gray-300 py-4 px-4">
              <p className="tracking-tight text-sm text-[#474747]">Color</p>
              <h1 className="text-sm font-semibold py-2">Gallant Red</h1>
            </div>
          </div>
          <div className="py-2 sm:py-4 px-4 sm:px-2 space-y-1 md:space-y-2">
            <h1 className="font-bold text-sm md:text-xl">{carDetails.price}</h1>
            <p className="text-[12px] md:text-sm text-[#6f6f6f]">
              Ex-showroom Price
            </p>
            <p className="text-[#477Ed6] text-[12px] md:text-sm">
              Download Brochure
            </p>
            <div className="flex justify-between items-center px-4 py-2 bg-[#fbfbfb]">
              <div className="flex flex-col leading-tight ">
                <p className="text-[10px] md:text-base">Calculate Your EMI</p>
                <p className="text-xs text-[#477Ed6] font-semibold ">
                  EMI calculator
                </p>
              </div>
              <button
                className="border text-[11px] md:text-sm px-6 py-2 text-[#00afa0] border-[#00afa0] cursor-pointer"
                onClick={() => handleClickModelClick("Get EMI Offer")}
              >
                Get Emi Offer
              </button>
            </div>
            <h1
              className="text-[#0288D1] cursor-pointer text-[12px] md:text-base"
              onClick={() => handleClickModelClick("Get on-road Price")}
            >
              Get on-road Price
            </h1>
            <button
              className="text-base md:text-xl text-white font-bold bg-[#e53012]  py-2 w-full md:w-[60%] cursor-pointer"
              onClick={() => handleClickModelClick("Get Best Offers")}
            >
              Get Best Offers
            </button>
          </div>
        </div>
      </div>
      {/* Dialogue Box */}
      <DialogDemo
        emiOpen={modelOpen}
        setModelOpen={setModelOpen}
        dialogTitle={dialogTitle}
      />
    </div>
  );
};

export default HorizontalCard;
