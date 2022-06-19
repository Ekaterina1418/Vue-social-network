<template>
  <div id="app">
    <main class="block">
      <div>
        <div class="parent">
          <div class="child cgild-1">
            <img src="./assets/image/logo.png" class="img" alt="logo" />
          </div>
          <div class="child child-2">
            <img src="./assets/image/logotype.svg" class="logotype" />
          </div>
        </div>
        <section class="registration">
          <div class="div">
            <div class="border"></div>
            <h1 class="title">Welcome Back!</h1>
            <p class="paragraph">Login to continue</p>
            <face-book />
            <p class="paragraph-connect">Or connect with you email</p>
            <inputs-account />
            <button-log />
            <div class="border-bottom"></div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import FaceBook from "./components/FaceBook.vue";
import InputsAccount from "./components/InputsAccount.vue";
import ButtonLog from "./components/ButtonLog.vue";
export default {
  name: "App",
  components: {
    FaceBook,
    InputsAccount,
    ButtonLog,
  },
};
</script>
<style lang="scss"></style>
