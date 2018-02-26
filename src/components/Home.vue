<template>
  <div>
    <img src="../assets/babyisontheway.png" alt="Babyface front" class="center">
    <!-- <h1>Hello!</h1> -->
    <!-- <p>What you want to do?</p>  -->
    <div align="center">
      <router-link to="/auth" style="text-decoration: none;" ><v-btn color="info" >Sign in</v-btn></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
/*img {margin:0px; padding: 0px; float: left;border:0px}*/
.center {
  display: block;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
}

</style>
