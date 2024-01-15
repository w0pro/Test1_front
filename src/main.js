import './assets/main.css'
import {routes} from "@/routes/routes.ts";
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
