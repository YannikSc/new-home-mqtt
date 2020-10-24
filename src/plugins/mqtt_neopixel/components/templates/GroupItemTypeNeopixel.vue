<template>
  <div>
    <p>{{ name }}</p>

    <div class="mqtt-neopixel-color">
      <AppRangeInput class="color-slider--red" :min="0" :max="255" v-model="color.red"
                     @update:modelValue="updateColor">
        <trans string="app.mqtt_neopixel.input.color.text_red"/>
      </AppRangeInput>
      <AppRangeInput class="color-slider--green" :min="0" :max="255" v-model="color.green"
                     @update:modelValue="updateColor">
        <trans string="app.mqtt_neopixel.input.color.text_green"/>
      </AppRangeInput>
      <AppRangeInput class="color-slider--blue" :min="0" :max="255" v-model="color.blue"
                     @update:modelValue="updateColor">
        <trans string="app.mqtt_neopixel.input.color.text_blue"/>
      </AppRangeInput>
      <AppRangeInput class="color-slider--white" :min="0" :max="255" v-model="color.white"
                     @update:modelValue="updateColor">
        <trans string="app.mqtt_neopixel.input.color.text_white"/>
      </AppRangeInput>
    </div>
  </div>
</template>

<script>
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';

export default {
  name: 'GroupItemTypeNeopixel',
  components: { AppRangeInput },
  inject: ['mqtt'],
  props: {
    name: String,
    data: Object,
    group: Object,
  },
  data() {
    let color = {
      red: 0,
      green: 0,
      blue: 0,
      white: 0,
    };

    const item = localStorage.getItem(this.getStorageKey());

    if (item) {
      try {
        color = JSON.parse(item);
      } catch (e) {
        console.error(e);
      }
    }

    return {
      color,
      timeout: 0,
    };
  },
  methods: {
    sendColor() {
      const color = (this.color.red << 24 | this.color.green << 16 | this.color.blue << 8 | this.color.white) >>> 0;

      const payload = JSON.stringify([color]);
      const options = { retain: true };

      for (let device of this.data.devices) {
        this.mqtt.publish(`${device}/colors`, payload, options);
        this.mqtt.publish(`${device}/step`, 0, options);
      }
    },
    updateColor() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.sendColor.bind(this), 100);
      localStorage.setItem(
          this.getStorageKey(),
          JSON.stringify(this.color),
      );
    },
    getStorageKey() {
      return this.group.name + '--neopixel-color--' + this.data.devices.join('-');
    },
  },
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
