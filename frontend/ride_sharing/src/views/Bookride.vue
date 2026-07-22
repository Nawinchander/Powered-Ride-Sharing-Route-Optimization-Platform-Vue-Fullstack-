<template>

<div>

<h1> Book Ride </h1>

<input v-model="pickup" placeholder="Pickup" />

<input v-model="destination" placeholder="Destination"/>

<button @click="bookRide">Book</button>

<RideForm />

</div>

</template>


<script setup>

import RideForm from "../components/ride/RideForm.vue";

import { ref } from "vue";

import { useRideStore } from "../stores/ride.store";

const pickup = ref("");

const destination = ref("");

const rideStore = useRideStore();

const bookRide = async () => {

await rideStore.createRide({

pickup: pickup.value,

destination: destination.value

});

pickup.value = "";

destination.value = ""; 

};

</script>



