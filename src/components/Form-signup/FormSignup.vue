<template>
  <form class="form">
    <div class="element-auxiliary">
      <label class="label-input"> NAME </label>
      <div class="input-icon_name">
        <input
          class="input-email"
          type="text"
          placeholder="Anne Carry"
          v-model.trim="$v.name.$model"
          :class="{ 'error-border': $v.name.$error }"
        />
        <p class="error" v-if="!$v.name.required">*Обязательное поле</p>
        <p class="error" v-else-if="!$v.name.minLength">Не менее 2 знаков</p>
      </div>
    </div>
    <div class="element-auxiliary bottom">
      <label class="label-input"> EMAIL </label>
      <div class="input-icon_email">
        <input
          class="input-email"
          type="text"
          placeholder="anne.carry@mail.com"
          v-model.trim="$v.email.$model"
          :class="{ 'error-border': $v.email.$error }"
        />
        <img class="check" src="./image/Check.svg" alt="email" />
        <p class="error" v-if="!$v.email.required">*Обязательное поле</p>
        <p class="error" v-else-if="!$v.email.email">
          Введите электронную почту
        </p>
      </div>
    </div>
    <div class="element-auxiliary bottom-input">
      <label class="label-input">PASSWORD </label>
      <div class="input-icon_email">
        <input
          class="input-email"
          type="password"
          :class="{ 'error-border': $v.email.$error }"
          v-model.trim="$v.password.$model"
        />
        <img class="check" src="./image/Eye.svg" alt="eye" />
        <p class="error" v-if="!$v.password.required">*Обязательное поле</p>
        <p class="error" v-else-if="!$v.password.minLength">
          Не менее 6 знаков
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
      </div>
    </div>
    <div class="login">
      <button class="button-login" @click.prevent="submitHandler">
        Create an account
      </button>
      <p class="paragraph-login">Alreedy have an account Login</p>
    </div>
  </form>
</template>

<script>
import { email } from 'vuelidate/lib/validators';
import { required, minLength } from 'vuelidate/lib/validators';
import {
  hasUppercase,
  hasLowercase,
  hasSpecialChars,
} from '@/vuelidate/validations';
export default {
  name: 'FormSignup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },

  validations() {
    return {
      name: {
        required,
        minLength: minLength(2),
      },
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
    async submitHandler() {
      const forData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.$store.dispatch('register', forData);
       
        console.log(forData);
      } catch (e) {
        /** */
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/FormSignup.scss';
</style>
