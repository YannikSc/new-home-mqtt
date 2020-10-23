<template>
  <div>
    <p class="sub-title">Shortcuts</p>

    <label v-for="(_, index) in data.shortcuts" class="button--shortcut">
      <!-- TODO: Replace with element-plus version if its fixed -->
      <select v-model="data.shortcuts[index]">
        <option v-for="(_, name) in shortcuts" :value="name">{{ name }}</option>
      </select>

      <el-button type="danger" @click="removeShortcut(index)" icon="el-icon-delete-solid" size="small" circle/>
    </label>

    <el-button type="success" @click="addShortcut" icon="el-icon-plus" size="medium"/>
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
  methods: {
    addShortcut() {
      if (!this.data.shortcuts) {
        this.data.shortcuts = [];
      }

      this.data.shortcuts.push('');
    },

    removeShortcut(index) {
      this.data.shortcuts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.sub-title {
  display: inline-block;
  width: 100%;
}

.button--shortcut {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}
</style>
