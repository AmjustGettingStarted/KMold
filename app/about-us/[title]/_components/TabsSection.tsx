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
      <Tabs defaultValue={title} className="w-full h-auto">
        <TabsList className="w-[90%] mx-auto sticky top-[60px] z-10 justify-between ">
          {about_details.map((items, i) => (
            <Link href={`/about-us/${items}`} key={i}>
              <TabsTrigger value={items} className="cursor-pointer">
                {items.replaceAll("_", " ")}
              </TabsTrigger>
            </Link>
          ))}
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
