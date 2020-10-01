<template>
  <AppContainer>
    <template v-slot:content>
      <AppRangeInput :min="0" :max="255" v-model="strip.brightness"></AppRangeInput>

      <button @click="updateStrip">Update</button>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import { watch } from '@vue/runtime-core';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';

export default {
  name: "MqttNeopixelWindow",
  components: { AppContainer, AppRangeInput },
  inject: ['strips', 'mqtt'],
  props: {
    clientName: String
  },
  data(props) {
    watch(props.strips.strips, () => {
      this.strip = props.strips.strips[props.clientName];
    });

    return {
      strip: props.strips.strips[props.clientName] || {}
    };
  },

  methods: {
    updateStrip() {
      this.mqtt.publish(this.clientName + '/colors', JSON.stringify(this.strip), { retain: true });
    }
  }
};
</script>

<style scoped>
.brightness {
  width: 50%;
}
</style>
