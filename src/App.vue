<script setup>

</script>

<template>

<div id="app">

  <Header autor="MoviesYa!"/>

  <div class="container"> 
    <router-view></router-view>
  </div>

 <Footer autor="MoviesYa!"/>
  
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
        Footer, Header
    },
}
</script>

<style>
 @import "./assets/base.css";
</style>