<!-- <template>
<div id="app">
  <image-compare :before="before" :after="after"/>
</div>
</template>

<script>
import Vue from 'vue';
import VueImageCompare from 'vue-image-compare-plus';

Vue.use(VueImageCompare);

new Vue({
  data() {
    return {
      before: '../assets/babyface_front.png',
      after: '../assets/babyisontherway.png'
    }
  }
}).$mount('#app');
</script>
 -->
<template>
  <div class="container" >
    <TwentyTwenty
      full="true"
      offset="0.5"
      before='../assets/front0.png'
      beforeLabel="before"
      after= '../assets/front1_pink.png'
      afterLabel="after" />
  </div>
</template>

<script>
  import TwentyTwenty from './TwentyTwenty.vue';
  export default {
    data: function(){
      return {
        full: 'true'
      }
    },
    components: {
      TwentyTwenty
    }
  }
</script>

<style>
  .container {
    display: block;
    margin: 0 auto;
    width: 100%;
    font-family: sans-serif;
  }
  .container img {
    max-width: 100%;
  }
</style>
