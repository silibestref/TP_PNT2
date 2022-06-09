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
        async loggearse(user){
            try{
                const res = await axios.post('http://localhost:5000/usuario/login', user); 
                console.log("***************** status:")
                console.log(res.status);
                if( res.status==200){
                    this.autenticado = true;                    
                    localStorage.setItem('usuario',JSON.stringify(this.autenticado));
                    console.log("**********LLEGO HASTA ACA*******")
                }              
            } catch (e) {
                console.log(`error en atrapado en el store ${e} `);
            }
            return this.autenticado;
        }

    }
})