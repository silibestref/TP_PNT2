import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {FontAwesomeIcon} from './plugins/font-awesome.js'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(router);
app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app');
