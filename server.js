require("dotenv").config();
import express from "express";
import cors from "cors";

import UserRouter from "./routers/user.router";

const app = express();
const port = process.env.PORT || 1122;

app.use(cors());
app.use("/api/v1", UserRouter);

if (require.main === module) {
  // Start the server only if this script is the main module
  app.listen(port, () => {
    console.log(`Server is running with ${port}`);
  });
}

// app.listen(port, () => {
//   console.log(`Server is running with ${port}`);
// });

export default app;
