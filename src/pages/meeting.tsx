import React from "react";
import MeetingPointComponent from "~/components/MeetingPointComponent";
import Navbar from "~/components/NavBar";
import PaymentFooter from "~/components/PaymentFooter";

const Meeting = (props) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[100px] justify-center bg-gray-100 sm:h-[100px] md:h-[150px] lg:h-[200px]">
        <h1 className="text-centre my-auto justify-center text-6xl text-primary ">
          Meeting Point
        </h1>
      </div>
      <MeetingPointComponent />
      <PaymentFooter />
    </div>
  );
};

export default Meeting;
