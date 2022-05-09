<template>
  <footer class="bg-dark text-center text-white">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon icon="fa-brands fa-youtube"/></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon icon="circle-user"/></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon icon="circle-user"/></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon icon="circle-user"/></a>
      </section>
    </div>
    <div class="text-center p-4 div-footer">
      © 2022 Copyright: {{autor}}
      <a class="text-white" href="#">PNT2</a>
    </div>
  </footer>
</template>

<script>
export default {
    props: ['autor']
}
</script>

<style>

</style>