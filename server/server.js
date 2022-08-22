const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

const app = express();

const {
  getSpots,
  testOut
} = require("./data/handler")

app.get("/getspots", getSpots)
app.get("/test", testOut)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});