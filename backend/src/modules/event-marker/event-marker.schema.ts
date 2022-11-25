import { object, string } from "zod";

export const createEventMarkerSchema = {
  body: object({
    title: string({
      required_error: "Title is required",
    }).max(80, "Title mist be less than 80 chars long"),
    description: string({
      required_error: "Description is required",
    }),
    position: string({
      required_error: "Position is required",
    }),
  }),
};
