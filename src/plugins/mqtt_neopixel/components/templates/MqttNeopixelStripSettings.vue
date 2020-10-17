<template>
  <div>
    <h2>
      <trans string="app.mqtt_neopixel.title.settings"/>
    </h2>

    <div class="general-settings">
      <AppRangeInput :min="0" :max="255" v-model="strip.brightness">
        <trans string="app.mqtt_neopixel.input.brightness.text"/>
      </AppRangeInput>
      <AppRangeInput :min="10" :max="1000" v-model="strip.delay" invert>
        <trans string="app.mqtt_neopixel.input.speed.text"/>
      </AppRangeInput>
    </div>

    <AppCollapse :title="Translate('app.mqtt_neopixel.block.advanced_settings.title')">
      <div class="advanced-settings">
        <AppSelect :values="stripTypes()" v-model="strip.type">
          <trans string="app.mqtt_neopixel.advanced_settings.type"/>
        </AppSelect>
        <AppInput type="number" v-model="strip.pin">
          <trans string="app.mqtt_neopixel.advanced_settings.pin"/>
        </AppInput>
        <AppInput type="number" v-model="strip.offset">
          <trans string="app.mqtt_neopixel.advanced_settings.offset"/>
        </AppInput>
        <AppInput type="number" v-model="strip.count">
          <trans string="app.mqtt_neopixel.advanced_settings.count"/>
        </AppInput>
      </div>
    </AppCollapse>
  </div>
</template>

<script>
import AppInput from '../../../base/components/atoms/AppInput.vue';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import AppSelect from '../../../base/components/atoms/AppSelect.vue';
import AppCollapse from '../../../base/components/templates/AppCollapse.vue';
import { Translate } from '../../../base/service/Translation.js';

export default {
  name: 'MqttNeopixelStripSettings',
  components: {
    AppInput,
    AppSelect,
    AppCollapse,
    AppRangeInput,
  },
  inject: ['mqtt'],
  props: {
    strip: Object,
    clientName: String,
  },
  data() {
    return {
      Translate,
      timeouts: {
        brightness: -1,
        type: -1,
        pin: -1,
        delay: -1,
        count: -1,
        offset: -1,
      },
    };
  },
  watch: {
    'strip.brightness'(updated) {
      clearTimeout(this.timeouts.brightness);
      this.timeouts.brightness = setTimeout(this.updateBrightness.bind(this), 500);

      this.strip.brightness = parseInt(updated);
    },
    'strip.type'(updated) {
      clearTimeout(this.timeouts.type);
      this.timeouts.type = setTimeout(this.updateType.bind(this), 500);

      this.strip.type = parseInt(updated);
    },
    'strip.pin'(updated) {
      clearTimeout(this.timeouts.pin);
      this.timeouts.pin = setTimeout(this.updatePin.bind(this), 500);

      this.strip.pin = parseInt(updated);
    },
    'strip.delay'(updated) {
      clearTimeout(this.timeouts.delay);
      this.timeouts.delay = setTimeout(this.updateDelay.bind(this), 500);

      this.strip.delay = parseInt(updated);
    },
    'strip.count'(updated) {
      clearTimeout(this.timeouts.count);
      this.timeouts.count = setTimeout(this.updateCount.bind(this), 500);

      this.strip.count = parseInt(updated);
    },
    'strip.offset'(updated) {
      clearTimeout(this.timeouts.offset);
      this.timeouts.offset = setTimeout(this.updateOffset.bind(this), 500);

      this.strip.offset = parseInt(updated);
    },
  },
  methods: {
    updateType() {
      this.mqtt.publish(this.clientName + '/type', this.strip.type.toString(), { retain: true });
    },

    updatePin() {
      this.mqtt.publish(this.clientName + '/pin', this.strip.pin.toString(), { retain: true });
    },

    updateOffset() {
      this.mqtt.publish(this.clientName + '/offset', this.strip.offset.toString(), { retain: true });
    },

    updateCount() {
      this.mqtt.publish(this.clientName + '/count', this.strip.count.toString(), { retain: true });
    },

    updateDelay() {
      this.mqtt.publish(this.clientName + '/delay', this.strip.delay.toString(), { retain: true });
    },

    updateBrightness() {
      this.mqtt.publish(this.clientName + '/brightness', this.strip.brightness.toString(), { retain: true });
    },

    stripTypes() {
      return {
        6: 'RGB',
        9: 'RBG',
        82: 'GRB',
        161: 'GBR',
        88: 'BRG',
        164: 'BGR',
        27: 'WRGB',
        30: 'WRBG',
        39: 'WGRB',
        54: 'WGBR',
        45: 'WBRG',
        57: 'WBGR',
        75: 'RWGB',
        78: 'RWBG',
        135: 'RGWB',
        198: 'RGBW',
        141: 'RBWG',
        201: 'RBGW',
        99: 'GWRB',
        114: 'GWBR',
        147: 'GRWB',
        210: 'GRBW',
        177: 'GBWR',
        225: 'GBRW',
        108: 'BWRG',
        120: 'BWGR',
        156: 'BRWG',
        216: 'BRGW',
        180: 'BGWR',
        228: 'BGRW',
      };
    },
  },
};
</script>

<style scoped>
.advanced-settings {
  padding: 1em 0;
}

.general-settings {
  padding: 1em 0;
}
</style>
