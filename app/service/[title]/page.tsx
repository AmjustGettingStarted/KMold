"use client";
import { useParams } from "next/navigation";
import React from "react";
import { data } from "@/data/service";
import ServicePageScrollHeader from "@/components/sub/ServicePageScrollHeader";
import { services } from "@/data/servicePageInfo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoIosCheckmark } from "react-icons/io";
import { Hero } from "@/components/Hero";
import CommonFaq from "@/components/CommonFaq";
import NewCars from "@/components/NewCars";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogDemo } from "@/components/sub/Dialog";

const Service = () => {
  const { title } = useParams() as { title: string };
  const decodedTitle = decodeURIComponent(title).replaceAll("_", " ");
  const serviceList = services[title as keyof typeof services];
  return (
    <>
      <div className="mt-[50px] relative ">
        {/* Hero / Banner Page below the header */}
        <Hero />
        {/* Sticky header + Scroll Area */}
        <div className="sticky top-[55px] sm:top-[60px] z-10 bg-white shadow-md w-[98%] mx-auto ">
          <ServicePageScrollHeader data={data} />
        </div>
        <div className="relative pt-4 w-full px-3 sm:px-6">
          <h1 className="text-base sm:text-3xl font-bold">{decodedTitle}</h1>
          {/* Individual Cards section */}
          <div className="flex flex-col gap-4 w-full py-4">
            {serviceList.map((item, i) => (
              <div
                key={i}
                className="w-[98%] h-full mx-auto bg-white  border border-gray-200 px-4 py-2  "
              >
                <div className=" flex-col flex  sm:flex-row  w-full sm:gap-4">
                  {/* Image section */}
                  <div className="w-full sm:w-[30%] md:w-[20%] min-w-[200px] flex  justify-center sm:justify-start ">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={501}
                      height={501}
                      className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-sm object-cover shrink-0"
                    />
                  </div>
                  {/* Description Section */}
                  <div className="w-full sm:w-[70%]  md:w-[80%] h-full py-2 ">
                    <div className="flex flex-col w-full  items-start justify-start">
                      <div className="flex items-center justify-between w-full ">
                        <h1
                          key={i}
                          className="w-full text-sm sm:text-lg font-bold "
                        >
                          {item.title}
                        </h1>
                        <h2 className="whitespace-nowrap text-[12px] tracking-tight bg-[#e5e7e9] text-[#707171] w-auto sm:w-[40%] px-4 text-center py-1">
                          {item.time}
                        </h2>
                      </div>
                      <div className="w-full py-2">
                        <ul
                          className="flex list-disc marker:text-[#707171]/50 marker:pr-0
                        marker:text-xs justify-start gap-2 sm:gap-6 pl-4"
                        >
                          <li className="pl-0 ">
                            <p className="text-[#707171] text-xs sm:text-sm w-full">
                              {item.desc1}
                            </p>
                          </li>
                          <li className="pl-0  ">
                            <p className="text-[#707171] text-xs sm:text-sm w-full ">
                              {item.desc2}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full py-2">
                        <ul className="w-full grid lg:grid-cols-2 sm:justify-between space-y-3">
                          {item.service.map((serv, j) => (
                            <li className="flex gap-2 items-center " key={j}>
                              <div className=" flex items-center justify-center w-4 h-4 rounded-full bg-[#D2EFE0] text-[#26B26B]">
                                <IoIosCheckmark size={20} />
                              </div>
                              <span className=" text-[#707171] tracking-tight text-sm ">
                                {serv}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="text-[#e73c33] font-bold  border border-[#e73c33] bg-white rounded-xs my-2 cursor-not-allowed hover:bg-white hover:text-[#e73c33] hover:border-[#e73c33]">
                        Book Your Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Common FAQ  component*/}
        <CommonFaq />
        {/* New Cars Component */}
        <NewCars />
      </div>
    </>
  );
};

export default Service;
