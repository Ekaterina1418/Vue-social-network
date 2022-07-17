<template>
  <form @submit.prevent="">
    <div class="element-auxiliary top">
      <label class="label-input"> NAME </label>
      <div class="input-icon_email">
        <input
          class="input-email"
          type="text"
          placeholder="Anne Carry"
          v-model="name"
        />
      </div>
    </div>
    <div class="element-auxiliary bottom">
      <label class="label-input"> EMAIL </label>
      <div class="input-icon_email">
        <input
          class="input-email"
          type="text"
          placeholder="anne.carry@mail.com"
          v-model="email"
        />
        <img class="check" src="./image/Check.svg" alt="email" />
      </div>
    </div>
    <div class="element-auxiliary bottom">
      <label class="label-input">PASSWORD </label>
      <div class="input-icon_email">
        <input class="input-email" type="password" v-model="password" />
        <img class="check" src="./image/Eye.svg" alt="eye" />
      </div>
    </div>
    <div class="login">
      <button class="button-login" @click="$router.push({ name: 'signin' })">
        Create an account
      </button>
      <p class="paragraph-login">Alreedy have an account Login</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "formSignup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./styles/FormSignup.scss";
</style>
