<template>
    <div class="icons">
        <button @click="$emit('registerSocial')" class="base-button" v-on="$listeners" v-bind="$attrs"
            :class="buttonClasses">
            <slot />
        </button>
    </div>
</template>

<script>


export default {
    props: {
        social: {
            type: String,
            default: 'basic',
            validator: (value) => {
                return ['facebook', 'apple', 'google'].includes(value);
            }
        }
    },

    computed: {
        buttonClasses() {
            return {
                'base-button--type-basic': this.social === 'basic' || this.social === '',
                'base-button--type-apple': this.social === 'apple',
                'base-button--type-facebook': this.social === 'facebook',
                'base-button--type-google': this.social === 'google',
            }
        }

    },
    methods: {
        registerSocial() {
            this.$emit('registerSocial')
        }
    }

};
</script>

<style lang="scss" scoped>
@import './styles/SocialIcons.scss';
</style>
