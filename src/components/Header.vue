<template>
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
      <!--
      <div class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon icon="user-astronaut"/> {{ currentUser.username }}
          </a>
          <ul class="dropdown-menu dropdown-menu-right dropdown-menu-dark" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/login">Login</router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click.prevent="logOut"> <font-awesome-icon icon="sign-out-alt" /> LogOut</a></li>
          </ul>
        </li>
      </div>
      -->      
    </ul>
  </div>
</nav>
</template>

<script>

export default {
    props: ['autor']
}
</script>
