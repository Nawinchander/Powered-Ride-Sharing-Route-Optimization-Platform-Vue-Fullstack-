const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

    driverId: String,

    latitude: Number,

    longitude: Number,

    updatedAt: Date
});

module.exports =
mongoose.model(
    "DriverLocation",
    schema
);