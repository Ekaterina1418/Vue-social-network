<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="{name:'signin'}"></router-link>
    <router-link to="{name:'password-recovery'}"></router-link> 
    <div>
      <router-view />
</div>
  </div>
</template> 

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      page: "",
    };
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
};
</script>

<style lang="scss" scoped></style>
