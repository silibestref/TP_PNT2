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
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editarPelicula(alquiler.codigo)"><span class="btn btn-primary mt-1 ms-2"><font-awesome-icon icon="user-edit"/></span></a>
                <a @click="eliminarPelicula(alquiler.codigo)"><span class="btn btn-danger mt-1 ms-2"><font-awesome-icon icon="trash-alt"/></span></a>
              </td>
            </tr>            
          </tbody>
        </table> 
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cambiar de pelicula</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <select class="form-select form-select-lg mb-3" v-model="selected">
              <option selected disabled value="">{{ peliculaAEditar.titulo }}</option>
              <option v-for="pelicula in listaAux" :value="{codigo:pelicula.id, titulo:pelicula.title, fecha:pelicula.year, calificacion: pelicula.imDbRating}" :key="pelicula">
                {{ pelicula.title }}
              </option>
            </select>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-success" @click="actualizarPelicula(selected)" data-bs-dismiss="modal">Actualizar Pelicula</button>
          </div>
        </div>
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
    const { listaAux } = storeToRefs(store)
    return {
      store, listaAlquileres, listaAux
    };
    },
    data(){
      return {
      peliculaAEditar:{},
      selected:{id:0, title:'', year:'', ranking:0}
      }
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
    },
    editarPelicula(codigo){
       let pos = this.buscarPos(codigo);
       this.peliculaAEditar = this.listaAlquileres[pos];
    },
    actualizarPelicula(pelicula) {
      let pos = this.buscarPos(this.peliculaAEditar.codigo);
      this.listaAlquileres[pos] = pelicula;
      this.limpiarSelect();
    },
    limpiarSelect(){
      this.selected = {id:0, title:'', year:'', ranking:0}
    }
  }
}
</script>

<style>

.col-title {
  max-width:10em !important;
}

</style>