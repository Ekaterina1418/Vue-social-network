<template>
  <div class="user">
    <img class="avatar" :src="img" alt="avatar" />
    <p class="text">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
    },
    message: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import './styles/ChatForUser.scss';
</style>
