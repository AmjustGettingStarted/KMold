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
        <div className="mt-10 relative w-full px-3 sm:px-6">
          <h1 className="text-base sm:text-3xl font-bold">{decodedTitle}</h1>
          {/* Individual Cards section */}
          <div className="flex flex-col gap-4 w-full py-4">
            {serviceList.map((item, i) => (
              <div
                key={i}
                className="w-[98%] h-full mx-auto bg-white  border border-gray-200 px-4 py-2  "
              >
                <div className=" flex-col flex  sm:flex-row  w-full">
                  {/* Image section */}
                  <div className="w-full sm:w-[20%] flex items-center justify-center">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={501}
                      height={501}
                      className="w-[200px] h-[200px] object-"
                    />
                  </div>
                  {/* Description Section */}
                  <div className="w-full sm:w-[80%] h-full">
                    <div className="flex flex-col w-full p-4 items-start justify-start">
                      <div className="flex items-center justify-between w-full">
                        <h1 key={i} className="w-full  ">
                          {item.title}
                        </h1>
                        <h2>{item.time}</h2>
                      </div>
                      <div className="w-full ">
                        <ul
                          className="flex items-center gap-4 list-disc marker:text-gray-300 pl-4 marker:pr-0
                        marker:text-xm"
                        >
                          <li>
                            <p>{item.desc1}</p>
                          </li>
                          <li>
                            <p>{item.desc2}</p>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full">
                        <ul className="w-full grid sm:grid-cols-2 sm:justify-between">
                          {item.service.map((serv, j) => (
                            <li className="flex gap-2 items-center" key={j}>
                              <div className=" flex items-center justify-center w-3 h-3 rounded-full bg-[#D2EFE0] text-[#26B26B]">
                                <IoIosCheckmark />
                              </div>
                              <span className=" text-[#707171]">{serv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="text-[#e73c33] border border-[#e73c33] bg-white rounded-sm">
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
