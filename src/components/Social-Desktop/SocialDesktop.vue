<template>
<<<<<<< HEAD
  <div class="block-social">
    <p class="paragraph-desktop">Or connect with social</p>
    <button class="facebook-decktop">
      <div class="text-button">
        <img src="./image/Facebook2.svg" alt="facebook" />
        <p class="icons-text">Connect with Facebook</p>
      </div>
    </button>
    <button class="apple-desktop">
      <div class="text-button">
        <img src="./image/Apple.svg" alt="apple" />
        <p class="icons-text">Connect with Aplle</p>
      </div>
    </button>
    <button class="google-desktop">
      <div class="text-button">
        <img src="./image/Google2.svg" alt="google" />
        <p class="icons-text_google">Connect with Google+</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./styles/SocialDesktop.scss";
=======
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

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component
export default class extends Vue {
   
        async google():Promise<void> {
            try {
                await this.$store.dispatch('google');
                this.$router.push('/messages');
                // eslint-disable-next-line no-empty
            } catch (e) {}
        }
        async facebook():Promise<void> {
            try {
                await this.$store.dispatch('facebook');
                this.$router.push('/messages');

                // eslint-disable-next-line no-empty
            } catch (e) {}
        }
        async gitHub():Promise<void> {
            try {
                await this.$store.dispatch('gitHub');
                this.$router.push('/messages');
                // eslint-disable-next-line no-empty
            } catch (e) {}
        }
    }

</script>

<style lang="scss" scoped>
@import './styles/SocialDesktop.scss';
>>>>>>> second_branch
</style>
