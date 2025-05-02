import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ServiceCard from "./ServiceCard";
export interface Card {
  url: string;
  title: string;
  desc: string;
}

interface CardProps {
  data: Card[];
}

const ScrollServiceCard: React.FC<CardProps> = ({ data }) => {
  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <ServiceCard data={data} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default ScrollServiceCard;
