<template>
  <div class="p-10 bg-white rounded shadow text-center">
    <template v-if="user">
      <!-- แสดงโปรไฟล์ -->
      <img :src="user.photos[0].value" class="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 class="text-xl font-bold">{{ user.displayName }}</h2>
      <p class="text-gray-600">{{ user.emails[0].value }}</p>
      <button @click="logout" class="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Logout</button>
    </template>
    <template v-else>
      <!-- ปุ่ม Login -->
      <h1 class="text-xl font-bold mb-4">Login with Google</h1>
      <a :href="googleLoginURL" class="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Login with Google
      </a>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref(null)
const googleLoginURL = 'http://localhost:5000/auth/google'

// ดึงข้อมูล user เมื่อโหลด
const getUser = async () => {
  try {
    const res = await axios.get('http://localhost:5000/auth/user', {
      withCredentials: true
    })
    user.value = res.data
  } catch (err) {
    user.value = null
  }
}

const logout = async () => {
  await axios.get('http://localhost:5000/auth/logout', {
    withCredentials: true
  })
  user.value = null
  window.location.reload()
}

onMounted(getUser)
</script>
