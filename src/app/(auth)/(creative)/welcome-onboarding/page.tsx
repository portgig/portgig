"use client";
import Buttons from "@/src/components/Buttons";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const WelcomeOnboarding = () => {
  return (
    <main className=" ">
      <div className="self-start  max-sm:pb-10 sm:pb-30 ">
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
      <div className="flex flex-col gap-5 lg:gap-20 justify-center items-center max-lg:bg-white max-lg:text-primary mx-3 md:mx-10 rounded-3xl px-5 md:px-10 py-20 xl:w-8/12 lg:mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center font-ramaraja">
          Welcome
        </h2>
        <p className="leading-10 text-center text-sm md:text-xl font-bold font-raleway ">
          PortGig is the ultimate platform for creatives to showcase their work,
          connect with professionals, and land gigs effortlessly. Whether
          you&apos;re a designer, writer, photographer, or any creative
          professional, PortGig gives you a comprehensive and structured
          portfolio to display your skills while opening doors to job
          opportunities.
        </p>
        <Buttons
          label="Next"
          className="max-lg:bg-primary max-lg:text-white lg:text-primary rounded-sm !px-15  sm:text-3xl font-inter"
          onClick={() => {}}
        />
      </div>
    </main>
  );
};

export default WelcomeOnboarding;
