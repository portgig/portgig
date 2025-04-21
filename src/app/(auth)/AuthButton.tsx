import React from "react";

interface AuthButtoProbs {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}
const AuthButton = ({ children, className, type, onClick }: AuthButtoProbs) => {
  return (
    <button type={type} onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default AuthButton;
