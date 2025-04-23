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
      <div className="w-full h-full  flex flex-row   bg-[#071C2C] text-white">
        {data.map((footer, index) => (
          <div
            key={index}
            className="w-1/3 flex flex-col  h-full  px-8 py-2 text-sm   "
          >
            <h1 className="uppercase py-4 leading-tight">{footer.title}</h1>
            <ul className="flex flex-col space-y-2 capitalize text-sm ">
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
        <div className="w-full p-8 flex">
          <div className="w-[30%] flex flex-col">
            <span>
              <Image
                width={150}
                height={60}
                alt="kalyani logo"
                src="https://www.kalyanimotors.com/static/media/kalyani_light.1aa9da94294cc7262a59.png"
              />
            </span>
            <span className="py-6 tracking-tight text-sm">Banglore</span>
            <span className="w-full mx-auto ">
              <div className=" w-full flex gap-6 items-center px-8">
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
                <ImInstagram size={20} />
                <FaWhatsapp size={20} />
                <FaYoutube size={20} />
              </div>
            </span>
          </div>
          <div className="w-1/2 flex items-start py-4 ">
            <div className="w-1/2 flex flex-col items-center space-y-4 mx-auto ml-16">
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
                <span className="text-sm">Phone Number</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-start space-y-4 -ml-12 ">
              <span className="text-sm">customersupport@kalyanimotors.com</span>
              <span className="text-sm">9590990011</span>
            </div>
          </div>
          <div className="w-[20%] flex flex-col gap-1 items-center mx-auto">
            <Image width={150} height={45} src={img1} alt="images" />
            <Image width={150} height={45} src={img2} alt="images" />
          </div>
        </div>
        <div className="w-full items-center text-center pt-8 pb-4">
          <p className="text-xs font-semibold ">
            COPYRIGHT © 2022 KALYANI MOTORS PVT LTD, BANGALORE, INDIA | Designed
            by: Kalyani Motors
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
