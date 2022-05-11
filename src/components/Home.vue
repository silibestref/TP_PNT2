<template>
  <div>
    <h3>Estrenos</h3>    
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" @click="buscarTitulo" type="submit"><font-awesome-icon icon="search"/></button>
      </form>
    
    <div class="row mt-4">
      <div class="col mb-4" v-for="pelicula of peliculas" :key="pelicula">
        <div class="card pt-1" style="width:9rem;">
          <img class="img-thumbnail" style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" :src="pelicula.image">
          <div class="card-body">
            <h6 class="card-title">{{ pelicula.title }}</h6>
            <!-- <a href="#" class="btn btn-primary">Ver historia</a> -->
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
//const APIKEY = 'k_s3yrob4z';
const APIKEY = 'k_x7a3v98e';
export default {
  data() {
    return {
      peliculas: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
      );
      this.peliculas = res.data.items;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    buscarTitulo(titulo) {
      return this.peliculas.filter(x => x.title == titulo)
    }
  }

};
</script>

<style>



</style>