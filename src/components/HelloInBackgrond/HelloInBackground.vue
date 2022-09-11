<template>
    <div class="hello">
        <div class="hello-position">
            <h1 class="title">Hello!</h1>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HelloInBackground extends Vue {}
</script>

<style lang="scss">
@import './styles/HelloInBackground.scss';
</style>
