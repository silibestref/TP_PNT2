import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

/*
import axios from 'axios'
import VueAxios from 'vue-axios'
*/

const app = createApp(App);

app.use(router);
//app.use(VueAxios, axios)
//app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');
