import Link from "next/link";
import React from "react";

const DetailForm = () => {
  return (
    <form className=" rounded px-8 pb-8 pt-6 antialiased shadow-md">
      <div className="">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Full Name
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="fullName"
          type="text"
          placeholder=" Full Name"
        />
      </div>
      <div className="mb-4 pt-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Address
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="address"
          type="text"
          placeholder="Address"
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="cell"
        >
          Cell
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="cell"
          type="text"
          placeholder="Cell Number"
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="email"
          type="email"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-4 pt-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="carReg"
        >
          Car Reg
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="carReg"
          type="text"
          placeholder="Car Registration Number"
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="carMake"
        >
          Car Make
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="carMake"
          type="text"
          placeholder="Car Make"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="carModel"
        >
          Car Model
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="carModel"
          type="text"
          placeholder="Car Model"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Notes
        </label>
        <input
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border  px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none "
          id="notes"
          type="text"
          placeholder="Any parking related notes"
        />
        <p className="hidden text-xs italic text-red-500">
          Please write any notes.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/Details"
          type="submit"
          className=" w-full rounded-xl bg-primary p-3 text-center text-xl font-bold text-black hover:bg-yellow-500 md:p-3 "
        >
          Proceed to Payment
        </Link>
      </div>
    </form>
  );
};

export default DetailForm;
