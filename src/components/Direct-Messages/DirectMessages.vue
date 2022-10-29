<template>
    <div class="person">
        <div class="wrapper" >
            <slot name="image" />
            <div class="name">
                <p class="name-billy">{{ name }}</p>
                <p class="name-message">{{ message }}</p>
            </div>
        </div>
        <div class="time">
            <time class="time-oclock">3:03pm</time>
            <slot name="amount" />
        </div>
    </div>
</template>

<script>


export default {
    name: 'DirectMessages',
  props: {
    message: {
        type:String
    },
    name: {
        type:String
    },
    img: {
        type:String
    }
  }  
   
}; 
</script>

<style lang="scss" scoped>
@import './styles/DirectMessages.scss';
</style>
