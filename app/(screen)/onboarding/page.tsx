"use client";

import React from "react";
import { Buttons } from "@/components/export_components";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Page = () => {
  const navigate = useRouter();
  return (
    <div className="flex h-[100dvh]">
      <div
        className="flex-2/3 bg-no-repeat bg-cover max-lg:hidden"
        style={{ backgroundImage: `url('/assets/onboarding.png')` }}>
        <Image
          src="/assets/portgig-2.png"
          alt="Portgig Logo"
          width={150}
          height={150}
        />
      </div>
      {/* 2 */}
      <div className="flex-3/3 lg:bg-primary max-lg:opacity-50 flex flex-col items-center justify-center gap-10 sm:gap-20 text-white max-lg:bg-[url('/assets/onboarding.png')] bg-cover bg-no-repeat">
        <h2 className="text-4xl font-bold max-lg:hidden">Welcome</h2>
        <div className="flex flex-col items-center gap-5 sm:gap-10">
          {" "}
          <h1 className="max-sm:!text-3xl">Creative</h1>
          <Buttons
            label="Get Started"
            onClick={() => {
              navigate.push('/sign-up');
            }}
            className="text-black text-xl sm:text-3xl !rounded-xl w-96 sm:w-[500px] h-16 sm:h-20 cursor-pointer"
          />
        </div>
        {/* recruiter */}
        <div className="flex flex-col items-center gap-5 sm:gap-10">
          {" "}
          <h1>Recruiter</h1>
          <Buttons
            label="Get Started"
            onClick={() => {
              navigate.push('/recruiter-sign-up');
            }}
            className="text-black text-xl sm:text-3xl !rounded-xl w-96 sm:w-[500px] h-16 sm:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
