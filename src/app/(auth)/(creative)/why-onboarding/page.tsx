"use client";
import Buttons from "@/src/components/Buttons";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkDone } from "react-icons/io5";

const whyOnboarding = [
  "Create a Stunning Portfolio – Professionally designed templates tailored to your field.",
  "Get Discovered – Connect with recruiters and clients actively looking for creative talent.",
  "Find Gigs & Jobs – Access exclusive job listings in the creative industry.",
  "Join a Thriving Community – Network with like-minded professionals and grow together",
];

const WhyOnboarding = () => {
  return (
    <main className=" ">
      <div className="self-start pb-7 sm:pb-30">
        <Link href="/">
          <Image
            src="/assets/portgig-2.png"
            alt="Portgig Logo"
            width={120}
            height={120}
            className="w-[100px] sm:w-[120px] h-auto lg:hidden"
          />
        </Link>
      </div>
      <div className="h-full flex flex-col gap-10 lg:gap-20 justify-center items-center max-lg:bg-white max-lg:text-primary mx-3 md:mx-10 rounded-3xl px-5 md:px-10 py-20 xl:w-8/12 lg:mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center font-ramaraja">
          Why Portgig?
        </h2>
        <ul className="leading-10 text-sm md:text-xl font-bold">
          {whyOnboarding.map((item) => (
            <li
              key={item}
              className="self-start flex items-baseline gap-5 font-raleway">
              <IoCheckmarkDone className="font-black" />
              {item}
            </li>
          ))}
        </ul>
        <Buttons
          label="Go to Dashboard"
          className="max-lg:bg-primary max-lg:text-white lg:text-primary rounded-sm !px-15 sm:text-3xl font-inter"
          onClick={() => {}}
        />
      </div>
    </main>
  );
};

export default WhyOnboarding;
