import Image from "next/image";
import React from "react";
import InpForm from "./sub/InpForm";

const Enquiry = () => {
  const EnquiryData = {
    title: "Enquiry",
    dropDownName: "Book a Test Drive",
    buttonName: "Submit",
  };
  return (
    <div className="w-full md:max-w-[90%] lg:max-w-[80%] md:w-[1000px] h-[420px] m-auto relative  py-4 ">
      {/* <div className="w-full p-2 items-center "> */}
      <Image
        src="https://kalyanimotorsadmin.kalyanicrm.com/storage/policy_banner/PHXx6yp8Vn_1649772000.jpg"
        alt="bg-image"
        fill
        // width={1000}
        // height={400}
        className="w-full h-full object-cover p-4 md:p-0"
      />
      {/* </div> */}
      <div className="flex items-center justify-center w-full h-full mx-auto lg:pr-[8%]">
        <div className="basis-1/2 hidden md:flex"></div>
        <div className="bg-white  relative min-w-[250px] w-[300px] m-auto">
          <InpForm data={EnquiryData} name="enq" />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
