import Link from "next/link";
import React from "react";
import DetailForm from "~/components/DetailForm";
import Footer from "~/components/Footer";
import Navbar from "~/components/NavBar";

const Details = (props) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto w-full bg-slate-200">
        {/* <div className="mx-auto h-10 bg-gray-500 "> */}
        {/* <p>Hello</p> */}
        <DetailForm />
        {/* </div> */}
        {/* <div className="bottom-0">
          {" "}
          <Footer />{" "}
        </div> */}
      </main>
    </>
  );
};

export default Details;
