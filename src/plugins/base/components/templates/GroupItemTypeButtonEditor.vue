<template>
  <div>
    <p class="sub-title">Shortcut</p>
    <el-select v-model="data.shortcut">
      <el-option v-for="shortcut in shortcuts" :value="shortcut.name" :label="shortcut.name"/>
    </el-select>
    <el-input v-model="data.shortcut" type="text"/>
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
