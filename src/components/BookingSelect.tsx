import React, { useState } from "react";
import BookingCard from "./BookingCard";

const BookingSelect = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex w-[100vw] items-center justify-center bg-gray-100 p-4 duration-300 ease-linear dark:bg-slate-900">
        <BookingCard toggle={toggle} settoggle={setToggle} />

        {/* <Login/> */}
      </div>
    </>
  );
};

export default BookingSelect;
