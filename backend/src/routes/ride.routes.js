const router = require("express") .Router();

const controller = require( "../controllers/ride.controller" );

const auth = require( "../middleware/auth.middleware" );

router.post( "/", auth, controller.createRide );

module.exports = router;


