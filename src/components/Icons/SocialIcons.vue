<template>
  <div class="icons">
    <button class="base-button"
     v-on="$listeners"
     v-bind="$attrs"
    :class="buttonClasses">
      <slot />
    </button>
   
  </div>
</template>

<script>
export default {
  name: "SocialIcons",
  props: {
    type: {
    type: String,
    default: "basic",
    validator: function(value) {
      return ["facebook", "apple","google"]
    },
    },
  },
  computed: {
buttonClasses() {
  return {
        "base-button--type-basic": this.type === "basic" || this.type === "",
        "base-button--type-apple": this.type === "apple",
        "base-button--type-facebook": this.type === "facebook",
        "base-button--type-google": this.type === "google",
  }
}
  }
};

</script>

<style lang="scss" scoped>
@import "./styles/SocialIcons.scss";
</style>
