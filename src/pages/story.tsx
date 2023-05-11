import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/NavBar";
import PaymentFooter from "~/components/PaymentFooter";
import Logo from "../assets/images/hero.jpg";

// import TabComponent from "../components/TabComponent/TabComponent"
const Story = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex h-[100px] justify-center bg-gray-100 sm:h-[100px] md:h-[150px] lg:h-[200px]">
        <h1 className="text-centre my-auto justify-center text-6xl text-primary ">
          Our Story
        </h1>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="text-4xl font-bold">Lorem ipsum dolor sit amet</div>
        <div className="-mx-6 mt-12 flex flex-wrap">
          <div className="w-full px-6 text-justify  md:w-7/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="py-8 text-left text-4xl font-bold">
              Lorem ipsum dolor sit amet
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="py-8 text-left text-4xl font-bold">
              Lorem ipsum dolor sit amet
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="py-8 text-left text-4xl font-bold">
              Lorem ipsum dolor sit amet
            </div>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </li>
            <li>Creek Beach offers family-friendly seaside retreats.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
          </div>
          <div className="order-first mb-4 w-full px-6 md:-order-none md:mb-0 md:w-5/12">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                // width={100}
                // height={100}
                className="h-[50vh] w-94 rounded-lg bg-cover p-2"
              />
            </Link>
          </div>
        </div>
      </div>
      <PaymentFooter />
      <Footer />
    </>
    // </div>
  );
};

export default Story;
