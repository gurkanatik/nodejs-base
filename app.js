import express from "express";
import routes from "./routes/index.js";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";
import { errorLoggerMiddleware } from "./middlewares/errorLoggerMiddleware.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", routes);
app.use(notFoundMiddleware);
app.use(errorLoggerMiddleware);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
