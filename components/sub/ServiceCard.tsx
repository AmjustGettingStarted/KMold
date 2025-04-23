"use client";
import React from "react";
import Image from "next/image";
export interface Card {
  url: string;
  title: string;
  desc: string;
}

interface CardProp {
  data: Card[];
}

const ServiceCard: React.FC<CardProp> = ({ data }) => (
  <>
    {data.map((item, index) => (
      <div
        key={index}
        className="max-w-xs w-full rounded-md shadow-md  border border-gray-300"
      >
        <div className="w-[200] h-[120px] flex items-center justify-center bg-[#F2F2F2] object-contain">
          <Image
            src={item.url}
            alt=""
            width={50}
            height={50}
            className="object-cover object-center rounded-md w-[110px] h-[110px]"
          />
        </div>
        <div className="px-2 pb-2 bg-white w-full">
          <h2 className="text-sm font-semibold text-[#22222]">{item.title}</h2>
          <p className="text-[0.65rem] text-[#4a4a4a] leading-tight -tracking-tighter">
            {item.desc}{" "}
          </p>
        </div>
      </div>
    ))}
  </>
);

export default ServiceCard;
