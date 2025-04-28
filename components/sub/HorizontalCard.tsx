import Image from "next/image";
import React from "react";

export interface Cars {
  id: number;
  url: string;
  title: string;
  price: string;
}

interface CardProps {
  carDetails: Cars;
}
const HorizontalCard: React.FC<CardProps> = ({ carDetails }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={carDetails.url}
            alt={carDetails.title}
            width={500}
            height={500}
          />
        </div>
        <div>Right side</div>
      </div>
    </div>
  );
};

export default HorizontalCard;
