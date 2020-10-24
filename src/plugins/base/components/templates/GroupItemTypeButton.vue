<template>
  <div>
    <el-button class="ui-element" round plain @click="onClick">{{ name }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeButton',
  props: {
    name: String,
    data: Object,
  },
  inject: ['mqtt', 'backend'],
  methods: {
    onClick() {
      for (const shortcut of this.data.shortcuts) {
        this.backend.getShortcut(shortcut).then(shortcuts => {
          const shortcutActions = Object.values(shortcuts)[0];

          for (let action of shortcutActions) {
            this.mqtt.publish(action.topic, action.payload, action.options);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.ui-element {
  width: 100%;
}
</style>
