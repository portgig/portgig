import React from "react";
import AuthForm from "../../AuthForm";

const Page = () => {

  return (
    <div className="authStyles  bg-primary   max-lg:mt-5 max-lg:mb-5 max-lg:pt-10 max-lg:pb-10  max-lg:rounded-4xl max-lg:mx-3">
      <AuthForm type="recruiter-sign-up"  />
    </div>
  );
};

export default Page;
