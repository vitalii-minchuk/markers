import { object, string, TypeOf } from "zod";

export const loginSchema = {
  body: object({
    email: string({ required_error: "Email is required" }).email({
      message: "Invalid email type",
    }),
    password: string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 chars long")
      .max(64, "Password should be not longer than 64 chars"),
  }),
};

export type LoginBodyType = TypeOf<typeof loginSchema.body>;
