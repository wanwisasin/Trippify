import { createRouter, createWebHistory } from 'vue-router';
import LoginSuccess from '@/pages/LoginSuccess.vue';

const routes = [
  { path: '/success', component: LoginSuccess }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
