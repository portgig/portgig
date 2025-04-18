"use client";
import {
  SearchSection,
  JobProfile,
  OtherJobs,
  EmailSubscription,
  Buttons,
} from "@/components/export_components";
import React from "react";
import { useRouter } from "next/navigation";
const JobDescription = () => {
  const navigate = useRouter();
  return (
    <main className="flex flex-col text-primary ">
      <div className="w-full p-5 bg-primary  max-lg:hidden">
        <SearchSection />
      </div>
      <JobProfile />
      <div className="my-5 w-full flex flex-col gap-2">
        <h2 className="bodyMargin lg:text-lg">Who we are looking for</h2>
        <div className="w-full bg-primary py-5">
          <p className="bodyMargin text-white text-sm lg:text-lg">
            We are searching for innovative, detail-oriented, and passionate
            creatives who thrive in a fast-paced environment. If you are a
            problem solver, a trendsetter, and someone who takes pride in
            delivering visually stunning work, we want you on our team. At
            PortGig, we value originality, collaboration, and growth. Whether
            you&apos;re a seasoned designer or an emerging talent, we provide a
            space for you to showcase your skills and advance your career.
          </p>
        </div>
      </div>
      {/* IMPELEMENT FULL JOB DESCRIPTION HERE LATER */}
      <div className="flex flex-col bodyMargin">
        <Buttons
          label="Apply Now"
          className="!bg-primary text-white rounded-sm w-fit self-end cursor-pointer"
          onClick={() => {
            navigate.push("/job-hub/apply");
          }}
        />
      </div>
      <OtherJobs />
      <EmailSubscription />
    </main>
  );
};

export default JobDescription;
