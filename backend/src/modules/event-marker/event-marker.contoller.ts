import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createEventMarker } from "./event-marker.service";

export async function createMarkerHandler(req: Request, res: Response) {
  const eventMarker = req.body;
  try {
    await createEventMarker(eventMarker);

    return res
      .status(StatusCodes.CREATED)
      .send("Event marker created successfully");
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
