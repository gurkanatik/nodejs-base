import express from "express";
import routes from "./routes/index.js";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", routes);
app.use(notFoundMiddleware);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
