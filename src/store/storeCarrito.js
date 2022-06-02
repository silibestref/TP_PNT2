import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  
    state: () => {
        return {
            listaAux: [], 
            listaAlquileres: [],
        }
    },
    actions: {
        agregarCompra(obj) {
            this.listaAlquileres.push(obj);
        },

    },

})