import React from "react";
import Image from "next/image";
import { Buttons } from "../export_cmponents";
const HeroSection = () => {
  return (
    <main className="sm:mx-3 2xl:mx-auto 2xl:w-[1300px] bg-primary md:rounded-3xl flex justify-between text-white gap-2 ">
      <div className="my-5 md:my-20 ml-5 md:ml-10 xl:ml-20 flex flex-col max-lg:gap-10 gap-10 text-6xl  ">
        <div className="flex flex-col gap-3">
          {" "}
          <h1 className="">Connect.</h1>
          <h1 className="lg:ml-10">
            Create. <span className="text-xl sm:text-3xl">Thrive.</span>
          </h1>
          {/* <span className="text-xl md:hidden">Thrive.</span> */}
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm sm:text-[16px]  font-medium max-sm:hidden ">
            Get a stunning portfolio that speaks for you. Showcase your <br />{" "}
            skills, impress recruiters, and land your next big opportunity.
          </p>
          <p className="text-sm sm:text-lg font-extrabold  ">
            Showcase your skills, land dream projects,{" "}
            <br className="max-md:hidden" /> hire top talent, all in one place
          </p>
        </div>
        <Buttons
          label="Get started"
          className="self-center text-black font-medium text-sm sm:text-lg xl:text-2xl w-fit "
        />
      </div>
      <div className="flex gap-2">
        <Image
          src="/assets/hero-woman.png"
          alt="Portgig Logo"
          width={300}
          height={300}
          className="max-lg:hidden "
        />
        <Image
          src="/assets/hero-man.png"
          alt="Portgig Logo"
          width={300}
				  height={300}
				  
     
        />
      </div>
    </main>
  );
};

export default HeroSection;
