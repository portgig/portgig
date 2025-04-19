"use client";

import React from "react";
import Image from "next/image";
import { navigationItems } from "@/src/constants/index";
import { Buttons } from "@/src/components/export_components";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const NavigationBar = () => {
  const navigate = useRouter();
  const pathname = usePathname();

  return (
    <nav className="sticky w-full top-0 z-50 bg-white bodyMargin h-[56px] mt-[20px] flex items-center justify-between text-primary">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <Image
          src="/assets/nav-menu.svg"
          alt="Menu Icon"
          width={32}
          height={32}
          className="lg:hidden"
        />

        {/* Logo - Clickable to go Home */}
        <Link href="/">
          <Image
            src="/assets/portgig.svg"
            alt="Portgig Logo"
            width={120}
            height={120}
            className="max-md:w-[80px] max-md:h-[80px] cursor-pointer"
          />
        </Link>
      </div>

      {/* Nav Links */}
      <div className="max-lg:hidden w-[700px] text-primary text-[18px]">
        <ul className="flex justify-between">
          {navigationItems.map((navigationItem) => (
            <Link key={navigationItem.label} href={navigationItem.link}>
              <li
                className={`cursor-pointer hover:underline hover:decoration-primary pb-1 ${
                  pathname === navigationItem.link ? "border-b-2 border-primary" : ""
                }`}
              >
                {navigationItem.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div>
        <Buttons
          className="!bg-primary text-white rounded-full text-center text-sm max-sm:text-[10px] cursor-pointer"
          label="Sign up/ Log in"
          onClick={() => {
            navigate.push("/onboarding");
          }}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
