<template>
  <AppRangeInput :min="0" :max="255" v-model="strip.brightness">
    <trans string="app.mqtt_neopixel.input.brightness.text"/>
  </AppRangeInput>
</template>

<script>
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';

export default {
  name: "MqttNeopixelStripBrightness",
  components: { AppRangeInput },
  props: {
    strip: Object
  }
};
</script>

<style scoped>

</style>
