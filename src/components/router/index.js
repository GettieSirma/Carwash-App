import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import Services from '../Services.vue';
import Contacts from '../Contacts.vue';
import About from '../About.vue';
 
const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: Contacts },
  { path: '/about', component: About } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
