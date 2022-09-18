<template>
    <form class="form">
        <div class="element-auxiliary top">
            <label class="label-input"> EMAIL </label>
            <div class="input-icon_email">
                <input class="input-email" type="text" placeholder="anne.carry@mail.com" v-model.trim="$v.email.$model"
                    :class="{ 'error-border': $v.email.$error }" />
                <img class="check" src="./image/Check.svg" alt="email" />
                <p class="error" v-if="!$v.email.required">
                    *Обязательное поле
                </p>
                <p class="error" v-else-if="!$v.email.email">
                    Введите электронную почту
                </p>
            </div>
        </div>
        <div class="element-auxiliary bottom">
            <label class="label-input">PASSWORD </label>
            <div class="input-icon_email" :class="{ 'error-border': $v.password.$error }">
                <input class="input-email" v-model.trim="$v.password.$model" type="password" />
                <p class="error" v-if="!$v.password.minLength">
                    Не менее 6 знаков
                </p>
                <p class="error" v-else-if="!$v.password.required">
                    *Обязательное поле
                </p>
                <p class="error" v-else-if="!$v.password.hasUppercase">
                    Должен содержать буквы в верхнем регистре
                </p>
                <p class="error" v-else-if="!$v.password.hasLowercase">
                    Должен содержать буквы в нижнем регистре
                </p>
                <p class="error" v-else-if="!$v.password.hasSpecialChars">
                    Должен содержать спецсимволы ($%#_)
                </p>
                <img class="check" src="./image/Eye.svg" alt="eye" />
            </div>
            <router-link class="paragraph-login_desc" to="/password-recovery">Forgot Password?</router-link>
        </div>
        <div class="login">
            <button class="button-login" @click.prevent="submitHandler" type="submit">
                Login
            </button>
            <router-link class="paragraph-login" to="/password-recovery">Forgot Password?</router-link>
        </div>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { email } from 'vuelidate/lib/validators';
import { required, minLength } from 'vuelidate/lib/validators';
import {
    hasUppercase,
    hasLowercase,
    hasSpecialChars,
} from '@/vuelidate/validations';

export default Vue.extend({
    name: 'AuthForm',
    data() {
        return {
            email: '',
            password: '',
        }
    },


    validations() {
        return {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(6),
                hasUppercase,
                hasLowercase,
                hasSpecialChars,
            },
        };
    },
    methods: {
        addPassword(): void {
            this.$router.push({ name: 'password-recovery' });
        },
        async submitHandler(): Promise<void> {
            const forData = {
                email: this.email,
                password: this.password,
            }
            try {
                await this.$store.dispatch('login', forData);

                // eslint-disable-next-line no-empty
            } catch (e) { }
        },
    }

});
</script>

<style lang="scss" scoped>
@import './styles/AuthForm.scss';
</style>
