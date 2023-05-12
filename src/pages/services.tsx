import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/NavBar";
import PaymentFooter from "~/components/PaymentFooter";
import ServicesComponent from "~/components/ServicesComponent";

const Services = (props) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex h-[100px] justify-center bg-gray-100 sm:h-[100px] md:h-[150px] lg:h-[200px]">
          <h1 className="text-centre my-auto justify-center text-6xl text-primary ">
            Our Services
          </h1>
        </div>
        <ServicesComponent />
        <PaymentFooter />
        <Footer />
      </div>
    </>
  );
};

export default Services;
