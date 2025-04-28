"use client";
import React from "react";
import { useParams } from "next/navigation";
import { data } from "../../../data/newCars";
import { IoStarSharp } from "react-icons/io5";
import HorizontalCard from "@/components/sub/HorizontalCard";

const CarDetails = () => {
  const { title } = useParams() as { title: string };
  const car = data.find(
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
            <div>
              <div className="shadow-sm py-1 sticky">
                <ul className="flex gap-6  uppercase justify-start w-full text-[#474747] px-4 text-base ">
                  <li>overview</li>
                  <li>images</li>
                  <li>colors</li>
                  <li>specifications</li>
                  <li>about</li>
                  <li>description</li>
                </ul>
              </div>
              <div className="">
                <HorizontalCard carDetails={car} />
              </div>
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
