"use client";
import React, { useState } from "react";
import { allCars } from "@/data/allCars";
import { data } from "@/data/newCars";
import { CarData } from "@/data/chooseCars";
import { variants } from "@/data/carVariants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AllCars = () => {
  const [cdata, setCdata] = useState(allCars);
  return (
    <>
      <div className="w-full p-6 ">
        <h1 className="text-3xl font-bold">Maruti Suzuki - All Cars</h1>
        <Tabs defaultValue="all-cars" className="w-full">
          <TabsList>
            <TabsTrigger
              onClick={() => setCdata(allCars)}
              value={cdata === allCars ? "all-cars" : ""}
            >
              All Cars
            </TabsTrigger>
            <TabsTrigger onClick={() => setCdata(data)} value="new-cars">
              New Cars
            </TabsTrigger>
            <TabsTrigger onClick={() => setCdata(CarData)} value="choose-cars">
              Choose Cars
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setCdata(variants)}
              value="car-variants"
            >
              Car Variants
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value={
              cdata === allCars
                ? "all-cars"
                : cdata === data
                ? "new-cars"
                : cdata === CarData
                ? "choose-cars"
                : "car-variants"
            }
          >
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-3 gap-4 w-[85%] py-2">
                {cdata.map((item, i) => (
                  <div
                    className="max-w-sm border border-gray-300 rounded-sm"
                    key={i}
                  >
                    <div>
                      <Image
                        width={900}
                        height={600}
                        src={item.url}
                        alt={item.title}
                        className="w-full object-cover rounded-t-sm"
                      />
                    </div>

                    <h1 className="p-2 bg-[#f9f9f9] text-[#8d7b76]">
                      {item.title.length < 30
                        ? item.title
                        : item.title.slice(0, 30) + "..."}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default AllCars;
