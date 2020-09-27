<template>
  <aside>
    <AppButton>Test</AppButton>
  </aside>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';

export default {
  name: 'AppMenu',
  components: { AppButton }
};
</script>

<style scoped>
aside {
  background: var(--body--bg);
  width: 100%;
  height: calc(100% - 4.5em);
}
</style>
