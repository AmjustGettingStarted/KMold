import React from "react";
import TabsSection from "./_components/TabsSection";
import { galleryImages } from "@/data/about-us";
import Image from "next/image";
const page = ({ params }: { params: { title: string } }) => {
  return (
    <div className="mt-[60px] w-full">
      {/* Banner */}
      <div className="">
        <Image
          src={galleryImages[params.title]}
          alt={params.title}
          width={2874}
          height={783}
          className="w-full object-cover"
        />
      </div>
      {/* Tabs */}
      <div className="relative">
        <TabsSection title={params.title} />
      </div>
    </div>
  );
};

export default page;
