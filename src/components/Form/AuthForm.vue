<template>
  <form>
    <label class="label top">
      Email
      <div class="input-icon_email">
        <input
          class="input-email"
          type="text"
          placeholder="anne.carry@mail.com"
        />
        <img src="./image/Check.svg" alt="email" class="check" />
      </div>
    </label>
    <label class="label bottom"
      >Password
      <div class="input-icon_email">
        <input class="input-email" type="password" />
        <img src="./image/Eye.svg" class="check" alt="eye" />
      </div>
    </label>
    <div class="login">
      <button class="button-login">Login</button>
      <p class="paragraph-login">Forgot Password?</p>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./styles/AuthForm.scss";
</style>
