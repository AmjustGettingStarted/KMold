import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutKalyani from "./AboutKalyani";
import WhyKalyaniMotors from "./WhyKalyaniMotors";
import QualityPolicy from "./QualityPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import Awards from "./Awards";
import DrivingSchool from "./DrivingSchool";
import Careers from "./Careers";
import Gallery from "./Gallery";
import { about_details } from "@/data/about-us";
import Link from "next/link";

const TabsSection = ({ title }: { title: string }) => {
  return (
    <>
      <Tabs defaultValue={title} className="">
        {/* Sticky Header and Scrollable */}
        <TabsList className="w-full bg-white shadow-lg h-16  rounded-none sticky top-[55px] z-10">
          <div className="w-full lg:w-[90%] mx-auto justify-between flex overflow-x-auto scrollbar-hidden  ">
            {about_details.map((items, i) => (
              <Link href={`/about-us/${items}`} key={i}>
                <TabsTrigger
                  value={items}
                  className="cursor-pointer uppercase text-[12px] font-bold   data-[state=active]:text-[#102668] data-[state=active]:shadow-none focus-visible:!outline-ring "
                >
                  {items.replaceAll("_", " ")}
                </TabsTrigger>
              </Link>
            ))}
          </div>
        </TabsList>
        <div className="w-[90%] mx-auto">
          <TabsContent value="about_kalyani">
            <AboutKalyani />
          </TabsContent>
          <TabsContent value="why_kalyani_motors">
            <WhyKalyaniMotors />
          </TabsContent>
          <TabsContent value="quality_policy">
            <QualityPolicy />
          </TabsContent>
          <TabsContent value="privacy_policy">
            <PrivacyPolicy />
          </TabsContent>
          <TabsContent value="awards_and_achievement">
            <Awards />
          </TabsContent>
          <TabsContent value="maruti_driving_school">
            <DrivingSchool />
          </TabsContent>
          <TabsContent value="careers">
            <Careers />
          </TabsContent>
          <TabsContent value="gallery">
            <Gallery />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default TabsSection;
