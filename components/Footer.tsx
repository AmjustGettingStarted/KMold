import React from "react";
import { data } from "../data/footer";
import Image from "next/image";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import img1 from "../assets/playstore.png";
import img2 from "../assets/appstore.png";
const Footer = () => {
  return (
    <>
      {/* Upper Footer */}
      <footer>
        <div
          id="footer"
          className="w-full h-full overflowhi'  flex md:flex-row flex-col   bg-[#071C2C] text-white py-2 md:py-4 "
        >
          {data.map((footer, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex flex-col  h-full  px-8 py-2 text-sm   "
            >
              <h1 className="uppercase py-4 leading-tight font-bold">
                {footer.title}
              </h1>
              <ul className="flex flex-col space-y-2 capitalize text-sm leading-tight tracking-tight ">
                {footer.items.map((item, i) => (
                  <li key={i} className="cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Lower Footer */}
        <div className="bg-[#282828] text-white">
          <div className="w-full p-7 flex flex-col lg:flex-row m-auto  ">
            {/* Lower Left */}
            <div className="w-full lg:w-[40%] flex lg:flex-col flex-row justify-between lg:pb-0 pb-4 ">
              <span>
                <Image
                  width={150}
                  height={60}
                  alt="kalyani logo"
                  src="https://www.kalyanimotors.com/static/media/kalyani_light.1aa9da94294cc7262a59.png"
                />
              </span>
              <div className="flex flex-col items-center sm:items-start mr-0 sm:mr-5 md:mr-10 lg:mr-0">
                <span className="pb-6 pt-0 lg:pt-6 tracking-tight text-sm">
                  Banglore
                </span>
                <span className="w-full mx-auto ">
                  <div className=" w-full flex gap-2 lg:gap-6 items-center px-4 lg:px-8 flex-wrap">
                    <FaFacebookF size={20} />
                    <FaTwitter size={20} />
                    <ImInstagram size={20} />
                    <FaWhatsapp size={20} />
                    <FaYoutube size={20} />
                  </div>
                </span>
              </div>
            </div>
            {/* Combining Middle & Right */}
            <div className="w-full flex mx-auto flex-col sm:flex-row">
              {/* middle footer */}
              <div className="w-full lg:w-[70%] flex items-start py-4 lg:px-4 ">
                {/* middle left */}
                <div className="w-full lg:w-1/2 flex flex-col items-start  space-y-4 mx-auto lg:ml-16 justify-start">
                  <div className="w-full justify-start flex items-center space-x-4">
                    <span>
                      <MdOutlineEmail size={20} />
                    </span>
                    <span className="text-sm">Email</span>
                  </div>
                  <div className="w-full justify-start flex items-center space-x-4">
                    <span>
                      <FaPhoneAlt size={20} />
                    </span>
                    <span className="text-sm hidden sm:flex ">
                      Phone Number
                    </span>
                    <span className="text-sm md:hidden">Phone </span>
                  </div>
                </div>
                {/* middle right */}
                <div className="w-full lg:w-1/2 flex flex-col  items-start space-y-4 lg:-ml-12 justify-end pl-4 ">
                  <span className="text-sm w-[100px] overflow-auto scrollbar-hidden ">
                    customersupport@kalyanimotors.com
                  </span>
                  <span className="text-sm">9590990011</span>
                </div>
              </div>
              {/* Lower Right */}
              <div className="w-full lg:w-[30%] flex flex-col md:flex-row justify-evenly lg:flex-col gap-1 items-center mx-auto pt-4   ">
                <Image width={150} height={45} src={img1} alt="images" />
                <Image width={150} height={45} src={img2} alt="images" />
              </div>
            </div>
          </div>
          {/* bottom line */}
          <div className="w-full items-center text-center pt-8 pb-4 mb-[60px] sm:mb-0 px-2 sm:px-0">
            <p className="text-xs font-semibold ">
              COPYRIGHT © 2022 KALYANI MOTORS PVT LTD, BANGALORE, INDIA |
              Designed by: Kalyani Motors
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
