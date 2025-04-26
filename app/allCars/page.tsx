<<<<<<< HEAD
// "use client";
// import { useParams } from "next/navigation";
import React from "react";

const AllCars = () => {
  // const { title } = useParams() as { title: string };
  return <div>AllCars </div>;
=======
"use client";
import { useParams } from "next/navigation";
import React from "react";

const AllCars = () => {
  const { title } = useParams() as { title: string };
  return <div>AllCars: {title}</div>;
>>>>>>> c6565afdea912e3f29472f9eaa885e0329b5ecda
};

export default AllCars;
