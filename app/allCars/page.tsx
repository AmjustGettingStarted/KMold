"use client";
import { useParams } from "next/navigation";
import React from "react";

const AllCars = () => {
  const { title } = useParams() as { title: string };
  return <div>AllCars: {title}</div>;
};

export default AllCars;
