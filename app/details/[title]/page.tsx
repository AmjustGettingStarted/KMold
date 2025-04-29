"use client";
import React from "react";
import { useParams } from "next/navigation";
import { data as newCars } from "../../../data/newCars";
import { CarData as chooseCars } from "../../../data/chooseCars";

import { IoStarSharp } from "react-icons/io5";
import HorizontalCard from "@/components/sub/HorizontalCard";
import { keySpec } from "@/data/keySpecifications";
const CarDetails = () => {
  const { title } = useParams() as { title: string };
  const car =
    newCars.find(
      (car) => car.title === decodeURIComponent(title).replaceAll("_", " ")
    ) ||
    chooseCars.find(
      (car) => car.title === decodeURIComponent(title).replaceAll("_", " ")
    );
  return (
    <div className="w-[80%] mx-auto py-6">
      {car ? (
        <>
          {/* top heading */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">{car.title}</h1>
            <div className="flex gap-2 py-4 text-[#00afa0]">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
          {/* horizontal Card car details */}
          <div className="w-full">
            <div className="">
              <div className="shadow-lgē py-1  ">
                <ul className="flex gap-6  uppercase justify-start w-full text-[#474747] px-4 text-[15px] ">
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
          <div className="flex flex-col">
            <h1>Key Specifications</h1>
            <div className="w-full grid grid-cols-2">
              {keySpec.map((item, i) => (
                <div key={i}>
                  <h1>{item.key}</h1>
                  <h2>{item.val}</h2>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetails;
