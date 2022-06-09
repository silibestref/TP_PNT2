import { defineStore } from 'pinia'
import axios from 'axios'

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
        suNombre(nombre){
            this.userName = nombre;
        },
        loggearse(user){
            axios.post('http://localhost:5000/usuario/login', user);
            this.autenticado = true;
            localStorage.setItem('usuario',JSON.stringify(this.autenticado));
        }

    }
})