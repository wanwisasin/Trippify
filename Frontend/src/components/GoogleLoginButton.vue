<template>
  <button
    @click="handleGoogleLogin"
    class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Login with Google
  </button>
</template>

<script setup lang="ts">
function handleGoogleLogin() {
  window.location.href = 'http://localhost:3000/api/auth/google';
}
</script>
