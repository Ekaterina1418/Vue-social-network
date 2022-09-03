<template>
    <div class="block-group">
        <slot />
        <ul class="group-tasks">
            <li class="list-direct">Direct Messages</li>
            <li class="list">Group Chat</li>
            <li class="list">Archived</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class NavigationGroup extends Vue {}
</script>

<style lang="scss" scoped>
@import './styles/NavigationGroup.scss';
</style>
