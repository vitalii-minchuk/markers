import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { createEventMarkerHandler } from "./event-marker.controller";
import { createEventMarkerSchema } from "./event-marker.schema";

const router = express.Router();

router.post(
  "/",
  processRequestBody(createEventMarkerSchema.body),
  createEventMarkerHandler
);

export default router;
