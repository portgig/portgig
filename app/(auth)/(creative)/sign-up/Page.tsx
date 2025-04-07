import React from "react";
import AuthForm from "../../AuthForm";

const SignupPage = () => {
  return (
    <div className="authStyles  bg-primary  max-lg:mb-10 py-10  max-lg:rounded-4xl max-lg:mx-3">
      <AuthForm type="sign-up" />
    </div>
  );
};

export default SignupPage;
