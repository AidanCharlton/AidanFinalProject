"use strict";

const { response, json } = require("express");

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getSpots = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const allSkateSpots = await db.collection("spots").find().toArray();
    if (allSkateSpots.length === 0) {
      res.status(400).json({
        status: 400,
        message: "returns nothing",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: allSkateSpots,
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

const getSpot = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    const objectId = new ObjectId(id);
    await client.connect();
    const db = client.db("montrealskatespots");
    const spot = await db.collection("spots").findOne(objectId);

    res.status(200).json({
      status: 200,
      data: spot,
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

const getBorough = async (req, res) => {
  const { borough } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const spots = await db.collection("spots").find().toArray();
    const boroughSpots = spots.filter((spot) => {
      if (spot.borough.toLowerCase() === borough) return spot;
    });
    res.status(200).json({
      status: 200,
      data: boroughSpots,
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

const getBoroughs = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const spots = await db.collection("spots").find().toArray();
    const mapBoroughs = spots.map((spot) => {
      return spot.borough;
    });
    const boroughNames = [...new Set(mapBoroughs)];
    res.status(200).json({
      status: 200,
      data: boroughNames.sort(),
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const requestUsers = await db.collection("users").find().toArray();
    const userArray = requestUsers.map((user) => {
      return user.user;
    });
    res.status(200).json({
      status: 200,
      message: "success",
      data: userArray,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 400,
      message: "request failed",
      error: err,
    });
  } finally {
    await client.close();
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  try {
    const objectId = new ObjectId(id);
    await client.connect();
    const db = client.db("montrealskatespots");
    const singleUser = await db.collection("users").findOne(objectId);
    res.status(200).json({
      status: 200,
      message: "success",
      data: singleUser,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 400,
      message: "request failed",
      error: err,
    });
  } finally {
    await client.close();
  }
};

const createUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const userData = await db.collection("users").find().toArray();
    const emails = userData.map((user) => {
      return user.email;
    });
    const findMatch = emails.find((email) => email === userEmail);
    if (findMatch === userEmail) {
      res.status(400).json({
        status: 400,
        message: "An account with this email already exists.",
      });
    } else if (userPassword.length < 8) {
      res.status(400).json({
        status: 400,
        message: "Password needs to be 8 characters.",
        passwordlength: userPassword.length,
      });
    } else if (!userEmail.includes("@")) {
      res.status(400).json({
        status: 400,
        message: "Email is Invalid.",
      });
    } else {
      const uploadInfo = await db.collection("users").insertOne(req.body);
      res.status(200).json({
        status: 200,
        message: "success",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "request failed",
    });
  } finally {
    await client.close();
  }
};

const userSignIn = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const loginMatch = await db
      .collection("users")
      .findOne({ email: userEmail });

    if (loginMatch === undefined) {
      res.status(400).json({
        status: 400,
        message: "Incorrect Email.",
      });
    } else if (loginMatch.password !== userPassword) {
      res.status(400).json({
        status: 400,
        message: "Incorrect Password.",
      });
    } else {
      res.status(200).json({
        status: 200,
        body: loginMatch,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 400,
      message: "request failed",
      error: err,
    });
  } finally {
    await client.close();
  }
};

const addLikes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const find = await db
      .collection("users")
      .updateOne({ user: "admin" }, { $set: { likes: req.body } });
    res.status(200).json({
      status: 200,
      message: "success",
      data: req.body,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 400,
      message: "request failed",
      error: err,
    });
  } finally {
    await client.close();
  }
};

const addBookmark = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("montrealskatespots");
    const find = await db
      .collection("users")
      .updateOne({ email: req.body[1] }, { $set: { bookmarks: req.body[0] } });
    res.status(200).json({
      status: 200,
      message: "success",
      body: req.body,
    });
  } catch (err) {
    res.status(400).json({ message: "failure" });
  } finally {
    await client.close();
  }
};

module.exports = {
  getSpots,
  getSpot,
  getBorough,
  getBoroughs,
  getUsers,
  getUser,
  createUser,
  addLikes,
  addBookmark,
  userSignIn,
};
