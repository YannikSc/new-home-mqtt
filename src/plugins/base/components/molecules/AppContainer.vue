<template>
  <div :class="{'app-container--wrap': true, flex, full, vertical, 'no-wrap': noWrap}">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
  props: {
    flex: Boolean,
    vertical: Boolean,
    full: Boolean,
    noWrap: Boolean,
  }
};
</script>

<style scoped>
.app-container--wrap {
  width: 80%;
  margin: 0 auto;
  padding: 0 1em;
  max-width: 120em;
  box-sizing: border-box;
}

.app-container--wrap.full {
  width: 100%;
}

.app-container--wrap.flex {
  display: flex;
  align-items: center;
}

.app-container--wrap.flex:not(.no-wrap) {
  flex-wrap: wrap;
}

.app-container--wrap.vertical {
  flex-direction: column;
  height: 100%;
}
</style>
