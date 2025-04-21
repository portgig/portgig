"use client";
import React from "react";
import { Buttons } from "../export_components";
import { useRouter } from "next/navigation";

interface BannerPropType {
  label: string;
}
const Banner = ({ label }: BannerPropType) => {
  const navigate = useRouter();

  return (
    <section className="bodyMargin my-8 px-5 max-md:hidden ">
      <div className="px-8 py-4 bg-primary rounded-full md:rounded-4xl flex items-center justify-between shadow">
        {/* creatuve */}
        <div className="flex items-center justify-center  gap-5">
          <h2 className="font-bold">Create your portfolio</h2>
          <Buttons
            label={label}
            className=" text-black font-medium text-sm not-odd:w-fit !py-2 cursor-pointer"
            onClick={() => {
              navigate.push("/sign-up");
            }}
          />
        </div>
        {/* hire */}
        <div className="flex items-center justify-center  gap-5">
          <h2 className="font-bold">Hiring creative</h2>
          <Buttons
            label={label}
            className=" text-black font-medium text-sm not-odd:w-fit !py-2 cursor-pointer"
            onClick={() => {
              navigate.push("/recruiter-sign-up");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
