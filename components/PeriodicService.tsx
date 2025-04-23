import React from "react";
import ServiceCard from "./sub/ServiceCard";

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
    title: "Repair & Maintenance",
    desc: "",
  },
];

const PeriodicService = () => {
  return (
    <div className="flex items-center w-full py-12 px-4">
      <div className="w-1/3">
        <div className="flex flex-col row-span-2 ">
          <div className="pt-4 pb-12 flex items-center justify-center">
            <h1 className="text-3xl font-bold">Periodic Service</h1>
          </div>
          <div>
            <p className="text-[#4A4A4A] leading-tight  ">
              Get Your Car Serviced On Regular Service Schedules to avoid impact
              on warranty and for hassle free drive.
            </p>
          </div>
        </div>
      </div>
      {/* Cards section */}
      <div className="w-2/3 px-2 ">
        <div className="w-full flex flex-row items-center gap-4 space-x-4 text-center ">
          <ServiceCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default PeriodicService;
