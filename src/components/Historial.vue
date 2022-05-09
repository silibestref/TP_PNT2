<template>
 <div>   
    <h3>Historial de peliculas vistas</h3>

    <ul>
            <li v-for="item in lista" :key="item.codigo">
                {{ item.nombre }} - {{ item.tipo}}
            </li>
    </ul>
 </div>
</template>

<script>
export default {
    data() {
     return {
         lista : [ 
             {codigo:0,nombre:'El Lobo de Wall Street',tipo:'Drama'},
             {codigo:1,nombre:'Scareface',tipo:'Documental'},

         ],
        pelicula: {codigo:0,nombre:'',tipo:''}
     }   
    },
    methods:{
        agregarPeli(){
            this.pelicula.push(...this.pelicula);
        }

    }
}
</script>