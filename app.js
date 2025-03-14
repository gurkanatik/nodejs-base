import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

import sequelize from "./config/db.js";

import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";
import { errorLoggerMiddleware } from "./middlewares/errorLoggerMiddleware.js";

const app = express();

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));

app.set("view engine", "ejs");
app.use("/", routes);
app.use(notFoundMiddleware);
app.use(errorLoggerMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
