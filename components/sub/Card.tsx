"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DialogDemo } from "./Dialog";

export interface Cars {
  id: number;
  url: string;
  title: string;
  price: string;
}

interface CardProps {
  data: Cars[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const handleClickModelClick = (title: string) => {
    setModelOpen(true);
    setDialogTitle(title); //
  };

  // sending title of the button to the dialogue box
  const [dialogTitle, setDialogTitle] = React.useState("");
  return (
    <>
      {data.map((car) => (
        <div
          key={car.id}
          className=" max-w-2xs sm:max-w-sm    rounded-md  border border-gray-200 h-full "
        >
          <Link href={`/details/${car.title.replaceAll(" ", "_")}`}>
            <div className="flex  items-center justify-center ">
              <Image
                src={car.url}
                alt={car.title}
                width={900}
                height={600}
                className="w-full object-contain  rounded-t-md "
              />
            </div>
          </Link>
          <div className="flex flex-col justify-between p-4 bg-[#F9F9F9] space-y-1 sm:space-y-2">
            <div className="space-y-1 sm:space-y-2">
              <h2
                className="text-sm sm:text-base text-gray-500  tracking-wide font-light"
                title={car.title}
              >
                {car.title.slice(0, 20)}
              </h2>
              <h3 className="font-semibold text-sm sm:text-base">
                {car.price}
              </h3>
              <p className="text-xs text-gray-500">Ex-Showroom Price</p>
            </div>
            <div className="flex flex-col items-center space-y-1 text-white pb-2 ">
              <button
                type="button"
                className="py-2 cursor-pointer  tracking-tight flex shadow-xl hover:shadow-none bg-[#0D94EA] items-center justify-center w-full text-sm sm:text-base  sm:rounded-md rounded-sm "
                onClick={() => handleClickModelClick("Get On-road Price")}
              >
                Show on-Road Price
              </button>
              <button
                type="button"
                className="py-2 cursor-pointer  tracking-tight flex shadow-xl hover:shadow-none bg-[#F3205B] items-center justify-center w-full text-sm sm:text-base rounded-sm sm:rounded-md "
                onClick={() => handleClickModelClick("Get Best Offers")}
              >
                Get Best Offers
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Dialogue Box */}
      <DialogDemo
        emiOpen={modelOpen}
        setModelOpen={setModelOpen}
        dialogTitle={dialogTitle}
      />
    </>
  );
};

export default Card;
