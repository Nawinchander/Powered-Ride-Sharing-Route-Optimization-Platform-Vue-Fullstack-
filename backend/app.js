const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const rideRoutes = require("./routes/ride.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);

module.exports = app;


// const express = require("express");
// const cors = require("cors");

// const authRoutes = require("./routes/auth.routes");
// const rideRoutes = require( "./routes/ride.routes" );

// const app = express();

// const pricingRoutes = require( "./routes/pricing.routes" );


// app.use(cors());
// app.use(express.json());
// app.use( "/api/rides", rideRoutes );

// app.use("/api/pricing", pricingRoutes );
// app.use("/api/auth", authRoutes);

// module.exports = app;





