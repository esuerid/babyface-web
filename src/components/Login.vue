<template>
  <div class="text-md-center">
    <h2>Login</h2>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-card-text>
          <form @keyup.enter="logItIn">
            <v-text-field
            v-model="login.email"
            label="Email"
            required
            >
            </v-text-field>

            <v-text-field
            v-model="login.password"
            label="Password"
            type="password"
            required

            >
            </v-text-field>
          </form>
          </v-card-text>

          <v-btn class="mb-3" success @click='logItIn'>Login</v-btn>
        </v-card>
      </v-flex>

    </v-layout>
    <div id="firebaseui-auth-container"></div>
    
  </div>  
</template>


<script>
  import firebase from 'firebase'
  import auth from '@/auth'

  export default {
    data() {
      return {
        login:{
          email:"",
          password:""
        }
      }
    },
    mounted() {
      auth.authForm('#firebaseui-auth-container')
    },
    methods:{
      logItIn(){

        console.log(this.login.email)
        console.log(this.login.password)


        firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });


        // axios.post('http://weblloapi.dev/login',this.login)
        // .then(response => {
        //   let newToken=response.data.user.api_token;
        //   window.token=newToken;
        //   let user=response.data.user;  
        //   localStorage.setItem('token',newToken);
        //   localStorage.setItem('user',JSON.stringify(user));

        //   window.axios.defaults.params={api_token:newToken}
        //   Event.$emit('login',user);

        //   this.$router.push('/');
        // });
      }
    }
  }
</script>
<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>