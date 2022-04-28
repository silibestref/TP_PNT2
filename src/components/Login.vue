<template>
  <div class="col">
        <main>
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header card-inicio">
                    <h5>INICIAR SESIÓN</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label class="small mb-1" for="inputEmail"></label>
                      <input
                        class="form-control join-form"
                        placeholder="Ingrese su Email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputPassword"></label>
                      <input
                        class="form-control join-form"
                        placeholder="Ingrese su password"
                      />
                    </div>
                    <div class="form-group mt-4 mb-0">
                      <button
                        class="form-control btn btn-outline-danger btn-block"
                        v-on:click="Cancel"
                      >
                        Cancel
                      </button>
                    </div>
                    <div class="form-group mt-2 mb-0">
                      <button
                        class="form-control btn btn-primary btn-block"
                        v-on:click="Login"
                      >
                        Ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: { username: "Diego", password: "Maradona" },
    };
  },
};
</script>

<style></style>
