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
  instagram: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  website: z.string().url().optional(),
  xHandle: z.string().url().optional(),
  about: z.string().max(1000, "Max 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const RecruiterEditProfile = () => {
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      niche: "",
      instagram: "",
      linkedin: "",
      website: "",
      xHandle: "",
      about: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate.push("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-black gap-5 font-inter">
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
              className="rounded-2xl text-sm "
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
              <h2 className="text-[10px] lg:text-sm font-extralight">Email</h2>
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
              <h2 className="text-[10px] lg:text-sm font-extralight">
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
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Location
              </h2>
              <input
                {...register("location")}
                type="text"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="Location"
              />
              {errors.location && (
                <p className="text-red-500 text-xs">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Niche/ Industry
              </h2>
              <input
                {...register("niche")}
                type="text"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="Niche/Industry"
              />
              {errors.niche && (
                <p className="text-red-500 text-xs">{errors.niche.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Instagram handle
              </h2>
              <input
                {...register("instagram")}
                type="url"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="Instagram URL"
              />
              {errors.instagram && (
                <p className="text-red-500 text-xs">
                  {errors.instagram.message}
                </p>
              )}
            </div>
          </div>
          {/* 2nd line */}
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Linkedin handle
              </h2>
              <input
                {...register("linkedin")}
                type="url"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="LinkedIn URL"
              />
              {errors.linkedin && (
                <p className="text-red-500 text-xs">
                  {errors.linkedin.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                Website link
              </h2>
              <input
                {...register("website")}
                type="url"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="Website URL"
              />
              {errors.website && (
                <p className="text-red-500 text-xs">{errors.website.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[10px] lg:text-sm font-extralight">
                X handle
              </h2>
              <input
                {...register("xHandle")}
                type="url"
                className="text-sm bg-white p-2 w-44 border border-gray-300 rounded"
                placeholder="X (Twitter) URL"
              />
              {errors.xHandle && (
                <p className="text-red-500 text-xs">{errors.xHandle.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* bio */}
        <div className="p-3 w-full rounded-lg flex flex-col gap-5 bg-gray100">
          <h2>About</h2>
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
          className="!bg-primary w-fit text-white self-end rounded-sm font-raleway"
        />
      </div>
    </form>
  );
};

export default RecruiterEditProfile;
