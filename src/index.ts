import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morganMiddleware from "./middlewares/morgan.middleware";
import logger from "./utils/logger";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morganMiddleware);

// Route handler
app.use("/", (req, res) => {
  return res.json({});
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Logging the error with Winston
  logger.error(err);
  // Sending an error response to the client
  res.status(500).json({ error: "An error occurred on the server." });
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
