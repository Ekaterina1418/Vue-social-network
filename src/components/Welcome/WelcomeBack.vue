<template>
  <div class="text">
    <img class="logo" src="./image/logotype.svg" />
    <slot />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class AutorizationPage extends Vue {
   disible = true

}
</script>

<style lang="scss" scoped>
@import "./styles/WelcomeBack.scss";
</style>
