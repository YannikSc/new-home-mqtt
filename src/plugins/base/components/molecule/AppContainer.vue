<template>
  <div :class="{'app-container--wrap': true, flex}">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
  props: {
    flex: { type: Boolean, default: true }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.app-container--wrap {
  width: 80%;
  padding: 0 1em;
  max-width: 120em;
}
</style>
