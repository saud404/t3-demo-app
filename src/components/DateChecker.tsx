"use client";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useForm, Controller } from "react-hook-form";

const DateChecker = () => {
  const { control, handleSubmit } = useForm();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [isShown, setIsShown] = useState(false);
  interface PropsType {
    date?: Date | null | undefined;
    date1?: Date | null | undefined;
  }
  const onSubmitDeparture = ({ date, date1 }: PropsType) => {
    const depDate = setDepartureDate(date);
    const arrDate = setArrivalDate(date1);
    const totalDays: number = date - date1;
    console.log(totalDays);
  };
  const days: number | null =
    arrivalDate?.format?.("D") - departureDate?.format?.("D");
  const rate = 20;
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    // showQuote();
  };
  const showQuote = () => {
    return (
      <>
        <div className="flex w-full border-spacing-2 justify-around rounded-lg border-black bg-slate-200 font-mono shadow-lg">
          <div className="bold  p-2 text-2xl">
            <p>
              Start Date :{" "}
              <span className="pr-10">
                {" "}
                {departureDate?.format?.("D MMMM YYYY")}
              </span>
            </p>
            <p>Arrival Date: {arrivalDate?.format?.("D MMMM YYYY")}</p>
            <p>Total Days: {days} </p>
            <p>Rate Days: £{rate} / day</p>
            <p>Current Rate: £{days * rate} </p>
          </div>
          <div className=" pt-10">
            <button className=" h-[6vh] w-full rounded-lg bg-primary p-4 text-xl text-black hover:bg-yellow-300">
              Select
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mx-auto w-[800px] gap-3  p-[10px] text-black md:flex">
        <form onSubmit={handleSubmit(onSubmitDeparture)}>
          <Controller
            control={control}
            name="date"
            rules={{ required: true }} //optional
            render={({
              field: { onChange, name, value },
              fieldState: { invalid, isDirty }, //optional
              formState: { errors }, //optional, but necessary if you want to show an error message
            }) => (
              <>
                <label className="text-xl">Departure Date</label>
                <DatePicker
                  value={value}
                  onChange={(date) => {
                    onChange(date?.isValid ? date : "");
                  }}
                  format={"DD/MM/YYYY"}
                />

                {/* {errors && errors[name] && errors[name].type === "required" && (
                  <span>Please select a Date !</span>
                )} */}
              </>
            )}
          />

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
                <label className="space-x-8  text-xl">Arrival Date</label>
                <DatePicker
                  value={value}
                  onChange={(date1) => {
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

          <input
            type="submit"
            className="mt-10 flex w-full rounded-lg bg-primary p-2 text-xl text-black"
            value={"Get a Quote!"}
            onClick={handleClick}
          />
        </form>
      </div>
      <div>{showQuote()}</div>
    </>
  );
};

export default DateChecker;
