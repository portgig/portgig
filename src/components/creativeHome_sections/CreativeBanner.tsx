import React from "react";
import Image from "next/image";
const CreativeBanner = () => {
  return (
    <section className="bg-primary h-fit my-5 max-md:hidden ">
      <div className="bodyMargin flex gap-5">
        <div className="flex-3/5 w-full flex flex-col justify-center items-start gap-5  py-5 px-10 font-raleway">
          <h2 className="text-xl lg:text-3xl font-extrabold">
            Take the Next Step – Find Opportunities, Build Your Network, Get
            Hired!
          </h2>
          <p className="text-sm font-bold ">
            Explore top jobs, showcase your portfolio, and connect with
            different people in your field.
          </p>
        </div>
        <div className="flex-2/5 w-full flex items-center justify-center max-md:hidden relative ">
          <Image
            src="/assets/bell.svg"
            alt="creativehero"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeBanner;
