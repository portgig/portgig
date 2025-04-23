"use client";
import { creatives } from "@/src/constants";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/src/components/export_components";
import { useRouter } from "next/navigation";

const DashboardSection = () => {
	const navigate = useRouter();
  const creative = creatives[0];
  return (
    <section className="flex flex-col gap-5 my-10">
      <div className="h-15 bg-secondary px-5  flex  items-center bodyMargin">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          {" "}
          Your Portfolio, Your Stage – Take Control Now!
        </h2>
      </div>
      {/*  */}
      <div className="flex flex-col lg:flex-row gap-10 bodyMargin">
        {" "}
        <div className="flex-2/3   bg-primary  rounded-lg py-5 flex text-center items-center ">
          <p className="text-center text-xl sm:text-2xl lg:text-4xl font-bold font-ralway">
            {" "}
            Access your dashboard to showcase your work, track job applications,
            and connect with top recruiters. Your creative journey starts here!
          </p>
        </div>
        <div className="flex-1/3   mx-3 ">
          <div
            key={creative.id}
            className="flex flex-col gap-3 pb-5 pr-2 rounded-lg shadow-lg text-secondary font-raleway">
            <div className="flex justify-between items-center">
              <Image
                src={creative.creativeImage}
                alt={creative.name}
                width={150}
                height={150}
              />
              <div className="bg-secondary/80 text-white py-2 px-5 font-ramaraja">
                {creative.level}
              </div>
            </div>
            <h2 className="text-primary font-bold text-lg px-5">
              {creative.name} ({creative.username})
            </h2>
            <h2 className="text-primary font-extralight  text-sm px-5 line-clamp-1">
              {creative.field} / {creative.location}
            </h2>
            <div className=" bg-gray100 h-20 mx-2 p-1 border border-gray100 text-xsvline-clamp-3">
              {creative.introduction}
            </div>
            <div className="flex justify-between px-5 text-white">
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
          onClick={() => {
            navigate.push("/creative-dashboard");
          }}
        />
      </div>
    </section>
  );
};

export default DashboardSection;
