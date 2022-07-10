<template>
  <section>
    <div class="social-buttons-group">
      <button class="social-button facebook">
        <img class="social-icon" src="./image/Facebook2.svg" alt="facebook" />
      </button>
      <button class="social-button apple">
        <img class="social-icon" src="./image/Apple.svg" alt="apple" />
      </button>
      <button class="social-button google">
        <img class="social-icon" src="./image/Google2.svg" alt="google" />
      </button>
    </div>

    <p class="social-text">Or connect with your email</p>
  </section>
</template>

<script>
export default {
  name: "SocialButtons",
};
</script>

<style lang="scss" scoped>
@import "./styles/SocialButtons.scss";
</style>
