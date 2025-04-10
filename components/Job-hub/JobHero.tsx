import React from 'react'
import Image from "next/image";
const JobHero = () => {
  return (
    <section className="bodyMargin  h-fit bg-primary my-5  rounded-2xl gap-5">
      <div className=" h-full flex ">
        <div className=" flex flex-col gap-3 justify-center w-full  p-15 ">
          <h2 className="text-lg font-bold ">Find Your Dream Job</h2>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Land Your Next Opportunity
          </h2>
          <p className="text-sm ">
            Discover job openings tailored to your skills and industry. Apply
            seamlessly and connect with top recruiters today!
          </p>
        </div>
        <div className=" w-full flex justify-end items-end max-md:hidden ">
          <Image
            src="/assets/newJob.png"
            alt="creativehero"
            width={400}
            height={400}
            className="object-contain rounded-br-2xl  h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default JobHero

