<template>

<div>

    <input
        v-model="email"
        placeholder="Email"
    />

    <input
        type="password"
        v-model="password"
        placeholder="Password"
    />

    <button @click="login">
        Login
    </button>

</div>

</template>

<script setup>

import { ref } from "vue";
import { useAuthStore }
from "../stores/auth.store";

const email = ref("");
const password = ref("");

const authStore =
useAuthStore();

const login = async () => {
    await authStore.login(
        email.value,
        password.value
    );
};

</script>