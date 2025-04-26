import React from "react";
import Card from "./sub/Card";
import { data } from "../data/newCars";
import ScrollNewCar from "./sub/ScrollNewCar";
const NewCars = () => {
  return (
    <>
      <div
        className="flex flex-col pt-4 sm:pt-12 pb-4 px-2 sm:px-6"
        id="all-cars"
      >
        <div className="w-full flex items-center justify-between pb-6">
          <h1 className="text-lg whitespace-nowrap sm:text-3xl font-bold">
            Maruti Suzuki - New Cars
          </h1>
          <button className="py-2 px-4 uppercase bg-[#546BFF] text-white text-sm sm:text-base rounded-md shadow-lg">
            view all cars
          </button>
        </div>
        <div className="flex flex-row justify-start w-full gap-4 items-center border-b border-gray-200 ">
          <h1 className="text-gray-400 px-2 text-lg  hover:text-[#00AFA0] cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#00AFA0]">
            Most popular
          </h1>
          <h1 className="text-gray-400 px-2 text-lg hover:text-[#00AFA0] cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#00AFA0]">
            New Launches
          </h1>
        </div>
        {/* Grid Cars */}
        <div className="w-[85%] hidden sm:flex items-center justify-start py-2 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full  items-center">
            <Card data={data} />
          </div>
        </div>
        {/* Scrollable Horizontal Cars */}
        <div className="flex sm:hidden items-center ">
          <ScrollNewCar data={data} />
        </div>
      </div>
    </>
  );
};

export default NewCars;
