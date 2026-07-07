<template>

<div> Estimated Arrival: {{ eta }} minutes </div>

</template>

<script setup>

defineProps({ eta: Number });

</script>