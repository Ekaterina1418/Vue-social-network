<template>
  <div class="hello">
    <div class="hello-position">
      <h1 class="title">Hello!</h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloInBackground",
  components: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
@import "./styles/HelloInBackground.scss";
</style>
