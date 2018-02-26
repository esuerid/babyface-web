<template>
  <v-app>
   <v-toolbar dark color="pink lighten-3" flat>
     <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
     <v-toolbar-title> <router-link to="/" tag="span"><v-btn flat>{{title}}</v-btn></router-link></v-toolbar-title>
<!--      <v-menu offset-y v-if='loggedIn'>
      <v-btn primary flat slot="activator"><v-icon left>developer_board</v-icon> Boards</v-btn>
      <v-list>
        <div v-for="board in boards" :key="board.id">

            <router-link :to ="{name:'SingleBoard',params:{id:board.id}}" tag='v-list-tile' >
               {{board.name}}
            </router-link>

        </div>
      </v-list>
    </v-menu> -->
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <router-link to="/image" tag="span"><v-btn flat>ImageUpload</v-btn></router-link>
    <div v-if='!loggedIn'>
      <router-link to="/register" tag="span"><v-btn flat>Register</v-btn></router-link>
      <router-link to="/auth" tag="span"><v-btn flat>Login</v-btn></router-link>
    </div>
    <v-menu offset-y v-if='loggedIn'>
      <v-btn primary flat slot="activator"><v-icon left>developer_board</v-icon> {{user.displayName}}</v-btn>
      <v-list>
          <router-link to="/logout" tag='v-list-tile'>Logout</router-link>
          <!-- <v-btn primary flat id="logoutBtn" tag='v-list-tile'>Logout</v-btn> -->
      </v-list>
      </v-menu>

  </v-toolbar>
    <main>
      <v-container fluid pa-0>
        <router-view></router-view>
      </v-container>
    </main>

  </v-app>
</template>

<script>
import boardDataMixin from './mixins/boardDataMixin'
import firebase from 'firebase'
  export default {
    data () {
      return {
        boards: '',
        user:'',
        title: 'BabyFace',
        loggedIn:false
      }
    },
    created () {
      console.log("main created")

      this.loggedIn = this.$store.getters['user/isLogged']


      console.log("user : "+this.user)

      console.log("log in: " + this.loggedIn)

      firebase.auth().onAuthStateChanged((user) => {
        this.user = this.$store.getters['user/user']
        this.loggedIn = this.$store.getters['user/isLogged']
        if (user) {
          console.log("auth changed : " + this.loggedIn)
          user.getIdToken().then(function(idToken) {
            // userIdToken = idToken;
            console.log("token : "+ idToken)
          });
        } else{

        }

      })

     // this.redirectGuestToLogin();

      // Event.$on('login',($user)=>{
      //   this.loggedIn=true;
      //   this.user=$user;
      //   this.fetchBoardsData();
      // });

      // Event.$on('logout',()=>{
      //   this.loggedIn=false;
      // });

      // if(token){
      //   this.user= JSON.parse(localStorage.getItem('user'));
      //   this.loggedIn=true;
      //   this.fetchBoardsData();
      // }
    },
    // mixins:[boardDataMixin],

    // methods:{

    //   redirectGuestToLogin(){
    //      if (!token) {
    //       return this.$router.push('/login');
    //     }
    //   }

    // }

   }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
<!--
<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/settings/_colors.styl'
  $theme := {
    primary: #E57373
    secondary: #EF9A9A
    accent: #FF9E80
    info: #B2DFDB
    warning: $red.base
    error: $red.base
    success: #E57373
  }
  @require '../node_modules/vuetify/src/stylus/main.styl'
</style> -->
