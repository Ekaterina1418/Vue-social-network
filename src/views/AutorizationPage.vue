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
        <p class="paragraph">Don't have an account yer?</p>
        <button class="button" @click="clickRouter">Create an account</button>
      </hello-in-background>
      <section class="registration">
        <div class="right-block">
          <div class="divider"></div>
          <welcome-back>
            <h1 class="title-mobile">Welcome Back!</h1>
            <h1 class="title">Welcome Back!</h1>
            <p class="paragraph-mobile">Login to continue</p>
            <p class="paragraph-desktop">Sign in to continue</p>
          </welcome-back>
          <div class="flex-icons">
            <social-icons social="facebook">
              <img
                class="icon"
                src="../components/Icons/image/Facebook2.svg"
                alt="facebook"
              />
            </social-icons>
            <social-icons social="apple">
              <img
                class="icon"
                src="../components/Icons/image/Apple.svg"
                alt="apple"
              />
            </social-icons>
            <social-icons social="google">
              <img
                class="icon"
                src="../components/Icons/image/Google2.svg"
                alt="google"
              />
            </social-icons>
          </div>
          <p class="paragraph-connect">Or connect with you email</p>
          <auth-form />
          <social-desktop class="none" />
          <button-create />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import SocialIcons from '@/components/Icons/SocialIcons.vue'
import AuthForm from '@/components/Form/AuthForm.vue'
import ButtonCreate from '@/components/Button/ButtonCreate.vue'
import BackgrondIcon from '@/components/BackGround/BackroundIcon.vue'
import WelcomeBack from '@/components/Welcome/WelcomeBack.vue'
import SocialDesktop from '@/components/Social-Desktop/SocialDesktop.vue'
import HelloInBackground from '@/components/HelloInBackgrond/HelloInBackground.vue'

export default {
  name: 'AutorizationPage',
  components: {
    SocialIcons,
    AuthForm,
    ButtonCreate,
    BackgrondIcon,
    WelcomeBack,
    SocialDesktop,
    HelloInBackground,
  },
  methods: {
    clickRouter() {
      this.$router.push({ name: 'signup' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/styles.scss';
</style>
