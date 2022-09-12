require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const {
  getSpots,
  getSpot,
  getBoroughs,
  getBorough,
  getUsers,
  createUser,
  addLikes,
  addBookmark,
  getUser,
} = require("./data/handler");

app.get("/spots", getSpots);
app.get("/spots/:id", getSpot);
app.get("/boroughs", getBoroughs);
app.get("/boroughs/:borough", getBorough);
app.get("/users", getUsers);
app.get("/users/:id", getUser);
app.post("/adduser", createUser);
app.post("/likes", addLikes);
app.post("/bookmarks", addBookmark);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
