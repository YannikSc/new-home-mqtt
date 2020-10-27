<template>
  <div>
    <el-form>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.switch.topic"/>
        </template>
        <el-input v-model="data.topic"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.switch.on_state"/>
        </template>
        <el-input v-model="data.onState"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.switch.off_state"/>
        </template>
        <el-input v-model="data.offState"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.switch.retain"/>
        </template>
        <el-checkbox v-model="data.retain"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeSwitchEditor',
  props: {
    data: Object,
  },
};
</script>
