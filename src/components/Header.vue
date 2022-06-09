<template>

<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <a class="navbar-brand ms-4" >{{autor}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/"><font-awesome-icon icon="home" /></router-link>
      </li> 
      <div class="dropdown" v-if="autenticado">
        <li class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Mis Servicios
        </li>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
          <li><router-link class="dropdown-item" to="/CarritoPeliculas">Alquilar Peliculas</router-link></li>
          <li><router-link class="dropdown-item" to="/ConfirmaAlquiler">Confirmar Alquiler</router-link></li>
        </ul>
      </div>       
    </ul>
  </div>
    <div class="collapse navbar-collapse nav justify-content-end me-4">
    <ul class="navbar-nav mr-auto">
      <div class="navbar-nav ml-auto">
        <li class="nav-item"  v-if="!autenticado">
          <router-link to="/registro" class="nav-link">
            <font-awesome-icon icon="user-astronaut" /> Registrarse
          </router-link>
        </li>   
        <li class="nav-item"  v-if="!autenticado">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Ingresar
          </router-link>
        </li>
        <li class="nav-item"  v-if="autenticado">
          <a @click="logout" class="nav-link">
            <font-awesome-icon icon="sign-out-alt" /> Log Out
          </a>
        </li>
      </div>      
    </ul>
  </div>
</nav>
</div>
</template>

<script>
import { usuarioStore } from '../store/userStore'
import { storeToRefs } from 'pinia'

export default {
    props: ['autor'],
    setup() {
    const store = usuarioStore();
    const {autenticado} = storeToRefs(store);
    const {userLogout} = store;
    return {
      store,autenticado,userLogout
    }
  },
  methods:{
    logout() {
      this.userLogout();
      this.$router.push('/');
    }
  }  
}
</script>
