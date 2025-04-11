import React from "react";
import AuthForm from "../../AuthForm";

const  RecruiterSignupPage = () => {
  return (
    <div className="authStyles  bg-primary  max-lg:mb-10 py-20 max-lg:rounded-4xl max-lg:mx-3">
      <AuthForm type="recruiter-sign-up" />
    </div>
  );
};

export default  RecruiterSignupPage;
