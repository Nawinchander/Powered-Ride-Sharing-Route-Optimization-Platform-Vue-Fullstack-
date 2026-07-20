const rideService = require("../services/ride.service");

exports.createRide = async ( req, res) => {

try { const ride = await rideService.createRide({
    riderId: req.user.id,
    pickupLocation: req.body.pickupLocation,
    destinationLocation: req.body.destinationLocation,
    fare: req.body.fare,
    distance:req.body.distance
});

res.status(201).json(ride);

}
catch(error){
    res.status(500).json({
        message: error.message
    });
}

};



