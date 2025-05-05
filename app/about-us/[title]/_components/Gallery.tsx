import React from "react";
import { galleryImages } from "@/data/about-us";
import Image from "next/image";
const Gallery = () => {
  return (
    <div className="w-full py-4 sm:py-8 h-auto ">
      <div className="flex flex-col ">
        <div>
          <h1 className="uppercase text-xl font-bold w-full pb-4">gallery</h1>
          <div className="border-b border-[#4d4d4dbe]/50"></div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          {[...new Set(Object.values(galleryImages))].map((items, i) => (
            <div className="w-full" key={i}>
              <Image
                src={items}
                alt="images"
                width={2874}
                height={783}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
