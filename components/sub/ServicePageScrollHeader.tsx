import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

export interface Card {
  url: string;
  title: string;
  desc: string;
}

interface CardProps {
  data: Card[];
}

const ServicePageScrollHeader: React.FC<CardProps> = ({ data }) => {
  return (
    <ScrollArea className="w-full  mx-4 whitespace-nowrap rounded-md border mt-10  flex items-center">
      <div className="flex w-full space-x-2  bg-white my-2 mx-2">
        {/* Scroll Content */}
        {data.map((item, i) => (
          <Link key={i} href={`/service/${item.title.replaceAll(" ", "_")}`}>
            <div className="w-[130px] bg-[#f0f0f0] py-2 flex flex-col items-center justify-center rounded-md">
              <div className="items-center flex justify-center">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                  className=" object-cover w-[40px] h-[40px] "
                />
              </div>
              <h1 className="relative w-full text-[12px] text-[#0e0e0e] font-semibold text-center">
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ServicePageScrollHeader;
