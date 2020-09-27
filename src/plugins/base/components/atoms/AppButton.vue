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
  box-sizing: border-box;
  appearance: none;
  background: none;
  border: 0 none;
  border-radius: 2px;
  color: var(--color--shade-normal);
  padding: 0.5em 1em;
  transition: outline 10000s 10000s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1em;
}

button.primary {
  background: var(--color--shade-medium);
  color: var(--color--noshade-bright);
}

button.secondary {
  padding: calc(0.5em - 2px) calc(1em - 2px);
  border: 2px solid var(--color--shade-medium);
}
</style>
