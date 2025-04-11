/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// import {
//   signInSchema,
//   signUpSchema,
//   recruiterSignInSchema,
//   recruiterSignUpSchema,
// } from "./zodSchemas";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { handleSignIn, handleSignUp } from "./route";

const signUpSchema = z
  .object({
    fullName: z.string().min(5, "Full name is required"),
    username: z.string().min(1, "Username is required"),
    phoneNumber: z.string().min(10, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    industry: z.string().min(1, "Industry is required"),
    yearOfExperience: z.string().min(1, "Years of experience is required"),
    location: z.string().min(1, "Location is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof signUpSchema>;

interface AuthFormProps {
  type: "sign-in" | "sign-up" | "recruiter-sign-in" | "recruiter-sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: FormData) => {
    if (isSignin || isRecruiterSignin) {
      handleSignIn(data);
      if (isSignin) {
        navigate.push("/creative-homepage");
      } else if (isRecruiterSignin) {
        navigate.push("/recruiter-homepage");
      }
    } else {
      handleSignUp(data);
      if (isSignup) {
        navigate.push("/creative-homepage");
      } else if (isRecruiterSignup) {
        navigate.push("/recruiter-homepage");
      }
    }
  };

  const isSignin = type === "sign-in";
  const isRecruiterSignin = type === "recruiter-sign-in";
  const isSignup = type === "sign-up";
  const isRecruiterSignup = type === "recruiter-sign-up";
  const labelStyles = "block max-lg:text-sm text-lg  font-medium";
  const inputStyles =
    "text-secondary mt-2 w-full max-sm:py-2 py-3 px-10 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-5 md:px-30 lg:px-10 xl:px-20 2xl:px-30 space-y-3 flex flex-col">
      <div className="max-lg:block lg:hidden self-center w-fit cursor-pointer ">
        {/* Logo */}
        <Link href="/">
          {" "}
          <Image
            src="/assets/portgig-2.png"
            alt="Portgig Logo"
            width={150} // Fixed width
            height={150} // Fixed height
          />
        </Link>
      </div>
      {/* page label */}
      <div className="space-y-4">
        {(isSignin || isRecruiterSignin) && (
          <p className=" max-lg:text-xl text-3xl">Sign in</p>
        )}
        {(isSignup || isRecruiterSignup) && (
          <p className=" max-lg:text-xl text-3xl">Sign up</p>
        )}

        {isSignin && <p className=" text-lg ">Welcome Creative, sign in</p>}
        {isSignup && <p className=" text-lg ">Welcome creative, sign up</p>}
        {isRecruiterSignin && (
          <p className=" text-lg ">Welcome Recruiter, sign in</p>
        )}
        {isRecruiterSignup && (
          <p className=" text-lg ">Welcome Recruiter, sign up</p>
        )}
      </div>

      {/* Fullname field  for sign ups */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Full name
          </label>
          <input
            {...register("fullName")}
            type="text"
            id="name"
            className={`${inputStyles}`}
            placeholder="Enter your full name"
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-3">
              {errors.fullName.message}
            </p>
          )}
        </div>
      )}
      {/* username field  for sign ups */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className={`${inputStyles}`}
            placeholder="Enter your username"
            required
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-3">
              {errors.username.message}
            </p>
          )}
        </div>
      )}
      {/* email */}

      <div className="text-white">
        <label htmlFor="name" className={`${labelStyles}`}>
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`${inputStyles}`}
          placeholder="Enter your email address"
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-3">{errors.email.message}</p>
        )}
      </div>

      {/* phone field  for sign ups */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Phone number
          </label>
          <input
            {...register("phoneNumber")}
            type="number"
            id="phoneNumber"
            className={`appearance-none  ${inputStyles}`}
            placeholder="Enter your phone number"
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-3">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      )}
      {/* industry/niche for sign ups */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Industry/ Niche
          </label>
          <select
            {...register("industry")}
            id="industry"
            className={`${inputStyles}`}>
            {" "}
            <option value="">Select your field</option>
            <option value="user">1</option>
            <option value="recruiter">2</option>
            <option value="admin">3</option>
          </select>
          {errors.industry && (
            <p className="text-red-500 text-sm mt-3">
              {errors.industry.message}
            </p>
          )}
        </div>
      )}
      {/* experience years  for sign ups */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Years of experience
          </label>
          <input
            {...register("yearOfExperience")}
            type="number"
            id="yearOfExperience"
            className={`appearance-none ${inputStyles}`}
            placeholder="Enter years of experience"
            required
          />
          {errors.yearOfExperience && (
            <p className="text-red-500 text-sm mt-3">
              {errors.yearOfExperience.message}
            </p>
          )}
        </div>
      )}
      {/* location for sign ups */}

      {(isSignup || isRecruiterSignup) && (
        <div className="text-white">
          <label htmlFor="name" className={`${labelStyles}`}>
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            id="location"
            className={`appearance-none ${inputStyles}`}
            placeholder="Enter your location"
            required
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-3">
              {errors.location.message}
            </p>
          )}
        </div>
      )}
      {/* password */}

      <div className="text-white">
        <label htmlFor="name" className={`${labelStyles}`}>
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className={`${inputStyles}`}
          placeholder="Enter your password"
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-3">{errors.password.message}</p>
        )}
      </div>
      {/* sign checkbox */}
      {(isSignin || isRecruiterSignin) && (
        <div className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            id="keepLoggedIn"
            name="keepLoggedIn"
            className="w-4 h-4 text-secondary focus:ring-secondary rounded"
          />
          <label htmlFor="keepLoggedIn" className={`${labelStyles}`}>
            Keep me logged in
          </label>
        </div>
      )}
      {/* confirm password */}
      {(isSignup || isRecruiterSignup) && (
        <div className="text-white ">
          <label htmlFor="name" className={`${labelStyles}`}>
            Confirm password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className={`${inputStyles}`}
            placeholder="Confirm your password"
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-3">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      )}
      {/* sign in button */}
      {(isSignin || isRecruiterSignin) && (
        <AuthButton
          type="submit"
          className="bg-white w-full text-primary mt-2  py-3  rounded-lg cursor-pointer ">
          <p className="max-md:text-lg text-2xl font-bold">Sign In</p>
        </AuthButton>
      )}
      {(isSignin || isRecruiterSignin) && (
        <div className="flex items-center gap-5 w-full">
          <hr className="border-t-1 border-t-white flex-grow" />
          <p className="text-white">or</p>
          <hr className="border-t-1 border-t-white flex-grow" />
        </div>
      )}
      {/* google sign in */}
      {(isSignin || isRecruiterSignin) && (
        <AuthButton
          onClick={() => {}}
          className="border-2 border-white w-full text-white mt-2  py-3 px-10 rounded-lg cursor-pointer">
          <div className="flex justify-center items-center gap-3">
            <p className="max-md:text-sm text-2xl">Continue with google</p>

            <img
              src="/assets/google.svg"
              alt="google logo"
              className="w-6 h-6"
            />
          </div>
        </AuthButton>
      )}
      {(isSignin || isRecruiterSignin) && (
        <p className="text-center  font-light">
          Don’t have an account with Portgig?{" "}
          <Link href={isSignin ? "/sign-up" : "/recruiter-sign-up"}>
            <span className="font-black underline cursor-pointer">Sign Up</span>
          </Link>
        </p>
      )}

      {/* sign up checkbox and sign up button */}
      {(isSignup || isRecruiterSignup) && (
        <div className="flex gap-2 items-center justify-end">
          <div className="flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-4 h-4 text-secondary focus:ring-white rounded"
            />
            <label
              htmlFor="keepLoggedIn"
              className="text-[5px] sm:text-[8px] font-medium">
              By signing up, you agree to receive emails about updates, job
              offers, and more from PortGig.
            </label>
          </div>

          {/* button */}
          <AuthButton
            type="submit"
            className="border border-white  text-white mt-2  py-3 px-2  rounded-lg cursor-pointer">
            <p className="text-[12px]">Sign up</p>
          </AuthButton>
        </div>
      )}
    </form>
  );
};

