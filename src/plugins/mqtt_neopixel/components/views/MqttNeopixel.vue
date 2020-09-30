<template>
  <AppContainer>
    <template v-slot:content>
      <input type="range" min="0" max="255" name="brightness" class="brightness" v-model.number="strip.brightness">

      <button @click="updateStrip">Update</button>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import { watch } from '@vue/runtime-core';

export default {
  name: "MqttNeopixelWindow",
  components: { AppContainer },
  inject: ['strips', 'mqtt'],
  props: {
    clientName: String
  },
  data(props) {
    console.log(props);

    watch(props.strips.strips, () => {
      this.strip = props.strips.strips[props.clientName];
    });

    return {
      strip: props.strips.strips[props.clientName] || {}
    };
  },

  methods: {
    updateStrip() {
      this.mqtt.publish(this.clientName + '/colors', JSON.stringify(this.strip), {retain: true});
    }
  }
};
</script>

<style scoped>
.brightness {
  width: 50%;
}
</style>
