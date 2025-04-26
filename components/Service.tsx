import React from "react";
import ServiceCard from "./sub/ServiceCard";
import { data } from "../data/service";
import ScrollServiceCard from "./sub/ScrollServiceCard";

const Service = () => {
  return (
    <div id="service" className="py-4 md:py-12 px-4 flex flex-col space-y-4">
      <div>
        <h1 className="text-xl  md:text-3xl font-bold">
          Car Services And Maintenance
        </h1>
        <p className="text-sm md:text-base py-2 font-medium text-[#4a4a4a]">
          Get all your car needs i.e. repairs, maintenance, body repairs,
          cashless insurance claims insurance renewals, accessories, car care
          etc., under a single roof of Kalyani Service Centres across silicon
          valley of India – Bengaluru City.Bengaluru.
        </p>
      </div>
      <div className=" hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-4  max-w-[85%] cursor-pointer">
        <ServiceCard data={data} />
      </div>
      <div className=" md:hidden flex items-center gap-4">
        <ScrollServiceCard data={data} />
      </div>
    </div>
  );
};

export default Service;
