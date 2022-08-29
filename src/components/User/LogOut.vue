<template>
    <div class="user">
      <div class="go-out">
       <a @click="logout"><img src="./icons/arrow.svg" alt=""></a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LogOut',
    methods: {
    async  logout() {
       await this.$store.dispatch('logout')

      }
    }
};
</script>

<style lang="sass" scoped>
@import "./styles/LogOut.scss"
</style>
