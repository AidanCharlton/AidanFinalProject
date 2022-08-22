"use strict";

const {
    response
} = require("express");

const {
    MongoClient,
} = require("mongodb");

require("dotenv").config();
const {
    MONGO_URI
} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//handlers

const getSpots = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("montrealskatespots");
        const allSkateSpots = await db.collection("spots").find().toArray()
        if (allSkateSpots.length === 0) {
            res.status(400).json({
                status: 400,
                message: 'returns nothing'
            })
        } else {
            res.status(200).json({
                status: 200,
                data: allSkateSpots,
            })
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    testOut,
    getSpots
};