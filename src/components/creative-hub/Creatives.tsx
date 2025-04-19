"use client";
import React, { useState } from "react";
import { creatives } from "@/src/constants";
import { Buttons } from "@/src/components/export_components";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const Creatives = () => {

	const creativesPerPage = 12
	 const [currentPage, setCurrentPage] = useState(0);
	const totalPages = Math.ceil(creatives.length / creativesPerPage);

	const startIndex = currentPage * creativesPerPage;
	const endIndex = startIndex + creativesPerPage;
	const currentCreatives = creatives.slice(startIndex, endIndex);
	

  return (
    <section className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {currentCreatives.map((creative) => (
          <div
            key={creative.id}
            className="flex flex-col gap-3 pb-5 pr-2 rounded-lg border-2 border-secondary text-secondary min-h-[400px] ">
            <div className="flex justify-between items-center">
              <div className="h-[150px] w-[150px] overflow-hidden">
                <Image
                  src={creative.creativeImage}
                  alt={creative.name}
                  width={150}
                  height={150}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="bg-secondary/80 text-white py-2 px-5">
                {creative.level}
              </div>
            </div>
            <h2 className="text-primary font-bold text-sm px-5 line-clamp-1">
              {creative.name} ({creative.username})
            </h2>
            <h2 className="text-primary font-extralight  text-sm px-5 line-clamp-1">
              {creative.field} / {creative.location}
            </h2>
            <div className=" bg-gray100 h-20 ml-2 p-1 border border-secondary text-sm line-clamp-3">
              {creative.introduction}
            </div>
            <div className="flex justify-between pl-2 text-white">
              <Buttons
                label="View profile"
                className="!bg-primary w-fit self-end rounded-lg text-sm font-extralight "
                onClick={() => {}}
              />
              <Buttons
                label="Contact Me"
                className="!bg-primary w-fit self-end rounded-lg text-sm font-extralight "
                onClick={() => {}}
              />
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
            className={`h-10 w-10 flex items-center justify-center rounded-full font-semibold ${
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

export default Creatives;
