import { cookies, cookies2, infoCollection, infoCollection2, policyUpdate } from "@/constants";
import React from "react";

const PrivatePolicy = () => {
  return (
    <main className="text-black  my-10">
      <div className="bg-gray200 center-flexCol py-7">
        <h2 className="heading">Private Policy</h2>
        <h2 className="text-xs md:text-sm lg:text-lg">
          Home <span className="text-textColor"> &gt; Private Policy</span>
        </h2>
      </div>
      <div className="flex flex-col gap-10 py-10 bodyMargin">
        {/* 1 */}
        <div className="flex flex-col gap-5">
          <h2 className="smallHeading">1. Information Collection and Usage</h2>
          <p className="text-xs sm:text-sm lg:text-lg">{infoCollection}</p>
          <p className="text-xs sm:text-sm lg:text-lg">{infoCollection2}</p>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-5">
          <h2 className="smallHeading">
            2. Cookies, Third-Party Links, and Your Rights
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg">{cookies}</p>
          <p className="text-xs sm:text-sm lg:text-lg">{cookies2}</p>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-5">
          <h2 className="smallHeading">
            3. Policy Updates and Contact Information
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg">{policyUpdate}</p>
          <p>Thank you for visiting Portgig. Your privacy matters to us!</p>
        </div>
      </div>
    </main>
  );
};

export default PrivatePolicy;
