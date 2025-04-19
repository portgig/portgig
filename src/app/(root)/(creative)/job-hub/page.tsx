"use client";
import React from "react";
import {
  SearchSection,
  JobHero,
  Community,
  Jobs,
  JobFilters,
} from "@/src/components/export_components";

const JobHub = () => {
  return (
    <main>
      <JobHero />
      <SearchSection />
      <div className="flex gap-5 bodyMargin ">
        <div className="flex-2/7 max-md:hidden">
          <JobFilters />
        </div>
        <div className="flex-5/7 ">
          <Jobs />
        </div>
      </div>
      <Community />
    </main>
  );
};

export default JobHub;
