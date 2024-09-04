const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connnection established"))
  .catch(() => console.log("Failed to connect to database"));

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => res.send({ message: "Test Successful" }));

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening at ${port}`));
