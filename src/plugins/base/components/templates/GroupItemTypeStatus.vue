<template>
  <div>
    <label>
      <span class="label" v-if="data.showLabel">
        {{ name }}
        <span v-if="data.stateOnText && value">{{ data.stateOnText }}</span>
        <span v-if="data.stateOffText && !value">{{ data.stateOffText }}</span>
      </span>
      <span class="input">
        <el-switch :value="value" size="large" v-if="data.showSwitch"></el-switch>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeStatus',
  inject: ['mqtt'],
  props: {
    name: String,
    data: Object,
  },
  data() {
    this.mqtt.subscribe(this.data.topic, (topic, payload) => {
      if (payload === this.data.stateOn) {
        this.value = true;

        return;
      }

      if (payload === this.data.stateOff) {
        this.value = false;
      }
    });

    return { value: false };
  },
};
</script>

<style scoped>
.input {
  display: inline-block;
  width: 100%;
}
</style>
