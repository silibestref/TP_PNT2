<template>
  <div>
    <h3>Estrenos</h3>   
    
    <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="peli.titulo">
        <button class="btn btn-outline-success"  type="submit" @click="buscarTitulo"><font-awesome-icon icon="search"/></button>
        <button v-if="visible" @click="limpiarFiltro" type="button" class="btn btn-danger mx-2"><font-awesome-icon icon="refresh"/></button>
    </form>    

    <div class="row mt-4">

      <div class="col mb-4 " v-for="pelicula of peliculas" :key="pelicula">
        <div v-if="detalle" class="ratio miRatio">
          <iframe :src="trailers" title="YouTube video" allowfullscreen></iframe>
        </div>
        <div class="card" style="width:9rem;">
          <a @click="verDetalleTitulo(pelicula)" :style="cursor"><img class="img-thumbnail" :src="pelicula.image"></a>
          <div class="card-body">
            <h6 class="card-title">{{ pelicula.title }}</h6>
          </div>
        </div>
      </div>
    </div>  
  
</div>
</template>

<script>
import axios from "axios";
const APIKEY = 'k_s3yrob4z';
//const APIKEY = 'k_x7a3v98e'; 
//const APIKEY = 'k_acl7u4gp';
//const APIKEY = 'k_muq1swl8';
export default {
  data() {
    return {
      peliculas: [],
      listaAux: [],
      trailers: [],
      peli : {titulo:""},
      visible: false,
      cursor: { cursor:'pointer'},
      detalle: false
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
      this.peliculas = this.peliculas.filter(x => x.title.match(this.peli.titulo));
      this.filtrarTitulo();
    },
    verDetalleTitulo(pelicula) {
      this.peliculas = this.peliculas.filter(x => x.title === pelicula.title);
      this.mostrarTrailer(pelicula.id);      
    },
    filtrarTitulo(){
      this.visible = true;
    },
    mostrarDetalle(){
      this.detalle = true;
      this.filtrarTitulo();
    },
    async mostrarTrailer(id){
      this.mostrarDetalle();
      try {
        console.log(id);
        const res = await axios.get(
          `https://imdb-api.com/en/API/Trailer/${APIKEY}/${id}/`
        );
        this.trailers = res.data.linkEmbed;
        console.log(this.trailers);
      } 
      catch (error) {
        console.log(error);
      } 
    },
    limpiarFiltro(){
      this.peli.titulo = '';
      this.visible = false;
      this.detalle = false;
      this.peliculas = [...this.listaAux];
    }, 

  }

};
</script>

<style>

.miRatio{
  max-width:80%; 
  height:150%; 
  margin-right:2em; 
  float:right;
}

.img-thumbnail{
  display: block;
  margin: auto;
  background-color: hsl(0, 0%, 90%);
  transition: background-color 300ms;
}

</style>