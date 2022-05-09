<template>
  <div>
    <h3>Estrenos</h3>    
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" @click="buscarTitulo" type="submit"><font-awesome-icon icon="search"/></button>
      </form>
    
    <div class="row mt-4">
      <div class="col mb-4" v-for="item of items" :key="item.title">
        <div class="card" style="width: 18rem;">
         <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div class="card-body">
            <h5 class="card-title">{{ item.address.city }}</h5>
            <p class="card-text">{{ item.name }}</p>
            <a href="#" class="btn btn-primary">Ver historia</a>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
const APIKEY = '5044eb20a459c2146512b436bed6753d';
export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    buscarTitulo(titulo) {
      return this.items.filter(x => x.title == titulo)
    }
  }

};
</script>

<style>



</style>