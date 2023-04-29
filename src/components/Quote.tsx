// "use client";
// import React, { useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker";
// const Quote = () => {
//   const [value, setValue] = useState({
//     startDate: new Date(),
//     endDate: new Date().setMonth(11),
//   });

//   const handleValueChange = (newValue) => {
//     console.log("newValue:", newValue);
//     setValue(newValue);
//   };
//   return (
//     <div className="mx-auto grid  w-[800px] grid-cols-1 gap-4 md:grid-cols-2">
//       <div className="cols-span-1 ">
//         <Datepicker value={value} onChange={handleValueChange} />
//       </div>
//       <button className="cols-span-1  rounded-lg bg-primary py-2 text-sm capitalize text-white shadow shadow-black/60">
//         Get a Quote !
//       </button>
//     </div>
//   );
// };

// export default Quote;
