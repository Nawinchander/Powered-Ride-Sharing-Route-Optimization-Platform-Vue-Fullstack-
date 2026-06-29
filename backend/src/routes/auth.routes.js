const router =
require("express").Router();

const controller =
require(
"../controllers/auth.controller"
);

router.post(
    "/login",
    controller.login
);

module.exports =
router;

// const router = require("express").Router();

// const authController =
// require("../controllers/auth.controller");

// router.post(
//     "/register",
//     authController.register
// );

// router.post(
//     "/login",
//     authController.login
// );

// module.exports = router;


