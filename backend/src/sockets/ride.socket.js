module.exports =
(io) => {

io.on(
"connection",
(socket) => {

socket.on(
"ride-request",
(ride) => {

io.emit(
"new-ride-request",
ride
);

});

socket.on(
"driver-accepted",
(data) => {

io.emit(
"ride-accepted",
data
);

});

});

};