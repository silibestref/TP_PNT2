<template>
  <footer class="bg-dark text-center text-white mt-5">
    <div class="container pt-4 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" role="button"><font-awesome-icon :icon="['fab', 'whatsapp']"/></a>
        <a class="btn btn-outline-light btn-floating m-1" role="button"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
        <a class="btn btn-outline-light btn-floating m-1" role="button"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
        <a class="btn btn-outline-light btn-floating m-1" role="button"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
      </section>
    </div>
    <div class="text-center pb-4 div-footer">
      © 2022 Copyright:{{autor}}
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