// import React from "react";
// // import { usePathname } from "next/navigation";

import { AuthLayout } from "./AuthLayout";

// interface LayoutProps {
//   children: React.ReactNode;
//   type: "sign-in" | "sign-up" | "recruiter-sign-in" | "recruiter-sign-up";
// }
// const layout = ({ children }: LayoutProps) => {
//   // Choose image based on type
// //   const bgImage =
// //     type === "sign-in" || type === "sign-up"
// //       ? "/assets/auth-man.png"
// //       : "/assets/auth-woman.png";
// //   const pathname = usePathname();

//   // Determine background image based on the current path
//   const bgImage = "/assets/auth-man.png";

// //   if (pathname.includes("recruiter-sign-in")) {
// //     bgImage = "/assets/auth-woman.png";
// //   } else if (pathname.includes("recruiter-sign-up")) {
// //     bgImage = "/assets/auth-woman.png";
// //   }

//   return (
//     <div className="text-white flex h-screen">
//       <div
//         className="w-full h-screen bg-cover bg-top bg-no-repeat"
//         style={{ backgroundImage: `url('${bgImage}')` }}></div>
//       <div className="w-full h-screen bg-primary"> {children}</div>
//     </div>
//   );
// };

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
