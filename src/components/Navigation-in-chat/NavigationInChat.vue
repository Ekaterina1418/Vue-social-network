<template>
    <nav class="nav-messages">
        <div class="block-mobile">
        </div>
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

    <script>


export default {
    name: "NavigationInChat",
    data() {
        return {
            value: '',
        }
    },
    methods: {
        search(val) {
            this.$emit("search", val);
        }
    },
};
</script>

<style lang="scss" scoped>
@import './styles/NavigationInChat.scss';
</style>
