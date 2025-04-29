import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type Prop = {
  title: string;
  price: string;
  url: string;
};

export function CarDetailsCard({ data }: { data: Prop[] }) {
  return (
    <>
      {data.map((item, i) => (
        <Card
          className="w-[210px] border-none shadow-none hover:shadow-xl shadow-black"
          key={i}
        >
          <CardContent>
            <Image
              src={item.url}
              alt={item.title}
              width={200}
              height={135}
              className="object-cover"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start p-1">
            <h1 className="font-bold" title={item.title}>
              {item.title.length < 20
                ? item.title
                : item.title.slice(0, 20) + "..."}
            </h1>
            <h2>{item.price}</h2>
            <p className="text-xs text-[#828181]">Ex-showroom Price</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
