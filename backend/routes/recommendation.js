const express = require("express");
const router = express.Router();
const redis = require("redis");
const raccoon = require("raccoon");

const redisClient = redis.createClient();

raccoon.config.nearestNeighbors = 5;
raccoon.config.className = "product";

router.post("/like", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    await raccoon.liked(userId, productId);
    res.send({ success: true, message: "Liked!" });
  } catch (error) {
    res.send({ success: false, message: "Failed to like" });
  }
});

router.post("/dislike", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    await raccoon.disliked(userId, productId);
    res.send({ success: true, message: "Disiked!" });
  } catch (error) {
    res.send({ success: false, message: "Failed to dislike" });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const recommendations = await raccoon.recommendFor(userId, 1);
    res.send({
      message: "1 recommendations",
      success: true,
      recommendations: recommendations,
    });
  } catch (error) {
    res.send({ success: false, message: "Failed to get recommendations" });
  }
});

module.exports = router;
