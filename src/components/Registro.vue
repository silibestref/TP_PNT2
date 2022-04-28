<template>
  <div class="col">
        <main>
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header card-inicio">
                  <h5>REGISTRARSE</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label class="small mb-1" for="inputNombre"></label>
                      <input
                        class="form-control join-form"
                        placeholder="Ingrese su Nombre"
                      />
                    </div>
                    <div class="form-group">
                      <label class="small mb-1" for="inputApellido"></label>
                      <input
                        class="form-control join-form"
                        placeholder="Ingrese su Apellido"
                      />
                    </div>
                    <div class="form-group">
                      <label class="small mb-1" for="inputEdad"></label>
                      <input
                        class="form-control join-form"
                        placeholder="Ingrese su Edad"
                      />
                    </div>
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
                      <input
                        type="reset"
                        class=" form-control btn btn-outline-danger btn-block"
                        value="Cancelar"
                      />
                    </div>
                    <div class="form-group mt-2 mb-0">
                      <button
                        class="form-control btn btn-success btn-block"
                        v-on:click="Registrarse"
                      >
                        Registrarse
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
export default {};
</script>

<style>
</style>