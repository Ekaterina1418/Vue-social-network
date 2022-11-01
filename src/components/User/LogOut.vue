<template>
  <div class="user">
    <div class="go-out">
      <router-link to="/signin">
       <button @click="logout"><img src="./icons/arrow.svg" alt="arrow" /></button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/LogOut.scss';
</style>
