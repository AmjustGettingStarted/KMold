"use client";
import { useParams } from "next/navigation";
import React from "react";
import { data } from "@/data/service";
import ServicePageScrollHeader from "@/components/sub/ServicePageScrollHeader";
import { services } from "@/data/servicePageInfo";
const Service = () => {
  const { title } = useParams() as { title: string };
  const decodedTitle = decodeURIComponent(title).replaceAll("_", " ");
  const serviceList = services[title as keyof typeof services];
  return (
    <div className="mt-[50px] relative ">
      {/* Sticky header + Scroll Area */}
      <div className="sticky top-[70px] ">
        <ServicePageScrollHeader data={data} />
      </div>
      <div className="mt-10 relative w-full px-6">
        <h1 className="text-3xl font-bold">{decodedTitle}</h1>
        {/* Individual Cards section */}
        <div className="flex flex-col gap-4 w-full ">
          {serviceList.map((item, i) => (
            <h1 key={i} className="bg-amber-400">
              {item.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
