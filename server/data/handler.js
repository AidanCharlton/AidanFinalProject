"use strict";

const {
    response
} = require("express");

const {
    MongoClient, ObjectId,
} = require("mongodb");

require("dotenv").config();
const {
    MONGO_URI
} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

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

const getSpot = async (req, res) => {
    const { id } = req.params
    try {
        const objectId = new ObjectId(id)
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("montrealskatespots");
        const spot = await db.collection("spots").findOne(objectId)

        res.status(200).json({
            status: 200,
            data: spot,
        })
    } catch (err) {
        console.log(err)
    }
}

const getBorough = async (req, res) => {
    const { borough } = req.params;
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("montrealskatespots");
        const spots = await db.collection("spots").find().toArray()
        const boroughSpots = spots.filter((spot) => {
            if (spot.borough.toLowerCase() === borough) return spot;
        })
        res.status(200).json({
            status: 200,
            data: boroughSpots
        })
    } catch (err) {
        console.log(err)
    }
}

const getBoroughs = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("montrealskatespots");
        const spots = await db.collection("spots").find().toArray()
        const mapBoroughs = spots.map((spot) => {
            return spot.borough
        })
        const boroughNames = [...new Set(mapBoroughs)]
        res.status(200).json({
            status: 200,
            data: boroughNames.sort()
        })
    } catch (err) {
        console.log(err)
    }
}




module.exports = {
    getSpots,
    getSpot,
    getBorough,
    getBoroughs
};