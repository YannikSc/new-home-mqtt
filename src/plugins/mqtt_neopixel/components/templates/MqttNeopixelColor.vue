<template>
  <div class="mqtt-neopixel-color">
    <AppRangeInput class="color-slider--red" :min="0" :max="255" v-model="red" @update:modelValue="updateColors">
      <trans string="app.mqtt_neopixel.input.color.text_red"/>
    </AppRangeInput>
    <AppRangeInput class="color-slider--green" :min="0" :max="255" v-model="green" @update:modelValue="updateColors">
      <trans string="app.mqtt_neopixel.input.color.text_green"/>
    </AppRangeInput>
    <AppRangeInput class="color-slider--blue" :min="0" :max="255" v-model="blue" @update:modelValue="updateColors">
      <trans string="app.mqtt_neopixel.input.color.text_blue"/>
    </AppRangeInput>
    <AppRangeInput class="color-slider--white" :min="0" :max="255" v-model="white" @update:modelValue="updateColors">
      <trans string="app.mqtt_neopixel.input.color.text_white"/>
    </AppRangeInput>
  </div>
</template>

<script>
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';

export default {
  name: "MqttNeopixelColor",
  components: { AppRangeInput },
  props: {
    strip: Object,
    clientName: String,
    active: Boolean
  },
  data() {
    let colors = [0, 0, 0, 0];

    try {
      colors = JSON.parse(localStorage.getItem('mqtt-neopixel-color--' + this.clientName)) || [0,0,0,0];
    } catch (_) {
    }

    return {
      red: colors[0],
      green: colors[1],
      blue: colors[2],
      white: colors[3]
    };
  },
  mounted() {
    if (this.active) {
      this.updateColors();
    }
  },
  methods: {
    updateColors() {
      const color = (this.red << 24 | this.green << 16 | this.blue << 8 | this.white) >>> 0;

      this.strip.colors = [color];
      this.strip.step = 0;

      localStorage.setItem('mqtt-neopixel-color--' + this.clientName, JSON.stringify([
        this.red,
        this.green,
        this.blue,
        this.white
      ]));
    }
  },
  watch: {
    active(updated) {
      if (updated === true) {
        this.updateColors();
      }
    },
    strip() {
      if (this.active) {
        this.updateColors();
      }
    }
  }
};
</script>

<style scoped>
.color-slider--red {
  --color--shade-medium: hsla(0, 81%, 60%, 1);
  --color--shade-normal: hsla(0, 81%, 45%, 1);
}

.color-slider--green {
  --color--shade-medium: hsla(120, 81%, 60%, 1);
  --color--shade-normal: hsla(120, 81%, 45%, 1);
}

.color-slider--blue {
  --color--shade-medium: hsla(240, 81%, 60%, 1);
  --color--shade-normal: hsla(240, 81%, 45%, 1);
}
</style>
