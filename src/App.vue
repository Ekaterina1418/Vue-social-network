<template>
  <div id="app">
    <main class="root">
      <logo-icon />
      
      <section class="float-panel">
        <div class="handle"></div>
        <welcome-back />
        <social-buttons />        
        <auth-form />
        <link-create />
      </section>
    </main>
  </div>
</template>

<script>
import LogoIcon from "./components/LogoIcon.vue";
import WelcomeBack from "./components/Welcome/WelcomeBack.vue";
import SocialButtons from "./components/Icons/SocialButtons.vue";
import AuthForm from "./components/Form/AuthForm.vue";
import LinkCreate from "./components/Button/LinkCreate.vue";

export default {
  name: "App",
  components: {
    LogoIcon,
    WelcomeBack,
    SocialButtons,
    AuthForm,
    LinkCreate,
  },
};
</script>

<style lang="scss" scoped></style>
