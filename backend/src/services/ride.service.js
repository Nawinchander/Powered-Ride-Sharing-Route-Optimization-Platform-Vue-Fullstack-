const rideRepository = require("../repositories/ride.repository");

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


