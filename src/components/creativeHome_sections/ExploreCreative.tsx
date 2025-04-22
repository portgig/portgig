"use client";
import { creatives } from "@/src/constants";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/src/components/export_components";
import { useRouter } from "next/navigation";
const ExploreCreative = () => {
  const navigate = useRouter();
  return (
    <section className="bodyMargin flex flex-col gap-5">
      <div className="flex justify-between text-secondary">
        {" "}
        <h2 className="font-bold text-2xl">Meet creatives</h2>
      </div>
      {/* Jobs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-raleway">
        {creatives.map((creative, index) => (
          <div
            key={creative.id}
            className={`flex flex-col gap-2 pb-5 px-5 rounded-lg shadow-lg   ${
              index % 4 === 1
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}>
            <div className="flex justify-between items-center">
              <div className="h-[100px] w-[100px] overflow-hidden">
                <Image
                  src={creative.creativeImage}
                  alt={creative.name}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="bg-secondary/70 text-white py-2 px-5 font-ramaraja">
                {creative.level}
              </div>
            </div>
            <h2 className="  font-bold text-sm px-5">
              {creative.name} ({creative.username})
            </h2>
            <h2 className=" even:text-white font-extralight  text-sm px-5 line-clamp-1">
              {creative.field} / {creative.location}
            </h2>
            <div
              className={`   h-14  p-1 border    text-xs line-clamp-3 ${
                index % 4 === 1
                  ? "bg-primary text-white"
                  : "bg-gray50 text-primary border-gray100"
              }`}>
              {creative.introduction}
            </div>
            <div className="flex justify-between px-2 mt-5 ">
              <button
                className={`py-2 px-5 w-fit self-end rounded-lg text-sm font-extralight ${
                  index % 4 === 1
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}>
                View Profile
              </button>
              <button
                className={`py-2 px-5 w-fit self-end rounded-lg text-sm font-extralight ${
                  index % 4 === 1
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}>
                Contact Me
              </button>
            </div>
          </div>
        ))}
      </div>
      <Buttons
        label="Visit Creatives Hub"
        className="!bg-primary w-fit self-end rounded-lg font-bold text-xl"
        onClick={() => {
          navigate.push("/creative-hub");
        }}
      />
    </section>
  );
};

export default ExploreCreative;
