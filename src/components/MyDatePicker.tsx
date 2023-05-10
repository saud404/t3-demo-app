import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css//
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useRouter } from "next/router";
// import { TimePicker } from "react-ios-time-picker";
interface PropsType {
  totalDays: number;
}

const MyDatePicker: React.FC = (props: PropsType) => {
  const { push } = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [value, setValue] = useState("10:00");
  //   const [end, setEnd] = useState("10:00");

  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };

  const handleStartDateChange = (startDate: Date) => {
    setStartDate(startDate);
    // console.log(startDate);
  };
  const handleEndDateChange = (endDate: Date) => {
    setEndDate(endDate);
    console.log(endDate);
  };
  const handleClick = () => {
    console.log("clicked");
    // console.log(startDate);
    // console.log(endDate);
    const totalDays = startDate.getDay() - endDate.getDay();
    push("/booking");
    //return props.totalDays;
  };
  return (
    <>
      <div className="border-1 container  mx-auto border-black p-6 shadow-lg ">
        <div className="">
          <p className="p-4 font-serif text-2xl font-bold text-black md:mx-auto md:flex md:justify-center md:text-3xl">
            Welcome to the Parking
          </p>
        </div>
        <div className="justify-content justify-items items-center  md:mx-auto md:flex md:justify-center">
          <p className="inter md:text2xl  p-2 text-xl antialiased md:font-semibold">
            Car Drop off
          </p>
          <div className="flex gap-4 p-4">
            <div className="">
              <DatePicker
                className="border-1 w-[160px] border-black p-4 text-xl  shadow-lg md:w-[200px]"
                selected={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="w-40  bg-white p-4 shadow-xl">
              <select
                name="hours"
                className="appearance-none bg-transparent text-xl outline-none"
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
                className="mr-1 appearance-none bg-transparent text-xl outline-none"
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

          <p className="inter md:text2xl p-2 text-xl antialiased md:font-semibold">
            Car Collect
          </p>
          <div className="flex gap-4 p-4">
            <div className="">
              <DatePicker
                className="border-1 w-[160px] border-black p-4 text-xl  shadow-lg md:w-[200px]"
                selected={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="w-40  bg-white p-4 shadow-xl">
              <select
                name="hours"
                className="appearance-none bg-transparent text-xl outline-none"
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
                className="mr-1 appearance-none bg-transparent text-xl outline-none"
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
          {/* <p className=" text-2xl font-semibold">Promo Code</p>
        <input type="text" className="md:p2 " /> */}
          <div className=" flex">
            <input
              type="submit"
              className=" inter m-4 bg-primary  p-4 pt-4 text-xl text-black antialiased shadow-xl hover:bg-black hover:text-primary md:font-semibold"
              value={"Get a Quote!"}
              onClick={handleClick}
            />
          </div>
        </div>
        {/* <div className="cols-span-1">
          <div className="w-[200px] border-black p-4 text-2xl font-semibold outline-none">
            <TimePicker onChange={onChange} value={value} use12Hours />
          </div>
        </div> */}
        {/* <div className="cols-span-1">
          <div className="w-[200px] border-black p-4 text-2xl font-semibold outline-none">
            <TimePicker onChange={onEndTimeChange} value={end} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyDatePicker;
