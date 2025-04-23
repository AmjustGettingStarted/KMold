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
    <div className="max-w-[80%] w-[1000px] h-[420px] m-auto relative  pb-4 ">
      <div className="w-full p-2 items-center ">
        <Image
          src="https://kalyanimotorsadmin.kalyanicrm.com/storage/policy_banner/PHXx6yp8Vn_1649772000.jpg"
          alt="bg-image"
          // width={1000}
          // height={400}
          fill
          className="w-full h-full object-cover "
        />
      </div>
      <div className="grid grid-cols-2 w-full h-full mx-auto">
        <div></div>
        <div className="bg-white  relative w-[300px] my-auto mx-32">
          <InpForm data={EnquiryData} />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
