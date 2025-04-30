import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
          className="w-[210px] border-none rounded-sm shadow-none hover:shadow-xl shadow-black"
          key={i}
        >
          <Link href={`/details/${item.title.replaceAll(" ", "_")}`}>
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
              <h1
                className="font-bold text-[12px] md:text-base"
                title={item.title}
              >
                {item.title.length < 25
                  ? item.title
                  : item.title.slice(0, 25) + "..."}
              </h1>
              <h2 className="text-[11px] md:text-base">{item.price}</h2>
              <p className="text-[11.2px] md:text-xs text-[#828181]">
                Ex-showroom Price
              </p>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </>
  );
}
