import { defineStore } from 'pinia'
import axios from 'axios'

export const usuarioStore = defineStore('main', {

    state: () => {
        return {
            autenticado: false,
            userName: ''
        }
    },

    getters: {
        nombre() {
            return state.userName;
        }
    },

    actions: {
        suNombre(nombre) {
            this.userName = nombre;
        },
        async loggearse(user) {
            try {
                const res = await axios.post('http://localhost:5000/usuario/login', user);
                if (res.status == 200) {
                    this.autenticado = true;
                    localStorage.setItem('usuario', JSON.stringify(this.autenticado));
                }
            } catch (e) {
                console.log(`error en atrapado en el store ${e} `);
            }
        },
        userLogout() {
            this.autenticado = false;
            location.reload();
            localStorage.removeItem('usuario');
        }

    }
})