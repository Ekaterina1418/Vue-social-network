<template>
    <div class="icons">
        <button class="base-button" v-on="$listeners" v-bind="$attrs" :class="buttonClasses">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        social: {
            type: String,
            default: 'basic',
            validator: (value: string) => {
                return ['facebook', 'apple', 'google'].includes(value);
            }
        }
    },

     computed: {
        buttonClasses() {
            return {
                'base-button--type-basic':
                    this.social === 'basic' || this.social === '',
                'base-button--type-apple': this.social === 'apple',
                'base-button--type-facebook': this.social === 'facebook',
                'base-button--type-google': this.social === 'google',
            }
        }

    }

})
</script>

<style lang="scss" scoped>
@import './styles/SocialIcons.scss';
</style>
