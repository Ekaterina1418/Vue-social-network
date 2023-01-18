<template>
  <form class="form" @submit.prevent="$emit('sendMessage')">
    <input type="text" @input="$emit('input', $event.target.value)" />
    <button>send</button>
  </form>
</template>

<script>
export default {
  name: 'ForMessages',
  model: {
    prop: 'value',
    event: 'input',
  },
  methods: {},
};
</script>

<style lang='scss'>
@import './styles/ForMessages.scss';
</style>
