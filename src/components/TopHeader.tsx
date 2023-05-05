// import React, { useState } from "react";
// import SignInComponent from "./SignIn";
// import { BsFillTelephoneFill, BsPersonFill, BsPlus } from "react-icons/bs";
// import Image from "next/image";
// // import Modal from "./Modal";

// export const TopHeader = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [login, setLogin] = useState(true);

//   return (
//     <header className="md:px-18 sticky top-0 z-20 flex w-full flex-wrap items-center justify-between bg-gray-800 px-10 py-2 text-xs text-gray-100">
//       <div className="item-center flex space-x-6 py-2 sm:py-0">
//         <div className="flex w-20 items-center space-x-2">
//           {/* <Image
//             className=""
//             width={60}
//             height={20}
//             src="/../assets/images/AED.png"
//             alt="AED Currency"
//           /> */}
//           <div className="hover:text-primary">GBP | USD</div>
//         </div>
//         <div className="flex w-20 items-center space-x-2">
//           {/* <Image
//             width={60}
//             height={20}
//             className="h-3 w-6 hover:text-primary"
//             src="/../assets/images/USD.png"
//             alt="USD Currency"
//           /> */}
//           <div className="hover:text-primary">English</div>
//         </div>
//       </div>
//       <div className="flex items-center space-x-8 py-2 sm:py-0">
//         {" "}
//         {login && (
//           <>
//             <div className="flex items-center space-x-2">
//               <BsPlus size="1.2rem" />
//               <button className="text-white hover:text-primary">Add Car</button>
//             </div>
//             <div className="flex items-center space-x-2">
//               <BsPlus size="1.2rem" />
//               <button className="text-white hover:text-primary">
//                 Add Booking
//               </button>
//             </div>
//           </>
//         )}
//         <div className="flex items-center space-x-2">
//           <BsPersonFill size="1.2rem" />
//           <button
//             onClick={() => setIsOpen(true)}
//             className="text-white hover:text-primary"
//           >
//             My Account
//           </button>
//         </div>{" "}
//         <div className="flex items-center space-x-2">
//           <BsFillTelephoneFill />
//           <button className="text-white hover:text-primary">
//             +92 342 441 234
//           </button>
//         </div>{" "}
//         {login && (
//           <div className="flex items-center space-x-2">
//             <button className="flex items-center  text-white hover:text-primary">
//               <svg
//                 className="mr-2 h-5 w-5 text-white"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke="currentColor"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 {" "}
//                 <path stroke="none" d="M0 0h24v24H0z" />{" "}
//                 <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
//                 <path d="M7 12h14l-3 -3m0 6l3 -3" />
//               </svg>
//               Log Out
//             </button>
//           </div>
//         )}
//         {/* <div onClick={() => console.log("Modal Clicked")}>
//           <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//             <SignInComponent />
//           </Modal>
//         </div> */}
//       </div>
//     </header>
//   );
// };
