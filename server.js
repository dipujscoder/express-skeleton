import express from "express";
require("dotenv").config();
import cors from "cors";

import UserRouter from "./routers/user.router";

const app = express();
const port = process.env.PORT || 1122;

app.use(cors());
app.use("/", UserRouter);

app.listen(port, () => {
  console.log(`Server is running with ${port}`);
});
