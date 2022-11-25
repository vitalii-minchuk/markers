import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { connectToDB, disconnectFromDB } from "./utils/db";
import logger from "./utils/logger";
import userRoutes from "./modules/user/user.routes";

dotenv.config();

const app: express.Application = express();
const port = process.env.PORT;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);
app.use(helmet());

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("OK");
});

app.use("/api/users", userRoutes);

const server = app.listen(port, async () => {
  await connectToDB();
  logger.info(`Server is running on http://localhost:${port}/`);
});

const signals = ["SIGTERM", "SIGINT"];

function gracefullShutdown(signal: string) {
  process.on(signal, async () => {
    server.close();
    disconnectFromDB();
    logger.info("Server has been killed");
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i += 1) {
  gracefullShutdown(signals[i]);
}
