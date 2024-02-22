const express = require("express");

const UserRouter = require("./routers/user.router");
const cors = require("cors");

const app = express();
const port = 1122;

app.use(cors());
app.use("/", UserRouter);

app.listen(port, () => {
  console.log(`you server is running wiht ${port}`);
});
