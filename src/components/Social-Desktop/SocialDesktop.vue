<template>
  <div class="block-social">
    <p class="paragraph-desktop">Or connect with social</p>
    <button class="facebook-decktop" @click="facebook">
      <div class="text-button">
        <img src="./image/Facebook2.svg" alt="facebook" />
        <p class="icons-text">Connect with Facebook</p>
      </div>
    </button>
    <button class="apple-desktop" @click="gitHub">
      <div class="text-button">
        <img class="github" src="./image/github.svg" alt="gitHub" />
        <p class="icons-text">Connect with GitHub</p>
      </div>
    </button>
    <button class="google-desktop" @click="google">
      <div class="text-button">
        <img src="./image/Google2.svg" alt="google" />
        <p class="icons-text_google">Connect with Google+</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async google() {
      try {
        await this.$store.dispatch('google');
        this.$router.push('/messages');
     
      } catch (e) {/** */}
    },
    async facebook() {
      try {
        await this.$store.dispatch('facebook');
        this.$router.push('/messages');

        
      } catch (e) {/** */}
    },
    async gitHub() {
      try {
        await this.$store.dispatch('gitHub');
        this.$router.push('/messages');
      
      } catch (e) {/** */}
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/SocialDesktop.scss';
</style>
