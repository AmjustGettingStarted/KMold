import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutKalyani from "./components/AboutKalyani";
import WhyKalyaniMotors from "./components/WhyKalyaniMotors";
import QualityPolicy from "./components/QualityPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Awards from "./components/Awards";
import DrivingSchool from "./components/DrivingSchool";
import Careers from "./components/Careers";
import Gallery from "./components/Gallery";
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
            {/* <TabsTrigger value="about_kalyani">about kalyani</TabsTrigger>
            <TabsTrigger value="why_kalyani_motors">
              why kalyani motors
            </TabsTrigger>
            <TabsTrigger value="quality_policy">quality policy</TabsTrigger>
            <TabsTrigger value="privacy_policy">privacy policy</TabsTrigger>
            <TabsTrigger value="awards_and_achievement">awards and achievement</TabsTrigger>
            <TabsTrigger value="maruti_driving_school">
              maruti driving school
            </TabsTrigger>
            <TabsTrigger value="careers">careers</TabsTrigger>
            <TabsTrigger value="gallery">gallery</TabsTrigger> */}
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
