import express, { Request, Response } from "express";
import mongoose from "mongoose";

// mongoose
//   .connect()
//   .then(() => console.log("Server Connected to db"))
//   .catch(() => console.log("Server Connected to db Error"));

const app: express.Application = express();
const port: number = 4004;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
