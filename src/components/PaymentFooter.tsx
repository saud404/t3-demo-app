import Image from "next/image";
// import thumb from "../assets/images/thumb.svg";
// import thumb from "../assets/images/hero.jpg";
import thumb from "../assets/images/airpark-logo.jpeg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";
import { IoLogoFacebook } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Payment from "../assets/images/payment.jpeg";
import Membership from "../assets/images/bpa.png";
export const PaymentFooter = () => {
  return (
    <div className="w-full justify-around bg-black  pt-4 text-white md:flex ">
      <div className=" p-4 font-mono antialiased">
        <p className="text-centre flex justify-center text-2xl font-bold antialiased md:text-2xl ">
          Customer Support
        </p>
        <div className="flex justify-center gap-x-3 pt-4">
          <HiOutlinePhone size={25} className="text-primary" />
          <p className="text-xl font-semibold">020 432 3218</p>
        </div>
        <div className="flex justify-center gap-x-3 pt-4">
          <BsWhatsapp size={25} className="text-primary" />
          <p className="text-xl font-semibold">020 432 3218</p>
        </div>
        <div className="flex justify-center gap-x-3 pt-4">
          <BsEnvelope size={25} className="text-primary" />
          <p className="text-xl font-semibold">info@parking.co.uk</p>
        </div>
      </div>

      <div className="  w-full  p-4 font-mono antialiased">
        <p className=" flex justify-center text-2xl font-bold antialiased md:text-2xl ">
          Follow Us
        </p>
        <div className="flex items-center justify-center gap-4 p-4 md:justify-center">
          <IoLogoFacebook
            size={50}
            className="text-primary hover:text-yellow-600"
          />
          <BsTwitter size={50} className="text-primary hover:text-yellow-600" />
        </div>
        <div className="flex items-center justify-center gap-4 p-4 md:justify-center">
          <BsYoutube size={50} className="text-primary hover:text-yellow-600" />
          <BsInstagram
            size={40}
            className="text-primary hover:text-yellow-600"
          />
        </div>
      </div>
      <div className="w-full p-4 font-mono antialiased">
        <p className="flex justify-center text-2xl font-bold antialiased md:text-2xl  ">
          Memberships
        </p>
        {/* <span className="border-1  w-1 bg-primary "> </span> */}
        <div className="flex justify-center  pt-4">
          <Image
            src={Membership}
            width={100}
            height={100}
            alt="Payment Gateway"
            className=" flex w-[200px] justify-center bg-cover bg-left bg-no-repeat pt-4 text-center  md:bg-fixed"
          />
        </div>
      </div>
      <div className=" w-full justify-start p-4 font-mono antialiased md:justify-start">
        <p className="text-centre flex justify-center p-4 text-2xl font-bold antialiased md:text-2xl">
          Secure Online Payments
        </p>

        <div className="flex justify-center">
          <Image
            src={Payment}
            width={100}
            height={100}
            alt="Payment Gateway"
            className=" w-[300px] bg-cover bg-left bg-no-repeat  md:bg-fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentFooter;
