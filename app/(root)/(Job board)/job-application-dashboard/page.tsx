"use client";
import { useParams } from "next/navigation";
import React from "react";

const Jobs = () => {
  const params = useParams();
  const jobSlug = params.jobs; 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Job: {jobSlug}</h1>
      <p>This is the page for the job: {jobSlug}</p>
    </div>
  );
};

export default Jobs;
