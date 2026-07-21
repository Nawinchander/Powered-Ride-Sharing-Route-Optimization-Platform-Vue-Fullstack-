<template>

<div>

<h1> Book Ride </h1>

<input
v-model="pickup"
placeholder="Pickup"
/>

<input
v-model="destination"
placeholder="Destination"
/>

<button @click="bookRide">Book</button>

<RideForm />

</div>

</template>


<script setup>

import RideForm from "../components/ride/RideForm.vue";

</script>



