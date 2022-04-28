<script setup>

</script>

<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" style="margin-left:2em">Proyecto</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/registro">Registro</router-link>
      </li>
    </ul>
  </div>
</nav>  
  <br>
  <div class="container"> 
    <router-view></router-view>
   
  </div>
 
</div>
</template>

<style>
@import "./assets/base.css";


</style>
