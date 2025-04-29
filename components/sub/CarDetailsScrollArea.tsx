import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { variants } from "@/data/carVariants";
import { CarDetailsCard } from "./CarDetailsCard";
export interface Artwork {
  artist: string;
  art: string;
}

export function CarDetailsScrollArea() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-sm scrollbar-hidden ">
      <div className="flex w-max space-x-4 p-4 hover:shadow-xl scrollbar-hidden">
        
        <CarDetailsCard data={variants}/>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
