<template>

<div>

<h3> Estimated Fare </h3>

<h1> ₹ {{ pricingStore.fare }} </h1>

<p> Surge: {{ pricingStore.multiplier }}x </p>

</div>

</template>

<script setup>

import { usePricingStore } from "../../stores/pricing.store";

const pricingStore = usePricingStore();

</script>



