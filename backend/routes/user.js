const express = require("express");
const jwt = require("jsonwebtoken");
const { createUser, loginUser } = require("../db/user");
const router = express.Router();
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { username, password, email, searchHistory } = req.body;
    const user = await createUser(username, password, email, searchHistory);
    res.send({ success: true, message: "Registered Successfully", user: user });
  } catch (error) {
    res.send({
      success: false,
      message: "Registration failed: " + error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password);

    const token = jwt.sign({ username: username }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: "Login Success",
      user: user,
      token: token,
    });
  } catch (error) {
    res.send({ success: false, message: "Login failed: " + error.message });
  }
});

module.exports = router;
