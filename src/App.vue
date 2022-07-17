<template>
  <div id="app">
    <main class="main-block">
      <backgrond-icon />
      <section class="registration">
        <div class="border"></div>
        <welcome-back />
        <social-icons />
        <p class="paragraph-connect">Or connect with you email</p>
        <auth-form />
        <button-create />
        <div class="border-bottom"></div>
      </section>
    </main>
  </div>
</template>
<script>
import SocialIcons from "./components/Icons/SocialIcons.vue";
import AuthForm from "./components/Form/AuthForm.vue";
import ButtonCreate from "./components/Button/ButtonCreate.vue";
import BackgrondIcon from "./components/BackGround/BackroundIcon.vue";
import WelcomeBack from "./components/Welcome/WelcomeBack.vue";
export default {
  name: "App",
  components: {
    SocialIcons,
    AuthForm,
    ButtonCreate,
    BackgrondIcon,
    WelcomeBack,
  },
};
</script>
<style lang="scss" scoped></style>
