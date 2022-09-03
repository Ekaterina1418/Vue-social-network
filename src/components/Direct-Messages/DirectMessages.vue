<template>
    <div class="person">
        <div class="wrapper">
            <slot name="image" />
            <div class="name">
                <p class="name-billy"></p>
                <p class="name-message">{{ message }}</p>
            </div>
        </div>
        <div class="time">
            <time class="time-oclock">3:03pm</time>
            <slot name="amount" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class DirectMessages extends Vue {
    message = 'Thank you for sharing';

    @Prop() names!: string;
}
</script>

<style lang="scss" scoped>
@import './styles/DirectMessages.scss';
</style>
