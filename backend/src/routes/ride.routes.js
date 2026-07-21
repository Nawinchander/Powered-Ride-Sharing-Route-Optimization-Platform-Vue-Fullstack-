const router = require("express") .Router();

const controller = require( "../controllers/ride.controller" );

const auth = require( "../middleware/auth.middleware" );

router.post( "/", auth, controller.createRide );


// Create Ride
router.post("/",rideController.createRide);

// Get Rides
router.get("/",rideController.getRides);

module.exports = router;


