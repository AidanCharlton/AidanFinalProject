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
  userSignIn,
  getParks,
} = require("./data/handler");

app.get("/spots", getSpots);
app.get("/spots/:id", getSpot);
app.get("/boroughs", getBoroughs);
app.get("/boroughs/:borough", getBorough);
app.get("/users", getUsers);
app.get("/users/:id", getUser);
app.get("/parks", getParks);
app.post("/adduser", createUser);
app.post("/signin", userSignIn);
app.post("/likes", addLikes);
app.post("/bookmarks", addBookmark);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
