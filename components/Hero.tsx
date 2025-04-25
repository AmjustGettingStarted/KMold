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
              <CardContent>
                <Image
                  src={item.url}
                  alt="banner image"
                  width={2192}
                  height={770}
                  className="md:object-contain object-cover w-full h-[250px] md:h-auto "
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
