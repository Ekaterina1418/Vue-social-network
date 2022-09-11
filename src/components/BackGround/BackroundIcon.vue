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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class BackgrondIcon extends Vue {}
</script>

<style lang="scss" scoped>
@import './styles/BackgroundIcon.scss';
</style>
