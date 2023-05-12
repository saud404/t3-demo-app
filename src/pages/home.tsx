"use client";
import React from "react";
import DetailForm from "~/components/DetailForm";
import Footer from "~/components/Footer";
import Navbar from "~/components/NavBar";
import PaymentFooter from "~/components/PaymentFooter";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <DetailForm />
      <PaymentFooter />
      <Footer />
    </div>
  );
};

export default Home;
