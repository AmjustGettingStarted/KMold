import React from "react";
import Card from "./sub/Card";
import { data } from "../data/newCars";
const NewCars = () => {
  return (
    <div className="flex flex-col pt-12 pb-4 px-6">
      <div className="w-full flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold">Maruti Suzuki - New Cars</h1>
        <button className="py-2 px-4 uppercase bg-[#546BFF] text-white text-base rounded-md shadow-lg">
          view all cars
        </button>
      </div>
      <div className="flex flex-row justify-start w-full gap-4 items-center border-b border-gray-200 ">
        <h1 className="text-gray-400 px-2 text-lg hover:text-[#00AFA0] cursor-pointer hover:border-b-2 hover:border-[#00AFA0]">
          Most popular
        </h1>
        <h1 className="text-gray-400 px-2 text-lg hover:text-[#00AFA0] cursor-pointer hover:border-b-2 hover:border-[#00AFA0]">
          New Launches
        </h1>
      </div>
      <div className="w-[85%] flex items-center justify-start py-2 ">
        <div className=" grid grid-cols-3 gap-4 w-full  items-center">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};

export default NewCars;
