import React from "react";

const TemplateFourHero = () => {
  return (
    <section className="bg-darkBlue px-5 md:px-10 lg:px-20 pt-10 lg:pt-20 flex gap-5">
      <div className="flex flex-col  w-full py-5 ">
        {" "}
        <p className="text-yellow font-lancelot md:text-lg ml-10">Hello</p>
        <h2 className="font-lateef  text-4xl md:text-5xl lg:text-8xl ml-5 lg:ml-20">
          I’m Sandy
        </h2>
        <h2 className="font-lateef  text-4xl md:text-5xl lg:text-8xl">
          Adesewa
        </h2>
        <h2 className="font-inter text-yellow font-bold text-xs md:text-sm lg:text-lg">
          Writer, Content Writer
        </h2>
        <h2 className="font-inter font-bold text-[10px] md:text-xs lg:text-sm">
          Abuja
        </h2>
      </div>
      <div className="w-full center">
        <div className="bg-gray200 w-50 lg:w-90 h-full"></div>
      </div>
    </section>
  );
};

export default TemplateFourHero;
