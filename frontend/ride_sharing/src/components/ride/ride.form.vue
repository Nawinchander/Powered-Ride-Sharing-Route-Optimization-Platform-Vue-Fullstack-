<template>

<div>

<input
v-model="pickup"
placeholder="Pickup"
/>

<input
v-model="destination"
placeholder="Destination"
/>

<button @click="bookRide" Book Ride </button>

</div>

</template>

<script setup>

import { ref } from "vue";

import { useRideStore } from "../../stores/ride.store";

const pickup = ref("");

const destination = ref("");

const store = useRideStore();

const bookRide = async () => {

await store.createRide({

pickupLocation: {
    address:
    pickup.value
},

destinationLocation: {
    address:
    destination.value
},

fare: 250,

distance: 8

});

};

</script>

