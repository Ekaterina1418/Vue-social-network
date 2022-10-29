<template>
  <main class="main-block">
    <div class="grid">
      <backgrond-icon>
        <template v-slot:background>
          <div class="img"></div>
        </template>
        <template v-slot:logotype>
          <img
            class="logotype"
            src="../components/BackGround/image/logotype.svg"
            alt="logotype"
          />
        </template>
      </backgrond-icon>
      <hello-in-background>
        <p class="paragraph">Already have an account?</p>
        <button class="button-blue" @click="clickRouter()">Login</button>
      </hello-in-background>
      <section class="registration">
        <div class="right-block">
          <div class="divider"></div>
          <welcome-back>
            <h1 class="title-mobile">Welcome Back!</h1>
            <h1 class="title">Create an account</h1>
            <p class="paragraph-mobile">Login to continue</p>
            <p class="paragraph-desktop">Sign in up continue</p>
          </welcome-back>
          <div class="flex-icons">
            <social-icons social="facebook" @registerSocial="facebook()">
              <img
                class="icon"
                src="../components/Icons/image/Facebook2.svg"
                alt="facebook"
              />
            </social-icons>
            <social-icons social="apple" @registerSocial="gitHub()">
              <img
                class="icon"
                src="../components/Icons/image/github.svg"
                alt="github"
              />
            </social-icons>
            <social-icons social="google" @registerSocial="google()">
              <img
                class="icon-google"
                src="../components/Icons/image/Google2.svg"
                alt="google"
              />
            </social-icons>
          </div>
          <p class="paragraph-connect">Or connect with you email</p>
          <form-signup />
          <social-desktop class="none" />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import SocialIcons from '@/components/Icons/SocialIcons.vue';
import BackgrondIcon from '@/components/BackGround/BackroundIcon.vue';
import WelcomeBack from '@/components/Welcome/WelcomeBack.vue';
import SocialDesktop from '@/components/Social-Desktop/SocialDesktop.vue';
import HelloInBackground from '@/components/HelloInBackgrond/HelloInBackground.vue';
import FormSignup from '@/components/Form-signup/FormSignup.vue';

export default {
  components: {
    FormSignup,
    SocialIcons,
    BackgrondIcon,
    WelcomeBack,
    SocialDesktop,
    HelloInBackground,
  },
  methods: {
    clickRouter() {
      this.$router.push({ name: 'signin' });
    },
    async google() {
      try {
        await this.$store.dispatch('google');
        this.$router.push('/messages');
        
      } catch (e) {/**/}
    },
    async facebook() {
      try {
        await this.$store.dispatch('facebook');
        this.$router.push('/messages');

        
      } catch (e) {/**/}
    },
    async gitHub() {
      try {
        await this.$store.dispatch('gitHub');
        this.$router.push('/messages');
       
      } catch (e) {/**/}
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/styles.scss';
</style>
