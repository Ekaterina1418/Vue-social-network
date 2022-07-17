<template>
  <form>
    <div class="element-auxiliary top">
      <label class="label-input"> EMAIL </label>
      <div class="input-icon_email">
        <input
          class="input-email"
          type="text"
          placeholder="anne.carry@mail.com"
        />
        <img class="check" src="./image/Check.svg" alt="email" />
      </div>
    </div>
    <div class="element-auxiliary bottom">
      <label class="label-input">PASSWORD </label>
      <div class="input-icon_email">
        <input class="input-email" type="password" />
        <img class="check" src="./image/Eye.svg" alt="eye" />
      </div>

      <a class="paragraph-login_desc" @click="addPassword">Forgot Password?</a>
    </div>
    <div class="login">
      <button class="button-login">Login</button>
      <a class="paragraph-login" @click="addPassword">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  methods: {
    addPassword() {
      this.$router.push({ name: "password-recovery" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/AuthForm.scss";
</style>
