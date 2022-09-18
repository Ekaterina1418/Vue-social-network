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
import Vue from 'vue';

export default Vue.extend ({})
</script>

<style lang="scss" scoped>
@import './styles/NavigationGroup.scss';
</style>
