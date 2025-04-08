"use client";
import { creatives } from "@/constants";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/components/export_cmponents";

const DashboardSection = () => {
  const creative = creatives[0];
  return (
    <section className="flex flex-col gap-5 my-10">
      <div className="h-15 bg-linear-gradient w-full flex justify-center items-center">
        <h2 className="heading">
          {" "}
          Your Portfolio, Your Stage – Take Control Now!
        </h2>
      </div>
      {/*  */}
      <div className="flex flex-col lg:flex-row gap-10 bodyMargin">
        {" "}
        <div className="flex-2/3   bg-primary  rounded-lg p-10 flex justify-center items-center ">
          <p className="text-center text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl  font-bold">
            {" "}
            Access your dashboard to showcase your work, track job applications,
            and connect with top recruiters. Your creative journey starts here!
          </p>
        </div>
        <div className="flex-1/3   mx-3 ">
          <div
            key={creative.id}
            className="flex flex-col gap-3 pb-5 pr-2 rounded-lg border-2 border-secondary text-secondary">
            <div className="flex justify-between items-center">
              <Image
                src={creative.creativeImage}
                alt={creative.name}
                width={150}
                height={150}
              />
              <div className="bg-secondary/80 text-white py-2 px-5">
                {creative.level}
              </div>
            </div>
            <h2 className="text-primary font-bold text-xl px-5">
              {creative.name} ({creative.username})
            </h2>
            <h2 className="text-primary font-extralight  text-xl px-5 line-clamp-1">
              {creative.field} / {creative.location}
            </h2>
            <div className=" bg-gray100 h-20 ml-2 p-1 border border-secondary text-sm line-clamp-3">
              {creative.introduction}
            </div>
            <div className="flex justify-between pl-2 text-white">
              <Buttons
                label="View profile"
                className="!bg-primary w-fit self-end rounded-lg text-sm sm:text-xl md:text-sm font-extralight "
                onClick={() => {}}
              />
              <Buttons
                label="Contact Me"
                className="!bg-primary w-fit self-end rounded-lg text-sm sm:text-xl md:text-sm font-extralight "
                onClick={() => {}}
              />
            </div>
          </div>
          ; ;
        </div>
      </div>
      <div className="bodyMargin flex justify-end">
        {" "}
        <Buttons
          label="Go to Dashboard"
          className=" !bg-primary w-fit self-end rounded-lg font-bold text-xl"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default DashboardSection;
