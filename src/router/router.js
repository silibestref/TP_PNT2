import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Registro from "../components/Registro.vue";
import Usuario from "../components/Usuario.vue";
import NotFound from "../components/NotFound.vue";
import CarritoPeliculas from '../components/CarritoPeliculas.vue'
import ConfirmaAlquiler from '../components/ConfirmaAlquiler.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/usuario/:id', component: Usuario },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/carritoPeliculas/', component: CarritoPeliculas },
    { path: '/confirmaAlquiler/', component: ConfirmaAlquiler },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  }) 

  export default router  