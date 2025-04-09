"use client";
import React from "react";
import { Buttons } from "../export_components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DiscoverMore = () => {
  const navigate = useRouter();
  return (
    <section className=" md:flex gap-10 bodyMargin  bg-primary my-5 p-8 rounded-2xl text-white">
      <div className="flex-2/3 flex flex-col gap-5 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
          Discover and Connect with Creatives in your Industry.
        </h2>
        <h2 className="text-sm  md:text-xl lg:text-xl font-bold">
          Make new Friends, Connect with your Tribe and bring magic to life
        </h2>
        <Buttons
          label="Visit creative Hub"
          className="rounded-lg text-black lg:text-xl w-fit font-bold"
          onClick={() => {
            navigate.push("/creative-hub");
          }}
        />
      </div>

      <div className="flex-1/3  w-full  max-md:hidden">
        <div className="relative   h-72 w-64">
          <Image
            src="/assets/dis-man.png"
            alt="discover more creative"
            width={200}
            height={200}
          />
          <Image
            src="/assets/dis-woman.png"
            alt="discover more creative"
            width={120}
            height={120}
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
