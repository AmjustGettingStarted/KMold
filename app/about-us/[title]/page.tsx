"use client";

import React from "react";
import { useParams } from "next/navigation"; // Import usePathname
import TabsSection from "./_components/TabsSection";
import { galleryImages } from "@/data/about-us";
import Image from "next/image";

const Page = () => {
  const { title } = useParams() as { title: string };

  return (
    <div className="mt-[60px] w-full">
      {/* Banner */}
      <div>
        <Image
          src={title && galleryImages[title] ? galleryImages[title] : ""}
          alt={title}
          width={2874}
          height={783}
          className="w-full object-cover"
        />
      </div>
      {/* Tabs */}
      <div className="relative">
        <TabsSection title={title} />
      </div>
    </div>
  );
};

export default Page;
