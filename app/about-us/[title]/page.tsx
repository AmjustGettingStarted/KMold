import React from "react";
import TabsSection from "./_components/TabsSection";
import { galleryImages } from "@/data/about-us";
import Image from "next/image";
const page = async ({ params: { title } }: { params: { title: string } }) => {
  return (
    <div className="mt-[60px] w-full">
      {/* Banner */}
      <div className="w-full">
        <Image
          src={galleryImages[title]}
          alt={title}
          width={2874}
          height={783}
          className="w-full object-cover"
        />
      </div>
      {/* Tabs */}
      <div className="w-full h-auto">
        <TabsSection title={title === "/" ? "about_kalyani" : title} />
      </div>
    </div>
  );
};

export default page;
