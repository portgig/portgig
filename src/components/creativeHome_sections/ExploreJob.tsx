"use client";
import { jobs } from "@/src/constants";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/src/components/export_components";
import { useRouter } from "next/navigation";

const ExploreJob = () => {
  const navigate = useRouter();
  return (
    <section className="bodyMargin flex flex-col gap-5">
      <div className="flex justify-between text-secondary">
        {" "}
        <h2 className="font-bold">Explore Jobs</h2>
        <h2 className="underline">View all jobs </h2>
      </div>
      {/* Jobs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-5  px-5 py-3 rounded-lg border-2 border-secondary text-secondary">
            <div className="flex justify-between items-center">
              <Image
                src={job.comapnyImage}
                alt={job.companyName}
                width={70}
                height={70}
              />
              <div
                className="flex flex-col w-72
			">
                <h2 className="font-bold text-2xl line-clamp-1">
                  {job.jobTitle}
                </h2>
                <h2 className=" text-sm">by {job.companyName}</h2>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-bold">
                <h2>{job.location}</h2>
                <h2>{job.commision}</h2>
              </div>
              <div className="flex justify-between text-white text-[10px] font-bold">
                <div className="bg-secondary rounded-lg py-2 px-3">
                  {job.type}
                </div>
                <div className="!bg-secondary rounded-lg py-2 px-3">
                  {job.level}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Buttons
        label="Find more Jobs"
        className="!bg-primary w-fit self-end rounded-lg font-bold text-xl"
        onClick={() => {
          navigate.push("/job-hub");
        }}
      />
    </section>
  );
};

export default ExploreJob;
