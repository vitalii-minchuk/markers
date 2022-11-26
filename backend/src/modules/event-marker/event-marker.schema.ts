import { number, object, string, TypeOf } from "zod";

export const createEventMarkerSchema = {
  body: object({
    title: string({
      required_error: "Title is required",
    })
      .min(1)
      .max(80, "Title mist be less than 80 chars long"),
    description: string().optional(),
    lat: number({ required_error: "Latitude is required" }),
    lng: number({ required_error: "Longitude is required" }),
    radius: number().optional(),
  }),
};

export type CreateEventMarkerBodyType = TypeOf<
  typeof createEventMarkerSchema.body
>;
