const mongoClient = require("mongodb").MongoClient;
const data = require("./data");
const users = require("./users");

async function populate() {
  const client = await mongoClient.connect("mongodb://localhost:27017/");
  const database = client.db("ecostore_db");
  let collection = database.collection("products");

  try {
    await collection.insertMany(data);
    console.log("Populated the database");
  } catch (error) {
    console.log("Error populating the database: " + error.message);
  }

  collection = database.collection("users");

  try {
    await collection.insertMany(users);
    console.log("Populated the users database");
  } catch (error) {
    console.log("Error populating the database: " + error.message);
  }
}

populate();
