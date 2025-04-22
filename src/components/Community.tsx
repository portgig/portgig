"use client";
import React from "react";
import Image from "next/image";
import { Buttons } from "./export_components";
const Community = () => {
  return (
    <section className=" my-10 flex flex-col gap-5">
      <div className="h-15 bg-secondary w-full px-5 flex  items-center bodyMargin">
        <h2 className="subHeading"> Feeling overwhelmed</h2>
      </div>
      <div className=" md:flex gap-10 bodyMargin  bg-primary my-5 p-8 rounded-2xl text-white font-raleway">
        <div className=" flex flex-col gap-15  ">
          <p className="font-bold">
            Get inspired by like-minded individuals, exchange ideas, and build
            meaningful connections that propel your career forward.
          </p>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              What’s inside?
            </h2>
            <p className=" font-bold">
              Private forums tailored to your creative field. Networking
              opportunities with top professionals. Access to exclusive events,
              workshops, and job postings.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Join the Community</h2>
            <Buttons
              label="Click here"
              className="rounded-none px-10 py-1 text-black lg:text-xl w-fit font-bold font-urbanist"
              onClick={() => {}}
            />
          </div>
        </div>

        <div className=" max-md:hidden h-96 w-full ">
          <Image
            src="/assets/two-woman.png"
            alt="Discover more creatives"
            width={500}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
