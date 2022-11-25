import mongoose from "mongoose";
import logger from "./logger";
import * as dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.MONGODB_URL as string;

export async function connectToDB() {
  try {
    await mongoose.connect(dbUrl);
    logger.info("Connected to database");
  } catch (error) {
    logger.error(error, "Failed to connect to database");
    process.exit(1);
  }
}

export async function disconnectFromDB() {
  await mongoose.connection.close();
  logger.info("Disconnected from database");

  return;
}
