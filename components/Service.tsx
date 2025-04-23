import React from "react";
import ServiceCard from "./sub/ServiceCard";
import { data } from "../data/service";

const Service = () => {
  return (
    <div className="py-12 px-4 flex flex-col space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Car Services And Maintenance</h1>
        <p className="py-2 font-medium text-[#4a4a4a]">
          Get all your car needs i.e. repairs, maintenance, body repairs,
          cashless insurance claims insurance renewals, accessories, car care
          etc., under a single roof of Kalyani Service Centres across silicon
          valley of India – Bengaluru City.Bengaluru.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 px-4 w-[85%]">
        <ServiceCard data={data} />
      </div>
    </div>
  );
};

export default Service;
