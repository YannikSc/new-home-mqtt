<template>
  <div>
    <el-form>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.topic"/>
        </template>
        <el-input v-model="data.topic"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.state_on"/>
        </template>
        <el-input v-model="data.stateOn"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.state_on_text"/>
        </template>
        <el-input v-model="data.stateOnText"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.state_off"/>
        </template>
        <el-input v-model="data.stateOff"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.state_off_text"/>
        </template>
        <el-input v-model="data.stateOffText"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.show_switch"/>
        </template>
        <el-checkbox v-model="data.showSwitch"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.status.show_label"/>
        </template>
        <el-checkbox v-model="data.showLabel"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeStatusEditor',
  props: {
    data: Object,
  },
  data() {
    if (!this.data.hasOwnProperty('showLabel')) {
      this.data.showLabel = true;
    }

    if (!this.data.hasOwnProperty('showSwitch')) {
      this.data.showSwitch = true;
    }

    return {};
  },
};
</script>

<style scoped>

</style>
