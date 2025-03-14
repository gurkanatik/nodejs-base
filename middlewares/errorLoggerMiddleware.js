import fs from "fs";
import path from "path";

export const errorLoggerMiddleware = (err, req, res, _next) => {
  const now = new Date();
  const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`; // Gün-Ay-Yıl
  const logFilePath = path.resolve(`logs/error-${formattedDate}.log`);

  const errorStack = err.stack
    ? err.stack.split("\n")[1].trim()
    : "No stack trace available";

  const errorDetails = `[${now.toISOString()}] ${req.method} ${req.url} - ${
    err.message
  } (Error Line: ${errorStack})\n`;

  const logsDir = path.dirname(logFilePath);
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  try {
    fs.appendFileSync(logFilePath, errorDetails);
  } catch (fsErr) {
    console.error("Error writing to log file:", fsErr);
  }

  console.error("Error:", err.message, "Line:", errorStack);
  res.status(500).json({ error: "Internal Server Error", details: errorStack });
};
