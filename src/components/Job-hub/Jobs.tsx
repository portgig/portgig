"use client";
import React, { useState } from "react";
import Image from "next/image";
import { jobs } from "@/src/constants";
import { IoIosArrowForward } from "react-icons/io";
import { Buttons } from "../export_components";
import { useRouter } from "next/navigation";
const Jobs = () => {
	const navigate=useRouter()
  const jobsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const startIndex = currentPage * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
    <section className="p-5 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-textColor text-xl font-bold">Latest jobs</h2>
          <p className="text-primary text-xs">50 new jobs added</p>
        </div>

        <Buttons
          label="View all jobs"
          className=" text-textColor underline font-bold cursor-pointer"
          onClick={() => {}}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {currentJobs.map((job) => (
          <div
            key={job.id}
				className="flex flex-col justify-between gap-5 h-full px-5 py-3 rounded-lg border-2 border-secondary text-secondary cursor-pointer"
				onClick={() => {
					navigate.push('/job-hub/job-description')
				}}
			>
            <div className="flex items-center gap-4">
              <Image
                src={job.comapnyImage}
                alt={job.companyName}
                width={60}
                height={60}
                className="object-contain w-[60px] h-[60px]"
              />
              <div className="flex flex-col flex-1">
                <h2 className="font-bold text-xl line-clamp-1">
                  {job.jobTitle}
                </h2>
                <p className="text-sm">by {job.companyName}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex justify-between text-sm font-bold">
                <h2>{job.location}</h2>
                <h2>{job.commision}</h2>
              </div>
              <div className="flex justify-between text-white text-[10px] font-bold">
                <div className="bg-secondary rounded-lg py-2 px-3">
                  {job.type}
                </div>
                <div className="bg-secondary rounded-lg py-2 px-3">
                  {job.level}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {/* Generate buttons dynamically based on total pages */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-10 w-10 flex items-center justify-center rounded-full font-semibold font-inter ${
              currentPage === index
                ? "bg-primary text-white cursor-not-allowed"
                : "text-secondary hover:bg-accents"
            }`}>
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          className={`h-10 w-10 flex items-center justify-center rounded-full font-semibold border border-accents ${
            currentPage >= totalPages - 1
              ? "bg-accents cursor-not-allowed"
              : "text-secondary hover:bg-accents"
          }`}
          disabled={currentPage >= totalPages - 1}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Jobs;
