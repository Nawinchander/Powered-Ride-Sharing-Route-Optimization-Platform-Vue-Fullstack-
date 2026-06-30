const DriverLocation =
require(
"../models/DriverLocation"
);

exports.updateLocation =
async (
driverId,
latitude,
longitude
) => {

await DriverLocation
.findOneAndUpdate(
{
    driverId
},
{
    latitude,
    longitude,
    updatedAt:
    new Date()
},
{
    upsert: true
}
);
};``