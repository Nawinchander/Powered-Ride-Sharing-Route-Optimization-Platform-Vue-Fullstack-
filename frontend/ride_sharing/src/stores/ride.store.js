import { defineStore } from "pinia";

import rideApi from "../api/ride.api";

export const useRideStore = defineStore( "ride",

    {
state: () => ({
    currentRide: null
}),

actions: { async createRide( ride ){

const response = await rideApi.post( "/", ride );

this.currentRide = response.data;

}

}

});


