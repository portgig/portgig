import React from "react";
import Image from "next/image";
const TemplateThreeHero = () => {
  return (
    <section className="flex ">
      <div className="flex-1/3 bg-yellow flex justify-end items-end">
        <Image
          src={"/assets/jitti.svg"}
          alt="template three hero image"
          width={300}
          height={300}
          className="object-cover h-70"
        />
      </div>
      <div className="flex-2/3 px-10 py-5 sm:pt-20 lg:pt-30  flex  justify-end items-end">
        <div className="  flex flex-col justify-end items-end ">
          <p className="font-bold text-xs md:text-sm lg:text-lg ">
            Lagos State
          </p>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl 2xl:text-8xl">
            GEORGY JITTI
          </h2>
          <h2 className="font-bold text-xs lg:text-2xl 2xl:self-start ">
            Web Developer/ Designer
          </h2>
          <p className="font-bold text-sm lg:text-xl 2xl:text-2xl 2xl:self-start mt-10 font-lalezar ">
            Let’s build quality products in programining and design with my
            services
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemplateThreeHero;
