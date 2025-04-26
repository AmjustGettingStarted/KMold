"use state";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommonFaq = () => {
  return (
    <div id="faq" className="py-4 sm:py-8 px-2 md:px-6">
      <h1 className="text-lg md:text-3xl font-bold py-4 ">Common FAQ</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            Why do I Choose Kalyani Motors services?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4  py-2 text-[#4a4a4a] md:text-base text-xs">
            Kalyani Motors excels in giving you a greater experience for vehicle
            service. Everything from billing, procurements of parts, and quality
            checks is our responsibility and will be regularly updated to you.
            The best part? We offer a wide variety of high-quality car services
            without burning a hole in their pocket.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-2 border-white  ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            What services can Kalyani Motors provide for my car in Bangalore?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            Kalyani Motors excels in giving you a cakewalk experience for
            vehicle service. Everything from billing, procurement of parts and
            quality checks is our responsibility and will be regularly updated
            to you. The best part? We offer a wide variety of high quality car
            services without burning a hole in their pocket.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer  leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            How much would I be spending to get a basic car service done at
            Kalyani Motors in Bangalore?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            The very basic service package at Kalyani Motors costs as low as
            Rs.1999/- . To know more, call us at 9876543210. You can also book
            an appointment from our website or Android app.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            How good is Kalyani Motors presence in Bangalore & Hyderabad?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            Kalyani Motors has 42+ touchpoints available across Bangalore and
            Hyderabad that include showrooms, True value service center, body
            repair center and driving schools,.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            Would there be any extra charges in addition to the prescribed
            service rates?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            No. You only pay for the service you receive. We believe in more for
            less which is why Kalyani Motors services are upto 40% off from
            standard authorized service centres.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            What is the basic duration for a car service from Kalyani Motors?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            Service requires anywhere between 4-6 hours depending on the type of
            package you opt for.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            How good is the service equipment at Kalyani Motors workshops?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            Pampering your car is our speciality. Only high end and well rated
            equipment specialized for your car needs is used in all Kalyani
            Motors centres. OBD2 Diagnostic scanner and Automatic AC gas
            recharging apparatus are some to name a few.{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            I am facing an issue with my car after service. What do I do?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            We are all about customer satisfaction and hence we sincerely
            apologise for your unfortunate experience. Kalyani Motors provides a
            1 month/1000km warranty on all our services. Rest assured, a 24*7
            dedicated customer service team is always ready to help you out.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="border-b-2 border-white ">
          <AccordionTrigger className="md:text-lg text-sm cursor-pointer leading-tight rounded-none font-semibold bg-[#EAEAEA] px-2 py-3  text-[#282828] border-b-white hover:no-underline">
            I don’t exactly find the service option I am looking for. Can I get
            help?
          </AccordionTrigger>
          <AccordionContent className="bg-[#F6F6F6] w-full lg:w-[95%] px-2 md:px-4 py-2 text-[#4a4a4a] md:text-base text-xs">
            Of course. If you let us know your requirements, we will custom
            quote the best options and price for you. Go to the Kalyani Motors
            website now!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CommonFaq;
