import { defineStore } from 'pinia'

export const carritoStore = defineStore('carritoMain', {
  
    state: () => {
        return {
            listaAux: [], 
            listaAlquileres: [],
            historialAlquileres: [],
            favoritos: [],
        }
    },
    actions: {
        agregarPelicula(lista,obj) {
            lista.push(obj);
        },
        confirmarAlquiler(fecha){
            let peliculaActual;
            while(this.listaAlquileres.length > 0){
                peliculaActual = this.listaAlquileres.pop();
                peliculaActual.fechaActual = fecha;
                this.historialAlquileres.push(peliculaActual);
            }
        },
        
    },

})