<template>
    <div class="hello">
        <div class="hello-position">
            <h1 class="title">Hello!</h1>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default  Vue.extend ({})
</script>

<style lang="scss">
@import './styles/HelloInBackground.scss';
</style>
