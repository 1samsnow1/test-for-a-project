
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css';
import axios from 'axios';
import store from './store/store.js';

axios.defaults.baseURL = "https://api-hoze.gorgon.ir/"
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
