<template>
    <div>
        <div class="person">
            <div class="wrapper">
                <slot name="image" />
                <div class="name">
                    <p class="name-billy">{{names}}</p>
                     <p class="name-message"></p>
                    
                </div>
               
            </div>
            <div class="time">
                <time class="time-oclock">3:03pm</time>
                <slot name="amount" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "DirectMessages",
  data() {
    return {
    message: 'Thank you for sharing',
   

  }
    },
    props: {
       names: {
            type: String
        }
    }
};

</script>

<style lang="scss" scoped>
@import './styles/DirectMessages.scss';
</style>
