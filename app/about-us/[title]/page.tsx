import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutKalyani from "./_components/AboutKalyani";
import WhyKalyaniMotors from "./_components/WhyKalyaniMotors";
import QualityPolicy from "./_components/QualityPolicy";
import PrivacyPolicy from "./_components/PrivacyPolicy";
import Awards from "./_components/Awards";
import DrivingSchool from "./_components/DrivingSchool";
import Careers from "./_components/Careers";
import Gallery from "./_components/Gallery";
import { about_details } from "@/data/about-us";
import Link from "next/link";

const page = async ({ params: { title } }: { params: { title: string } }) => {
  console.log("value: ", title);
  return (
    <div className="mt-[60px] w-full h-screen relative py-4">
      {/* Banner */}
      <div className="flex w-full h-52 items-center justify-center">Image</div>
      {/* Tabs */}
      <div className="w-full relative">
        <Tabs defaultValue={title} className="relative">
          <TabsList className="w-[90%] mx-auto sticky top-[60px] z-10 cursor-pointer">
            {about_details.map((items, i) => (
              <Link href={`/about-us/${items}`} key={i}>
                <TabsTrigger value={items}>
                  {items.replaceAll("_", " ")}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
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
        </Tabs>
      </div>
    </div>
  );
};

export default page;
