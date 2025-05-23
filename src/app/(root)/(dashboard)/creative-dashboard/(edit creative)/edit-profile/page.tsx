"use client";
import React from "react";
import Image from "next/image";
import { Buttons } from "@/src/components/export_components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  niche: z.string().min(1, "Niche/Industry is required"),
  about: z.string().max(1000, "Max 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;
const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useRouter();
  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate.push("/creative-dashboard/profile-saved");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-black gap-5 font-inter"
    >
      <h4 className="text-2xl font-bold">Edit profile</h4>
      {/* profile image */}
      <div className="w-full bg-white p-3 rounded-lg shadow">
        <div className="flex items-center gap-5 px-3 py-3">
          <div className="relative h-24 w-24 lg:h-36 lg:w-36 rounded-full overflow-hidden">
            <Image
              src="/assets/creative.svg"
              alt="profile image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Buttons
              label="Upload New Photo"
              className="rounded-2xl text-sm border border-[rgba(10,23,84,0.7)] hover:border-[rgba(10,23,84,1)] transition"
              onClick={() => {}}
            />

            <input
              name="profileImage"
              type="file"
              accept="image/*"
              className="text-xs"
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
            <h2 className="text-sm lg:text-lg font-bold">Personal info</h2>
            <Buttons
              label="Edit"
              className="rounded-sm text-base"
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-base font-light">Full name</h2>
              <input
                {...register("fullName")}
                type="text"
                className="text-sm bg-white p-2 border border-gray-300 rounded"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-base font-light">Email</h2>

              <input
                {...register("email")}
                type="email"
                className="text-sm bg-white p-2 border border-gray-300 rounded"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-base font-light">
                Phone number
              </h2>
              <input
                {...register("phone")}
                type="tel"
                className="text-sm bg-white p-2 border border-gray-300 rounded"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* location */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-base font-light">Location</h2>
              <input
                {...register("location")}
                type="text"
                className="text-sm bg-white p-2 border border-gray-300 rounded"
                placeholder="Location"
              />
              {errors.location && (
                <p className="text-red-500 text-xs">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-base font-light">
                Niche/ Industry
              </h2>
              <input
                {...register("niche")}
                type="text"
                className="text-sm bg-white p-2 border border-gray-300 rounded"
                placeholder="Niche/Industry"
              />
              {errors.niche && (
                <p className="text-red-500 text-xs">{errors.niche.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* bio */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <h2>bio</h2>
          <textarea
            {...register("about")}
            maxLength={1000}
            className="resize-none min-h-60 w-full p-2 border border-primary rounded outline-none focus:ring-0 focus:outline-none"
            placeholder="Tell us about yourself (1000 characters max)"
          />
          {errors.about && (
            <p className="text-red-500 text-xs">{errors.about.message}</p>
          )}
        </div>
        <Buttons
          type="submit"
          label="Save changes"
          className="!bg-primary w-fit text-white self-end rounded-sm font-raleway font-semibold"
        />
      </div>
    </form>
  );
};

export default EditProfile;
