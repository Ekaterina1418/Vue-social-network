<template>
  <div>
    <form class="form">
      <div>
        <label class="form-label" for="email">Email</label>
        <div class="form-input-wrapper">
          <input
            id="email"
            class="form-input"
            name="email"
            type="text"
            placeholder="anne.carry@mail.com"
          />
          <img class="form-input-icon" src="./image/Check.svg" alt="email" />
        </div>
      </div>
      
      <div>
        <label class="form-label" for="password">Password</label>
        <div class="form-input-wrapper">
          <input
            id="password"
            class="form-input"
            name="password"
            type="password"
            placeholder="password"
          />
          <img class="form-input-icon" src="./image/Eye.svg" alt="eye" />
        </div>
      </div>
      
      <button class="form-button" type="submit">Login</button>
    </form>

    <p class="form-text">Forgot Password?</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./styles/AuthForm.scss";
</style>
