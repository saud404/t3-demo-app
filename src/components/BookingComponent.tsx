"use client";
import React, { useState } from "react";

const BookingComponent = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    // showQuote();
  };
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  const currentDate = `${day}-${month}-${year}`;
  return (
    <>
      {/* <div className=" border-r-1 absolute z-10 mx-auto flex w-[60%]  border border-black bg-blue-400 bg-transparent md:h-[150px]">
        <br />
        <br />
        <span className="bold text-xl italic text-primary md:text-3xl">
          Exemplary Service Guaranteed!
        </span>
        <div>Booking Component</div>
      </div> */}
      <div className="w-full ">
        {/* <form className=""> */}
        <p className="mt:4 text-center text-xl font-bold  text-gray-700  antialiased md:text-4xl md:text-primary">
          Exemplary Service Guaranteed!
        </p>
        <div className="items-center justify-center  gap-x-5 p-4 md:flex">
          <div className="flex-col items-center justify-center">
            <label
              htmlFor="start"
              className="semibold flex-row text-3xl text-black antialiased"
            >
              Departure :
            </label>
            <div className="flex">
              <input
                className=" appearance-none rounded border py-3 font-semibold text-black shadow md:px-2"
                type="date"
                id="start"
                name="trip-start"
                // value={currentDate.toString()}

                min="2023-01-01"
                max="2030-12-31"
              />
              <div className="w-30 ml-2 rounded-sm bg-white p-4 md:p-[10px] ">
                <div className="">
                  <select
                    name="hours"
                    id="departureTime"
                    className="appearance-none bg-transparent text-lg outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">10</option>
                    <option value="12">12</option>
                  </select>
                  <span className="mr-3 text-xl">:</span>
                  <select
                    name="minutes"
                    className="mr-4 appearance-none bg-transparent text-xl outline-none"
                  >
                    <option value="0">00</option>
                    <option value="30">30</option>
                  </select>
                  <select
                    name="ampm"
                    className="appearance-none bg-transparent text-xl outline-none"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <label
              htmlFor="start"
              className="semibold flex-row text-3xl text-black antialiased"
            >
              Arrival:
            </label>
            <div className="flex">
              <input
                className=" appearance-none rounded border py-3 font-semibold text-black shadow md:px-2"
                type="date"
                id="arrival"
                name="trip-start"
                min="2023-01-01"
                max="2030-12-31"
              />
              <div className="w-30 ml-2  rounded-sm bg-white p-4 md:p-[10px] ">
                <div className="">
                  <select
                    name="hours"
                    id="arrivalTime"
                    className="appearance-none bg-transparent text-lg outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">10</option>
                    <option value="12">12</option>
                  </select>
                  <span className="mr-3 text-xl">:</span>
                  <select
                    name="minutes"
                    className="mr-4 appearance-none bg-transparent text-xl outline-none"
                  >
                    <option value="0">00</option>
                    <option value="30">30</option>
                  </select>
                  <select
                    name="ampm"
                    className="appearance-none bg-transparent text-xl outline-none"
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 ">
            <input
              type="text"
              id="promo"
              placeholder="Promo Code"
              className=" h-[5vh] w-32 appearance-none pl-2 placeholder-gray-300 md:px-4 md:py-3  "
            />
            <input
              type="submit"
              className="  bg-primary p-3 pt-2 text-xl font-semibold text-black shadow-lg hover:bg-yellow-300 md:m-2"
              value={"Get a Quote!"}
              onClick={handleClick}
            />
          </div>
        </div>
        {/* </form> */}
      </div>
    </>
  );
};

export default BookingComponent;
