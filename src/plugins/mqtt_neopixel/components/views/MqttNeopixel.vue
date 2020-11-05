<template>
  <el-row>
    <el-col v-bind="main">
      <MqttNeopixelStripSettings :strip="strip" :client-name="clientName"/>

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

      <el-button type="success" @click="updateStrip">
        <trans string="app.mqtt_neopixel.button.submit.text"/>
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import { watch } from '@vue/runtime-core';
import AppButton from '../../../base/components/atoms/AppButton.vue';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import AppTab from '../../../base/components/templates/AppTab.vue';
import AppTabs from '../../../base/components/templates/AppTabs.vue';
import { Translate } from '../../../base/service/Translation.js';
import { main } from '../../../base/Sizes.js';
import MqttNeopixelColor from '../templates/MqttNeopixelColor.vue';
import MqttNeopixelGradient from '../templates/MqttNeopixelGradient.vue';
import MqttNeopixelStripSettings from '../templates/MqttNeopixelStripSettings.vue';
import {LedStrip} from 'mdue';

export default {
  name: 'MqttNeopixelWindow',
  icon: LedStrip,
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
      main,
      strip: props.strips.strips[props.clientName] || {},
      tabs,
      Translate,
    };
  },

  methods: {
    updateStrip() {
      this.mqtt.publish(this.clientName + '/step', this.strip.step.toString(), { retain: true });
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
