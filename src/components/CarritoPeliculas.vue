<template>
  <div>
    <h2>Carrito de Alquileres</h2>
    {{ listaAlquileres }}
    <p>
    Codigo<input type="text" class="form-control" v-model="pelicula.codigo">
    Nombre <input type="text" class="form-control" v-model="pelicula.nombre">
    Tipo <input type="text" class="form-control" v-model="pelicula.tipo">
    </p>
    <button @click="agregar">Agregar Pelicula</button>
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
  data() {
    return {
      pelicula: {codigo:0,nombre:'',tipo:''}
    }
  },
  methods: {
    agregar() {
      this.store.agregarCompra({...this.pelicula});
    }
  }
};
</script>

<style>
</style>