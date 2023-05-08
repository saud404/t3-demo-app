"use client";
import React, { useState } from "react";
import * as yup from "yup";
import z from "zod";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
interface IFormInput {
  departureDate: Date | string;
  departureTimeMinutes: number;
  departureTimeSeconds: number;
  departureTimeAmOrPm: string;
  arrivalDate: Date | string;
  arrivalTimeMinutes: number;
  arrivalTimeSeconds: number;
  arrivalTimeAmOrPm: string;
  promoCode: string;
}

// const schema = yup.object().shape({
//   departureDate: yup.date().required(),
//   departureTimeMinutes: yup.string().required().min(2).max(25),
//   departureTimeSeconds: yup.string().required().min(2).max(25),
//   arrivalDate: yup.date().required(),
//   arrivalTimeMinutes: yup.string().required().min(8).max(120),
//   arrivalTimeSeconds: yup.string().required().min(8).max(120),
//   promoCode: yup.string().required().min(8).max(120),
// });
const BookingComponent = () => {
  const [isShown, setIsShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
  });

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
    console.log(data.departureDate);
    console.log(data.departureTimeMinutes);
    console.log(data.departureTimeSeconds);
    console.log(data.departureTimeAmOrPm);
    console.log(data.arrivalDate);
    console.log(data.arrivalTimeMinutes);
    console.log(data.arrivalTimeSeconds);
    console.log(data.arrivalTimeAmOrPm);
    console.log(data.promoCode);
  };

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
        <p className=" pt-10 text-center text-lg font-bold text-gray-700 antialiased  md:pt-2 md:text-4xl md:text-primary">
          Exemplary Service Guaranteed!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="items-center justify-center  gap-x-5 p-4 md:flex">
            <div className="flex-col items-center justify-center">
              <label
                htmlFor="start"
                className="semibold flex-row text-lg text-black antialiased md:text-3xl"
              >
                Departure :
              </label>
              <div className="flex">
                <input
                  className=" appearance-none rounded border py-3 font-semibold text-black shadow md:px-2"
                  {...register("departureDate")}
                  type="date"
                  min="2023-01-01"
                  max="2030-12-31"
                />
                <span>{!!errors.departureDate?.message}</span>
                <div className="w-30 ml-2 rounded-sm bg-white p-4 md:p-[10px] ">
                  <div className="">
                    <select
                      {...register("departureTimeMinutes")}
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
                    <span>{!!errors.departureTimeMinutes?.message}</span>
                    <span className="mr-3 text-xl">:</span>
                    <select
                      {...register("departureTimeSeconds")}
                      className="mr-4 appearance-none bg-transparent text-xl outline-none"
                    >
                      <option value="0">00</option>
                      <option value="30">30</option>
                    </select>
                    <select
                      {...register("departureTimeAmOrPm")}
                      className="appearance-none bg-transparent text-xl outline-none"
                    >
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pb-5">
              <label
                htmlFor="start"
                className="semibold text-lg text-black antialiased md:text-3xl"
              >
                Arrival:
              </label>
              <div className="flex">
                <input
                  {...register("arrivalDate")}
                  className=" appearance-none rounded border py-3 font-semibold text-black shadow md:px-2"
                  type="date"
                  min="2023-01-01"
                  max="2030-12-31"
                />
                <span>{!!errors.arrivalDate?.message}</span>
                <div className="w-30 ml-2  rounded-sm bg-white p-4 md:p-[10px] ">
                  <div className="">
                    <select
                      {...register("arrivalTimeMinutes")}
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
                      {...register("arrivalTimeSeconds")}
                      className="mr-4 appearance-none bg-transparent text-xl outline-none"
                    >
                      <option value="0">00</option>
                      <option value="30">30</option>
                    </select>
                    <span>{!!errors.arrivalTimeSeconds?.message}</span>
                    <select
                      {...register("arrivalTimeAmOrPm")}
                      className="appearance-none bg-transparent text-xl outline-none"
                    >
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                    <span>{!!errors.arrivalTimeAmOrPm?.message}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex  ">
              <input
                {...register("promoCode")}
                type="text"
                placeholder="Promo Code"
                className="h-[6vh] w-32 appearance-none  pl-2 placeholder-gray-300 md:m-1 md:h-[6vh] md:px-4 md:py-3  "
              />
              <span>{!!errors.promoCode?.message}</span>
              <button
                type="submit"
                className="bg-primary p-3 pt-2 text-xl font-semibold text-black shadow-lg hover:bg-yellow-300 md:m-2"
              >
                Get a Quote!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingComponent;
