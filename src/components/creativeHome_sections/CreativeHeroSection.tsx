import React from "react";
import Image from "next/image";

const CreativeHeroSection = () => {
  return (
    <section className="bodyMargin  h-fit bg-primary my-5 rounded-2xl ">
      <div className="bodyMargin h-full flex">
        <div className="flex-1/2 flex flex-col justify-center gap-8 py-5 px-10">
          <h2 className="text-xl font-bold">Welcome to Portgig </h2>
          <h1 className="text-3xl lg:text-5xl font-bold">Your Creative Hub for Work & Talent</h1>
          <p className="lg:text-xl">
            Connect, collaborate, and create. Whether you&aposre looking for
            jobs or hiring top creatives, start exploring today.
          </p>
        </div>
        <div className="flex-1/2 flex items-end max-md:hidden relative ">
          <Image
            src="/assets/creativehero-1.svg"
            alt="creativehero"
            width={400}
            height={400}
          />
          <Image
            src="/assets/creativehero-2.svg"
            alt="creativehero"
            width={400}
            height={400}
            className="absolute right-0"
          />
        </div>
      </div>
    </section>
  );
}; 

export default CreativeHeroSection;
