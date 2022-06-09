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
                  <Form :validation-schema="schema">  
                    <div class="form-group">
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="circle-user"/></span>
                        <Field v-model="usuario.email" name="email" type="text" class="form-control" placeholder="Ingrese su email"/>
                      </div>
                      <div class="input-errors mb-3">
                         <ErrorMessage name="email" class="error-feedback" />
                      </div>
                    </div>
                    <div class="form-group mb-2">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="lock"/></span>
                       <Field v-model="usuario.password" name="password" type="password" class="form-control" placeholder="Ingrese su password"/>
                      </div>
                      <div class="input-errors mb-3">
                         <ErrorMessage name="password" class="error-feedback" />
                      </div>           
                    </div>
                    <div class="form-group mt-2 mb-0">
                      <button v-on:click="login" class="form-control btn btn-primary btn-block">
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
import { usuarioStore } from '../store/userStore'
import axios from 'axios'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const store = usuarioStore();
    const {autenticado} = store;
    const {loginOK} = store;
    return {
      store,autenticado,loginOK
    }
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email requerido!")
        .email("Email invalido!"),
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
      usuario : {
        email: '',
        password:''   
      }
    };    
  },
  methods: {
    async login() {
      try{
        //revisar porque no toma el primer intento de login
        const res = await axios.post('http://localhost:5000/usuario/login', this.usuario);
        this.loginOK();
        this.$router.push('/')
        localStorage.setItem('usuario',JSON.stringify(this.autenticado));
      } catch (e) {
        console.log(e);
        alert("usuario o password incorrecto");
        this.$router.push('/')
      }     
    }
  }
};
</script>

<style>

.error-feedback{
  color:red;
}

</style>
