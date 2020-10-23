<template>
  <div>
    <label>
      <span class="sub-title">Shortcut</span>
      <!-- TODO: Replace with element-plus version if its fixed -->
      <select v-model="data.shortcut">
        <option v-for="(_, name) in shortcuts" :value="name">{{ name }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeButtonEditor',
  inject: ['backend'],
  props: {
    data: Object,
  },
  data() {
    this.backend.listShortcuts().then(shortcuts => this.shortcuts = shortcuts);

    return {
      shortcuts: [],
    };
  },
};
</script>

<style scoped>
.sub-title {
  display: inline-block;
  width: 100%;
}
</style>
