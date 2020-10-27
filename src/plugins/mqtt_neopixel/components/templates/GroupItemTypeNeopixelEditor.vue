<template>
  <div>
    <p>
      <trans string="group_item_type_editor.neopixel.title"/>
    </p>

    <label v-for="(_, index) in data.devices" class="button--device">
      <!-- TODO: Replace with element-plus version if its fixed -->
      <select v-model="data.devices[index]">
        <option v-for="device in devices.devices" :value="device.name">{{ device.name }}</option>
      </select>

      <el-button type="danger" @click="removeDevice(index)" icon="el-icon-delete-solid" size="small" circle/>
    </label>

    <el-form>
      <el-form-item>
        <template #label><trans string="group_item_type_editor.neopixel.enable_white"/></template>
        <el-checkbox v-model="data.enable_white"/>
      </el-form-item>
    </el-form>

    <el-button type="success" @click="addDevice" icon="el-icon-plus" size="medium"/>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeNeopixelEditor',
  inject: ['devices'],
  props: {
    data: Object,
  },
  data() {
    if (!this.data.devices) {
      this.data.devices = [];
    }

    return {};
  },
  methods: {
    removeDevice(index) {
      this.data.devices.splice(index, 1);
    },
    addDevice() {
      this.data.devices.push('');
    },
  },
};
</script>

<style scoped>
.button--device {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}

</style>
