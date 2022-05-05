<template>
  <div>
    <h3>Home</h3>
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

};
</script>

<style>



</style>