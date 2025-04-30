"use client";
import React from "react";
import { useParams } from "next/navigation";
import { data as newCars } from "../../../data/newCars";
import { CarData as chooseCars } from "../../../data/chooseCars";
import { variants } from "@/data/carVariants";

import { IoStarSharp } from "react-icons/io5";
import HorizontalCard from "@/components/sub/HorizontalCard";
import { keySpec } from "@/data/keySpecifications";
import { CarDetailsScrollArea } from "@/components/sub/CarDetailsScrollArea";
const CarDetails = () => {
  const { title } = useParams() as { title: string };

  const car =
    newCars.find(
      (car) => car.title === decodeURIComponent(title).replaceAll("_", " ")
    ) ||
    variants.find(
      (car) => car.title === decodeURIComponent(title).replaceAll("_", " ")
    ) ||
    chooseCars.find(
      (car) => car.title === decodeURIComponent(title).replaceAll("_", " ")
    );
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 mt-[50px] sm:mt-0">
      {car ? (
        <>
          {/* top heading */}
          <div className="flex flex-col px-4">
            <h1 className="text-sm md:text-2xl font-semibold">{car.title}</h1>
            <div className="flex gap-2 py-4 text-[#00afa0]">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
          {/* horizontal Card car details */}
          <div className="w-full px-4 lg:px-0">
            <div className="">
              <div className="shadow-lg py-1 hidden md:flex  ">
                <ul className="flex gap-6  uppercase justify-start w-full text-[#474747] px-4 text-[15px]  ">
                  <li>overview</li>
                  <li>images</li>
                  <li>colors</li>
                  <li>specifications</li>
                  <li>about</li>
                  <li>description</li>
                </ul>
              </div>
              {/* horizontal card */}
              <div className="py-2">
                <HorizontalCard carDetails={car} />
              </div>
            </div>
          </div>
          {/* Key Specifications */}
          <div className="flex flex-col py-3 md:py-6 gap-4 w-full  px-4">
            <h1 className="text-sm md:text-2xl font-bold ">
              Key Specifications
            </h1>
            <div className="w-full grid grid-cols-2">
              {keySpec.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#fbfbfb] flex flex-col py-2 pl-2 border border-gray-200"
                >
                  <h1 className="text-[10px] md:text-[12px] text-[#aaaaaa]">
                    {item.key}
                  </h1>
                  <h2 className="text-[11.5px] md:text-base font-semibold">
                    {item.val}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* Car Variants */}
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <h1 className="text-sm md:text-xl font-bold text-[#181818]">
              Related Model Variants...
            </h1>
            <CarDetailsScrollArea />
          </div>
        </>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetails;
