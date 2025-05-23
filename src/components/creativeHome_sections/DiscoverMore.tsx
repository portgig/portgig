"use client";
import React from "react";
import { Buttons } from "../export_components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DiscoverMore = () => {
  const navigate = useRouter();
  return (
    <section className=" md:flex gap-10 bodyMargin  bg-primary my-5 p-8 rounded-2xl text-white">
      <div className="w-full flex flex-col gap-5 font-raleway ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  font-black">
          Discover and Connect with Creatives in your Industry.
        </h2>
        <h2 className="text-lg  md:text-xl lg:text-2xl font-bold ">
          Make new Friends, Connect with your Tribe and bring magic to life
        </h2>
        <Buttons
          label="Visit creative Hub"
          className="rounded-lg text-black lg:text-xl w-fit mt-20 ml-10 font-bold font-urbanist"
          onClick={() => {
            navigate.push("/creative-hub");
          }}
        />
      </div>

      <div className=" w-full  max-md:hidden center">
        <Image
          src="/assets/about-image.svg"
          alt="discover more creative"
          width={300}
          height={300}
          className=""
        />
      </div>
    </section>
  );
};

export default DiscoverMore;
