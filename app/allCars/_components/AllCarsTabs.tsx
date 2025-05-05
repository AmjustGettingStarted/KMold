"use client";
import React, { useState } from "react";
import { allCars } from "@/data/allCars";
import { data } from "@/data/newCars";
import { CarData } from "@/data/chooseCars";
import { variants } from "@/data/carVariants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const AllCarsTabs = () => {
  const [cdata, setCdata] = useState(allCars);

  return (
    <>
      {" "}
      <Tabs defaultValue="all-cars" className="w-full">
        <TabsList className="bg-white  ">
          <TabsTrigger
            className="text-[10.5px]  data-[state=active]:text-[#5bbe95] data-[state=active]:underline sm:text-[16px] underline-offset-[16px] data-[state=active]:font-bold data-[state=active]:!shadow-none data-[state=active]:border-b-4 text-[#aaa] "
            onClick={() => setCdata(allCars)}
            value="all-cars"
          >
            All Cars
          </TabsTrigger>
          <TabsTrigger
            className="text-[10.5px]  data-[state=active]:text-[#5bbe95]  data-[state=active]:underline sm:text-[16px] underline-offset-[16px] data-[state=active]:font-bold data-[state=active]:!shadow-none data-[state=active]:border-b-4 text-[#aaa] "
            onClick={() => setCdata(data)}
            value="new-cars"
          >
            New Cars
          </TabsTrigger>
          <TabsTrigger
            className="text-[10.5px]  data-[state=active]:text-[#5bbe95] data-[state=active]:underline sm:text-[16px] underline-offset-[16px] data-[state=active]:font-bold data-[state=active]:!shadow-none data-[state=active]:border-b-4 text-[#aaa] "
            onClick={() => setCdata(CarData)}
            value="choose-cars"
          >
            Choose Cars
          </TabsTrigger>
          <TabsTrigger
            className="text-[10.5px]  data-[state=active]:text-[#5bbe95] data-[state=active]:underline  sm:text-[16px] underline-offset-[16px] data-[state=active]:font-bold  data-[state=active]:!shadow-none data-[state=active]:border-b-4 text-[#aaa] "
            onClick={() => setCdata(variants)}
            value="car-variants"
          >
            Car Variants
          </TabsTrigger>
        </TabsList>
        {/* Individual Tabs Page/Content */}
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 w-full sm:w-[85%] py-2 mx-auto sm:mx-0">
              {cdata.map((item, i) => (
                <Link
                  key={i}
                  href={`/details/${item.title.replaceAll(" ", "_")}`}
                >
                  <div className="max-w-sm border border-gray-300 rounded-sm cursor-pointer">
                    <div>
                      <Image
                        width={900}
                        height={600}
                        src={item.url}
                        alt={item.title}
                        className="w-full object-cover rounded-t-sm"
                      />
                    </div>

                    <h1 className="p-2 text-[10.5px] sm:text-base bg-[#f9f9f9] text-[#8d7b76]">
                      {item.title.length < 30
                        ? item.title
                        : item.title.slice(0, 30) + "..."}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AllCarsTabs;
