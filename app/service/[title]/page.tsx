import { data } from "@/data/service";
import ServicePageScrollHeader from "@/components/sub/ServicePageScrollHeader";
import { Hero } from "@/components/Hero";
import CommonFaq from "@/components/CommonFaq";
import NewCars from "@/components/NewCars";
import ServiceCard from "./_component/ServiceCard";

const Service = async ({
  params: { title },
}: {
  params: { title: string };
}) => {
  const decodedTitle = decodeURIComponent(title).replaceAll("_", " ");

  return (
    <>
      <div className="mt-[50px] relative ">
        {/* Hero / Banner Page below the header */}
        <Hero />
        {/* Sticky header + Scroll Area */}
        <div className="sticky top-[55px] sm:top-[60px] z-10 bg-white shadow-md w-[98%] mx-auto ">
          <ServicePageScrollHeader data={data} />
        </div>
        <div className="relative pt-4 w-full px-3 sm:px-6">
          <h1 className="text-base sm:text-3xl font-bold">{decodedTitle}</h1>
          {/* Individual Cards section */}
          <div className="flex flex-col gap-4 w-full py-4">
            <ServiceCard title={title} />
          </div>
        </div>
        {/* Common FAQ  component*/}
        <CommonFaq />
        {/* New Cars Component */}
        <NewCars />
      </div>
    </>
  );
};

export default Service;
