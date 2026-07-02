const Ride = require("../models/Ride");

exports.createRide = async (
rideData
) => {
    return Ride.create(rideData);
};

exports.findRideById = async (
rideId
) => {
    return Ride.findById(rideId);
};

exports.updateRide = async (
rideId,
data
) => {

    return Ride.findByIdAndUpdate(
        rideId,
        data,
        {
            new: true
        }
    );
};

