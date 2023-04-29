/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/Asset 4.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center justify-between border-b-4 border-b-primary bg-header px-10 pt-10 font-medium text-white antialiased md:px-16">
        <div className="z-10 flex w-full items-center justify-between lg:w-auto">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={48}
              height={48}
              className="h-20 w-40"
            />
          </Link>
          <button className="text-2xl lg:hidden" onClick={() => setOpen(!open)}>
            <BiMenu />
          </button>
        </div>
        <div className="flex items-center">
          <nav className="hidden items-end justify-end space-x-4  text-lg uppercase lg:flex">
            <Link
              className="inline-block px-3 py-7 hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-block px-3 py-7 hover:text-primary"
              href="/story"
            >
              Our Story
            </Link>
            <Link
              className="inline-block px-3 py-7 hover:text-primary"
              href="/meeting"
            >
              Meeting Point
            </Link>
            <Link
              className="inline-block px-3 py-7 hover:text-primary"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="inline-block px-3 py-7 hover:text-primary"
              href="/contact"
            >
              Contact Us
            </Link>
          </nav>
          <div className="ml-5 hidden lg:block">
            <button
              //   href="contact"
              className="hover:bg-white-100 font-transparent rounded border bg-gray-800 px-4 py-2 text-gray-200 hover:border-transparent hover:bg-primary hover:text-white"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-10 flex w-full items-center justify-center bg-black p-10 pt-36 duration-500 lg:hidden ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <nav className="space-y-4 text-center">
          <div>
            <Link
              className="border-1 inline-block border-b-2 px-3 py-2 text-white"
              href="/home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className="border-1 inline-block border-b-2 px-3 py-2 text-white"
              href="/story"
            >
              Our Story
            </Link>
          </div>

          <div>
            <Link
              className="border-1 inline-block border-b-2 px-3 py-2 text-white"
              href="/meeting"
            >
              Meeting Point
            </Link>
          </div>
          <div>
            <Link
              className="border-1 inline-block border-b-2 px-3 py-2 text-white"
              href="/services"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className="border-1 inline-block border-b-2 px-3 py-2 text-white"
              href="/contact"
            >
              Contact
            </Link>
          </div>

          <div className="mt-2">
            <button
              //   href="contact"

              className="hover:bg-white-100 font-transparent rounded border bg-gray-800 px-4 py-2 text-gray-200 hover:border-transparent hover:bg-primary hover:text-white"
            >
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
