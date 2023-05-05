// import React, { useState } from "react";
// import { BsArrow90DegLeft } from "react-icons/bs";
// // import SignUpComponent from "./SignUpComponent"
// // import SignUpModal from "./SignUpModal"

// const SignInComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [form, setForm] = useState("login");

//   const closeModal = (e) => {
//     if (e.target.id === "modal") {
//       setIsOpen(false);
//     }
//   };

//   const onSignup = (e) => {
//     e.preventDefault();
//   };

//   if (form === "forget")
//     return (
//       <form className="flex flex-col justify-center space-y-4 px-4 py-10">
//         <div className="text-3xl font-semibold">Reset Password</div>
//         <div className="w-full">
//           <div className="mb-2">
//             Email <span className="text-red-500">*</span>
//           </div>
//           <input
//             type="text"
//             className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//             placeholder="Your Email"
//           />
//         </div>
//         <button className="w-full rounded-lg border bg-black py-2 text-lg text-white hover:border-transparent hover:bg-primary hover:text-black">
//           Reset Password
//         </button>
//         <div className="flex items-baseline">
//           <div className="pl-[0.15rem] text-[#A0A0A0] hover:cursor-pointer">
//             Already have an account?
//           </div>
//           <div
//             onClick={() => setForm("login")}
//             className="text-blue-6 00 text-blue-600hover:cursor-pointer px-2 py-2 hover:text-blue-600"
//           >
//             Sign In
//           </div>
//         </div>
//       </form>
//     );

//   if (form === "signup")
//     return (
//       <form className="flex flex-col justify-center space-y-4 px-4 py-10">
//         <div className="text-3xl font-semibold">Create Account</div>
//         <div className="w-full">
//           <div className="mb-2">
//             Full Name <span className="text-red-500">*</span>
//           </div>
//           <input
//             type="text"
//             className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//             placeholder="Your Full Name"
//           />
//         </div>
//         <div className="w-full">
//           <div className="mb-2">
//             Email <span className="text-red-500">*</span>
//           </div>
//           <input
//             type="text"
//             className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//             placeholder="Your Email"
//           />
//         </div>
//         <div className="w-full">
//           <div className="mb-2">
//             Password <span className="text-red-500">*</span>
//           </div>
//           <input
//             type="text"
//             className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//             placeholder="Your Password"
//           />
//         </div>
//         <button className="text-whitehover:border-transparent w-full rounded-lg border bg-black py-2 text-lg hover:bg-primary hover:text-black">
//           Create Account
//         </button>
//         <div className="flex items-baseline">
//           <div className="pl-[0.15rem] text-[#A0A0A0] hover:cursor-pointer">
//             Already have an account?
//           </div>
//           <div
//             onClick={() => setForm("login")}
//             className="text-blue-6 00 text-blue-600hover:cursor-pointer px-2 py-2 hover:text-blue-600"
//           >
//             Sign In
//           </div>
//         </div>
//       </form>
//     );

//   return (
//     <form
//       onSubmit={onSignup}
//       className="flex flex-col justify-center space-y-4 px-4 py-10"
//     >
//       <div className="text-3xl font-semibold">Log In to your Account</div>
//       <div className="w-full">
//         <div className="mb-2">
//           Email <span className="text-red-500">*</span>
//         </div>
//         <input
//           type="text"
//           className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//           placeholder="Your Email"
//         />
//       </div>
//       <div className="w-full">
//         <div className="mb-2">
//           Password <span className="text-red-500">*</span>
//         </div>
//         <input
//           type="text"
//           className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
//           placeholder="Your Password"
//         />
//       </div>
//       <button className="text-whitehover:border-transparent w-full rounded-lg border bg-black py-2 text-lg hover:bg-primary hover:text-black">
//         Log In
//       </button>
//       <div
//         className="flex cursor-pointer items-center text-gray-500"
//         onClick={() => setForm("forget")}
//       >
//         Forget Password ?
//       </div>
//       <div
//         className="flex cursor-pointer items-center"
//         onClick={() => setForm("signup")}
//       >
//         <div className="pl-[0.15rem] text-[#A0A0A0]">Dont have an account?</div>
//         <div className="text-blue-6 00 text-blue-600hover:cursor-pointer px-2 py-2 hover:text-blue-600">
//           Sign Up
//         </div>
//       </div>
//     </form>
//   );
// };

// export default SignInComponent;
