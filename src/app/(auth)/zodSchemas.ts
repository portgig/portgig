import { z } from "zod";

// Base schema for sign-in (shared across all types)
export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Extended schema for sign-up (includes all fields)
export const signUpSchema = signInSchema
  .extend({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    phoneNumber: z
      .string()
      .regex(/^\d{10,15}$/, "Phone number must be 10-15 digits"),
    industry: z.string().min(1, "Please select an industry"),
    yearOfExperience: z
      .string()
      .regex(/^\d+$/, "Years of experience must be a number")
      .transform((val) => parseInt(val, 10))
      .refine((val) => val >= 0, "Years of experience cannot be negative"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

// Recruiter schemas (same as sign-in and sign-up for now, but can be customized)
export const recruiterSignInSchema = signInSchema;
export const recruiterSignUpSchema = signUpSchema;
