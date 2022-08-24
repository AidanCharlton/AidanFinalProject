require("dotenv").config()
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

const app = express();

const {
  getSpots,
  getSpot,
  getBoroughs,
  getBorough
} = require("./data/handler")

app.get("/spots", getSpots)
app.get("/spots/:id", getSpot)
app.get("/boroughs", getBoroughs)
app.get("/boroughs/:borough", getBorough)



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});