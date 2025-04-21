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
        <div className="flex max-sm:justify-center">
          <div className="border-2 border-white rounded-lg p-3 max-sm:w-82">
            <h2 className="text-2xl lg:text-4xl font-bold">Hi, Sophia</h2>
            <p className="text-[10px] lg:text-sm">
              Your creativity is your superpower! 🚀 Keep building, keep
              innovating, and let your work speak for itself. The right
              opportunity is just around the corner—go grab it!
            </p>
          </div>
          <div>
            <Image
              src="/assets/creativeImage.png"
              alt="Discover more creatives"
              width={100}
              height={100}
            />
          </div>
        </div>
        <h2 className="text-[10px] lg:text-sm">Let’s dive in</h2>
        <div className="flex  flex-wrap gap-5 justify-between ">
          {" "}
          {links.map((link) => (
            <Buttons
              key={link.path}
              label={link.label}
              className=" !text-primary text-[10px] md:text-sm lg:text-lg cursor-pointer"
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
