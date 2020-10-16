<template>
  <AppContainer>
    <template v-slot:content>
      <MqttNeopixelStripSettings :strip="strip"/>

      <h2>
        <trans string="app.mqtt_neopixel.title.color_mode"/>
      </h2>
      <AppTabs class="mode-tabs">
        <AppTab :title="Translate('app.mqtt_neopixel.block.color.title')">
          <template v-slot:default="{active}">
            <MqttNeopixelColor :strip="strip" :clientName="clientName" :active="active"/>
          </template>
        </AppTab>
        <AppTab :title="Translate('app.mqtt_neopixel.block.gradient.title')">
          <template v-slot:default="{active}">
            <MqttNeopixelGradient :strip="strip" :clientName="clientName" :active="active"/>
          </template>
        </AppTab>
      </AppTabs>

      <AppButton @click="updateStrip" primary>
        <trans string="app.mqtt_neopixel.button.submit.text"/>
      </AppButton>
    </template>
  </AppContainer>
</template>

<script>
import { watch } from '@vue/runtime-core';
import AppButton from '../../../base/components/atoms/AppButton.vue';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import AppTab from '../../../base/components/templates/AppTab.vue';
import AppTabs from '../../../base/components/templates/AppTabs.vue';
import { Translate } from '../../../base/service/Translation.js';
import MqttNeopixelColor from '../templates/MqttNeopixelColor.vue';
import MqttNeopixelGradient from '../templates/MqttNeopixelGradient.vue';
import MqttNeopixelStripSettings from '../templates/MqttNeopixelStripSettings.vue';

export default {
  name: 'MqttNeopixelWindow',
  components: {
    MqttNeopixelGradient,
    MqttNeopixelColor,
    AppContainer,
    AppRangeInput,
    AppTabs,
    AppTab,
    AppButton,
    MqttNeopixelStripSettings,
  },
  inject: ['strips', 'mqtt'],
  props: {
    clientName: String,
  },
  data(props) {
    const tabs = {
      colors: {
        component: AppContainer,
        name: 'Colors',
        data: { strip: props.strips.strips[props.clientName] },
      },
    };

    watch(props.strips.strips, () => {
      this.strip.type = props.strips.strips[props.clientName].type;
      this.strip.pin = props.strips.strips[props.clientName].pin;
      this.strip.offset = props.strips.strips[props.clientName].offset;
      this.strip.step = props.strips.strips[props.clientName].step;
      this.strip.count = props.strips.strips[props.clientName].count;
      this.strip.delay = props.strips.strips[props.clientName].delay;
      this.strip.brightness = props.strips.strips[props.clientName].brightness;
      this.strip.colors = props.strips.strips[props.clientName].colors;
    });

    return {
      strip: props.strips.strips[props.clientName] || {},
      tabs,
      Translate,
    };
  },

  methods: {
    updateStrip() {
      this.mqtt.publish(this.clientName + '/type', this.strip.type.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/pin', this.strip.pin.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/offset', this.strip.offset.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/step', this.strip.step.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/count', this.strip.count.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/delay', this.strip.delay.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/brightness', this.strip.brightness.toString(), { retain: true });
      this.mqtt.publish(this.clientName + '/colors', JSON.stringify(this.strip.colors), { retain: true });
    },
  },
};
</script>

<style scoped>
.mode-tabs {
  margin: 1em 0;
}
</style>
