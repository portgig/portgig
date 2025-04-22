import React from "react";
import Image from "next/image";
import { Buttons } from "../export_components";
const AboutSection = () => {
  return (
    <section className="bodyMargin my-5 text-textColor">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 mt-3">
        <div className="flex flex-col">
          <h1 className="text-textColor heading">What is this all about?</h1>
          <hr className="border-6 border-primary w-45 mt-15" />
          <h2 className="lg:w-120 text-xl lg:text-2xl 2xl:text-3xl font-black mt-5 text-primary font-raleway">
            Redefining How Creatives Present Themselves
          </h2>
          <p className="text-sm md:text-lg leading-6 my-2 text-primary font-semibold font-raleway">
            We understand the struggles creatives face in presenting their
            skills. Generic CVs don’t cut it anymore. That’s why we’re here to
            help you create a professional portfolio tailored to your craft.
            Whether you’re a designer, writer, developer, or artist.
          </p>
        </div>
        {/* /// */}
        <div className="flex items-start justify-center">
          <p className="sm:hidden text-sm font-bold">
            Get a stunning portfolio that speaks for you. Showcase your skills,
            impress recruiters, and land your next big opportunity.
          </p>
          <Image
            src="/assets/about-image.png"
            alt="about-image.png"
            width={300}
            height={400}
            className="w-56 h-60 sm:w-60 sm:h-72 lg:h-96 lg:w-80 object-cover"
          />
        </div>
      </div>
      {/* share */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 mt-3 ">
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl lg:text-4xl font-black text-primary">
            All your works in one place, easy to share. easy to impress.
          </h2>
          <hr className="border-5 border-primary w-45 my-3" />
          <Image
            src="/assets/about-man.png"
            alt="about-image.png"
            width={659}
            height={300}
            className=" "
          />
        </div>
        {/* /// */}
        <div className="flex flex-col items-start sm:justify-center gap-3 font-raleway">
          <div className="">
            {" "}
            <h2 className="subHeading  mt-2 text-primary ">
              Find Jobs That Fit You
            </h2>
            <p className="text-sm md:text-lg font-semibold leading-6 my-2 text-primary">
            <p className="text-sm md:text-lg leading-6 my-2 font-bold">
              Discover gigs and job postings that match your expertise. <br />
              With just one click, apply using your comprehensive portfolio,{" "}
              <br /> no CVs required.
            </p>
          </div>
          {/* shop */}
          <div className="bg-primary w-fit  lg:w-115 rounded-2xl flex flex-col gap-5 text-white  p-10">
            <h2 className="font-black text-xl lg:text-3xl">
              Sell on Portgig Shop
            </h2>
            <p className="font-bold">
              As a creative, do you have any digital product you would like to
              sell or would you like to shop for items ?
            </p>
            <Buttons
              label="Visit Shop"
              className="w-fit text-black font-urbanist self-end font-bold !px-10"
            />
          </div>
          <div />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 mt-3    ">
        {" "}
        <div className="flex flex-col">
          <div className="lg:w-120 bg-secondary flex justify-start items-center mt-5 px-4 py-4 ">
            <p className="text-white font-bold text-xl">
              Seamless Hiring for Recruiters
            </p>
          </div>
          <div className="flex flex-col  ml-5">
            <h2 className="text-primary  text-2xl  font-black  mt-5 font-raleway">
              Hire the Right Talent, Fast
            </h2>
            <p className="text-primary text-lg my-2 font-raleway font-bold w-fit lg:w-96">
              Access profiles with detailed portfolios and work histories. Post
              jobs, track applications, and connect with professionals in a few
              clicks.
            </p>
          </div>
        </div>
        <div className="flex  items-center  ">
          <Image
            src="/assets/ellipse-woman.png"
            alt="Ellipse-woman.png"
            width={350}
            height={300}
            className=" object-filll"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
