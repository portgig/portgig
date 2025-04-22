/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Buttons } from "@/src/components/export_components";
import { useRouter } from "next/navigation";

export default function CreativeEmailConfirmed() {
  const navigate = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center bg-[url('/assets/email-man.png')] bg-no-repeat bg-cover bg-center p-4 sm:p-8 md:p-10 font-raleway">
      {/* Logo */}
      <div className="self-start mb-6">
        <Link href="/">
          <Image
            src="/assets/portgig-2.png"
            alt="Portgig Logo"
            width={120}
            height={120}
            className="w-[100px] sm:w-[120px] h-auto"
          />
        </Link>
      </div>

      {/* Content Box */}
      <div className="  bg-white w-full lg:w-10/12 p-5 sm:p-8 rounded-lg shadow-lg flex flex-col  items-center justify-center text-primary my-auto">
        <img
          src="/assets/checkmark.png"
          alt="Email Confirmation"
          width={300}
          height={40}
          className=" max-w-md h-auto"
        />

        <div className="flex flex-col gap-5">
          {" "}
          <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center font-ramaraja">
            Email Confirmed
          </h2>
          <p className="text-[12px] sm:text-xl text-center font-medium font-raleway">
            Thank you
          </p>
          <Buttons
            className="!bg-primary text-white rounded-none px-20 py-3 text-2xl lg:text-3xl font-inter"
            label="Get started"
            onClick={() => {
              navigate.push("/creative-homepage");
            }}
          />
        </div>
      </div>
    </main>
  );
}
