<template>

<div>

<DriverMarker
v-for="
driver
in store.drivers
"
:key="
driver.driverId
"
:driver="driver"
/>

</div>

</template>

<script setup>

import DriverMarker
from
"../components/tracking/DriverMarker.vue";

import {
onMounted
}
from "vue";

import useSocket
from
"../composables/useSocket";

import {
useTrackingStore
}
from
"../stores/tracking.store";

const socket =
useSocket();

const store =
useTrackingStore();

onMounted(() => {

socket.on(
"location-updated",
(location) => {

store.updateDriver(
location
);

});

});

</script>



