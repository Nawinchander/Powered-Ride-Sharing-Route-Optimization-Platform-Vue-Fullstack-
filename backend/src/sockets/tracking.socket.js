module.exports =
(io) => {

io.on(
"connection",
(socket) => {

socket.on(
"driver-location",
async (data) => {

io.emit(
"location-updated",
data
);

});

});
};