export default AuthForm;

// /* eslint-disable @next/next/no-img-element */
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import {
//   signInSchema,
//   signUpSchema,
//   recruiterSignInSchema,
//   recruiterSignUpSchema,
// } from "./zodSchemas";
// import AuthButton from "./AuthButton";
// import Link from "next/link";
// import { handleSignIn, handleSignUp } from "./route";

// ///

// type FormData = {
//   fullName?: string;
//   username: string;
//   phoneNumber: string;
//   email: string;
//   password: string;
//   industry: string;
//   yearOfExperience: string;
//   location: string;
//   confirmPassword: string;
// };

// // type signInData = z.infer<typeof signInSchema>;
// // type signUpData = z.infer<typeof signUpSchema>;

// interface AuthFormProps {
//   type: "sign-in" | "sign-up" | "recruiter-sign-in" | "recruiter-sign-up";
// }

// const AuthForm = ({ type }: AuthFormProps) => {
//   const navigate = useRouter();

//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     username: "",
//     password: "",
//     industry: "",
//     yearOfExperience: "",
//     location: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
//     {}
//   );

//   //   handle input chnage
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error for this field on change
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   //handle submit
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Select schema based on type
//     const schema =
//       type === "sign-in"
//         ? signInSchema
//         : type === "sign-up"
//         ? signUpSchema
//         : type === "recruiter-sign-in"
//         ? recruiterSignInSchema
//         : recruiterSignUpSchema;

//     // Validate form data
//     const result = schema.safeParse(formData);
//     if (!result.success) {
//       const fieldErrors: Partial<Record<keyof FormData, string>> = {};
//       result.error.issues.forEach((issue) => {
//         const field = issue.path[0] as keyof FormData;
//         fieldErrors[field] = issue.message;
//       });
//       setErrors(fieldErrors);
//       return;
//     } else {
// 		// Login or sign up logic

//       if (isSignin || isRecruiterSignin) {
//         handleSignIn(formData);
//         if (isSignin) {
//           navigate.push("/creative-homepage");
//         } else if (isRecruiterSignin) {
//           navigate.push("/recruiter-homepage");
//         }
//       } else {
//         handleSignUp(formData);
//         if (isSignup) {
//           navigate.push("/creative-homepage");
//         } else if (isRecruiterSignup) {
//           navigate.push("/recruiter-homepage");
//         }
//       }

//       setFormData({
//         fullName: "",
//         email: "",
//         phoneNumber: "",
//         username: "",
//         password: "",
//         industry: "",
//         yearOfExperience: "",
//         location: "",
//         confirmPassword: "",
//       });
//       setErrors({});
//     }
//   };

//   const isSignin = type === "sign-in";
//   const isRecruiterSignin = type === "recruiter-sign-in";
//   const isSignup = type === "sign-up";
//   const isRecruiterSignup = type === "recruiter-sign-up";
//   const labelStyles = "block max-lg:text-sm text-lg  font-medium";
//   const inputStyles =
//     "text-secondary mt-2 w-full max-sm:py-2 py-3 px-10 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary";
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="px-5 md:px-30 lg:px-10 xl:px-20 2xl:px-30 space-y-3 flex flex-col">
//       <div className="max-lg:block lg:hidden self-center w-fit cursor-pointer ">
//         {/* Logo */}
//         <Link href="/">
//           {" "}
//           <Image
//             src="/assets/portgig-2.png"
//             alt="Portgig Logo"
//             width={150} // Fixed width
//             height={150} // Fixed height
//           />
//         </Link>
//       </div>
//       {/* page label */}
//       <div className="space-y-4">
//         {(isSignin || isRecruiterSignin) && (
//           <p className=" max-lg:text-xl text-3xl">Sign in</p>
//         )}
//         {(isSignup || isRecruiterSignup) && (
//           <p className=" max-lg:text-xl text-3xl">Sign up</p>
//         )}

//         {isSignin && (
//           <p className=" text-lg ">Welcome Creative, sign in</p>
//         )}
//         {isSignup && (
//           <p className=" text-lg ">Welcome creative, sign up</p>
//         )}
//         {isRecruiterSignin && (
//           <p className=" text-lg ">Welcome Recruiter, sign in</p>
//         )}
//         {isRecruiterSignup && (
//           <p className=" text-lg ">Welcome Recruiter, sign up</p>
//         )}
//       </div>

//       {/* Fullname field  for sign ups */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Full name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className={`${inputStyles}`}
//             placeholder="Enter your full name"
//             required
//           />
//           {errors.fullName && (
//             <p className="text-red-500 text-sm mt-3">{errors.fullName}</p>
//           )}
//         </div>
//       )}
//       {/* username field  for sign ups */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className={`${inputStyles}`}
//             placeholder="Enter your username"
//             required
//           />
//           {errors.username && (
//             <p className="text-red-500 text-sm mt-3">{errors.username}</p>
//           )}
//         </div>
//       )}
//       {/* email */}

//       <div className="text-white">
//         <label htmlFor="name" className={`${labelStyles}`}>
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={`${inputStyles}`}
//           placeholder="Enter your email address"
//           required
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mt-3">{errors.email}</p>
//         )}
//       </div>

//       {/* phone field  for sign ups */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Phone number
//           </label>
//           <input
//             type="number"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className={`appearance-none  ${inputStyles}`}
//             placeholder="Enter your username"
//             required
//           />
//           {errors.phoneNumber && (
//             <p className="text-red-500 text-sm mt-3">{errors.phoneNumber}</p>
//           )}
//         </div>
//       )}
//       {/* industry/niche for sign ups */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Industry/ Niche
//           </label>
//           <select
//             id="industry"
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className={`${inputStyles}`}>
//             {" "}
//             <option value="">Select your field</option>
//             <option value="user">1</option>
//             <option value="recruiter">2</option>o
//             <option value="admin">3</option>
//           </select>
//           {errors.industry && (
//             <p className="text-red-500 text-sm mt-3">{errors.industry}</p>
//           )}
//         </div>
//       )}
//       {/* experience years  for sign ups */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Years of experience
//           </label>
//           <input
//             type="number"
//             id="yearOfExperience"
//             name="yearOfExperience"
//             value={formData.yearOfExperience}
//             onChange={handleChange}
//             className={`appearance-none ${inputStyles}`}
//             placeholder="Enter years of expericence"
//             required
//           />
//           {errors.yearOfExperience && (
//             <p className="text-red-500 text-sm mt-3">
//               {errors.yearOfExperience}
//             </p>
//           )}
//         </div>
//       )}
//       {/* location for sign ups */}

//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className={`appearance-none ${inputStyles}`}
//             placeholder="Enter your location"
//             required
//           />
//           {errors.location && (
//             <p className="text-red-500 text-sm mt-3">{errors.location}</p>
//           )}
//         </div>
//       )}
//       {/* password */}

//       <div className="text-white">
//         <label htmlFor="name" className={`${labelStyles}`}>
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className={`${inputStyles}`}
//           placeholder="Enter your email password"
//           required
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm mt-3">{errors.password}</p>
//         )}
//       </div>
//       {/* sign chekcbox */}
//       {(isSignin || isRecruiterSignin) && (
//         <div className="flex items-center space-x-2 text-white">
//           <input
//             type="checkbox"
//             id="keepLoggedIn"
//             name="keepLoggedIn"
//             className="w-4 h-4 text-secondary focus:ring-secondary rounded"
//           />
//           <label htmlFor="keepLoggedIn" className={`${labelStyles}`}>
//             Keep me logged in
//           </label>
//         </div>
//       )}
//       {/* confirm password */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="text-white ">
//           <label htmlFor="name" className={`${labelStyles}`}>
//             Confirm password
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className={`${inputStyles}`}
//             placeholder="Enter your email password"
//             required
//           />
//           {errors.confirmPassword && (
//             <p className="text-red-500 text-sm mt-3">
//               {errors.confirmPassword}
//             </p>
//           )}
//         </div>
//       )}
//       {/* sign in button */}
//       {(isSignin || isRecruiterSignin) && (
//         <AuthButton
//           type="submit"
//           className="bg-white w-full text-primary mt-2  py-3  rounded-lg ">
//           <p className="max-md:text-lg text-2xl font-bold">Sign In</p>
//         </AuthButton>
//       )}
//       {(isSignin || isRecruiterSignin) && (
//         <div className="flex items-center gap-5 w-full">
//           <hr className="border-t-1 border-t-white flex-grow" />
//           <p className="text-white">or</p>
//           <hr className="border-t-1 border-t-white flex-grow" />
//         </div>
//       )}
//       {/* google sign in */}
//       {(isSignin || isRecruiterSignin) && (
//         <AuthButton
//           onClick={() => {}}
//           className="border-2 border-white w-full text-white mt-2  py-3 px-10 rounded-lg ">
//           <div className="flex justify-center items-center gap-3">
//             <p className="max-md:text-sm text-2xl">Continue with google</p>

//             <img
//               src="/assets/google.svg"
//               alt="google logo"
//               className="w-6 h-6"
//             />
//           </div>
//         </AuthButton>
//       )}
//       {(isSignin || isRecruiterSignin) && (
//         <p className="text-center  font-light">
//           Don’t have an account wit Portgig?{" "}
//           <Link href={isSignin ? "/sign-up" : "/recruiter-sign-up"}>
//             <span className="font-black underline">Sign Up</span>
//           </Link>
//         </p>
//       )}

//       {/* sign up chekcbox and sign up buttobn */}
//       {(isSignup || isRecruiterSignup) && (
//         <div className="flex gap-2 items-center justify-end">
//           <div className="flex items-center space-x-2 text-white">
//             <input
//               type="checkbox"
//               id="terms"
//               name="terms"
//               className="w-4 h-4 text-secondary focus:ring-white rounded"
//             />
//             <label
//               htmlFor="keepLoggedIn"
//               className="text-[5px] sm:text-[8px] font-medium">
//               By signing up, you agree to receive emails about updates, job
//               offers, and more from PortGig.
//             </label>
//           </div>

//           {/* button */}
//           <AuthButton
//             type="submit"
//             className="border border-white  text-white mt-2  py-3 px-2  rounded-lg ">
//             <p className="text-[10px]">Sign up</p>
//           </AuthButton>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AuthForm;
