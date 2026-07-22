///// ride list

<template>

<div>

<h2>Ride List</h2>

<button
@click="rideStore.getRides()"
>

Load Rides

</button>

<ul>

<li
v-for="ride in rideStore.rides"
:key="ride.id"
>

{{ ride.pickup }}

➡️

{{ ride.destination }}

-

{{ ride.status }}

</li>

</ul>

</div>

</template>

<script setup>

import {
useRideStore
}
from "../stores/ride.store";

const rideStore =
useRideStore();

</script>


