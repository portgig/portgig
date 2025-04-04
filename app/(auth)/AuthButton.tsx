import React from "react";

interface AuthButtoProbs {
  children: React.ReactNode;
  className?: string;
}
const AuthButton = ({ children, className }: AuthButtoProbs) => {
  return (
    <button type="submit" className={`${className}`}>
      {children}
    </button>
  );
};

export default AuthButton;
