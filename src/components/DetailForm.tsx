import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const DetailForm = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const { push } = useRouter();
  const [state, setState] = useState({
    carReg: "",
    carMake: "",
    carModel: "",
    carColor: "",
    carAlarm: "",
    carPrefNote: "",

    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    address: "",
    city: "",
    postCode: "",

    airPort: "",
    terminal: "",
    airLine: "",
    flightNo: "",
    passengers: "",
    adults: "",
    childrenNumber: "",
    disabilities: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (
      formNo === 1 &&
      state.carReg &&
      state.carMake &&
      state.carModel &&
      state.carColor &&
      state.carAlarm &&
      state.carPrefNote
    ) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.firstName &&
      state.lastName &&
      state.email &&
      state.cell &&
      state.address &&
      state.city &&
      state.postCode
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill-up all input fields");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (
      state.airPort &&
      state.terminal &&
      state.airLine &&
      state.flightNo &&
      state.passengers &&
      state.adults &&
      state.childrenNumber &&
      state.disabilities
    ) {
      toast.success("Form submitted success");
      push("/payment");
    } else {
      toast.error("Please fill-up all input field");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-300 ">
      <ToastContainer />
      <div className="card w-full rounded-md bg-white p-5 shadow-2xl md:w-1/2">
        <div className="flex items-center justify-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`my-3 w-[35px] rounded-full text-white ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-primary"
                    : "bg-slate-400"
                } flex h-[35px] items-center justify-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`h-[2px] w-[85px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <h1 className=" text-center text-2xl font-semibold antialiased">
              Vehicle Details
            </h1>
            <div className="mb-2 flex flex-col antialiased">
              <label htmlFor="carReg">Car Registration</label>
              <input
                value={state.carReg}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="carReg"
                placeholder="Car Registration No."
                id="carReg"
              />
            </div>
            <div className="mb-2 flex flex-col antialiased">
              <label htmlFor="carMake">Car Make</label>
              <input
                value={state.carMake}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="carMake"
                placeholder="Car Make"
                id="carMake"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="carModel">Car Model</label>
              <input
                value={state.carModel}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="carModel"
                placeholder="Car Model"
                id="carModel"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="carColor">Car Color</label>
              <input
                value={state.carColor}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="carColor"
                placeholder="Car Color"
                id="carColor"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="carAlarm">Car Alarm</label>
              <input
                value={state.carAlarm}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="carAlarm"
                placeholder="Car Alarm"
                id="carAlarm"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <textarea
                value={state.carPrefNote}
                onChange={inputHandle}
                data-row="10"
                className="mt-1 rounded-md border border-slate-400 p-2 text-slate-500 outline-0 focus:border-blue-500"
                data-type="text"
                name="carPrefNote"
                placeholder="Parking Preference Note"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button
                onClick={next}
                className=" inter m-4 w-full bg-primary p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div>
              <h1 className="text-center text-2xl font-semibold antialiased">
                Personal Details
              </h1>
              <div className="mb-2 flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  value={state.firstName}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  id="firstName"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  value={state.lastName}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  id="lastName"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="email">E-mail</label>
                <input
                  value={state.email}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="email"
                  placeholder="your_name@email.com"
                  id="email"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="cell">Mobile Number</label>
                <input
                  value={state.cell}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="cell"
                  placeholder="Mobile Number"
                  id="cell"
                />
              </div>

              <div className="mb-2 flex flex-col">
                <label htmlFor="address">Address</label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="address"
                  placeholder="Address"
                  id="address"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="city">City</label>
                <input
                  value={state.city}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="city"
                  placeholder="City"
                  id="city"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="postCode">Postcode</label>
                <input
                  value={state.postCode}
                  onChange={inputHandle}
                  className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                  type="text"
                  name="postCode"
                  placeholder="Postcode"
                  id="postCode"
                />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={next}
                  className=" inter m-4 w-full bg-primary p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={pre}
                className=" inter m-4 bg-primary  p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
              >
                Previous
              </button>
              <button
                onClick={next}
                className=" inter m-4 bg-primary  p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <h1 className="text-center text-2xl font-semibold antialiased">
              Flight Details
            </h1>
            <div className="mb-2 flex flex-col">
              <label htmlFor="airPort">Air Port</label>
              <input
                value={state.airPort}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="airPort"
                placeholder="Air Port"
                id="airPort"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="terminal">Terminal</label>
              <input
                value={state.terminal}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="terminal"
                placeholder="Terminal"
                id="terminal"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="airline">Airline Name</label>
              <input
                value={state.airLine}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="airLine"
                placeholder="Airline Name"
                id="airLine"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="flightNo">Flight Number</label>
              <input
                value={state.flightNo}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="flightNo"
                placeholder="Flight Number"
                id="flightNo"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="passengers">Total Passengers</label>
              <input
                value={state.passengers}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="number"
                name="passengers"
                placeholder="Total Passengers"
                id="passengers"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="adults">Total Adults</label>
              <input
                value={state.adults}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="number"
                name="adults"
                placeholder="Total Adults"
                id="adults"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="childrenNumber">Children Number </label>
              <input
                value={state.childrenNumber}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="number"
                name="childrenNumber"
                placeholder="Children Number"
                id="childrenNumber"
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label htmlFor="disabilities">Any Disabilities</label>
              <input
                value={state.disabilities}
                onChange={inputHandle}
                className="mt-1 rounded-md border border-slate-400 p-2 outline-0 focus:border-blue-500"
                type="text"
                name="disabilities"
                placeholder="Any Disabilities"
                id="disabilities"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={pre}
                className=" inter m-4 bg-primary  p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
              >
                Previous
              </button>
              <button
                onClick={finalSubmit}
                className=" inter m-4 bg-primary  p-4 pt-4 text-xl text-black antialiased shadow-lg hover:bg-yellow-200 md:font-semibold"
              >
                Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailForm;
