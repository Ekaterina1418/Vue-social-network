<template>
  <div class="text">
    <img class="logo" src="./image/logotype.svg" />
    <slot />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  
  export default  Vue.extend ({
    name: 'WelcomeBack',
    data() {
      return {
         disible : true,
      }
    }
  

})
</script>

<style lang="scss" scoped>
@import "./styles/WelcomeBack.scss";
</style>
