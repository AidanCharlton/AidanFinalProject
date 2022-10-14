const { MongoClient } = require("mongodb");
const spots = require("./spots");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const batchImport = async () => {
//   const client = new MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db("montrealskatespots");
//   await db.collection("spots").insertMany(spots);
//   console.log("Success!");
//   client.close();
// };

// const userLikes = {
//   user: "admin",
//   likes: [],
//   bookmarks: [],
// };

// const updateLikes = async () => {
//   const client = new MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     const db = client.db("montrealskatespots");
//     await db.collection("admindata").insertOne(userLikes);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// };

// const addTags = async () => {
//   const client = new MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     const db = client.db("montrealskatespots");
//     const everySpot = await db.collection("spots").find().toArray();
//     const addedTags = everySpot.map((spot) => {
//       return { ...spot, tags: [], upvote: [], downvote: [] };
//     });
//     await db.collection("updatedspots").insertMany(addedTags);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// };

const rename = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const everySpot = await db.updatedspots.renameCollection("spots");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

rename();
