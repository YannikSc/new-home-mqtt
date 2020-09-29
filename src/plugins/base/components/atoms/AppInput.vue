<template>
  <label>
    <span>
      <slot></slot>
    </span>

    <input v-bind="$attrs" ref="input" :value="modelValue" @input="onUpdate">
  </label>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: { required: true }
  },
  emits: ['update:modelValue'],
  methods: {
    onUpdate() {
      this.$emit('update:modelValue', this.$refs.input.value);
    }
  }
};
</script>

<style scoped>
label, input {
  width: 100%;
}

input {
  margin-bottom: 1em;
  border: solid 2px rgba(0, 0, 0, 0.2);
  padding: 0.5em;
  box-sizing: border-box;
  font-size: 1em;
}
</style>
