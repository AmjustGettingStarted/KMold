import React from "react";
import Image from "next/image";
import BannerImg from "../assets/Banner.png";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="w-full">
      <Link href="/allCars">
        <Image
          src={BannerImg}
          alt="Banner image 2nd"
          className="w-full object-cover"
          width={1000}
          height={500}
        />
      </Link>
    </div>
  );
};

export default Banner;
