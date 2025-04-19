import {
  extraText,
  forCreativeText,
  ourStory,
  spaceWhere,
  webuiltThisFor,
} from "@/src/constants";
import React from "react";

const AboutUs = () => {
  return (
    <main className="text-black  my-10">
      <div className="bg-gray200 center-flexCol py-7">
        <h2 className="heading">About Us</h2>
        <h2 className="text-xs md:text-sm lg:text-lg">
          Home <span className="text-textColor"> &gt; About Us</span>
        </h2>
      </div>
      {/* about us */}
      <div className="bodyMargin px-2 md:px-10 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="subHeading text-textColor">
            For Creatives, By Creatives
          </h2>
          <p className="text-xs lg:text-sm">{forCreativeText}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="smallHeading text-textColor">
            This is a space where creatives:
          </h2>
          <ol className="list-decimal pl-4 space-y-2">
            {spaceWhere.map((text, index) => (
              <li key={index}>
                {" "}
                <p className="text-xs md:tex-sm lg:text-lg">{text}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs md:tex-sm lg:text-lg">{extraText}</p>
          <p className="text-xs md:tex-sm lg:text-lg">
            {" "}
            So welcome — you’re not just here to fill a profile. <br /> You’re
            here to take up space, to be found, to rise.
          </p>
        </div>
      </div>
      {/* meet team */}
      <div className="bg-primary center heading text-white py-5">
        {" "}
        Meet the Team
      </div>
      <div className="flex flex-col gap-5 bodyMargin py-5">
        <div className="flex flex-col gap-5">
          <p className="text-center text-textColor font-bold text-sm md:text-lg lg:text-xl">
            Tech Team
          </p>
          <div className="max-sm:grid max-sm:grid-cols-2 flex justify-between gap-5 lg:gap-10">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className=" flex flex-col gap-2 w-full ">
                <div className="h-50  bg-red-600"></div>
                <div className="h-10  bg-primary "></div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-center text-textColor font-bold text-sm md:text-lg lg:text-xl">
              Tech Team
            </p>
            <div className="max-sm:grid max-sm:grid-cols-2 flex justify-between gap-5 lg:gap-10">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className=" flex flex-col gap-2 w-full ">
                  <div className="h-50  bg-red-600"></div>
                  <div className="h-10  bg-primary "></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* our story */}
      <div className="bg-primary center heading text-white py-5">
        {" "}
        Our Story
      </div>
      <div className="bodyMargin py-10">
        <div className="flex flex-col gap-10">
          <p className="text-xs md:tex-sm lg:text-lg">{ourStory}</p>

          <div className="flex flex-col gap-5">
            <h2 className="smallHeading text-textColor">We built this for</h2>
            <ol className="list-decimal pl-4 space-y-2">
              {webuiltThisFor.map((text, index) => (
                <li key={index}>
                  {" "}
                  <p className="text-xs md:tex-sm lg:text-lg">{text}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-xs md:tex-sm lg:text-lg">
            {" "}
            This is for you. <br /> Let’s build something unforgettable
            together.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
