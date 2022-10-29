<template>
  <div class="user">
    <div class="go-out">
      <router-link to="/signin">
        <img src="./icons/arrow.svg" alt="arrow" />
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
