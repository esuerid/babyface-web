<template>
  <div>
    <img src="../assets/babyface_front.png" alt="Babyface front" class="center">
    <!-- <h1>Hello!</h1> -->
    <!-- <p>What you want to do?</p>  -->
    <router-link to="/auth">Sign in</router-link>
  </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>
