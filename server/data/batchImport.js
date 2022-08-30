const { MongoClient } = require("mongodb");
const spots = require('./spots');
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const parseCoordinates = (link) => {
  const clipOne = link.split('/maps/@')
  const clipTwo = clipOne[1].split('/data')
  const clipThree = clipTwo[0].split(',')
  const lnglat = {
  lng: clipThree[0],
  lat: clipThree[1]
  }
  return lnglat
}

const newSpots = spots.map((s) => {
  if (s.type !== 'Skatepark') {
    return {
      ...s,
      type: 'Street'
    }
  } else {
    return s;
  }
})



const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("montrealskatespots");
  await db.collection("spots").insertMany(newSpots);
  console.log("Success!");
  client.close();
}

batchImport()