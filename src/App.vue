<script setup>

</script>

<template>

<div id="app">

  <Cabecera/>

  <div class="container contenedor"> 
    <router-view></router-view>
  </div>

 <Pie autor="Movies Ya!"/>
  
</div>
</template>

<script>
import Pie from './components/pie.vue'
import Cabecera from './components/cabecera.vue'
export default {
  components: {
        Pie, Cabecera
    },
}
</script>

<style>
 @import "./assets/base.css";
.contenedor {
  margin: 8%;
}
</style>