"use client";
import React from "react";
import { useParams } from "next/navigation";
const CarDetails = () => {
  const { title } = useParams() as { title: string };
  return (
    <div className="w-full h-[50vh] text-4xl ">
      <h1>CarDetails :{decodeURIComponent(title).replace("%", " ")}</h1>
    </div>
  );
};

export default CarDetails;
