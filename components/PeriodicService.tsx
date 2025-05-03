import React from "react";
import ServiceCard from "./sub/ServiceCard";
import ScrollServiceCard from "./sub/ScrollServiceCard";

export const data = [
  {
    url: "https://kalyanimotorsadmin.kalyanicrm.com/storage/service/nrT0bDYsj9_1649936732.png",
    title: "Battery",
    desc: "",
  },
  {
    url: "https://kalyanimotorsadmin.kalyanicrm.com/storage/service/cxkYDiH7jT_1650254542.png",
    title: "Body Repair",
    desc: "",
  },
  {
    url: "https://kalyanimotorsadmin.kalyanicrm.com/storage/service/sNDmocsT2q_1649936696.png",
    title: "Repair And Maintenance",
    desc: "",
  },
];

const PeriodicService = () => {
  return (
    <div
      id="period-service"
      className="flex md:flex-row flex-col items-center w-full py-4 md:py-8 px-4 "
    >
      <div className="md:w-1/3 w-full">
        <div className="flex flex-col row-span-2 pb-4 ">
          <div className="pt-4 pb-6 md:pb-12 flex items-center justify-center">
            <h1 className="text-3xl font-bold">Periodic Service</h1>
          </div>
          <div>
            <p className="text-[#4A4A4A] leading-tight text-sm md:text-base text-center md:text-start ">
              Get Your Car Serviced On Regular Service Schedules to avoid impact
              on warranty and for hassle free drive.
            </p>
          </div>
        </div>
      </div>
      {/* Cards section */}
      <div className="w-4/5 md:w-2/3 px-2 ">
        <div className="hidden md:grid grid-cols-3 gap-8 md:gap-4 text-center">
          <ServiceCard data={data} />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ScrollServiceCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default PeriodicService;
