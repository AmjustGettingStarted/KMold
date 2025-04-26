import React from "react";
import Card from "./sub/Card";
import { CarData } from "../data/chooseCars";
import ScrollNewCar from "./sub/ScrollNewCar";

const ChooseYourCar = () => {
  return (
    <div className="flex flex-col py-4 sm:py-12 pb-4 px-2 sm:px-6" id="choose-cars">
      <div className="w-full flex items-center justify-between pb-6">
        <h1 className="text-lg sm:text-3xl font-bold">Choose Your Car</h1>
        <button className="py-2 px-4 uppercase bg-[#546BFF] text-white text-sm sm:text-base rounded-md shadow-lg">
          view all cars
        </button>
      </div>
      <div className="flex flex-row justify-start w-full gap-4 items-center border-b border-gray-200 ">
        <h1 className="text-gray-400 px-2 text-lg border-b-2 border-transparent  hover:text-[#00AFA0]  hover:border-b-2 hover:border-[#00AFA0] cursor-pointer">
          Body
        </h1>
        <h1 className="text-gray-400 px-2 text-lg hover:text-[#00AFA0] cursor-pointer hover:border-b-2 hover:border-[#00AFA0]">
          Transmission
        </h1>
        <h1 className="text-gray-400 px-2 text-lg hover:text-[#00AFA0] cursor-pointer hover:border-b-2 hover:border-[#00AFA0]">
          Fuel
        </h1>
      </div>
      <div className="w-[85%] hidden sm:flex items-center justify-start py-2 ">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full  items-center">
          <Card data={CarData} />
        </div>
      </div>
      {/* Scrollable Horizontal Cars */}
      <div className="flex sm:hidden items-center ">
        <ScrollNewCar data={CarData} />
      </div>
    </div>
  );
};

export default ChooseYourCar;
