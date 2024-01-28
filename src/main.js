
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css';
import axios from 'axios';
import store from './store/store.js';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

axios.defaults.baseURL = "https://api-hoze.gorgon.ir/"
const app = createApp(App)
// createApp(App).use(VueAwesomePaginate).mount("#app");

app.use(router)
app.use(store)
app.use(VueAwesomePaginate);
app.mount('#app')
