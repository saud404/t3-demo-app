// import React, { useState } from "react";
// import "react-responsive-datepicker/dist/index.css";
// import { TimePicker } from "react-ios-time-picker";
// const Parking = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [value, setValue] = useState("10:00");

//   const onChange = (timeValue) => {
//     setValue(timeValue);
//   };
//   //   if (typeof window !== 'undefined') {
//   //     React.render(<MainWrapper />, document.getElementById("root"));
//   // }
//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             setIsOpen(true);
//           }}
//           //   onChange={onChange}
//         >
//           open
//         </button>
//         <DatePicker
//           isOpen={isOpen}
//           onClose={() => setIsOpen(false)}
//           defaultValue={new Date(2022, 8, 8)}
//           minDate={new Date(2022, 10, 10)}
//           maxDate={new Date(2023, 0, 10)}
//           headerFormat="DD, MM dd"
//         />
//         {/* <TimePicker onChange={onChange} value={value} /> */}
//       </div>
//       {/* <div>
//         <TimePicker onChange={onChange} value={value} use12Hours />
//       </div> */}
//     </>
//   );
// };

// export default Parking;
