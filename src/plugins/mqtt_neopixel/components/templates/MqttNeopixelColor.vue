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
    strip: Object
  },
  data(props) {
    this.setColorParts((props.strip.colors || [])[0] || 0);

    return {
      red: this.red,
      green: this.green,
      blue: this.blue,
      white: this.white
    };
  },
  methods: {
    setColorParts(colors) {
      this.red = (colors & 0xFF000000) >>> 24;
      this.green = (colors & 0x00FF0000) >>> 16;
      this.blue = (colors & 0x0000FF00) >>> 8;
      this.white = colors & 0x000000FF;
    },
    updateColors() {
      const color = (this.red << 24 | this.green << 16 | this.blue << 8 | this.white) >>> 0;

      this.strip.colors = [color];
    }
  },
  watch: {
    strip(updated) {
      this.setColorParts((updated.colors || [])[0] || 0);
    }
  }
};
</script>

<style scoped>

.mqtt-neopixel-color {
}

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
