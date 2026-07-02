const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
{
    riderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    pickupLocation: {
        latitude: Number,
        longitude: Number,
        address: String
    },

    destinationLocation: {
        latitude: Number,
        longitude: Number,
        address: String
    },

    fare: Number,

    distance: Number,

    status: {
        type: String,
        enum: [
            "REQUESTED",
            "DRIVER_ASSIGNED",
            "ACCEPTED",
            "STARTED",
            "COMPLETED",
            "CANCELLED"
        ],
        default: "REQUESTED"
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model(
    "Ride",
    rideSchema
);