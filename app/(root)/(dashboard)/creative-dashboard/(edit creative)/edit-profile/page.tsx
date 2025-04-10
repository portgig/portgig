"use client";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/components/export_components";
import { useRouter } from "next/navigation";
const EditProfile = () => {
  const navigate = useRouter();
  return (
    <main className="flex flex-col text-black gap-5 ">
      <h2 className="subHeading">Edit profile</h2>
      {/* profile image */}
      <div className="w-full bg-white p-3 rounded-lg shadow">
        <div className=" flex items-center gap-5 px-3 py-3">
          <div className="h-30 w-30 rounded-full border border-secondary">
            <Image
              src="/assets/creativeImage.png"
              alt="profile image"
              width={100}
              height={100}
              className="lg:h-36 lg:w-36"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Buttons
              label="Upload New Photo"
              className="rounded-2xl text-sm"
              onClick={() => {}}
            />
            <p className="text-[8px]">
              At least 800x 800 px is recommended JPG or PNG
            </p>
          </div>
        </div>
      </div>
      {/* 2nd container */}
      <div className="bg-white shadow rounded-lg p-3 flex flex-col gap-5">
        {/* personal info */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <div className="w-full rounded-lg flex justify-between">
            {" "}
            <h2 className="text-sm lg:text-lg">Personal info</h2>
            <Buttons
              label="Edit"
              className="rounded-sm text-[7px]"
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Full name
              </h2>
              <div className="text-sm bg-white p-2">Isaac Adeshinor</div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">Email</h2>
              <div className="text-sm bg-white p-2">
                IssacAdeshinor@gmail.com
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-smß font-extralight">
                Phone number
              </h2>
              <div className="text-sm bg-white p-2">+867775567890</div>
            </div>
          </div>
        </div>
        {/* location */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Location
              </h2>
              <div className="text-sm bg-white p-2">Logos, Nigeria</div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Niche/ Industry
              </h2>
              <div className="text-sm bg-white p-2">Graphic, design</div>
            </div>
          </div>
        </div>
        {/* bio */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <h2>bio</h2>
          <textarea
            maxLength={1000}
            className="resize-none min-h-60 w-full p-2 border border-primary rounded outline-none focus:ring-0 focus:outline-none"
            placeholder="Tell us about yourelf (1000 characters max)"
          />
        </div>
        <Buttons
          label="Save changes"
          className="!bg-primary w-fit text-white self-end rounded-sm"
          onClick={() => {
            navigate.push("/creative-dashboard/profile-saved");
          }}
        />
      </div>
    </main>
  );
};

export default EditProfile;
