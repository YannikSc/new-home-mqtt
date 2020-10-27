<template>
  <div>
    <label>
      <span class="label">{{ name }}</span>

      <el-switch v-model="value" @update:modelValue="this.sendValue" size="large"
                 active-color="#13ce66"
                 inactive-color="#ff4949"></el-switch>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GroupItemTypeSwitch',
  inject: ['mqtt'],
  props: {
    data: Object,
    name: String,
  },
  data() {
    this.mqtt.subscribe(this.data.topic, (topic, payload) => {
      if (payload === this.data.onState) {
        this.value = true;

        return;
      }

      if (payload === this.data.offState) {
        this.value = false;
      }
    });

    return { value: false };
  },
  methods: {
    sendValue() {
      this.mqtt.publish(this.data.topic, this.value ? this.data.onState : this.data.offState, {
        retain: this.data.retain || false,
      });
    },
  },
};
</script>

<style scoped>
.label {
  display: inline-block;
  width: 100%;
  margin-bottom: 0.2em;
}
</style>
