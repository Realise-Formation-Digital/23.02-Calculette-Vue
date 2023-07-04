import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from "./libs/router.js";
import vuetify from "./libs/vuetify.js";
import pinia from "./libs/pinia.js";

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
