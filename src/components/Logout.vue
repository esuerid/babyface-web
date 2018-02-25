<template>
  
  <div>
    
    <h2>You are logged out!</h2>
  </div>

</template>


<script>
  import auth from '@/auth'
  export default {

    created () {
      auth.logout()
      

      // if(!token) {
      //  return false;
      // }
      // axios.get("http://weblloapi.dev/logout?api_token="+token)
      // .then(response => {
      //  localStorage.removeItem('token');
      //  Event.$emit('logout');
      // });
    }

  }
</script>
