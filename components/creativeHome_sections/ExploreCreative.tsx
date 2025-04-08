"use client";
import { creatives } from "@/constants";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/components/export_cmponents";

const ExploreCreative = () => {
  return (
    <section className="bodyMargin flex flex-col gap-5">
      <div className="flex justify-between text-secondary">
        {" "}
        <h2 className="font-bold">Meet creatives</h2>
      </div>
      {/* Jobs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {creatives.map((creative) => (
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
                className="!bg-primary w-fit self-end rounded-lg text-sm font-extralight "
                onClick={() => {}}
              />
              <Buttons
                label="Contact Me"
                className="!bg-primary w-fit self-end rounded-lg text-sm font-extralight "
                onClick={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
      <Buttons
        label="Visit Creatives Hub"
        className="!bg-primary w-fit self-end rounded-lg font-bold text-xl"
        onClick={() => {}}
      />
    </section>
  );
};

export default ExploreCreative;
