import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="bodyMargin my-5 text-textColor">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 mt-3">
        <div className="flex flex-col">
          <h1 className="text-textColor heading">What is this all about?</h1>
          <hr className="border-3 border-primary w-45 mt-2" />
          <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-black mt-5 text-primary font-raleway">
            Redefining How Creatives Present Themselves
          </h2>
          <p className="text-sm md:text-lg leading-6 my-2 text-primary font-raleway">
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
          <hr className="border-3 border-primary w-45 my-3" />
          <Image
            src="/assets/about-man.png"
            alt="about-image.png"
            width={659}
            height={300}
            className=" "
          />
        </div>
        {/* /// */}
        <div className="flex sm:flex-col items-start sm:justify-center gap-2">
          <div className="font-raleway">
            {" "}
            <h2 className="subHeading  mt-5 text-primary ">
              Find Jobs That Fit You
            </h2>
            <p className="text-sm md:text-lg leading-6 my-2">
              Discover gigs and job postings that match your expertise. <br />
              With just one click, apply using your comprehensive portfolio,{" "}
              <br /> no CVs required.
            </p>
          </div>
          <div />
          <div className="flex flex-col">
            <div className=" bg-secondary flex justify-start items-center mt-5 px-4 py-2">
              <p className="text-white font-bold text-xs md:text-sm lg:text-xl">
                Seamless Hiring for Recruiters
              </p>
            </div>
            <h2 className="text-primary smallHeading   mt-5 font-raleway">
              Hire the Right Talent, Fast
            </h2>
            <p className="text-textColor text-sm md:text-lg my-2 font-raleway">
              Access profiles with detailed portfolios and <br />
              work histories. Post jobs, track applications, <br /> and connect
              with professionals in a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
