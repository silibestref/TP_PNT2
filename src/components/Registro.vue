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
                    <Form :validation-schema="schema">
                      <div class="input-group mb-3">
                        <span class="input-group-text"><font-awesome-icon icon="user"/></span>
                        <Field name="fullName" type="text" class="form-control" placeholder="Nombre completo"/>
                      </div>   
                       <div class="input-errors mb-3">
                         <ErrorMessage name="fullName" class="error-feedback" />
                      </div>                                        
                     <div class="form-group">
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="calendar-check"/></span>
                        <Field name="age" type="number" class="form-control" placeholder="Edad"/>
                      </div>
                      <div class="input-errors mb-3">
                         <ErrorMessage name="age" class="error-feedback" />
                      </div>
                    </div>                                                           
                    <div class="form-group">
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="envelope"/></span>
                        <Field name="email" type="text" class="form-control" placeholder="Email"/>
                      </div>
                      <div class="input-errors mb-3">
                         <ErrorMessage name="email" class="error-feedback" />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="lock"/></span>
                       <Field name="password" type="password" class="form-control" placeholder="Password"/>
                      </div>
                      <div class="input-errors mb-3">
                         <ErrorMessage name="password" class="error-feedback" />
                      </div>           
                    </div>
                    <div class="form-group mt-2 mb-0">
                      <button
                        class="form-control btn btn-primary btn-block">
                        Ingresar
                      </button>
                    </div>
                    <div class="form-group mt-3 mb-0">
                      <button
                        class="form-control btn btn-outline-danger btn-block"
                        v-on:click="Cancel">
                        Cancel
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Registro",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      fullName: yup
      .string()
      .required("Nombre requerido!"),   
      age: yup
      .number()
      .required("Edad requerida!")
      .positive()
      .integer(),
      email: yup
      .string()
      .required("Email requerido!")
      .email("Debe ingresar un email valido!"),
      password: yup
        .string()
        .required("Password requerido!")
        .min(6, "Debe tener minimo 6 caracteres!")
        .max(12, "Debe tener maximo 12 caracteres!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  }, 
};
</script>

<style>
</style>