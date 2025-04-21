import { creativeProcess, recruiterProcess } from "@/src/constants";
import React from "react";
import Image from "next/image";
import { FaRegSquareCheck } from "react-icons/fa6";

const HowToSection = () => {
  return (
    <section className="bodyMargin my-5 flex flex-col gap-3">
      <div className="h-15 bg-linear-gradient w-full flex justify-center items-center">
        <h2 className="heading"> How it works?</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-evenly">
        <div className="flex flex-col">
          <h2 className="text-textColor text-lg md:text-xl lg:text-2xl font-black mt-5 text-center">
            For creatives
          </h2>
          <div className="bg-primary py-5 px-5 rounded-lg h-72">
            <ul>
              {creativeProcess.map((item, index) => (
                <li key={index} className="flex  items-baseline gap-2 mb-2">
                  <FaRegSquareCheck />
                  <p className="text-lg  font-bold">{item}</p>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-textColor text-lg md:text-xl lg:text-2xl font-black mt-5 text-center">
            For Recruiters
          </h2>
          <div className="bg-primary py-5 px-5 rounded-lg h-72">
            <ul>
              {recruiterProcess.map((item, index) => (
                <li key={index} className="flex items-baseline gap-2  mb-2">
                  <FaRegSquareCheck />
                  <p className="text-lg  font-bold">{item}</p>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="md:hidden flex justify-around gap-5 mt-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black text-textColor">
              Create your portfolio
            </h2>
            <div className="h-15 bg-primary w-fit flex justify-center items-center">
              <h2 className="text-sm md:text-lg font-bold px-3 md:px-10  py-2 md:py-5 cursor-pointer">
                {" "}
                Get started
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black text-textColor">
              Create your portfolio
            </h2>
            <div className="h-15 bg-primary w-fit flex justify-center items-center">
              <h2 className="text-sm md:text-lg font-bold px-3 md:px-10 py-2 md:py-5 cursor-pointer">
                {" "}
                Get started
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <Image
            src="/assets/ellipse-woman.png"
            alt="Ellipse-woman.png"
            width={307}
            height={330}
            className=" object-filll"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
