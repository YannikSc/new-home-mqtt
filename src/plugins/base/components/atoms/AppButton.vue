<template>
  <button :class="{primary, secondary}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    primary: Boolean,
    secondary: Boolean
  }
};
</script>

<style scoped>
button {
  appearance: none;
  background: none;
  border: 2px solid var(--color--shade-medium);
  border-radius: 2px;
  padding: 0.5em 1em;
  font-size: 1em;
}
</style>
