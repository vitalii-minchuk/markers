import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Server Connected to db"))
  .catch(() => console.log("Server Connected to db Error"));

const app: express.Application = express();
const port = process.env.PORT;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
