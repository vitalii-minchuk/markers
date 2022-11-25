import { infer, object, string, TypeOf } from "zod";

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: "Name is required",
    }),
    email: string({ required_error: "Email is required" }).email({
      message: "Invalid email type",
    }),
    password: string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 chars long")
      .max(64, "Password should be not longer than 64 chars"),
    confirmPassword: string({
      required_error: "Confirm password is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }),
};

export type RegisterUserBodyType = TypeOf<typeof registerUserSchema.body>;
