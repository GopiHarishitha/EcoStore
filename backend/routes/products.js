const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;

router.get("/", async (req, res) => {
  const client = await mongoClient.connect("mongodb://localhost:27017/");
  const db = client.db("ecostore_db");
  const collection = db.collection("products");

  try {
    const products = await collection.find({}).toArray();
    res.send({ success: true, message: "All products", products: products });
  } catch (error) {
    res.send({ success: false, message: "Failed to fetch products" });
  }
});

module.exports = router;
