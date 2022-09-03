const { MongoClient } = require("mongodb");
const spots = require("./spots");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("montrealskatespots");
  await db.collection("spots").insertMany(spots);
  console.log("Success!");
  client.close();
};

batchImport();
