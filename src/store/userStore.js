import { defineStore } from 'pinia'

export const usuarioStore = defineStore('main', {

    state : () => {
        return {
            autenticado : false,
            userName : ''
        }
    },

    getters : {
        nombre() {
            return state.userName;
        }
    },

    actions : {
        loginOK(){
            this.autenticado = true;
        },
        suNombre(nombre){
            this.userName = nombre;
        }

    }
})