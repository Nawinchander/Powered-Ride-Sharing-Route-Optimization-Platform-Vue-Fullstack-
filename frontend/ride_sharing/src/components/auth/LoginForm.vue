<template>

<form @submit.prevent="login">

<input
v-model="email"
placeholder="Email"
/>

<input
type="password"
v-model="password"
placeholder="Password"
/>

<button>
Login
</button>

</form>

</template>

<script setup>

import { ref }
from "vue";

import {
useAuthStore
}
from "../../stores/auth.store";

const email = ref("");
const password = ref("");

const store =
useAuthStore();

const login =
async () => {

    await store.login(
        email.value,
        password.value
    );
};

</script>


