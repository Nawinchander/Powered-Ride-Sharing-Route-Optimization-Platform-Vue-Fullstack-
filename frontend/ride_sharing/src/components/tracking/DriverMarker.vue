<template>

<div>

Driver:
{{ driver.driverId }}

{{ driver.latitude }}

{{ driver.longitude }}

</div>

</template>

<script setup>

defineProps({
    driver: Object
});

</script>




