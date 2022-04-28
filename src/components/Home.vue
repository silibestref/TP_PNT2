<template>
  <div>
    <h3>Home</h3>
    <section>
      {{ info }}
    </section>
    <br />
    <ul>
      <li v-for="item of items" :key="item.title">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      info: null,
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
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
};
</script>

<style>
</style>