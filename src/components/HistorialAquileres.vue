<template>
  <div class="row">
    <div class="card col-6 mx-4">
      <h5 class="card-header">Historial Alquileres</h5>
      <div class="card-body">
        <table class="table table-striped table-bordered table-condensed table-sm mt-3">
          <thead>
            <tr>
              <th scope="col col-title">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Agregar a Favoritos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alquiler of historialAlquileres" :key="alquiler">
              <td class="col-title">{{ alquiler.titulo }} </td>
              <td>{{ alquiler.fechaActual }}</td>
              <td>
                <a @click="agregarPelicula(alquiler)" class="btn-outline-warning mt-1 ms-2"><font-awesome-icon icon="star"/></a>
              </td>
            </tr>            
          </tbody>
        </table> 
      </div>
    </div>  
    <div class="card col-4">
      <h5 class="card-header">Mis Favoritos</h5>
      <div class="card-body">
        <table class="table table-striped table-bordered table-condensed table-sm mt-3">
          <thead>
            <tr>
              <th scope="col col-title">Titulo</th>
              <th scope="col col-title">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="misFavoritos of favoritos" :key="misFavoritos">
              <td class="col-title">{{ misFavoritos.titulo }} </td>
              <td>
                <a @click="eliminarPelicula(misFavoritos.codigo)" class="btn-outline-danger mt-1 ms-2" ><font-awesome-icon icon="trash-alt"/></a>
              </td>
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
    const { historialAlquileres } = storeToRefs(store)
    const { favoritos } = storeToRefs(store)
    return {
      store,  historialAlquileres, favoritos
        };
    },
    methods: {
      agregarPelicula(pelicula) {
        this.store.agregarPelicula(this.favoritos,pelicula);
      },
      buscarPos(codigo){
        return this.favoritos.map(pel => pel.codigo).indexOf(codigo);
      },
      eliminarPelicula(codigo){
        let pos = this.buscarPos(codigo);
        if(pos >= 0){
          this.favoritos.splice(pos,1);
        }
      }
    }
}
</script>

<style>

.col-title {
  max-width:10em !important;
}

</style>