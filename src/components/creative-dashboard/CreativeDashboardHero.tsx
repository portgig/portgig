"use client";
import React from "react";
import Image from "next/image";
import { Buttons } from "../export_components";
import { useRouter } from "next/navigation";
const CreativeDashboardHero = () => {
  const navigate = useRouter();

  const links = [
    { label: "Edit Profile", path: "/creative-dashboard/edit-profile" },
    { label: "Search for new job", path: "" },
    {
      label: "Create/Edit your Portfolio",
      path: "/creative-dashboard/edit-portfolio",
    },
    { label: "Messages", path: "" },
  ];

  return (
    <section className="bodyMargin bg-primary py-10 text-white p-3 lg:p-10">
      <div className=" flex flex-col gap-5">
        <div className="flex max-sm:justify-center lg:justify-between">
          <div className="border-2 border-white rounded-lg p-10 max-sm:w-82">
            <h2 className="text-sky-300xl lg:text-5xl font-bold font-raleway">
              Hi, Sophia
            </h2>
            <p className="text-sm lg:text-lg font-inter lg:w-200">
              Your creativity is your superpower! 🚀 Keep building, keep
              innovating, and let your work speak for itself. The right
              opportunity is just around the corner—go grab it!
            </p>
          </div>
          <div>
            <Image
              src="/assets/creative.svg"
              alt="Discover more creatives"
              width={200}
              height={200}
            />
          </div>
        </div>
        <h2 className="text-[10px] lg:text-sm font-raleway">Let’s dive in</h2>
        <div className="flex  flex-wrap gap-5 justify-between ">
          {" "}
          {links.map((link, index) => (
            <Buttons
              key={index}
              label={link.label}
              className="w-[150px] md:w-[200px] lg:w-[250px] !text-primary text-[10px] md:text-sm lg:text-xl font-bold cursor-pointer font-raleway"

              onClick={() => {
                navigate.push(link.path);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeDashboardHero;
