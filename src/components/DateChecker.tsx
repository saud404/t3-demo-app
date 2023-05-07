"use client";
import React, { useState } from "react";
import Link from "next/link";
// import TimePicker from "react-ts-timepicker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
// import DatePicker, { type DateObject } from "react-multi-date-picker";
import DatePicker, {
  toDateObject,
  type DateObject,
} from "react-multi-date-picker";
// import type { Value } from "react-multi-date-pick";
import { useForm, Controller } from "react-hook-form";

const DateChecker = () => {
  const { control, handleSubmit } = useForm();
  const [departureDate, setDepartureDate] = useState<DateObject | undefined>();
  const [arrivalDate, setArrivalDate] = useState<DateObject | undefined>();
  const [isShown, setIsShown] = useState(false);
  // interface PropsType {
  //   date: DateObject;
  //   date1: DateObject;
  // }
  const onSubmitDeparture = ({ date, date1 }) => {
    setDepartureDate(date);
    setArrivalDate(date1);
    // const totalDays = date - date1;
    // console.log(totalDays);
  };
  // interface Dimensions {
  //   arrivalDate: number;
  //   departureDate: number;
  // }

  // function calculateDays(dimensions: Dimensions): number {
  //   return (
  //     dimensions.arrivalDate?.format?.("D") -
  //     dimensions.departureDate?.format?.("D")
  //   );
  // }

  const rate = 20;
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    // showQuote();
  };
  const [value, onChange] = useState("10:00");
  const showQuote = () => {
    // const day1: number | DateObject | undefined = arrivalDate.day;
    // const day2: number | DateObject | undefined = departureDate.day;
    // const days = day1 - day2;
    // - departureDate?.format?.("D");
    // const totalDays = toDateObject(arrivalDate) - toDateObject(departureDate);

    const days =
      parseInt(arrivalDate?.format?.("D")) -
      parseInt(departureDate?.format?.("D"));

    return (
      <>
        <div className=" w-full border-spacing-2 justify-around rounded-lg border-black bg-slate-200 font-mono shadow-lg">
          <div className="bold  p-4 text-2xl">
            <p>
              Start Date :{" "}
              <span className="pr-2 md:pr-10">
                {" "}
                {departureDate?.format?.("D MMMM YYYY")}
              </span>
            </p>
            <p>Arrival Date: {arrivalDate?.format?.("D MMMM YYYY")}</p>
            <p>Total Days: {days} </p>
            <p>Rate Days: £{rate} / day</p>
            <p>Current Rate: £{days * rate} </p>
          </div>
          <div className="inline-flex w-[200px] p-8">
            <Link
              href="/Details"
              className=" text-centre rounded-lg bg-primary p-4 text-xl text-black hover:bg-yellow-300"
            >
              Select
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative mx-auto flex justify-center gap-3 space-x-6 p-[10px]  text-black md:flex md:w-[800px]">
        <form
          onSubmit={handleSubmit(onSubmitDeparture)}
          className="space-x-4 p-4"
        >
          <div className="flex-cols">
            <label className="semibold text-2xl md:pr-6">Departure Date</label>
            <Controller
              control={control}
              name="date"
              rules={{ required: true }}
              render={({
                field: { onChange, name, value },
                fieldState: { invalid, isDirty },
                formState: { errors }, //optional, but necessary if you want to show an error message
              }) => (
                <>
                  <DatePicker
                    value={value}
                    onChange={(date: DateObject) => {
                      onChange(date.isValid ? date : "");
                    }}
                    format={"DD/MM/YYYY"}
                  />

                  {/* {errors && errors[name] && errors[name].type === "required" && (
                  <span>Please select a Date !</span>
                )} */}
                </>
              )}
            />
            <div className="w-lg mx-auto flex p-5 ">
              <label className="semibold text-2xl md:pr-4">
                Departure Time
              </label>
              <TimePicker onChange={onChange} value={value} />
            </div>
          </div>
          <div className="">
            <label className="semibold pr-6 text-2xl">Arrival Date</label>

            <Controller
              control={control}
              name="date1"
              rules={{ required: true }}
              render={({
                field: { onChange, name, value },
                fieldState: { invalid, isDirty },
                formState: { errors },
              }) => (
                <>
                  <DatePicker
                    className=""
                    value={value}
                    onChange={(date1: DateObject) => {
                      onChange(date1?.isValid ? date1 : "");
                    }}
                    format={"DD/MM/YYYY"}
                  />

                  {/* {errors && errors[name] && errors[name].type === "required" && (
                  <span className="text-red">Please select a date !</span>
                )} */}
                </>
              )}
            />
            <div className="w-lg mx-auto flex p-5 ">
              <label className="semibold text-2xl md:pr-4">Arrival Time</label>
              <TimePicker onChange={onChange} value={value} className="w-md" />
            </div>
            <div>
              <label htmlFor="start">Start date:</label>

              <input
                className="appearance-none rounded border px-2 py-3 text-gray-500 shadow"
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
          </div>

          <div>
            <label className="semibold inline-flex p-2 text-2xl md:pt-4">
              Promo Code
            </label>
            <input
              type="text"
              className="m-2 inline-flex rounded-md p-4 outline-dashed"
              placeholder="PROMO CODE"
            />
          </div>
          <div>
            <input
              type="submit"
              className="mt-10  w-full rounded-lg bg-primary p-2 text-xl text-black shadow-lg"
              value={"Get a Quote!"}
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
      {/* <div>{showQuote()}</div> */}
    </>
  );
};

export default DateChecker;
