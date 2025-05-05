import React from "react";
import TabsSection from "./_components/TabsSection";

const page = async ({ params: { title } }: { params: { title: string } }) => {
  return (
    <div className="mt-[60px] w-full">
      {/* Banner */}
      <div className="flex w-full h-52 items-center justify-center">Image</div>
      {/* Tabs */}
      <div className="w-full h-auto">
        <TabsSection title={title === "/" ? "about_kalyani" : title} />
      </div>
    </div>
  );
};

export default page;
