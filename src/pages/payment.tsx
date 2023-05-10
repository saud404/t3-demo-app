import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/NavBar";
import PaymentComponent from "~/components/PaymentComponent";
import PaymentFooter from "~/components/PaymentFooter";

const payment = (props) => {
  return (
    <div>
      <Navbar />
      <PaymentComponent />
      <PaymentFooter />
      <Footer />
    </div>
  );
};

export default payment;
