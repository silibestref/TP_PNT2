<template>
  <div>
    <h3>Estrenos</h3>   
    
    <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="peli.titulo">
        <button class="btn btn-outline-success"  type="submit" @click="buscarTitulo"><font-awesome-icon icon="search"/></button>
    </form>


    <div class="row mt-4">
      <div class="col mb-4" v-for="pelicula of peliculas" :key="pelicula">
        <div class="card" style="width:9rem;">
          <img class="img-thumbnail" style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" :src="pelicula.image">
          <div class="card-body">
            <h6 class="card-title">{{ pelicula.title }}</h6>
            <!-- <a href="#" class="btn btn-primary">Ver historia</a> -->
          </div>
        </div>
      </div>
    </div>  

    <button v-if="visible" @click="mostrarPeliculas" type="button" class="btn btn-success">Volver</button>

  </div>
</template>

<script>
import axios from "axios";
//const APIKEY = 'k_s3yrob4z';
const APIKEY = 'k_x7a3v98e';
//const APIKEY = 'k_acl7u4gp';
export default {
  data() {
    return {
      peliculas: [],
      listaAux: [],
      peli : {titulo:""},
      visible: false
    };
  },
  async created() {
      try {
        if(this.visible){
          this.visible = false;
      }
        const res = await axios.get(
          `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
        );
        this.peliculas = res.data.items;
        this.listaAux = [...this.peliculas];
      } 
      catch (error) {
        console.log(error);
      } 
  },
  methods:{
    buscarTitulo() {
      this.visible = true;
      this.peliculas = this.peliculas.filter(x => x.title === this.peli.titulo)      
    },
    mostrarPeliculas(){
      this.peliculas = [...this.listaAux];
    }

  }

};
</script>

<style>

</style>