<template>
    <div class="main">
        <figure class="block-image">
            <slot name="background" />
        </figure>
        <div class="block-image logo">
            <slot name="logotype" />
        </div>
    </div>
</template>

<script>


export default  {}
</script>

<style lang="scss" scoped>
@import './styles/BackgroundIcon.scss';
</style>
