<template>
  <AppContainer>
    <template v-slot:content>
      <MqttNeopixelStripBrightness :strip="strip"/>

      <AppTabs>
        <AppTab :title="Translate('app.mqtt_neopixel.block.color.title')">
          <MqttNeopixelColor :strip="strip"/>
        </AppTab>
      </AppTabs>

      <AppButton @click="updateStrip" primary>
        <trans string="app.mqtt_neopixel.button.submit.text"/>
      </AppButton>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import { watch } from '@vue/runtime-core';
import { Translate } from '../../../base/service/Translation.js';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import AppButton from '../../../base/components/atoms/AppButton.vue';
import MqttNeopixelStripBrightness from '../templates/MqttNeopixelStripBrightness.vue';
import MqttNeopixelColor from '../templates/MqttNeopixelColor.vue';
import AppTabs from '../../../base/components/templates/AppTabs.vue';
import AppTab from '../../../base/components/templates/AppTab.vue';

export default {
  name: "MqttNeopixelWindow",
  components: {
    MqttNeopixelColor,
    AppContainer,
    AppRangeInput,
    AppTabs,
    AppTab,
    AppButton,
    MqttNeopixelStripBrightness
  },
  inject: ['strips', 'mqtt'],
  props: {
    clientName: String
  },
  data(props) {
    const tabs = {
      colors: { component: AppContainer, name: 'Colors', data: { strip: props.strips.strips[props.clientName] } }
    };

    watch(props.strips.strips, () => {
      this.strip = props.strips.strips[props.clientName];
    });

    return {
      strip: props.strips.strips[props.clientName] || {},
      tabs,
      Translate
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
