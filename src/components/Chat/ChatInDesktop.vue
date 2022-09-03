<template>
    <section class="block-message">
        <div class="block-profile">
            <div class="count-message">1</div>
            <img src="~@/assets/image/Profile.svg" alt="profile" />
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ChatInDesktop extends Vue {}
</script>

<style lang="scss" scoped>
@import './styles/ChatInDesktop.scss';
</style>
