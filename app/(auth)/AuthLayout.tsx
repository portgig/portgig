// app/auth/layout.tsx or app/(auth)/layout.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  //   Determine background image based on the current path
  let bgImage = "/assets/auth-man.png";

  if (pathname.includes("recruiter-sign-in")) {
    bgImage = "/assets/auth-woman.png";
  } else if (pathname.includes("recruiter-sign-up")) {
    bgImage = "/assets/auth-woman.png";
  }

  return (
    <div className="text-white flex h-screen">
      <div
        className="w-full bg-cover p-20 max-lg:hidden lg:block cursor-pointer "
        style={{ backgroundImage: `url('${bgImage}')` }}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/portgig-2.png"
            alt="Portgig Logo"
            width={150}
            height={150}
            //   className="max-lg:w-[80px] max-lg:h-[80px] "
          />
        </Link>
      </div>

      <div
        className="w-full max-lg:block lg:hidden bg-cover  bg-no-repeat pt-20"
        style={{ backgroundImage: `url('${bgImage}')` }}>
        {children}
      </div>

      <div className="w-full bg-primary max-lg:hidden lg:block">{children}</div>
    </div>
  );
};
