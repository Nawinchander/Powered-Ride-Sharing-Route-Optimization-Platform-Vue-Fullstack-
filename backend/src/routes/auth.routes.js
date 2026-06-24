// routes/auth.routes.js

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshToken);