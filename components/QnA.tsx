"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import React from "react";

const QnA = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion 1"
          className="w-full flex items-center justify-between bg-[#EAEAEA] text-black text-xl mb-2"
        >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
          className="bg-black text-white"
        >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="7" aria-label="Accordion 7" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
        <AccordionItem key="8" aria-label="Accordion 8" title="Accordion 3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti? Hic numquam ad praesentium eum nostrum, quidem quos totam
            ullam neque, molestias quae illum doloremque eligendi vitae corrupti
            perspiciatis tenetur.
          </h1>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QnA;
