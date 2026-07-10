const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = require("./app");

app.listen(process.env.PORT,()=>{

    console.log(
        `Server running on ${process.env.PORT}`
    );

});



// const app = require("./app");
// const http = require("http");

// const server = http.createServer(app);

// server.listen(5000, () => {
//     console.log("Server running on port 5000");
// });

// const express = require("express");

// const http = require("http");

// const { Server } = require("socket.io");

// const app = express();

// const server = http.createServer(app);

// const io = new Server(server);

// require( "./sockets/tracking.socket" )(io);

// server.listen( 5000 );


