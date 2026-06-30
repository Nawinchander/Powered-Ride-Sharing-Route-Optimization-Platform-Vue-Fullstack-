import {
defineStore
}
from "pinia";

export const
useTrackingStore =
defineStore(
"tracking",
{
state: () => ({
    drivers: []
}),

actions: {

updateDriver(
location
) {

const index =
this.drivers
.findIndex(
d =>
d.driverId ===
location.driverId
);

if(index >= 0){
    this.drivers[index] =
    location;
}
else{
    this.drivers.push(
        location
    );
}

}
}
});