import Image from "next/image";
import React from "react";
import Book from "../assets/images/book.webp";
import Collect from "../assets/images/collect.webp";
import Park from "../assets/images/park.webp";
import Meet from "../assets/images/meet.webp";
const Features = () => {
  return (
    <div className="mb-10  bg-white  pt-8 text-center text-4xl font-extrabold text-black">
      HOW DOES IT WORK?
      <div className="mx-auto grid grid-cols-1 justify-center pb-10 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="col-span-1 pb-8">
          <Image
            src={Book}
            alt="Book"
            width={300}
            height={300}
            className="mx-auto"
          />
          <span className="text-center text-2xl font-bold">
            Book Securely <br />
            Online
          </span>
        </div>
        <div className="col-span-1">
          <Image
            src={Collect}
            alt="Book"
            width={300}
            height={300}
            className="mx-auto"
          />
          <span className="text-center text-2xl font-bold">
            We collect your <br />
            car at the airport
          </span>
        </div>
        <div className="col-span-1">
          <Image
            src={Park}
            alt="Book"
            width={300}
            height={300}
            className="mx-auto"
          />
          <span className="text-center text-2xl font-bold">
            We park your car <br />
            in our secure car park
          </span>
        </div>
        <div className="col-span-1">
          <Image
            className="mx-auto"
            src={Meet}
            alt="Book"
            width={300}
            height={300}
          />
          <span className="text-center text-2xl font-bold">
            We meet you with your <br />
            car at the airport
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
