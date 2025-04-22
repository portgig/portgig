"use client";
import React from "react";
import Image from "next/image";
import Buttons from "../Buttons";
const CommunitySection = () => {
  return (
    <section className="bodyMargin flex gap-5">
      <div className="flex flex-col gap-3 w-full">
        {" "}
        <div className="h-15 w-full bg-secondary flex justify-start items-center mt-5 p-8 ">
          <p className="text-white font-bold subHeading">
            Feeling overwhelmed?{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 font-raleway">
          <h2 className="text-primary text-xl lg:text-2xl font-black">
            I bet it’s not just you, Join your community
          </h2>
          <p className="text-textColor text-sm md:text-sm font-bold leading-6 ">
            Get inspired by like-minded individuals, exchange ideas, <br /> and
            build meaningful connections that propel your career forward.
          </p>
        </div>
        <div className="flex flex-col gap-3 font-raleway">
          <h2 className="text-primary text-xl lg:text-2xl font-black">
            What’s inside?
          </h2>
          <p className="text-textColor text-sm md:text-sm font-bold leading-6 ">
            Private forums tailored to your creative field. Networking <br />
            opportunities with top professionals. <br /> Access to exclusive
            events, workshops, and job postings.
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <h2 className="text-primary text-lg md:text-xl lg:text-2xl font-bold font-raleway">
            Join the Community
          </h2>
          <Buttons
            className="!bg-primary !rounded-none text-white w-fit shadow px-10 font-bold"
            label="Click here"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex justify-center items-center  w-full max-md:hidden ">
        <Image
          src="/assets/women-group.png"
          alt="Ellipse-woman.png"
          width={320}
          height={360}
          className=" object-filll"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
