import Image from "next/image";
import React from "react";
import InpForm from "./sub/InpForm";
const OnRoadPrice = () => {
  const OnRoadData = {
    title: "On-Road Price",
    dropDownName: "Choose your car",
    buttonName: "Check On-Road Price",
  };
  return (
    <div className="w-full md:max-w-[90%] lg:max-w-[80%] md:w-[1000px] h-[420px] m-auto relative    py-4">
      {/* <div className="w-full p-2 items-center "> */}
      <Image
        src="https://kalyanimotorsadmin.kalyanicrm.com/storage/Enq_banner/BXfZLhkcDn_1719221796.jpg"
        alt="bg-image"
        // width={1000}
        // height={400}
        fill
        className="w-full h-full object-cover p-4 md:p-0 "
      />
      {/* </div> */}
      <div className="flex items-center justify-center w-full h-full m-auto lg:pl-[8%]">
        <div
          className="bg-white  justify-end items-end  relative min-w-[250px] w-[300px] m-auto 
        "
        >
          <InpForm data={OnRoadData} />
        </div>
        <div className="basis-1/2  hidden md:flex "></div>
      </div>
    </div>
  );
};

export default OnRoadPrice;
