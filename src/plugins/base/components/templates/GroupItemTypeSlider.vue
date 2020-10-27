<template>
  <div>
    <p>{{ name }}</p>
    <AppRangeInput :max="data.max" :min="data.min" v-model="value" @update:modelValue="sliderChanged"/>
  </div>
</template>

<script>
import AppRangeInput from '../atoms/AppRangeInput.vue';

export default {
  name: 'GroupItemTypeSlider',
  components: { AppRangeInput },
  inject: ['mqtt'],
  props: {
    data: Object,
    name: String,
  },
  data() {
    this.mqtt.subscribe(this.data.topic, (topic, value) => this.value = parseInt(value));

    return {
      value: 0,
      inputTimeout: -1,
    };
  },
  methods: {
    sliderChanged() {
      clearTimeout(this.inputTimeout);

      this.inputTimeout = setTimeout(this.submitValue.bind(this), 100);
    },
    submitValue() {
      this.mqtt.publish(this.data.topic, this.value.toString(), {
        retain: this.data.retain || false,
      });
    },
  },
};
</script>
