<template>
    <div class="user">
      <div class="go-out">
       <a @click="logout"><img src="./icons/arrow.svg" alt=""></a>
      </div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
export default class LogOut extends Vue {
   
  
    async  logout():Promise<void> {
       await this.$store.dispatch('logout')

      }
    
}
</script>

<style lang="sass" scoped>
@import "./styles/LogOut.scss"
</style>
