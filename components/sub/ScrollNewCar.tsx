import * as React from "react";
// import data from "../../data/newCars";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Card from "./Card";
// import { data } from "../../data/newCars";
export interface Artwork {
  artist: string;
  art: string;
}

export interface Cars {
  id: number;
  url: string;
  title: string;
  price: string;
}

interface CardProps {
  data: Cars[];
}

const ScrollNewCar: React.FC<CardProps> = ({ data }) => {
  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <Card data={data} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default ScrollNewCar;
