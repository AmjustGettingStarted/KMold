"use client";
import { useParams } from "next/navigation";
import React from "react";

const Service = () => {
  const { title } = useParams() as { title: string };
  return (
    <div className="mt-[50px]">
      <h1>Service : {decodeURIComponent(title).replaceAll("_", " ")}</h1>
    </div>
  );
};

export default Service;
