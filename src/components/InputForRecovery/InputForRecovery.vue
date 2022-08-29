<template>
    <form class="element-auxiliary bottom">
        <label class="label-input"> EMAIL </label>
        <div class="input-icon_email">
            <input
                class="input-email .input-text"
                v-model="email"
                type="text"
                placeholder="anne.carry@mail.com"
            />
            <img class="check" src="./image/Check.svg" alt="email" />
        </div>
        <button class="send-email" @click.prevent="forgotPassword">Send Email</button>
    </form>
</template>

<script>
export default {
    name: 'InputForRecovery',
    data() {
        return {
            email: '',
        };
    },
    methods: {
        async forgotPassword() {
           try {
               await this.$store.dispatch('forgotPassword', this.email);
                this.$router.push('/signin');

           // eslint-disable-next-line no-empty
           } catch(error) {}
               
        },
    },
};
</script>

<style lang="scss" scoped>
@import './styles/InputForRecovery.scss';
</style>
