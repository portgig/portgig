"use client";
import React from "react";
import Image from "next/image";
import { Buttons } from "../export_components";
const HeroSection = () => {
  return (
    <main className="bodyMargin bg-primary md:rounded-3xl flex justify-between text-white gap-2 ">
      <div className="my-5 md:my-20 ml-5 md:ml-10 xl:ml-20 flex flex-col max-lg:gap-10 gap-15  text-6xl  ">
        <div className="flex flex-col gap-3 ">
          {" "}
          <h1 className="">Connect.</h1>
          <h1 className="lg:ml-15">
            Create. <span className="text-xl sm:text-3xl">Thrive.</span>
          </h1>
          {/* <span className="text-xl md:hidden">Thrive.</span> */}
        </div>
        <div className="flex flex-col gap-5 font-raleway">
          <p className="text-sm sm:text-[16px]  font-medium max-sm:hidden ">
            Get a stunning portfolio that speaks for you. <br />
            Showcase your skills, impress recruiters, and <br />
            land your next big opportunity.
          </p>
          <p className="text-sm sm:text-lg font-extrabold  ">
            Showcase your skills, land dream projects,{" "}
            <br className="max-sm:hidden" />
            hire top talent, all in one place
          </p>
        </div>
        <Buttons
          onClick={() => {}}
          label="Get started"
          className="self-center text-black font-semibold text-sm px-10 py-3  w-fit cursor-pointer"
        />
      </div>
      <div className="flex gap-2">
        <Image
          src="/assets/hero-woman.svg"
          alt="Portgig Logo"
          width={300}
          height={500}
          className="max-lg:hidden h-full w-auto "
        />
        <Image
          src="/assets/hero-man.svg"
          alt="Portgig Logo"
          width={300}
          height={500}
          className="h-full w-auto "
        />
      </div>
    </main>
  );
};

export default HeroSection;
