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
      <div class="dropdown">
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
        <li class="nav-item">
          <router-link to="/registro" class="nav-link">
            <font-awesome-icon icon="user-astronaut" /> Registrarse
          </router-link>
        </li>   
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Ingresar
          </router-link>
        </li>
      </div>      
    </ul>
  </div>
</nav>
</div>
</template>

<script>

export default {
    props: ['autor']
}
</script>
