"use client"
import React from "react";
import { useRouter } from "next/navigation";
const ProfileAnalytics = () => {
  const navigate = useRouter();

  return (
    <section className="bodyMargin py-5 text-primary font-raleway">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="font-bold">Profile Analytics</h2>
          <div className="flex flex-col p-5 justify-center bg-primary rounded-lg text-white">
            <h2 className="text-[10px] sm:text-sm md:text-xl">
              How many profile view
            </h2>
            <h2 className="font-bold text-center sm:text-sm md:text-xl">100</h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h2 className="font-bold">Last 30 bays</h2>
          <div
            className="flex flex-col p-5 justify-center bg-primary rounded-lg text-white cursor-pointer"
            onClick={() => {
              navigate.push("/creative-dashboard/viewed-by");
            }}>
            <h2 className="text-[10px] sm:text-sm md:text-xl">
              How many profile view
            </h2>
            <h2 className="font-bold text-center sm:text-sm md:text-xl">50</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAnalytics;
