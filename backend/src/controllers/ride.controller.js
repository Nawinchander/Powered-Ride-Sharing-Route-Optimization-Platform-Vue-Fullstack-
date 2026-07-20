const rideService = require("../services/ride.service");

exports.createRide = async ( req, res) => {

try { const ride = await rideService.createRide({
    riderId: req.user.id,
    pickupLocation: req.body.pickupLocation,
    destinationLocation: req.body.destinationLocation,
    fare: req.body.fare,
    distance:req.body.distance

})

// Create Ride
exports.createRide = (req, res) => {

    const { pickup, destination } = req.body;

    const ride = rideService.createRide( pickup, destination );

    res.json(ride);

};

res.status(201).json(ride);

}

// Get All Rides
exports.getRides = (req, res) => {

    res.json( rideService.getRides() );

};


catch(error){
    res.status(500).json({
        message: error.message
    });
}

};



