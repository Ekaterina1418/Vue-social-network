<template>
  <main class="main-block">
    <div class="grid-password">
      <backgrond-icon>
        <template v-slot:background>
          <div class="img-password"></div>
        </template>
        <template v-slot:logotype>
          <img
            class="logotype-password"
            src="../components/BackGround/image/logo.svg"
            alt="logotype"
          />
        </template>
      </backgrond-icon>
      <hello-in-background>
        <p class="paragraph">Remember your password?</p>
        <button class="button-blue" @click="clickRouter">Lognin</button>
      </hello-in-background>
      <section class="registration-form">
        <div class="right-block">
          <div class="divider"></div>
          <welcome-back>
            <h1 class="title-mobile-password">Password Recovery</h1>
            <p class="paragraph-mobile">Enter your to recover your password</p>
          </welcome-back>
          <input-for-recovery />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import WelcomeBack from "@/components/Welcome/WelcomeBack.vue";
import BackgrondIcon from "../components/BackGround/BackroundIcon.vue";
import InputForRecovery from "../components/InputForRecovery/InputForRecovery.vue";
import HelloInBackground from "@/components/HelloInBackgrond/HelloInBackground.vue";

export default {
  name: "PasswordRecovery",
  components: {
    BackgrondIcon,
    InputForRecovery,
    WelcomeBack,
    HelloInBackground,
  },
  data() {
    return {};
  },
  methods: {
    clickRouter() {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/styles.scss";
</style>
