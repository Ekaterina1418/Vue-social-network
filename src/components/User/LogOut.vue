<template>
  <div class="user">
    <div class="go-out">
      <a @click="logout()"><img src="./icons/arrow.svg" alt=""></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  methods: {
    async logout(): Promise<void> {
      await this.$store.dispatch('logout')

    }
  }


})
</script>

<style lang="sass" scoped>
@import "./styles/LogOut.scss"
</style>
