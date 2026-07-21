import { defineStore } from "pinia";

import api from "../api/ride.api";

export const useRideStore = defineStore("ride", {

state: () => ({ rides: [] }),

actions: {

async createRide(ride) {

const response = await api.post("/", ride);

this.rides.push(response.data);

},

async getRides() {

const response = await api.get("/");

this.rides = response.data;

}

}

});


// import { defineStore } from "pinia";

// import rideApi from "../api/ride.api";

// export const useRideStore = defineStore( "ride",

// {
// state: () => ({ currentRide: null }),

// actions: { async createRide( ride ){

// const response = await rideApi.post( "/", ride );

// this.currentRide = response.data;

// }

// }

// });


