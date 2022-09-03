<template>
    <nav class="nav-messages">
        <div class="three-elements">
            <div class="position-input">
                <input
                    class="border-icon_search"
                    @input="$emit('input', $event.target.value)"
                    type="text"
                />
                <img class="svg-search" src="./icons/Search.svg" alt="search" />
            </div>
            <p class="nav-text">MESSAGES</p>
            <div class="border-icon_share">
                <img src="./icons/Shape.svg" alt="shape" />
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch, Model } from 'vue-property-decorator';
@Component
export default class CreateAccount extends Vue {
    // @Prop()  value!: string
    // val:string = this.value
    @Model('input', { type: String }) readonly value!: string;

    @Watch('child')
    search(val: string) {
        this.$emit('search', val);
    }
}
</script>

<style lang="scss" scoped>
@import './styles/NavigationInChat.scss';
</style>
