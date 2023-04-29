"use client";
import React, { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
// import "flowbite-datepicker";
import Datepicker from "tailwind-datepicker-react";
import { SignIn, SignInButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
// import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Navbar from "~/components/NavBar";
// import Footer from "~/components/Footer";
// import Quote from "~/components/Quote";
import Hero from "../assets/images/home.jpg";
import Features from "~/components/Features";
// const CreatePostWizard = () => {
//   const { user } = useUser();
//   if (!user) return null;
//   return (
//     <div className="flex w-full gap-4">
//       <Image
//         src={user.profileImageUrl}
//         alt="Profile Image"
//         width={56}
//         height={56}
//         className="h-16 w-16  rounded-full"
//       />
//       <input
//         placeholder="Type some text"
//         className="grow bg-transparent outline-none"
//       />
//     </div>
//   );
// };

// type PostWithUser = RouterOutputs["posts"]["getAll"][number];
// const PostView = (props: PostWithUser) => {
//   const { post, author } = props;
//   return (
//     <div key={post.id} className="gap-3 border-b border-slate-400 p-4">
//       <Image
//         src={author.profileImageUrl}
//         alt="Profile Image"
//         width={56}
//         height={56}
//         className="h-16 w-16 rounded-full"
//       />
//       <div className="flex flex-col">
//         <div className="text-slate-40 flex gap-1 ">
//           <span>{`@${author.username}`}</span> .{" "}
//           <span className="font-thin">{dayjs(post.createdAt).fromNow()}</span>
//         </div>
//         <span>{post.content}</span>
//       </div>
//     </div>
//   );
// };
const options = {
  title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-red-500",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};
const Home: NextPage = () => {
  // const user = useUser();
  // const { data } = api.posts.getAll.useQuery();
  // const { data, isLoading } = api.posts.getAll.useQuery();
  // if (isLoading) return <div>Loading...</div>;
  // if (!data) return <div>Something went wrong!</div>;
  const [toshow, setToShow] = useState(false);
  const [fromshow, setFromShow] = useState(false);
  const handleToChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleFromChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleToClose = (state: boolean) => {
    setToShow(state);
  };
  const handleFromClose = (state: boolean) => {
    setFromShow(state);
  };
  const shoot = () => {
    alert("Booking Confirmed!");
  };
  return (
    <>
      <Head>
        <title>Car Parking | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <div className=" relative ">
          <Image src={Hero} alt="Home" className="mx-auto h-[80vh] md:w-full" />

          <div className=" md:left-94 absolute z-10 mx-auto mt-20 w-full rounded-2xl bg-white p-4  md:right-60 md:top-40 md:w-[70%]">
            <div className="  sm:pl-[0px] md:pl-[300px]">
              <span className="extrabold text-2xl text-black md:text-4xl">
                Airport Car Parking Meet & Greet
              </span>

              <br />
              <br />
              <span className="bold  text-xl italic text-primary md:text-3xl">
                Exemplary Service Guaranteed!
              </span>
            </div>
            <div className="gap-3 p-4 text-black md:flex">
              <div className="md:full md:flex-0 pb-4  pt-4  sm:w-full ">
                <label className=" p-4 text-xl">Departure Date</label>
                <Datepicker
                  // options={options}
                  onChange={handleToChange}
                  show={toshow}
                  setShow={handleToClose}
                />
              </div>
              <div className="md:full flex-row pb-4  pt-4 sm:w-full">
                <label className="space-x-4 p-4 text-xl">Arrival Date</label>
                <Datepicker
                  // options={options}
                  onChange={handleFromChange}
                  show={fromshow}
                  setShow={handleFromClose}
                />
              </div>
            </div>
            <div className="w-full">
              <button
                onClick={shoot}
                className="h-[6vh] w-full rounded-lg bg-primary p-2 text-xl text-black"
                type="submit"
              >
                Get a Quote!
              </button>
            </div>
          </div>
        </div>
        <Features />
        {/* <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex justify-center border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />{" "}
              </div>
            )}
            {user.isSignedIn && <CreatePostWizard />}
          </div>
          <div className="flex flex-col">
            {[data]?.map((fullPost) => (
              <PostView {...fullPost} key={fullPost.post.id} />
            ))}
          </div>
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" /> */}

        {/* <div className="bg-hero"></div> */}
        {/* <Image src={Hero} alt="Home" className="mx-auto  md:w-full" /> */}
        {/* <Quote /> */}

        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Home;
