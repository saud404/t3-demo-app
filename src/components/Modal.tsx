// import React from "react";
// import ReactDOM from "react-dom";
// import { BsLightningChargeFill } from "react-icons/bs";
// interface PropType {
//   open: boolean;
//   children: React.ReactNode;
//   onClose: () => void;
// }
// const Modal = (props: PropType) => {
//   if (!props.open) return null;
//   return ReactDOM.createPortal(
//     <>
//       <div className=" left-0 z-[1000] bg-black ">
//         <div className="translate-[2%] fixed bottom-[10%] left-[8%] right-[8%] top-[10%] z-[1000] col-span-1  grid bg-white md:grid-cols-2 ">
//           <div className="hidden h-full w-full rounded-r-3xl bg-[url(/public/signup.png)] bg-hero bg-cover bg-center bg-no-repeat md:flex lg:flex">
//             <div className="grid-col-1 absolute left-20 top-[50%] grid gap-3">
//               <button className="flex items-center justify-center space-x-2 rounded-full bg-[#FFCB12] py-2">
//                 <div className="flex items-center rounded-full bg-[#B38686] p-2">
//                   <BsLightningChargeFill className="text-2xl text-black " />
//                 </div>
//                 <div className="text-sm">Specializing Luxury</div>
//               </button>
//               <div className="w-48 rounded-lg bg-white/30 p-4 backdrop-blur-sm">
//                 <div className="mb-2 h-10 w-10 rounded-lg bg-black p-2">
//                   <svg
//                     className="h-5 w-5 text-white"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     stroke-width="2"
//                     stroke="currentColor"
//                     fill="none"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" />{" "}
//                     <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />{" "}
//                     <path d="M4 16v2a2 2 0 0 0 2 2h2" />{" "}
//                     <path d="M16 4h2a2 2 0 0 1 2 2v2" />{" "}
//                     <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
//                   </svg>
//                 </div>
//                 <div>Your local property investment expert</div>
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={props.onClose}
//             className="absolute right-0 top-0 p-2 text-3xl"
//           >
//             <svg
//               className="h-5 w-5 text-black"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke-width="2"
//               stroke="currentColor"
//               fill="none"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <path stroke="none" d="M0 0h24v24H0z" />{" "}
//               <line x1="18" y1="6" x2="6" y2="18" />{" "}
//               <line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           </button>
//           {props.children}
//         </div>
//       </div>
//     </>
//     // ,
//     // document.getElementById("portal")
//   );
// };

// export default Modal;
