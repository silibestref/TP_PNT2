<template>
  <div class="row">
    <div class="card col-4 me-4">
      <h5 class="card-header">Carrito de Alquileres</h5>
      <div class="card-body">
        <div class="mt-4">
        <select class="form-select form-select-lg mb-3" v-model="selected">
          <option selected disabled value=""> Elija una pelicula </option>
          <option v-for="pelicula in listaAux" :value="{codigo:pelicula.id, titulo:pelicula.title, fecha:pelicula.year, calificacion: pelicula.imDbRating}" :key="pelicula">
            {{ pelicula.title }}
          </option>
        </select>
        <div class="alert alert-success p-2" role="alert" >
          Ha seleccionado: <a href="#" class="alert-link">{{ selected.titulo }}</a>
        </div>
        <div class="d-grid gap-1">
          <button class="btn btn-primary p-3 mt-4" @click="agregarPelicula()">Agregar Pelicula</button>
        </div>
      </div>
      </div>
    </div>

    <div class="card col-7">
      <h5 class="card-header">Mis Alquileres</h5>
      <div class="card-body">
        <table class="table table-striped table-bordered table-condensed table-sm mt-3">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col col-title">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alquiler of listaAlquileres" :key="alquiler">
              <td>{{ alquiler.codigo }} </td>
              <td class="col-title">{{ alquiler.titulo }} </td>
              <td>{{ alquiler.fecha }}</td>
              <td>{{ alquiler.calificacion }}</td>
            </tr>            
          </tbody>
        </table> 
      </div>
    </div>

  </div>
</template>

<script>

import { carritoStore } from "../store/storeCarrito.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = carritoStore();
    const { listaAlquileres } = storeToRefs(store)
    const { listaAux } = storeToRefs(store)
    return {
      store, listaAlquileres, listaAux
    };
  },
  data() {
    return {
      selected:{id:0, title:'Elija una pelicula', year:'', ranking:0}
    }
  },
  methods: {
    agregarPelicula() {
       this.store.agregarPelicula(this.listaAlquileres,{...this.selected});
    }
  }
};
</script>

<style>



</style>