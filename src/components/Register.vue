<template>
  <div class="text-md-center">
    <h2>Register</h2>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-card-text>
            <v-text-field
            v-model="register.username"
            label="Username"
            required
            >
            </v-text-field>

            <v-text-field
            v-model="register.email"
            label="Email"
            required
            >
            </v-text-field>

            <v-text-field
            v-model="register.password"
            label="Password"
            type="password"
            required

            >
            </v-text-field>
          </v-card-text>

          <v-btn class="mb-3" success @click='registerIt'>Register</v-btn>

        </v-card>
      </v-flex>
    </v-layout>
    <div id="firebaseui-auth-container"></div>
    
  </div>  
</template>


<script>
  import auth from '@/auth'
  export default {
    data() {
      return {
        register:{
          username:"",
          email:"",
          password:""
        }
      }
    },
    mounted() {
      auth.authForm('#firebaseui-auth-container')
    },
    methods:{
      registerIt() {
        axios.post('http://weblloapi.dev/register',this.register)
        .then(response => {
          let token=response.data.user.api_token;

          localStorage.setItem('token',token);

        });
      }
    }
  }
</script>
<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>
