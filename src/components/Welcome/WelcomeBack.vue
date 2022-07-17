<template>
  <div class="text">
    <img class="logo" src="./image/logotype.svg" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "WelcomeBack",
  data() {
    return {
      disible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/WelcomeBack.scss";
</style>
