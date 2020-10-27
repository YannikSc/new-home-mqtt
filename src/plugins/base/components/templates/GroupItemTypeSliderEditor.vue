<template>
  <div>
    <el-form>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.slider.topic"/>
        </template>
        <el-input v-model="data.topic"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.slider.min"/>
        </template>
        <el-input-number v-model="data.min"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.slider.max"/>
        </template>
        <el-input-number v-model="data.max"/>
      </el-form-item>
      <el-form-item>
        <template #label>
          <trans string="group_item_type.slider.retain"/>
        </template>
        <el-checkbox v-model="data.retain"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeSliderEditor',
  props: {
    data: Object,
  },
};
</script>

<style scoped>

</style>
