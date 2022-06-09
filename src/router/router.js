import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Registro from "../components/Registro.vue";
import Usuario from "../components/Usuario.vue";
import NotFound from "../components/NotFound.vue";
import CarritoPeliculas from '../components/CarritoPeliculas.vue'
import ConfirmaAlquiler from '../components/ConfirmaAlquiler.vue'
import Favoritos from '../components/Favoritos.vue'
import Historial from '../components/Historial.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/usuario/:id', component: Usuario },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/carritoPeliculas/', component: CarritoPeliculas , meta: {requiresAuth:true} },
    { path: '/confirmaAlquiler/', component: ConfirmaAlquiler , meta: {requiresAuth:true} },
    { path: '/favoritos/', component: Favoritos },
    { path: '/historial/', component: Historial },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  }) 

  router.beforeEach(  (to, from, next) => {

    const authn = localStorage.getItem('usuario'); //se guarda en string
    const login = (authn=="true");
    console.log(login);
    console.log("*********");
    if( to.matched.some(record => record.meta.requiresAuth ) && !login ) {
      alert("No podes entrar ahí");  
      next('/'); // no esta autorizado
    } else {        
        next();
    }

})


  export default router  