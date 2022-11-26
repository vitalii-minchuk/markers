import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { CreateEventMarkerBodyType } from "./event-marker.schema";
import { createEventMarker } from "./event-marker.service";

export async function createEventMarkerHandler(
  req: Request<{}, {}, CreateEventMarkerBodyType>,
  res: Response
) {
  const eventMarker = req.body;
  try {
    await createEventMarker(eventMarker);

    return res
      .status(StatusCodes.CREATED)
      .send("Event marker created successfully");
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("Title already exists");
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
