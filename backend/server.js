const express = require("express");
const app = express();

app.get("/", (req, res) => res.send({ message: "Test Successful" }));

const port = 7000;

app.listen(port, () => console.log(`server listening at ${port}`));
