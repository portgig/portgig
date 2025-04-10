import React from "react";
import Image from "next/image";
const CreativeBanner = () => {
  return (
    <section className="bodyMargin  h-40 bg-primary my-5 max-md:hidden rounded-2xl">
      <div className="bodyMargin h-full flex gap-5">
        <div className="flex-2/3 flex flex-col justify-center items-start gap-5  py-5 px-3">
          <h2 className="text-xl lg:text-2xl font-bold">
            Take the Next Step – Find Opportunities, Build Your Network, Get
            Hired!
          </h2>
          <p className="text-[12px] ">
            Explore top jobs, showcase your portfolio, and connect with
            different people in your field.
          </p>
        </div>
        <div className=" flex items-center justify-start max-md:hidden relative ">
          <Image
            src="/assets/bell.png"
            alt="creativehero"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeBanner;
