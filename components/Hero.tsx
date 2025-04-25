"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { data } from "../data/banner";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full overflow-hidden pt-[50px]  sm:pt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <Card>
              <CardContent className="w-full h-full flex items-center justify-center">
                <Image
                  src={item.url}
                  alt="banner image"
                  width={1440}
                  height={500}
                  className="object-cover h-[300px] md:h-[500px] "
                />
                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden  sm:flex hover:scale-110 transition-all ease-in-out duration-300" />
      <CarouselNext className="hidden  sm:flex hover:scale-110 transition-all ease-in-out duration-300" />
    </Carousel>
  );
}
