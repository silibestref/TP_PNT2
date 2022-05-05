<template>
    <div>
        <h2>Lista para confirmar compra</h2>
        {{listaAlquileres}}
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

}
</script>

<style>

</style>