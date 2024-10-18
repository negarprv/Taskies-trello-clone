import { z } from "zod";

export const signupScheme = z.object({
  fullName: z.string().min(3, "Full Name is required").max(50),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});
