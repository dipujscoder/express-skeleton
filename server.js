import express from "express";

import UserRouter from "./routers/user.router";
import cors from "cors";
// import connectDB from "./config";
// import { Sequelize } from "sequelize";
// connectDB();

const app = express();
const port = 1122;

// export const sequelize = new Sequelize("elastic", "postgres", "1230", {
//   host: "localhost",
//   dialect: "postgres",
// });

app.use(cors());
app.use("/", UserRouter);

app.listen(port, () => {
  console.log(`you server is running wiht ${port}`);
});

export default app;
