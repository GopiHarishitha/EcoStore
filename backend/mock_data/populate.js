const mongoClient = require("mongodb").MongoClient;
const data = require("./data");
const users =require("./users");
const axios=require("axios");


async function populate() {
  const client = await mongoClient.connect("mongodb://localhost:27017/");
  const database = client.db("ecostore_db");
  const collection = database.collection("products");

  try {
    await collection.insertMany(data);
    console.log("Populated the database");
  } catch (error) {
    console.log("Error populating the database: " + error.message);
  }
}

async function populateUsers(){
  for (const user in users){
    const res = await axios.post("http://10.50.48.225:6000", user)
    console.log(res.data);
  }
  console.log("Populated Users");
}

// populate();
populateUsers();
