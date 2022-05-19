<template>
  <div>
    <div class="card col-12">
      <h5 class="card-header">Confirmar Alquileres</h5>
      <div class="card-body">
        <table class="table table-striped table-bordered table-condensed table-sm mt-3">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col col-title">Titulo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Puntaje</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alquiler of listaAlquileres" :key="alquiler">
              <td>{{ alquiler.codigo }} </td>
              <td class="col-title">{{ alquiler.titulo }} </td>
              <td>{{ alquiler.fecha }}</td>
              <td>{{ alquiler.calificacion }}</td>
              <td>
                <a><span class="btn btn-primary mt-1 ms-2"><font-awesome-icon icon="user-edit"/></span></a>
                <a @click="eliminarPelicula(alquiler.codigo)"><span class="btn btn-danger mt-1 ms-2"><font-awesome-icon icon="trash-alt"/></span></a>
              </td>
            </tr>            
          </tbody>
        </table> 
      </div>
    </div>
  </div>       
</template>

<script>
import { useStore } from "../store/storeCarrito.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore();
    const { listaAlquileres } = storeToRefs(store)
    return {
      store, listaAlquileres
    };
    },
    methods: {
    buscarPos(codigo){
      return this.listaAlquileres.map(pel => pel.codigo).indexOf(codigo);
    },
    eliminarPelicula(codigo){
      let pos = this.buscarPos(codigo);
      if(pos >= 0){
        this.listaAlquileres.splice(pos,1);
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