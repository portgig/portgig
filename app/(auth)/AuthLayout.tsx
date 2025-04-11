"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Default background image
  let bgImage = "/assets/auth-man.png";

  // Set background image based on the path
  if (pathname.includes("recruiter-sign-in")) {
    bgImage = "/assets/auth-woman.png";
  } else if (pathname.includes("recruiter-sign-up")) {
    bgImage = "/assets/auth-woman.png";
  } else if (pathname.includes("welcome-onboarding")) {
    bgImage = "/assets/onboarding-woman.png";
  } else if (pathname.includes("why-onboarding")) {
    bgImage = "/assets/onboarding-woman.png";
  } else if (pathname.includes("recruiter-onboarding")) {
    bgImage = "/assets/onboarding-man.png";
  }

  return (
    <div className="text-white flex h-screen">
      {/* Large background image on desktop */}
      <div
        className="w-full h-full bg-cover bg-center p-5 max-lg:hidden lg:block cursor-pointer"
           style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/portgig-2.png"
            alt="Portgig Logo"
            width={150}
            height={150}
            className="max-lg:w-[80px] max-lg:h-[80px]"
          />
        </Link>
      </div>

      {/* Background for smaller screens */}
      <div
        className="w-full h-fit max-lg:block lg:hidden bg-cover bg-center bg-no-repeat pt-20"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
			  }}
		  >
        {children}
      </div>

      {/* Default background when on larger screens */}
      <div className="w-full bg-primary max-lg:hidden lg:block">{children}</div>
    </div>
  );
};
