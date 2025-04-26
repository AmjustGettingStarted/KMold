"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        className=" md:max-w-xs md:w-full w-[150px] rounded-md shadow-md  border border-gray-300 flex-none"
      >
        <Link href={`/service/${item.title.replaceAll(" ", "_")}`}>
          <div className="w-[150px] md:w-full   h-[120px] flex items-center justify-center bg-[#F2F2F2] object-contain">
            <Image
              src={item.url}
              alt=""
              width={50}
              height={50}
              className="object-cover object-center rounded-md w-[110px] h-[110px]"
            />
          </div>
          <div className="md:max-w-xs md:w-full w-[150px] px-2 pb-2 bg-white  ">
            <h2 className="text-sm font-semibold text-[#222222]">
              {item.title}
            </h2>
            <p className="md:text-xs text-[0.65rem] text-[#4a4a4a] leading-tight tracking-tighter  whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        </Link>
      </div>
    ))}
  </>
);

export default ServiceCard;
