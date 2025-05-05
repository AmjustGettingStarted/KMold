import React from "react";
import AllCarsTabs from "./_components/AllCarsTabs";

const AllCars = () => {
  return (
    <>
      <div className="w-full sm:p-6 p-3 mt-[50px] ">
        <h1 className="text-lg sm:text-3xl font-bold">
          Maruti Suzuki - All Cars
        </h1>
        <div className="relative pt-2 sm:pt-4 ">
          <AllCarsTabs />
        </div>
      </div>
    </>
  );
};

export default AllCars;
