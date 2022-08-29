<template>
    <nav class="nav-messages">
        <div class="three-elements">
            <div class="position-input">
                <input
                    class="border-icon_search"
                    v-model.trim="search"
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
    name: 'NavigationChat',
    data() {
        return {
            search:this.value
        };
    },
    props: {
        value: {
            type: String,
            required: true,
        },
       
    },
    watch: {
search(val) {
 this.$emit('search',val)
 
}
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import './styles/NavigationInChat.scss';
</style>
