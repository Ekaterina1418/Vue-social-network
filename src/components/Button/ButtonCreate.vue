<template>
    <div class="form-create">
        <a class="button-create" href="/">
            <p class="text-link">Create an account</p>
        </a>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class ButtonCreate extends Vue {}
</script>

<style lang="scss" scoped>
@import './styles/ButtonCreate.scss';
</style>
