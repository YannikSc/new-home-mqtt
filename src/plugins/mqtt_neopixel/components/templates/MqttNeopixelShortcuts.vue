<template>
  <div class="mqtt-neopixel-shortcuts">
    <div class="controls">
      <AppInput type="text"></AppInput>
      <AppButton @click="onStore">
        <trans string="app.mqtt_neopixel.button.store.text"/>
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '../../../base/components/atoms/AppButton.vue';
import AppInput from '../../../base/components/atoms/AppInput.vue';

export default {
  name: "MqttNeopixelShortcuts",
  components: { AppInput, AppButton },
  props: {
    strip: Object
  },
  data() {
    return {
      modes: {}
    };
  },
  methods: {
    onStore(name) {
      this.modes[name] = {
        colors: this.strip.colors,
        delay: this.strip.delay,
        step: this.strip.step
      };
    }
  }
};
</script>

<style scoped>

</style>
