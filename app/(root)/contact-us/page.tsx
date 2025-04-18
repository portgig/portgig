"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactInfor } from "@/constants";
import { Buttons } from "@/components/export_components";
import Image from "next/image";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  messages: z.string().min(30, "Please write a short note"),
});
type FormData = z.infer<typeof formSchema>;
const ContactUS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);

    reset();
  };
  return (
    <main className="text-black  my-10">
      <div className="bg-gray200 center-flexCol py-7">
        <h2 className="heading">Contact Us</h2>
        <h2 className="text-xs md:text-sm lg:text-lg">
          Home <span className="text-textColor"> &gt; Contact Us</span>
        </h2>
      </div>
      <div className="bodyMargin py-10 flex gap-5 flex-col  ">
        <h2 className="subHeading text-textColor px-5">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full px-2 py-2  flex flex-col gap-2">
            {" "}
            <div className="flex flex-col gap-2">
              <h2 className="text-xs lg:text-sm font-extralight">Full name</h2>
              <input
                {...register("fullName")}
                type="text"
                className="text-sm bg-gray100 p-2 border border-gray200 rounded focus:outline-none focus:border focus:border-secondary"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>{" "}
            <div className="flex flex-col gap-2">
              <h2 className="text-xs lg:text-sm font-extralight">Email</h2>
              <input
                {...register("email")}
                type="text"
                className="text-sm bg-gray100 p-2 border border-gray200 rounded focus:outline-none focus:border focus:border-secondary"
                placeholder="youremail@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xs lg:text-sm font-extralight">Message</h2>
              <textarea
                {...register("messages")}
                className="text-sm bg-gray100 p-2 border border-gray200 rounded focus:outline-none focus:border focus:border-secondary min-h-40"
                placeholder="Write your message here"
              />
              {errors.messages && (
                <p className="text-red-500 text-xs">
                  {errors.messages.message}
                </p>
              )}
            </div>
            <Buttons
              type="submit"
              label="Send"
              className="!bg-secondary  text-white rounded-lg font-bold lg:text-lg"
            />
          </form>
          <div className=" w-full  pt-2">
            <div className="flex flex-col gap-2">
              <div className="px-5 w-full border-2 border-secondary h-52 rounded-lg p-10 flex flex-col justify-between">
                {contactInfor.map(({ info, icon }, index) => {
                  const Icon = icon;
                  return (
                    <div key={index} className="flex items-center gap-5">
                      <Icon className="text-lg sm:text-xl lg:text:2xl text-secondary" />
                      <p className="text-xs sm:text-sm lg:text-lg">{info}</p>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 w-full  rounded-lg ">
                <Image
                  src="/assets/map.png"
                  alt="profile image"
                  width={700}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUS;
