const rideRepository = require("../repositories/ride.repository");
const Ride = require("../models/Ride")

const rides = [];


// Create Ride
exports.createRide = (pickup, destination) => {

    const ride = new Ride(
        rides.length + 1,
        pickup,
        destination
    );

    rides.push(ride);

    return ride;
};

// Get All Rides
exports.getRides = () => {

    return rides;

};




exports.createRide = async (rideData) => {

    const ride = await rideRepository.createRide({...rideData, status: "REQUESTED"    });

    return ride;
};

exports.assignDriver = async ( rideId, driverId) => {

    return rideRepository
    .updateRide( rideId,
        {
            driverId,
            status:
            "DRIVER_ASSIGNED"
        }
    );
};


